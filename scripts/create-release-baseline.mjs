import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const output = path.join(root, ".release-baseline.json");
const ignoredNames = new Set([".release-baseline.json", "UPDATE-SCOPE.txt", ".DS_Store"]);
const ignoredDirs = new Set([".git", "node_modules", "dist", "dist-ssr", ".vite"]);

function hashFile(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredNames.has(entry.name)) continue;
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

const files = {};
for (const full of walk(root).sort()) {
  const rel = path.relative(root, full).split(path.sep).join("/");
  files[rel] = hashFile(full);
}

const baseline = {
  version: 1,
  createdAt: new Date().toISOString(),
  purpose: "Approved release baseline used to detect off-scope changes, removals, additions, and reverts.",
  files
};

fs.writeFileSync(output, JSON.stringify(baseline, null, 2) + "\n");
console.log(`Release baseline refreshed with ${Object.keys(files).length} files.`);
