import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "assets", "base44");
const SEARCH_ROOTS = ["src", "public", "index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json", ".jsonc", ".xml"]);
const ASSET_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".mp4", ".mov", ".webm", ".woff", ".woff2", ".ttf", ".otf", ".pdf"]);
const FULL_URL_PATTERN = /https?:\/\/media\.base44\.com\/[^\s"'<>`)]+/g;
const BASE_CONST_PATTERN = /const\s+([A-Za-z_$][\w$]*)\s*=\s*(["'])(https?:\/\/media\.base44\.com\/[^"']+)\2\s*;/gs;
const DRY_RUN = process.argv.includes("--dry-run");

async function collectFiles(target) {
  const absolute = path.join(ROOT, target);
  const info = await stat(absolute);
  if (info.isFile()) return [absolute];

  const files = [];
  for (const entry of await readdir(absolute, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "base44") continue;
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(path.relative(ROOT, child))));
    else if (TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(child);
  }
  return files;
}

function cleanUrl(rawUrl) {
  return rawUrl.replace(/[.,;\]}]+$/, "");
}

function normalizeBase44Asset(rawUrl) {
  const cleaned = cleanUrl(rawUrl);
  try {
    const parsed = new URL(cleaned);
    const extension = path.extname(parsed.pathname).toLowerCase();
    if (parsed.hostname !== "media.base44.com" || !ASSET_EXTENSIONS.has(extension)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function joinRemote(base, suffix) {
  return `${base.replace(/\/$/, "")}/${suffix.replace(/^\//, "")}`;
}

function localName(url) {
  const parsed = new URL(url);
  const original = decodeURIComponent(path.basename(parsed.pathname));
  const extension = path.extname(original).toLowerCase();
  const stem = path.basename(original, extension).replace(/[^a-z0-9_-]+/gi, "-").toLowerCase();
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 10);
  return `${stem}-${hash}${extension}`;
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length === 0) throw new Error("empty response");
      return bytes;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
  throw new Error(`Download failed after ${attempts} attempts: ${url}\n${lastError}`);
}

function discoverReferences(content) {
  const urls = new Set();
  const expressionRefs = [];
  const constants = [];

  for (const match of content.matchAll(FULL_URL_PATTERN)) {
    const url = normalizeBase44Asset(match[0]);
    if (url) urls.add(url);
  }

  for (const match of content.matchAll(BASE_CONST_PATTERN)) {
    const [declaration, name, , base] = match;
    constants.push({ declaration, name, base });

    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const templatePattern = new RegExp("`\\$\\{" + escapedName + "\\}([^`$]+)`", "g");
    for (const templateMatch of content.matchAll(templatePattern)) {
      const suffix = templateMatch[1];
      const url = normalizeBase44Asset(joinRemote(base, suffix));
      if (url) {
        urls.add(url);
        expressionRefs.push({ token: templateMatch[0], url });
      }
    }

    const concatPattern = new RegExp(`\\b${escapedName}\\s*\\+\\s*(["'])([^"']+)\\1`, "g");
    for (const concatMatch of content.matchAll(concatPattern)) {
      const suffix = concatMatch[2];
      const url = normalizeBase44Asset(joinRemote(base, suffix));
      if (url) {
        urls.add(url);
        expressionRefs.push({ token: concatMatch[0], url });
      }
    }
  }

  return { urls, expressionRefs, constants };
}

const files = (await Promise.all(SEARCH_ROOTS.map(collectFiles))).flat();
const fileRecords = [];
const urls = new Set();
let dynamicReferences = 0;

for (const file of files) {
  const content = await readFile(file, "utf8");
  const discovered = discoverReferences(content);
  for (const url of discovered.urls) urls.add(url);
  dynamicReferences += discovered.expressionRefs.length;
  fileRecords.push({ file, content, ...discovered });
}

console.log(`Found ${urls.size} unique Base44 asset URLs (${dynamicReferences} dynamically composed references).`);
if (DRY_RUN) process.exit(0);

await mkdir(OUTPUT_DIR, { recursive: true });
const replacements = new Map();
let completed = 0;

for (const url of [...urls].sort()) {
  const filename = localName(url);
  const finalPath = path.join(OUTPUT_DIR, filename);
  const tempPath = `${finalPath}.download`;

  let reuseExisting = false;
  try {
    reuseExisting = (await stat(finalPath)).size > 0;
  } catch {
    reuseExisting = false;
  }

  if (!reuseExisting) {
    const bytes = process.env.LOCALIZE_MOCK === "1" ? Buffer.from(`mock:${url}`) : await fetchWithRetry(url);
    await writeFile(tempPath, bytes);
    await rename(tempPath, finalPath);
  }

  replacements.set(url, `/assets/base44/${filename}`);
  completed += 1;
  console.log(`[${completed}/${urls.size}] ${reuseExisting ? "reused" : "downloaded"}: ${filename}`);
}

for (const record of fileRecords) {
  let updated = record.content;

  for (const ref of record.expressionRefs) {
    const local = replacements.get(ref.url);
    if (local) updated = updated.split(ref.token).join(JSON.stringify(local));
  }

  for (const [remote, local] of [...replacements.entries()].sort((a, b) => b[0].length - a[0].length)) {
    updated = updated.split(remote).join(local);
  }

  for (const constant of record.constants) {
    const escapedName = constant.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const occurrences = updated.match(new RegExp(`\\b${escapedName}\\b`, "g"))?.length ?? 0;
    if (occurrences === 1 && updated.includes(constant.declaration)) {
      updated = updated.replace(constant.declaration, "");
    }
  }

  if (updated !== record.content) await writeFile(record.file, updated);
}

await writeFile(
  path.join(ROOT, "BASE44-ASSET-MAP.json"),
  `${JSON.stringify(Object.fromEntries(replacements), null, 2)}\n`
);

console.log(`Localized ${replacements.size} assets to public/assets/base44.`);
console.log("Rewrote matching references and wrote BASE44-ASSET-MAP.json.");
