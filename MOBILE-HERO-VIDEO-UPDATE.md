# Mobile Homepage Hero Video Update

Final behavior for the homepage hero:

- Desktop continues to use the existing Spoor's hero video source.
- Mobile uses that same exact video source, not a separate condenser/fan clip.
- The mobile presentation uses a tighter right-side crop so the technician is the primary subject.
- There is no mobile poster image and no static hero fallback image.
- The old mobile fallback-image preload was removed from `index.html`.
- The old `HeroBackdrop.jsx` fallback component was removed.
- The mobile video mounts immediately and preloads automatically.
- Mobile autoplay handling was strengthened for iOS Safari by setting muted/inline playback directly on the video DOM node and retrying playback on `loadeddata`, `canplay`, page restore, visibility restore, and the first user interaction if the browser initially blocks autoplay.
- The media-fragment suffix (`#t=0.1`) was removed because it can make iOS behave like it is displaying a held first frame instead of starting the background video cleanly.

Mobile crop:

- object-position: `96% 28%`
- scale: `1.10`

No desktop hero source or desktop framing was changed.
