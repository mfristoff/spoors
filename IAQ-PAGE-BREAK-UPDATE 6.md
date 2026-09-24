# IAQ Page Break Update

This build updates the lower photo section break on the Indoor Air Quality page.

## What changed

### New section-break image
Added a new sanitized and optimized local image at:

- `public/assets/images/indoor-air-quality/spoors-auburn-ca-clean-air-page-break-ceiling-vent-plant.webp`

The supplied source image was:

- sanitized to remove embedded metadata
- resized/cropped for section-break usage
- optimized as a WebP asset
- saved with a local SEO-friendly filename

### Indoor Air Quality page update
Updated `src/pages/services/IndoorAirQualityServices.jsx` to:

- swap the lower photo section break to the new local image
- set the break section height to `500px`

### Layout support
Updated `src/pages/services/ServiceDetailLayout.jsx` to support a per-page `breakHeightClass` override while preserving the existing default heights for the other service pages.

All prior site updates remain included in this full Git-ready build.
