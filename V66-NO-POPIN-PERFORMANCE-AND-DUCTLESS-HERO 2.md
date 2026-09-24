# v66 No-Pop-In Performance + Ductless Hero Fix

This build reverses the visible lazy-loading behavior from v65 while preserving the non-visual performance improvements.

## Ductless hero
- Replaced the split desktop image panel with the exact user-supplied hero image.
- Hero image is now full bleed across the entire hero canvas.
- Removed the artificial right-side width restriction that caused the large black gap.
- Uses a 61 KB optimized local WebP version of the supplied image.

## Loading behavior
- Site images now default to eager loading instead of scroll-triggered loading.
- Explicit image lazy-loading flags were changed to eager throughout the React source.
- Parallax background images are assigned immediately instead of waiting for IntersectionObserver.
- Homepage below-the-fold sections are now normal synchronous imports and render immediately instead of waiting on viewport-triggered chunks.
- The Google Maps iframe remains lazy because it is a heavy third-party embed and is unrelated to image pop-in.

## Image delivery optimization
- Base44/Wix transformed images now default to WebP quality 82 instead of 95.
- Responsive transformed images are capped at 2x DPR instead of generating 3x requests.
- Large local WebP assets were selectively recompressed only when the new encoding saved at least 7%.
- Existing connection-aware route/module preloading from v65 remains in place.
