import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
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

const files = (await Promise.all(SEARCH_ROOTS.map(collectFiles))).flat();
const remoteMedia = [];
for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(URL_PATTERN)) {
    const raw = match[0].replace(/[.,;\]}]+$/, "");
    try {
      const url = new URL(raw);
      if (ASSET_EXTENSIONS.has(path.extname(url.pathname).toLowerCase())) {
        remoteMedia.push(`${path.relative(ROOT, file)} :: ${url.toString()}`);
      }
    } catch {}
  }
}

if (remoteMedia.length) {
  console.error(`Remote media verification failed: ${remoteMedia.length} reference(s) remain.`);
  for (const line of remoteMedia.slice(0, 40)) console.error(`- ${line}`);
  if (remoteMedia.length > 40) console.error(`...and ${remoteMedia.length - 40} more.`);
  process.exit(1);
}
console.log("Local media verification passed: no remote media URLs remain in deployable source.");
