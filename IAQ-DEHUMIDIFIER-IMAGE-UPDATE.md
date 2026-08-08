# IAQ Dehumidifier Image Update

This build adds a dedicated image for the "Whole-Home Dehumidifiers" service card on the Indoor Air Quality page.

## Added image

Saved to `public/assets/images/indoor-air-quality/`:

- `spoors-auburn-ca-whole-home-dehumidifier-system.webp`

The supplied source image was:

- brightened for better on-page presentation
- sanitized to remove embedded metadata
- resized/cropped for service-card usage
- optimized as a WebP asset with a local SEO-friendly filename

## Code update

`src/pages/services/IndoorAirQualityServices.jsx`

- added `IAQ_IMAGES.wholeHomeDehumidifier`
- swapped the "Whole-Home Dehumidifiers" card to use the new local image asset

All prior mini-split, home hero, blank-page, values, and water-heater updates remain included in this complete Git-ready build.
