# Cloudflare Pages Deployment

## Recommended deployment method

Use Git integration for this source project so Cloudflare installs dependencies, runs the Vite build, and creates preview deployments for later edits.

Cloudflare Pages settings:

- Framework preset: React (Vite)
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

The `public/_redirects` file keeps React Router routes working when a visitor loads a nested URL directly. The `public/_headers` file adds a small set of browser security headers without overriding Cloudflare Pages' default asset handling.

## Final asset-localization pass

This source still contains remote `media.base44.com` assets. Finish and approve the page edits first, then run one final localization pass before the production launch:

```bash
npm run assets:audit
npm run assets:localize
npm run build
```

The localization script writes referenced Base44 images and video under `public/assets/base44`, rewrites the source references, and creates `BASE44-ASSET-MAP.json`.

The filenames are deterministic. If you still have the previously downloaded `public/assets/base44` folder, merge it into this project before running the script. Existing matching files will be reused and only missing assets will be downloaded. The prior local asset library was not included in the uploaded ZIP used for this edit.

## Environment variables

The frontend includes the Base44 SDK. If any published route still calls Base44 authentication or backend functions, add the corresponding production values in Pages under Settings > Environment variables:

- `VITE_BASE44_APP_ID`
- `VITE_BASE44_APP_BASE_URL`
- `VITE_BASE44_FUNCTIONS_VERSION`, when used

Test the public marketing pages, Formspree forms, nested routes, and conversion tracking on the Pages preview URL before connecting the production domain.
