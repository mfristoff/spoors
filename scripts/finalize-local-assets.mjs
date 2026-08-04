import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

async function update(relativePath, transform) {
  const file = path.join(ROOT, relativePath);
  const original = await readFile(file, "utf8");
  const updated = transform(original);
  if (updated !== original) await writeFile(file, updated);
}

await writeFile(
  path.join(ROOT, "src", "lib", "cdnImage.js"),
  `/**\n * Local assets are already served by Cloudflare. Keep the existing helper\n * signature so callers do not need to change.\n */\nexport function cdnImage(src) {\n  return src;\n}\n`
);

await update("src/components/ui/image.jsx", (source) =>
  source
    .replace(
      'const WIX_MEDIA_HOSTS = ["media.base44.com", "static.wixstatic.com"]',
      'const WIX_MEDIA_HOSTS = ["static.wixstatic.com"]'
    )
    .replace(
      /\*\*\n \* Image with built-in Wix Media Platform support: URLs on media\.base44\.com \/\n \* static\.wixstatic\.com are served resized to the rendered container \(per\n \* device pixel ratio\) and re-encoded to WebP; `fittingType="fill"` crops\n \* server-side, optionally anchored at a focal point\. Other URLs render as a\n \* plain <img>\. Failed loads swap to a fallback image\.\n \*\//,
      `/**\n * Images on the remaining Wix fallback host can use its transform pipeline.\n * Local Cloudflare assets render as normal images. Failed loads use a fallback.\n */`
    )
    .replace(
      'return (\n        <img ref={ref} src={imgSrc} {...imageProps} data-error-image={isErrorUrl || undefined} />\n      )',
      'return (\n        <img\n          ref={ref}\n          src={imgSrc}\n          {...imageProps}\n          className={cn(imageProps.className, fittingType === "fit" ? "object-contain" : "object-cover")}\n          data-error-image={isErrorUrl || undefined}\n        />\n      )'
    )
);

await update("src/pages/ServicesAreaPage.jsx", (source) =>
  source.replace(
    "// --- City images re-hosted from Google Drive to optimized media.base44.com CDN ---",
    "// --- Local service-area images served by Cloudflare ---"
  )
);

await update("src/lib/siteConfig.js", (source) =>
  source.replace(
    /  \/\/ NOTE: all photos are served from media\.base44\.com[^\n]*\n  \/\/ \/v1\/ transform pipeline[^\n]*\n  \/\/ the legacy base44\.app\/api\/\.\.\.\/files path[^\n]*\n  \/\/ TTFB and ~5x smaller payloads\. Never point an image at base44\.app\/api\.\n/,
    "  // Photos are stored with the project and served as Cloudflare static assets.\n"
  )
);


await update("index.html", (source) =>
  source.replace(/\s*<link rel="preconnect" href="https:\/\/media\.base44\.com" crossorigin \/>\s*/g, "\n")
);

console.log("Removed Base44 media-host runtime handling and updated local-asset comments.");
