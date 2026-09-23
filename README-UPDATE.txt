SPOOR PERFORMANCE UPDATE — 2026-09-23

Target repo: mfristoff/spoors
Target main revision inspected: d1fc513cd9a4ef2d629c4f91b8caaf24b3effa44

THIS IS AN OVERLAY UPDATE.
Copy the files in this ZIP over the matching paths in the CURRENT repo.
Do not replace the entire repository with this ZIP and do not delete files that are not in this package.

WHAT CHANGED
1. Cloudflare video delivery
   - Removes run_worker_first for MP4/WebM/MOV assets.
   - Videos now stay on Cloudflare's native static-asset path instead of the Worker reading the full video into memory for each byte-range request.

2. Image request pressure
   - Shared Image component is lazy by default.
   - Critical hero imagery still opts into eager loading explicitly.
   - Home-page non-hero imagery is lazy, then warmed after window load during idle time with a two-image queue.
   - This keeps initial bandwidth and decoding focused on the hero video while avoiding image pop-in during a smooth recording pass.

3. Browser caching
   - Keeps long-lived immutable caching for image/video assets.
   - Adds immutable caching for Vite's content-hashed JS/CSS assets.

4. Lint cleanup
   - Removes stale, unused imports left by earlier page iterations.
   - No functional UI code was removed.

FILES IN THIS OVERLAY
- wrangler.jsonc
- public/_headers
- src/components/ui/image.jsx
- src/pages/HomePage.jsx
- src/pages/Financing2.jsx
- src/pages/Group30.jsx
- src/pages/Rebates2.jsx
- src/pages/Services.jsx
- src/pages/areas/AreaLocalChallenges.jsx
- src/pages/home/AboutPreview.jsx
- src/pages/home/Hero.jsx

QC SUMMARY
- 219 source JS/JSX/TS/TSX files parsed: 0 syntax errors
- Local import resolution: 0 broken local imports
- 120 files in the configured ESLint surface scanned for stale imports: 0 remaining non-React unused imports
- Hero.jsx current pre-edit blob was reconstructed and verified against GitHub SHA dc3648e0528e5241c0853bf2f8d9306d9a8ae37d before cleanup.
- Performance files were matched against the current GitHub blobs before edits.

ENVIRONMENT NOTE
The official npm-based `npm run lint` and `npm run build` commands could not be executed in this isolated runtime because package-registry/network access is disabled and node_modules is not included in the repo artifact. The source-level parser/import/lint sweep above was run across the project. Cloudflare's normal `npm run build` will provide the final dependency-backed build validation after this overlay is committed.
