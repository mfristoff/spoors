# Water Heater Services Page Image Update

This update replaces the Water Heater Services page imagery with locally hosted assets prepared for Cloudflare deployment.

## What changed

- Added sanitized local image assets under `public/assets/images/water-heaters/`
- Replaced the Water Heater Services page hero, mobile hero, service card images, feature image, and full-width break image
- Updated `src/lib/siteConfig.js` so the shared `waterHeaterImage` also points to a local Cloudflare-hosted asset
- Preserved the hybrid / heat pump water heater content section already added to the page

## Selected page image mapping

- Hero desktop:
  - `/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-hero.webp`
- Hero mobile:
  - `/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-mobile-hero.webp`
- Traditional Tank Water Heaters:
  - `/assets/images/water-heaters/spoors-auburn-ca-traditional-tank-water-heater-room.webp`
- Tankless Water Heaters:
  - `/assets/images/water-heaters/spoors-auburn-ca-tankless-water-heater-installation.webp`
- Hybrid and Heat Pump Water Heaters:
  - `/assets/images/water-heaters/spoors-auburn-ca-high-efficiency-water-heater-inspection.webp`
- Water Heater Repair:
  - `/assets/images/water-heaters/spoors-auburn-ca-water-heater-repair-heating-element.webp`
- Replacement and Right-Sizing:
  - `/assets/images/water-heaters/spoors-auburn-ca-water-heater-replacement-mechanical-room.webp`
- Maintenance and System Care:
  - `/assets/images/water-heaters/spoors-auburn-ca-water-heater-piping-and-gauge-service.webp`
- Hybrid feature section:
  - `/assets/images/water-heaters/spoors-auburn-ca-high-efficiency-water-heater-service-technician.webp`
- Full-width image break:
  - `/assets/images/water-heaters/spoors-auburn-ca-water-heater-burner-break.webp`

## Metadata and optimization

All newly prepared assets were re-encoded as WebP files so they:

- do not retain the original embedded metadata payloads
- use Spoor's / Auburn / CA keyword-rich filenames
- are sized for web delivery and Cloudflare static hosting

## Remaining extra sanitized assets

Additional cleaned assets were also prepared in the same folder for future use on this page or related content.

## Latest hero replacement

The desktop and mobile hero assets now use the latest supplied technician photograph. The desktop version preserves the full image. The mobile version is a portrait crop from the same source. Both were re-encoded and stripped of the original embedded metadata. No content was generated or reconstructed.
