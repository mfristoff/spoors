# Home Hero Mobile Crop Update — Superseded by Approved Mobile Asset

An intermediate build attempted to crop the shared desktop source with `mobileObjectPosition="88% 28%"`.

That is no longer the approved implementation.

Current mobile behavior uses the dedicated pre-cropped asset:
`/assets/video/spoors-home-hero-mobile.mp4`

The component uses `mobileObjectPosition="center center"` because the framing is already baked into the approved 720 x 1280 MP4.

See `RELEASE-BASELINE.md` and run `npm run verify:regressions` before delivery.
