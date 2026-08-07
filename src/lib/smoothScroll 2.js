/**
 * One smooth-scroll system for tab/row clicks. Uses a single scrolling API
 * (window.scrollTo). The native smooth animation is interrupted the instant
 * the visitor uses the wheel, trackpad, keyboard, or touch — without ever
 * calling preventDefault or locking scrolling.
 *
 * No history entries are created for passive scroll changes.
 */
export function smoothScrollToY(targetY, onDone) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const finish = () => {
    if (done) return;
    done = true;
    // Halt the native smooth animation by re-asserting the current position.
    window.scrollTo(0, window.scrollY);
    cleanup();
    onDone?.();
  };

  let done = false;
  let timer;

  const onKey = (e) => {
    if (
      ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)
    ) {
      finish();
    }
  };
  const cleanup = () => {
    window.removeEventListener("wheel", finish, { passive: true });
    window.removeEventListener("touchmove", finish, { passive: true });
    window.removeEventListener("keydown", onKey);
    clearTimeout(timer);
  };

  if (reduce) {
    window.scrollTo(0, targetY);
    onDone?.();
    return;
  }

  window.scrollTo({ top: targetY, behavior: "smooth" });
  timer = setTimeout(cleanup, 1300);
  window.addEventListener("wheel", finish, { passive: true });
  window.addEventListener("touchmove", finish, { passive: true });
  window.addEventListener("keydown", onKey);
}