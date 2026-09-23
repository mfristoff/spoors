import { useEffect, useRef, useState } from "react";

/**
 * Shared, non-blocking native-scroll engine.
 *
 * It OBSERVES page position and updates an active index. It never calls
 * preventDefault, scrollTo, scrollIntoView, or element.click, never locks
 * body overflow, and never uses mandatory scroll snapping. The browser
 * retains complete control of scrolling in every direction.
 *
 * One passive scroll listener per mount, wrapped in requestAnimationFrame.
 * ResizeObserver recalculates boundaries. All listeners are removed on unmount.
 */

export function getScrollStoryProgress(section, stickyStage, stickyOffset) {
  if (!section || !stickyStage) return 0;
  const start = section.offsetTop - stickyOffset;
  const end =
    section.offsetTop + section.offsetHeight - stickyStage.offsetHeight - stickyOffset;
  if (end <= start) return 0;
  return Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
}

export function getActiveIndex(progress, itemCount) {
  if (itemCount <= 1) return 0;
  return Math.min(itemCount - 1, Math.floor(progress * itemCount));
}

function readHeaderOffset(extra = 24) {
  const v = parseFloat(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--collapsed-header-height")
  );
  return (Number.isFinite(v) ? v : 116) + extra;
}

/**
 * @param {Object} opts
 * @param {number} opts.itemCount   Number of scroll steps.
 * @param {boolean} opts.enabled    Disable on mobile / reduced-motion layouts.
 * @param {number} opts.extraOffset  Extra px beyond the collapsed header (default 24).
 * @returns {{ sectionRef, stageRef, activeIndex, direction, progress }}
 */
export function useScrollStory({ itemCount, enabled = true, extraOffset = 24 }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastY = useRef(0);
  const lastActive = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setActiveIndex(0);
      setProgress(0);
      return;
    }
    let raf = 0;

    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      const y = window.scrollY;
      setDirection(y >= lastY.current ? 1 : -1);
      lastY.current = y;
      if (!section || !stage) return;
      const off = readHeaderOffset(extraOffset);
      const p = getScrollStoryProgress(section, stage, off);
      setProgress(p);
      const idx = getActiveIndex(p, itemCount);
      if (idx !== lastActive.current) {
        lastActive.current = idx;
        setActiveIndex(idx);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const ro = new ResizeObserver(() => {
      if (!raf) raf = requestAnimationFrame(update);
    });
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (stageRef.current) ro.observe(stageRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [itemCount, enabled, extraOffset]);

  return { sectionRef, stageRef, activeIndex, direction, progress };
}