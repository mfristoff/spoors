# Approved Mobile Homepage Hero Video

Current approved homepage behavior as of 2026-08-17.

## Desktop

Desktop keeps the existing Spoor's hero source:
`https://spoors.olivemedia.agency/wp-content/uploads/2026/07/hero.mp4`

## Mobile

Mobile uses the dedicated approved asset:
`/assets/video/spoors-home-hero-mobile.mp4`

The mobile cut was derived from the user-supplied `AdobeStock_1644941081.mov` and preserves the approved vertical framing.

Behavior:
- H.264 MP4
- 720 × 1280
- 24 fps
- 4 seconds
- no audio
- approximately 649 KB
- no poster image
- no static fallback image
- immediate muted inline autoplay
- loop enabled
- Safari/iPhone autoplay retry retained
- immutable Cloudflare cache rule under `/assets/video/*`

This behavior is protected by `scripts/verify-regressions.mjs`. Do not substitute the desktop source or reintroduce a poster/fallback during unrelated updates.
