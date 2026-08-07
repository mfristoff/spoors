const RELOAD_KEY = "spoors:chunk-recovery";
const RELOAD_WINDOW_MS = 15000;
let inMemoryLastReload = 0;

export function isChunkLoadError(error) {
  const message = String(error?.message || error || "");
  return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|ChunkLoadError|Loading chunk [^ ]+ failed/i.test(message);
}

function getLastReload() {
  try {
    return Number(window.sessionStorage.getItem(RELOAD_KEY) || 0);
  } catch {
    return inMemoryLastReload;
  }
}

function setLastReload(value) {
  inMemoryLastReload = value;
  try {
    window.sessionStorage.setItem(RELOAD_KEY, String(value));
  } catch {
    // Some privacy modes block sessionStorage. The in-memory guard still
    // prevents duplicate reload attempts during the current document lifetime.
  }
}

export function recoverFromChunkLoadError() {
  if (typeof window === "undefined") return false;

  const now = Date.now();
  if (now - getLastReload() < RELOAD_WINDOW_MS) return false;

  setLastReload(now);
  window.location.reload();
  return true;
}

export function installChunkRecovery() {
  if (typeof window === "undefined") return;

  // Vite emits this when an already-open tab requests a lazy route chunk that
  // was replaced by a newer Cloudflare deployment. Reloading pulls the current
  // entry bundle and route manifest instead of leaving the app on a blank page.
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    recoverFromChunkLoadError();
  });

  // Browser fallback for dynamic-import failures that do not emit Vite's event.
  window.addEventListener("unhandledrejection", (event) => {
    if (!isChunkLoadError(event.reason)) return;
    event.preventDefault();
    recoverFromChunkLoadError();
  });
}
