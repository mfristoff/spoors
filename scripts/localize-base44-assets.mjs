import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "assets", "base44");
const SEARCH_ROOTS = ["src", "public", "index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json", ".jsonc", ".xml"]);
const ASSET_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".mp4", ".mov", ".webm", ".woff", ".woff2", ".ttf", ".otf", ".pdf"]);
const URL_PATTERN = /https?:\/\/[^\s"'<>`)\\]+/g;

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

function normalizeRemoteAsset(rawUrl) {
  const cleaned = rawUrl.replace(/[.,;\]}]+$/, "");
  try {
    const parsed = new URL(cleaned);
    const extension = path.extname(parsed.pathname).toLowerCase();
    if (!ASSET_EXTENSIONS.has(extension)) return null;
    if (!/^https?:$/.test(parsed.protocol)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function downloadPlan(url) {
  const parsed = new URL(url);
  const extension = path.extname(parsed.pathname).toLowerCase();
  const wixRaster = ["media.base44.com", "static.wixstatic.com"].includes(parsed.hostname)
    && [".jpg", ".jpeg", ".png", ".webp"].includes(extension);

  if (wixRaster) {
    const base = url.split("/v1/")[0];
    const rawFilename = new URL(base).pathname.split("/").filter(Boolean).pop() || "remote-media";
    const stem = rawFilename.replace(/\.[a-z0-9]+$/i, "");
    return {
      fetchUrl: `${base}/v1/fit/w_2400,h_2400,q_82,usm_0.66_1.00_0.01,enc_webp,quality_auto/${stem}.webp`,
      extension: ".webp",
    };
  }

  return { fetchUrl: url, extension };
}

function localName(url, extension) {
  const parsed = new URL(url);
  const original = decodeURIComponent(path.basename(parsed.pathname));
  const originalExtension = path.extname(original).toLowerCase();
  const stem = path.basename(original, originalExtension).replace(/[^a-z0-9_-]+/gi, "-").toLowerCase() || "remote-media";
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 10);
  return `${stem}-${hash}${extension || originalExtension}`;
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: { "user-agent": "Mozilla/5.0 Spoors-Cloudflare-Media-Localizer/1.0" },
        signal: AbortSignal.timeout(60000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 1200 * attempt));
    }
  }
  throw new Error(`Unable to localize ${url}: ${lastError?.message || lastError}`);
}

const files = (await Promise.all(SEARCH_ROOTS.map(collectFiles))).flat();
const fileContents = new Map();
const urls = new Set();

for (const file of files) {
  const content = await readFile(file, "utf8");
  fileContents.set(file, content);
  for (const match of content.matchAll(URL_PATTERN)) {
    const url = normalizeRemoteAsset(match[0]);
    if (url) urls.add(url);
  }
}

await mkdir(OUTPUT_DIR, { recursive: true });
const replacements = new Map();
let completed = 0;

for (const url of [...urls].sort()) {
  const plan = downloadPlan(url);
  const filename = localName(url, plan.extension);
  const finalPath = path.join(OUTPUT_DIR, filename);
  const tempPath = `${finalPath}.download`;

  let reuseExisting = false;
  try {
    reuseExisting = (await stat(finalPath)).size > 0;
  } catch {
    reuseExisting = false;
  }

  if (!reuseExisting) {
    const bytes = await fetchWithRetry(plan.fetchUrl);
    await writeFile(tempPath, bytes);
    await rename(tempPath, finalPath);
  }

  replacements.set(url, `/assets/base44/${filename}`);
  completed += 1;
  console.log(`[${completed}/${urls.size}] ${reuseExisting ? "reused" : "downloaded"}: ${filename}`);
}

for (const [file, original] of fileContents) {
  let updated = original;
  for (const [remote, local] of replacements) updated = updated.split(remote).join(local);
  if (updated !== original) await writeFile(file, updated);
}

await writeFile(
  path.join(ROOT, "BASE44-ASSET-MAP.json"),
  `${JSON.stringify(Object.fromEntries(replacements), null, 2)}\n`
);

console.log(`Localized ${replacements.size} remote media assets to public/assets/base44.`);
console.log("Rewrote matching references and wrote BASE44-ASSET-MAP.json.");
