import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const baselinePath = path.join(root, ".release-baseline.json");
const scopePath = path.join(root, "UPDATE-SCOPE.txt");
const ignoredNames = new Set([
  ".release-baseline.json",
  "UPDATE-SCOPE.txt",
  ".DS_Store",
  "LOCAL-ASSET-MIGRATION.txt",
  "MOBILE-HERO-WORKER-VIDEO-FIX.md",
]);
const ignoredDirs = new Set([".git", "node_modules", "dist", "dist-ssr", ".vite"]);
const ignoredGenerated = new Set(["public/media-library.json"]);

function isFinderDuplicate(parentDir, entryName) {
  const match = entryName.match(/^(.*) (\d+)(\.[^./]+)?$/);
  if (!match) return false;
  const canonicalName = `${match[1]}${match[3] || ""}`;
  return fs.existsSync(path.join(parentDir, canonicalName));
}

function shouldIgnorePath(full) {
  const rel = path.relative(root, full).split(path.sep).join("/");
  return ignoredGenerated.has(rel);
}

if (!fs.existsSync(baselinePath)) {
  console.error("Missing .release-baseline.json. Run npm run baseline:refresh only after the current approved state is confirmed.");
  process.exit(1);
}

function hashFile(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredNames.has(entry.name)) continue;
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    if (dir === root && isFinderDuplicate(dir, entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (shouldIgnorePath(full)) continue;
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

function loadScope() {
  if (!fs.existsSync(scopePath)) return [];
  return fs
    .readFileSync(scopePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function allowed(rel, rules) {
  return rules.some((rule) => {
    if (rule.endsWith("/**")) return rel.startsWith(rule.slice(0, -3));
    if (rule.endsWith("/")) return rel.startsWith(rule);
    return rel === rule;
  });
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
const current = {};
for (const full of walk(root).sort()) {
  const rel = path.relative(root, full).split(path.sep).join("/");
  current[rel] = hashFile(full);
}

const changes = [];
for (const [rel, hash] of Object.entries(baseline.files)) {
  if (!(rel in current)) changes.push({ type: "deleted", rel });
  else if (current[rel] !== hash) changes.push({ type: "modified", rel });
}
for (const rel of Object.keys(current)) {
  if (!(rel in baseline.files)) changes.push({ type: "added", rel });
}

const rules = loadScope();
const unexpected = changes.filter((change) => !allowed(change.rel, rules));

if (unexpected.length) {
  console.error("\nRELEASE SCOPE GUARD FAILED\n");
  console.error("These changes are outside UPDATE-SCOPE.txt:");
  for (const change of unexpected) console.error(`- ${change.type}: ${change.rel}`);
  console.error("\nDo not widen the scope to hide accidental changes. Restore them, or add only files that are genuinely required by the user's current request.\n");
  process.exit(1);
}

if (changes.length) {
  console.log(`Release scope guard passed. ${changes.length} changed file(s) are explicitly in UPDATE-SCOPE.txt.`);
} else {
  console.log("Release scope guard passed. No files differ from the approved baseline.");
}
