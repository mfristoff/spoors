# Home Hero Video Restore — Superseded

This note describes an intermediate rollback and is retained only as history.

It is NOT the current approved homepage behavior.

Current approved state:
- Desktop keeps the existing Spoor's desktop hero source.
- Mobile uses `/assets/video/spoors-home-hero-mobile.mp4`.
- Mobile has no poster image or static fallback.
- The mobile MP4 is protected by `scripts/verify-regressions.mjs` so routine updates cannot silently revert it.

See `RELEASE-BASELINE.md` for the current release contract.
