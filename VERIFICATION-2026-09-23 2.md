# Spoor Performance Build Verification

Verified against the complete Spoor source tree on September 23, 2026 using Node 20.20.2 and npm 10.8.2 in a networked Linux build sandbox.

## Production gates

- `npm ci`: PASS. 633 packages installed from the lockfile.
- `npm run lint`: PASS. ESLint completed with zero errors after correcting the legacy React DOM attribute casing and removing the redundant Safari-only video attribute.
- `npm run build`: PASS. Vite 6.4.3 transformed 2,280 modules and completed the optimized production build.
- `npm run assets:localize`: PASS as part of prebuild. Remote deployable media was localized before bundling.
- `npm run assets:verify-local`: PASS. No remote media URLs remained in deployable source after localization.
- Video byte-range tests: PASS, 12/12.

## Build observations

Vite reports the main JavaScript bundle at about 623 kB before gzip and about 195 kB gzip. It emits a non-blocking chunk-size warning above 500 kB. The performance pass already route-splits secondary pages. No production build error results from this warning.

npm audit reports 15 dependency advisories in the resolved dependency tree: 1 low, 8 moderate, 6 high. No automatic `npm audit fix --force` was applied because that can introduce breaking dependency changes and is unrelated to the media delivery repair.

## TypeScript check

`npm run typecheck` was also executed. It is not currently a valid green production gate for this legacy JavaScript/JSX codebase because `checkJs: true` surfaces a broad backlog of inferred prop-shape errors across existing components. Those errors predate this performance pass and do not block ESLint or the Vite production build. The configuration was not weakened or disabled simply to produce a green result.

## Performance changes in this package

- Restores the complete source tree. This is a full Git-ready package, not the earlier overlay.
- Stops routing static video files through the Worker-first media path, allowing Cloudflare static assets to serve video directly.
- Adds immutable cache policy for hashed JavaScript and CSS assets.
- Keeps image and video asset caching at one year for versioned static media.
- Defaults noncritical shared images to lazy loading.
- Keeps true hero and critical first-paint media eager and high priority.
- Warms below-fold homepage images after page load in a two-request low-priority queue for smoother screen-recording scrolls.
- Localizes remote deployable media during production prebuild.
- Removes stale imports surfaced by ESLint.

## Git update

Use this folder as the complete repository source. Do not apply it as an overlay-only commit. `node_modules` and `dist` are intentionally not included. Cloudflare should install from `package-lock.json` and run the production build normally.
