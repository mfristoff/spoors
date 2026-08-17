# Regression Guards

This project now has two safety layers for routine updates.

## 1. Protected behavior guard

`npm run verify:regressions`

This checks specific approved behavior that should not change during unrelated work. The homepage mobile hero is currently protected, including its exact MP4 hash, local path, no-fallback behavior, autoplay safeguards, and Cloudflare video cache rule.

## 2. Release scope guard

`npm run verify:scope`

`.release-baseline.json` stores the hash of every file in the approved release. `UPDATE-SCOPE.txt` is the only list of files allowed to differ during the next requested update.

Workflow for every update:

1. Start from the latest approved repository state.
2. Put only the files needed for the user's request in `UPDATE-SCOPE.txt`.
3. Make surgical edits. Never copy whole files from an older ZIP to "merge" changes.
4. Run `npm run verify:regressions`.
5. Run `npm run verify:scope`.
6. Run `npm run build`.
7. Review the changed-file list before delivery.
8. Once the update itself is the new approved release, run `npm run baseline:refresh` and clear `UPDATE-SCOPE.txt` before packaging the new master ZIP.

If a guard fails, fix the unexpected change. Do not bypass the guard by broadening the scope or refreshing the baseline unless the changed behavior was actually requested.

## Build-safe exclusions

The scope guard intentionally ignores `public/media-library.json` because the prebuild process regenerates it. It also ignores Finder-style root duplicates only when the canonical sibling exists, such as `package 2.json` beside `package.json` or `src 3` beside `src`. Those files are inert legacy clutter and are not part of the deploy surface.

The scope check now runs before `media:library`, so generated output cannot create a false regression failure. Runtime source, active assets, tracking, forms, routes, configuration, and canonical scripts remain protected by the baseline.
