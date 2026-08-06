# Delivery Notes

## Completed edits

### Water Heater Services

- Replaced the furnace-oriented page imagery with water-heater-specific hero, card, and full-width section-break imagery.
- Added traditional tank, tankless, repair, replacement, maintenance, hybrid, and heat pump coverage.
- Added a dedicated hybrid and heat pump section using the existing red, navy, white, card, motion, and CTA design system.
- Expanded page FAQs and shared service metadata to cover hybrid and heat pump systems.
- Removed rigid lifespan and cost claims from the edited page copy.

### Primary About page

- Rebuilt the SPOOR values section as a 2026 editorial, type-led experience with no stock interface icons.
- Added a sticky values introduction, oversized letter system, numbered statements, refined hover states, and spring-smoothed scroll motion.
- Replaced the generic navy promise card with a full-width red brand statement and animated 1925 detail.
- Preserved all five SPOOR values, the culture line, promise statement, four-generation message, family-service message, caring-for-people message, and 1925 statement.
- Added reduced-motion handling and kept secondary About routes unchanged.

### Cloudflare Pages preparation

- Added SPA route fallback in `public/_redirects`.
- Added conservative security headers in `public/_headers`.
- Added asset audit and Base44 localization scripts.
- Added deterministic asset filenames and incremental reuse so an older local asset folder can be merged instead of downloaded again.
- Added Cloudflare Pages build instructions.

## Validation completed

- Modified JSX and JavaScript files passed TypeScript parser validation.
- `package.json` and `package-lock.json` parse correctly.
- All five added WebP files open correctly and have verified dimensions.
- Remote Base44 audit: 231 unique assets, including 230 images/SVGs and 1 video.

## Validation not completed in this sandbox

A full `npm ci` and `npm run build` could not be completed because this environment's npm mirror did not contain several locked dependencies. Run the normal install and build in a standard Node environment or through Cloudflare Pages Git integration before production deployment.

## Deployment status

The project is configured for Cloudflare Pages but has not been pushed to a Cloudflare account. Deployment requires a connected Cloudflare account or API credentials.

### Mobile homepage hero video

- Added a dedicated 720 × 1280 mobile cut of the existing homepage hero footage.
- Added a matching local first-frame WebP poster to preserve fast mobile LCP.
- Deferred mobile video loading until after page load and browser idle time.
- Added Reduced Motion, Data Saver, 2G, and slow-2G fallbacks.
- Kept the original desktop homepage hero video source unchanged and localized only the optimized mobile cut to Cloudflare.
- Added immutable caching rules for local image and video assets.

## Mobile hero validation

- Changed JSX files passed TypeScript transpile syntax validation.
- Mobile MP4 verified at 720 × 1280, 24 fps, 10.5 seconds, H.264, yuv420p, with no audio stream.
- Mobile MP4 verified at approximately 1.2 MB with fast-start metadata before media data.
- Desktop source restored to the original WordPress-hosted `hero.mp4`; the local desktop encode remains unused.
- Poster WebP verified at 720 × 1280 and approximately 37 KB.
