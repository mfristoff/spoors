// Shared entrance motion. Tuned to feel smooth and unhurried on mobile:
// gentle glide, soft ease-out, and an early trigger so elements are already
// moving as they scroll into view.
export const EASE_SMOOTH = [0.33, 0.02, 0.2, 1];

export const cardEntrance = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: EASE_SMOOTH, opacity: { duration: 0.85, ease: "linear" } },
  },
};

export const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
};

// Fires while the element is still ~15% below the fold — the animation lands
// as it arrives rather than after it has already been sitting on screen.
export const entranceViewport = { once: true, margin: "0px 0px -12% 0px" };