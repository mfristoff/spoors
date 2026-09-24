# Hero Transition Stability Fix

This build addresses delayed, stale, and visually jumping hero images during client-side navigation.

## Changes

- Moved all primary `/services/*` detail routes into the persistent `SiteLayout` so the shared header no longer unmounts and remounts between the Services overview and service detail pages.
- Removed duplicate header/footer rendering from `ServiceDetailLayout` and the Planned Maintenance page.
- Fixed the shared `Image` component so it no longer mirrors the previous `src` into state for one render when a routed page changes images.
- Keyed routed image elements by source so a previous page's pixels are not retained while the next hero loads.
- Removed the duplicate CSS background/image stack from About detail heroes that could show one crop first and then snap to a different crop.
- Converted About detail and Interior hero images to stable fixed CDN transform URLs instead of resize-observer-driven hero URLs.
- Removed the About overview hero background zoom/scale animation. Text motion remains.
- Removed the deliberate 500 ms opacity delay from generic service hero images.
- Changed hero image decoding from synchronous to asynchronous to avoid main-thread decode jank.
- Reduced oversized service hero requests from 3840x2160 to 2560x1600.
- Added route-level module and hero-image preloading for primary service routes, About routes, and service-area destinations.
- Navigation now starts preloading on hover, keyboard focus, and pointer-down. Primary service routes also warm progressively after the current page finishes loading, except on Save-Data/2G connections.
- Added preload handling to service overview "Learn More" links.
- Added stable keys to service-area hero gallery images.

## Validation

- Parsed all 215 JS/JSX source files with the TypeScript parser: 0 syntax errors.
- Verified primary local hero asset paths used by the preloader exist.
- Verified each exact primary service route appears only once in the router.
- Verified service detail pages no longer contain their own NewHeader/NewFooter/FooterCTA instances.
