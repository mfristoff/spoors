import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SEARCH_ROOTS = ["src", "public", "index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json", ".jsonc", ".xml"]);
const ASSET_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".mp4", ".mov", ".webm", ".woff", ".woff2", ".ttf", ".otf", ".pdf"]);
const URL_PATTERN = /https?:\/\/[^\s"'<>`)]+/g;

async function collectFiles(target) {
  const absolute = path.join(ROOT, target);
  const info = await stat(absolute);
  if (info.isFile()) return [absolute];

  const files = [];
  for (const entry of await readdir(absolute, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist") continue;
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(path.relative(ROOT, child))));
    else if (TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(child);
  }
  return files;
}

function normalizeBase44Asset(rawUrl) {
  const cleaned = rawUrl.replace(/[.,;\]}]+$/, "");
  try {
    const parsed = new URL(cleaned);
    const extension = path.extname(parsed.pathname).toLowerCase();
    if (parsed.hostname !== "media.base44.com" || !ASSET_EXTENSIONS.has(extension)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

const files = (await Promise.all(SEARCH_ROOTS.map(collectFiles))).flat();
const references = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(URL_PATTERN)) {
    const url = normalizeBase44Asset(match[0]);
    if (url) references.push({ file: path.relative(ROOT, file), url });
  }
}

const uniqueUrls = [...new Set(references.map(({ url }) => url))].sort();
const videoUrls = uniqueUrls.filter((url) => /\.(mp4|mov|webm)(?:\?|$)/i.test(url));
const imageUrls = uniqueUrls.filter((url) => /\.(jpe?g|png|webp|gif|svg)(?:\?|$)/i.test(url));
const otherUrls = uniqueUrls.filter((url) => !videoUrls.includes(url) && !imageUrls.includes(url));

const report = [
  "# Remote Base44 Asset Audit",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  `- Unique Base44 asset URLs: ${uniqueUrls.length}`,
  `- Images and SVGs: ${imageUrls.length}`,
  `- Videos: ${videoUrls.length}`,
  `- Other asset files: ${otherUrls.length}`,
  "",
  "Run the localization script only after the final content and image changes are approved. That avoids downloading and rewriting the same library twice.",
  "",
  "## URLs",
  "",
  ...uniqueUrls.map((url) => `- ${url}`),
  "",
].join("\n");

await writeFile(path.join(ROOT, "REMOTE-ASSET-AUDIT.md"), report);
await writeFile(path.join(ROOT, "REMOTE-ASSET-URLS.txt"), `${uniqueUrls.join("\n")}\n`);
console.log(`Found ${uniqueUrls.length} unique Base44 asset URLs.`);
console.log(`Images/SVGs: ${imageUrls.length}. Videos: ${videoUrls.length}. Other: ${otherUrls.length}.`);
console.log("Wrote REMOTE-ASSET-AUDIT.md and REMOTE-ASSET-URLS.txt");
