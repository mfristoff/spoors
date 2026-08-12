import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];
if (!['staging', 'launch'].includes(mode)) {
  console.error('Usage: node scripts/set-site-mode.mjs staging|launch');
  process.exit(1);
}

const launch = mode === 'launch';
const noindex = 'noindex, nofollow, noarchive';

const siteIndexingPath = path.join(root, 'src/lib/siteIndexing.js');
let siteIndexing = await fs.readFile(siteIndexingPath, 'utf8');
siteIndexing = siteIndexing.replace(/export const SITE_INDEXING_ENABLED = (true|false);/, `export const SITE_INDEXING_ENABLED = ${launch};`);
await fs.writeFile(siteIndexingPath, siteIndexing);

const indexPath = path.join(root, 'index.html');
let index = await fs.readFile(indexPath, 'utf8');
index = index.replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${launch ? 'index, follow' : noindex}" />`);
// Remove the old hostname-only inline robots switch if it is still present.
index = index.replace(/\n\s*<script>\s*if \(window\.location\.hostname === "newspoors\.olivemedia\.agency"\) \{[\s\S]*?<\/script>/, '');
await fs.writeFile(indexPath, index);

const commonHeaders = `/*\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n${launch ? '' : `  X-Robots-Tag: ${noindex}\n`}\n/index.html\n  Cache-Control: no-cache, no-store, must-revalidate\n\n/assets/video/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/assets/images/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/media-library*\n  X-Robots-Tag: noindex, nofollow, noarchive, nosnippet\n\n/media-library.json\n  X-Robots-Tag: noindex, nofollow, noarchive, nosnippet\n  Cache-Control: no-cache\n`;

const productionPreviewProtection = launch ? `\n# Keep every preview/staging hostname out of search after production launches.\nhttps://:worker.:account.workers.dev/*\n  X-Robots-Tag: ${noindex}\n\nhttps://:project.pages.dev/*\n  X-Robots-Tag: ${noindex}\n\nhttps://:version.:project.pages.dev/*\n  X-Robots-Tag: ${noindex}\n\nhttps://spoor.olivemedia.agency/*\n  X-Robots-Tag: ${noindex}\n\nhttps://newspoors.olivemedia.agency/*\n  X-Robots-Tag: ${noindex}\n` : '';

await fs.writeFile(path.join(root, 'public/_headers'), commonHeaders + productionPreviewProtection);

const robots = launch
  ? `User-agent: *\nAllow: /\n\nSitemap: https://www.spoorsheatingandac.com/sitemap.xml\n`
  : `User-agent: *\nAllow: /\n\n# PRELAUNCH: indexing is blocked by meta robots + X-Robots-Tag.\n# Crawling stays allowed so search engines can see and honor the noindex directive.\n`;
await fs.writeFile(path.join(root, 'public/robots.txt'), robots);

console.log(`Site mode set to ${mode.toUpperCase()}.`);
console.log(launch
  ? 'Production domain may index. Preview/staging hosts and /media-library remain noindex.'
  : 'All routes are noindex. /media-library remains permanently noindex.');
