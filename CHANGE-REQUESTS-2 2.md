# Change Requests 2 - August 12, 2026

This build starts from `spoors-git-ready-about-change-requests-v3.zip` and keeps the previous About-page updates.

## Applied
- `/services/` hero now uses an eager, high-priority image request and balanced entrance timing.
- `/services/` accordion imagery was refreshed so each panel on that page uses unique imagery.
- Indoor Air Quality accordion art now mirrors imagery currently used on the IAQ detail page.
- Swamp Cooler accordion art now uses current Swamp Cooler detail-page imagery.
- Water Heater accordion imagery was replaced/reframed, including a supplied-looking tankless installation photo.
- Water Heater detail-page tankless image now uses the existing local installation asset.
- Heating and Maintenance full-width image breaks use focal cropping and taller bands so the subjects remain visible.
- Home-page Swamp Cooler card uses the exact image supplied in Change Requests 2, optimized as WebP.
- Comfort Club hero content was enlarged modestly without changing the hero section height or left-column max width.

## Validation
- Checked all newly referenced local assets.
- Confirmed the previous About-page hero asset remains in the build.
- Full Vite build could not run in this environment because dependencies are not installed and the configured npm registry is invalid.
