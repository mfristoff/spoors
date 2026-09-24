# Home Hero Video Restore

The two locally bundled home hero MP4 files in the prior build were condenser/fan footage. They have been removed from this package.

The home hero now points back to the exact original desktop hero source used before the mobile-video experiment:

`https://spoors.olivemedia.agency/wp-content/uploads/2026/07/hero.mp4`

That same correct source is used on mobile, while the existing deferred mobile loading behavior remains in place. The mobile LCP fallback was also restored to the original pre-video image so no condenser/fan frame appears before playback.
