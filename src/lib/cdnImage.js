/**
 * Builds an optimized media.base44.com transform URL for use in plain <img>
 * tags (where the <Image> component's wrapper span would interfere with
 * layout — e.g. images carrying CSS mask gradients).
 *
 * Serves a resized, WebP-encoded version instead of the full-size original:
 * a 1MB JPEG typically drops to well under 200KB.
 *
 * Non-media.base44.com URLs and SVGs are returned untouched.
 */
export function cdnImage(src, width, height, focal) {
  if (!src || !src.includes("media.base44.com") || /\.svg($|\?)/i.test(src)) return src;
  // Strip any existing transform so it can be rebuilt.
  const base = src.split("/v1/")[0];
  const filename = base.split("/").pop();
  if (!filename) return src;
  const name = filename.replace(/\.[a-z0-9]+$/i, "");
  const dims = `w_${Math.round(width)},h_${Math.round(height)}`;
  const align = focal ? `fp_${Number(focal.x).toFixed(2)}_${Number(focal.y).toFixed(2)}` : "al_c";
  return `${base}/v1/fill/${dims},${align},q_85,enc_webp,quality_auto/${name}.webp`;
}