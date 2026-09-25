Spoor's performance repair
Target repo: mfristoff/spoors
Target branch/source state: main at 92a4f4296f09d737be1f3f4df868b64e89f3770b

What this fixes

1. Hero family card and accreditation logos
The current Base44 localization script converts those tiny UI images into 2400px WebP files.
This patch gives the six highlighted above-the-fold assets right-sized local variants and cache-busted filenames.

2. Scroll jank
The home page currently starts preloading AND decoding every lazy image after page load with two workers.
That defeats lazy loading and can compete with scrolling.
This patch only warms images about 900px before they enter the viewport and does not force an early decode.

3. Off-screen hero video
The looping hero video currently keeps playing after it leaves the viewport.
This patch pauses it off-screen and when the tab is hidden, then resumes it when needed.

4. Logo layout stability
Local images now keep their known intrinsic width/height so the browser can reserve space before decode.

Apply

From your Spoor's repo root:

git status
git apply --check /path/to/spoors-performance-fix.patch
git apply /path/to/spoors-performance-fix.patch

Then run:

npm run build

Expected validation:
- build completes
- prebuild downloads new, smaller cache-busted variants for the six hero assets
- no visual/layout changes to the hero
- hero video pauses after you scroll away from it
- image/network activity no longer spikes across the entire page immediately after load

Then review:

git diff
git status

Commit/push when ready.
