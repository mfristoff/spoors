import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SEARCH_ROOTS = ["src", "public", "index.html"];
const TEXT_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json", ".jsonc", ".xml"]);

async function collectFiles(target) {
  const absolute = path.join(ROOT, target);
  const info = await stat(absolute);
  if (info.isFile()) return [absolute];
  const files = [];
  for (const entry of await readdir(absolute, { withFileTypes: true })) {
    if (["node_modules", "dist", "assets"].includes(entry.name)) continue;
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(path.relative(ROOT, child))));
    else if (TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(child);
  }
  return files;
}

const files = (await Promise.all(SEARCH_ROOTS.map(collectFiles))).flat();
const failures = [];
for (const file of files) {
  const content = await readFile(file, "utf8");
  if (content.includes("media.base44.com")) failures.push(path.relative(ROOT, file));
}

const assetDir = path.join(ROOT, "public", "assets", "base44");
let assetCount = 0;
try {
  assetCount = (await readdir(assetDir, { withFileTypes: true })).filter((entry) => entry.isFile()).length;
} catch {
  assetCount = 0;
}

if (failures.length) {
  console.error("Base44 media-host references remain in runtime files:");
  for (const file of failures) console.error(`- ${file}`);
  process.exit(1);
}
if (assetCount === 0) {
  console.error("No localized assets were found in public/assets/base44.");
  process.exit(1);
}

console.log(`Verified ${assetCount} localized assets and zero Base44 media-host references.`);
