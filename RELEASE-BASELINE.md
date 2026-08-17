# Spoor's Release Baseline

Baseline created: 2026-08-17
Source build: spoors-git-ready-community-hero-zoomout-v9

This package keeps the latest Community Involvement and About-page work, then restores the previously approved homepage mobile hero implementation.

## Protected homepage mobile hero

- Desktop source remains: https://spoors.olivemedia.agency/wp-content/uploads/2026/07/hero.mp4
- Mobile source: /assets/video/spoors-home-hero-mobile.mp4
- Approved mobile cut was derived from `AdobeStock_1644941081.mov` and uses the previously approved vertical crop/framing.
- Mobile asset SHA-256: 07ae85e9975fefaeda17eebffa641f8ddf3e08ff6c47e00a8c509a3d8d93773a
- Mobile asset size: 649039 bytes
- 720 x 1280 H.264 MP4, 24 fps, 4 seconds, no audio
- No mobile poster or static fallback
- Immediate muted inline autoplay with Safari/iPhone retry behavior
- Loop enabled

## Update rule

Future changes should start from this complete package and modify only what the new request requires. Do not merge by copying older full files into the repository. Run 
> base44-app@0.0.0 verify:regressions
> node scripts/verify-regressions.mjs

Regression guard passed. Protected Spoor's release invariants are intact. and 
> base44-app@0.0.0 prebuild
> npm run media:library && npm run verify:regressions


> base44-app@0.0.0 media:library
> node scripts/generate-media-library.mjs

Media library: 291 assets written to public/media-library.json

> base44-app@0.0.0 verify:regressions
> node scripts/verify-regressions.mjs

Regression guard passed. Protected Spoor's release invariants are intact.

> base44-app@0.0.0 build
> vite build before every delivery.
