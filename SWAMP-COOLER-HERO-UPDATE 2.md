# Swamp Cooler Hero Update

- Replaced the `/services/swamp-coolers` hero with the supplied `swamp-cooler-fan.png` artwork.
- Optimized the source from a 2.8 MB PNG to a 112 KB WebP without changing the visual content.
- Uses the full composition on desktop and a 62% horizontal focal position on mobile.
- Updated route-level hero preloading to request the new local Cloudflare-served asset before navigation completes.
- Added the hero to `/media-library` as asset #290.
- Preserved prelaunch noindex protection and the existing hero-transition stability fixes.
