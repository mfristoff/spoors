# Mobile Homepage Hero Video Update

The homepage now uses separate local hero assets for desktop and mobile.

## Added assets

- Desktop video: `/assets/video/spoors-home-hero-desktop.mp4`
- Mobile video: `/assets/video/spoors-home-hero-mobile.mp4`
- Mobile poster: `/assets/images/home/spoors-home-hero-mobile-poster.webp`

## Mobile delivery behavior

- The 720 × 1280 mobile video is a portrait crop of the existing Spoor's hero footage.
- The poster is extracted from the same mobile cut and remains the high-priority LCP asset.
- The video waits until the page load event and an idle window before it mounts.
- The poster stays visible until the video is actively playing, then fades out beneath it.
- Video is skipped when Reduced Motion, Data Saver, 2G, or slow-2G is detected.
- Both video files are now served from the deployed Cloudflare project rather than the WordPress server.
- Cloudflare immutable cache headers were added for image and video assets.

## Mobile video specification

- H.264 MP4
- 720 × 1280
- 24 fps
- 10.5 seconds
- No audio track
- Fast-start metadata
- Approximately 1.2 MB
