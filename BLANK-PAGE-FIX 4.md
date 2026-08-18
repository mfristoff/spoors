# Intermittent blank-page fix

## Cause

Most routes are split with `React.lazy()`, while the app-level `Suspense` fallback was a completely blank, page-height white block. On a normal slow route load that looked like a white page. More importantly, an already-open browser tab could request an old hashed route chunk after a new Cloudflare Pages deployment. That dynamic import fails, and refreshing works because the refresh loads the new entry bundle and current chunk names.

## Fix

- Added Vite `vite:preloadError` recovery so stale lazy chunks trigger one automatic refresh.
- Added a dynamic-import rejection fallback for browsers that do not surface the Vite event.
- Added an app error boundary so a failed lazy import can never leave an unhandled white screen.
- Added a visible route-loading state instead of the previous blank-white `Suspense` fallback.
- Added an inner `Suspense` boundary in `SiteLayout`, so shared header/footer stay visible while normal public pages load.
- Set `index.html` to revalidate instead of being reused as stale app-shell HTML.

This keeps route code-splitting and its performance benefits while eliminating the persistent blank-page failure mode.
