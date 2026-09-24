# Spoor's Homepage Code-Split Verification — 2026-09-23

Baseline Git head verified before optimization:
`b173137d3633bbf821ff04ed1f6ece3a3c4971d9` (`main`, commit message `linter`).

## Production verification

Executed against a clean clone of that Git head with exactly the source changes included in this package:

- `npm ci`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- Vite production build: PASS
- Large-entry (>500 kB) warning: removed

## Measured bundle change

| Metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Critical entry JS | 623.39 kB | 436.61 kB | -29.96% |
| Critical entry gzip | 195.09 kB | 136.67 kB | -29.94% |
| JS chunks | 54 | 65 | deliberately split/deferred |

The total application JavaScript is not 30% smaller. The improvement comes from keeping noncritical code out of the initial download and executing it only when needed.

## What moved off the critical path

- Full service/blog/site registry (`siteConfig`) is deferred instead of entering the homepage startup bundle.
- Structured-data/schema code loads during browser idle time rather than before first paint.
- Service quote modal loads only when opened.
- Emergency help modal loads only when opened.
- Non-home shared layout loads only on non-home routes.
- Automatic background route warming was removed so it cannot compete with hero video/images during first load.
- Intent-based route/image preloading remains on navigation interaction.

## Integrity notes

- The source files touched by this optimization were blob-checked against current Git `b173137d` before modification.
- The full package is intended as a complete repository replacement, not a partial overlay.
- `node_modules`, `dist`, and `.git` are intentionally excluded.
