# v65 Performance Pass

Performance-only update based on v64. No visual design, copy, SEO, tracking, form, or content changes were intended.

## Critical-path reductions
- Removed the global Base44 `AuthProvider` from the public app shell, eliminating the public-settings/auth startup request on normal marketing pages.
- Removed the global React Query provider because it was only supporting the legacy 404 admin note.
- Changed `Group32` and `Group33` from eager imports to route-level lazy imports.

## Image/network improvements
- `Image` now defaults to native `loading="lazy"` and `decoding="async"`, while explicit `loading="eager"` callers still override the default.
- Parallax service-page break images now wait until they are within 700px of the viewport before assigning the CSS background image URL.

## Navigation preload improvements
- Automatic route warming now preloads JavaScript modules only, not hero images.
- Full module + hero image preloading still happens on real visitor intent: hover, focus, or pointer-down.
- Added intent-preload mappings for Resources, Blog, Financing, Rebates, Contact, Testimonials, Careers, and the Service Areas index so those navigation destinations warm correctly too.
- Automatic warming is disabled on Save-Data, 2G, and 3G connections.
- On browsers without connection information, only Services and About modules are warmed.
- Corrected stale preload hero references for Heating, Emergency Repairs, Ductless Mini-Splits, and Swamp Coolers so intent preloading fetches the image the destination page actually uses.

## Deferred item
- The desktop home hero MP4 still points to `spoors.olivemedia.agency`. This environment cannot currently resolve that host to copy it into the Cloudflare build. The existing preconnect remains in place, so desktop playback behavior is unchanged.
