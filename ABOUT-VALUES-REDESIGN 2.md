# About Page Values Redesign

## What changed

- Replaced the icon-led values table with an editorial, type-driven layout.
- Removed the generic navy card block and rebuilt the promise statement as a full-width red brand moment.
- Added a sticky desktop introduction, oversized SPOOR lettering, numbered value statements, hover states, and scroll-linked motion.
- Added spring-smoothed parallax, staggered copy reveals, animated rules, and a moving 1925 background detail.
- Preserved every value and supporting statement from the supplied infographic.
- Added reduced-motion handling for visitors who disable animation.
- Kept the component responsive and dependency-free beyond the Framer Motion package already used by the site.

## Main file

`src/components/about/OverviewValues.jsx`

## Validation

- JSX and TypeScript parser check: passed
- Exact-case local import check: passed
- Existing Water Heater page assets and hybrid section: preserved
- Cloudflare Pages routing files: preserved

## Build note

This sandbox could not complete `npm ci` because its internal package mirror does not contain one locked transitive dependency. Cloudflare Pages previously installed this project successfully from the normal npm registry. Use the existing build command: `npm run build`.
