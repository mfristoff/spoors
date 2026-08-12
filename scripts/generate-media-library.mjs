import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const OUTPUT = path.join(PUBLIC, 'media-library.json');
const MEDIA_EXT = /\.(png|jpe?g|webp|gif|svg|avif|mp4|webm|mov)(?:$|[?#/])/i;
const LOCAL_EXT = /\.(png|jpe?g|webp|gif|svg|avif|mp4|webm|mov)$/i;
const TEXT_EXT = new Set(['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.md']);
const SOURCE_DIRS = ['src'];
const SOURCE_FILES = ['index.html'];

async function walk(dir) {
  const out = [];
  let entries = [];
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

function normalizeBase44(url) {
  // Collapse Base44 transform variants to the original asset URL so one photo
  // keeps one reference number regardless of requested render size.
  const marker = '/v1/';
  const idx = url.indexOf(marker);
  if (idx > -1) return url.slice(0, idx);
  return url;
}

function cleanUrl(raw) {
  let url = raw.replace(/&amp;/g, '&').replace(/[),.;]+$/g, '');
  if (url.includes('media.base44.com')) url = normalizeBase44(url);
  return url;
}

function filenameFromUrl(url) {
  try {
    const u = new URL(url);
    return decodeURIComponent(u.pathname.split('/').filter(Boolean).pop() || 'remote-media');
  } catch {
    return url.split('/').filter(Boolean).pop() || 'remote-media';
  }
}

function mediaKind(name) {
  const lower = name.toLowerCase();
  if (/\.(mp4|webm|mov)$/.test(lower)) return 'video';
  if (/\.svg$/.test(lower) || /(logo|icon|bolt|mark|badge|favicon|graphic|frame|arrow|calendar|crown|shield)/.test(lower)) return 'graphic';
  return 'image';
}

function categoryFor(item) {
  const lower = `${item.path || ''} ${item.name}`.toLowerCase();
  if (item.kind === 'video') return 'Video';
  if (item.kind === 'graphic') return 'Graphics & logos';
  if (lower.includes('water-heater')) return 'Water heaters';
  if (lower.includes('ductless') || lower.includes('mini-split')) return 'Ductless';
  if (lower.includes('indoor-air') || lower.includes('air-quality') || lower.includes('humid')) return 'Indoor air quality';
  if (lower.includes('swamp') || lower.includes('evaporative')) return 'Swamp coolers';
  if (lower.includes('about') || lower.includes('team')) return 'About / team';
  if (lower.includes('heating') || lower.includes('furnace')) return 'Heating';
  if (lower.includes('air-condition') || lower.includes('cooling') || lower.includes('ac-')) return 'Air conditioning';
  return 'General';
}

async function collectLocal() {
  const files = await walk(PUBLIC);
  return files
    .filter((f) => LOCAL_EXT.test(f) && !f.endsWith('media-library.json'))
    .map((f) => {
      const rel = '/' + path.relative(PUBLIC, f).split(path.sep).join('/');
      const name = path.basename(f);
      return { key: `local:${rel}`, src: rel, path: rel, name, source: 'local', kind: mediaKind(name) };
    });
}

async function collectRemote() {
  const files = [];
  for (const dir of SOURCE_DIRS) files.push(...await walk(path.join(ROOT, dir)));
  for (const f of SOURCE_FILES) files.push(path.join(ROOT, f));

  const urls = new Set();
  const urlRegex = /https?:\/\/[^\s"'<>`)\\]+/g;
  for (const file of files) {
    if (!TEXT_EXT.has(path.extname(file).toLowerCase())) continue;
    let text = '';
    try { text = await fs.readFile(file, 'utf8'); } catch { continue; }
    for (const match of text.matchAll(urlRegex)) {
      const url = cleanUrl(match[0]);
      if (!MEDIA_EXT.test(url)) continue;
      // Ignore bare domains/directories that happen to be followed by punctuation.
      const name = filenameFromUrl(url);
      if (!LOCAL_EXT.test(name)) continue;
      urls.add(url);
    }
  }

  return [...urls].map((url) => {
    const name = filenameFromUrl(url);
    return { key: `remote:${url}`, src: url, path: url, name, source: 'remote', kind: mediaKind(name) };
  });
}

async function loadPrevious() {
  try {
    const data = JSON.parse(await fs.readFile(OUTPUT, 'utf8'));
    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

const [localItems, remoteItems, previous] = await Promise.all([
  collectLocal(),
  collectRemote(),
  loadPrevious(),
]);

const found = new Map();
for (const item of [...localItems, ...remoteItems]) found.set(item.key, item);

const oldIds = new Map(previous.map((item) => [item.key, item.id]));
let nextId = Math.max(0, ...previous.map((item) => Number(item.id) || 0)) + 1;

const items = [...found.values()]
  .sort((a, b) => a.key.localeCompare(b.key))
  .map((item) => ({
    id: oldIds.get(item.key) ?? nextId++,
    ...item,
    category: categoryFor(item),
  }))
  .sort((a, b) => a.id - b.id);

const payload = {
  generatedAt: new Date().toISOString(),
  count: items.length,
  note: 'IDs are persistent. New media receives the next available number; existing IDs are not renumbered.',
  items,
};

await fs.writeFile(OUTPUT, JSON.stringify(payload, null, 2) + '\n');
console.log(`Media library: ${items.length} assets written to ${path.relative(ROOT, OUTPUT)}`);
