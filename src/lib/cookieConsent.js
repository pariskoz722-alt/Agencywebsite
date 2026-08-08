// Small external store around the consent value in localStorage, so components
// can read it with useSyncExternalStore instead of syncing it via an effect.
const STORAGE_KEY = "sd-cookie-consent";

const listeners = new Set();

// Used when localStorage is unavailable (privacy mode), so the banner still
// dismisses for the current visit even though the choice cannot be persisted.
let memoryFallback = null;

function notify() {
  for (const listener of listeners) listener();
}

export function subscribe(listener) {
  listeners.add(listener);
  // Keep other tabs in sync too.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

// Returns the stored decision as a stable string, or null if none has been made.
export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? memoryFallback;
  } catch {
    return memoryFallback;
  }
}

// During SSR there is no storage to read; render as undecided so the markup
// matches the first client render.
export function getServerConsent() {
  return null;
}

export function setConsent(choice) {
  const value = JSON.stringify({ choice, date: new Date().toISOString() });
  memoryFallback = value;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Not persisted, but memoryFallback keeps the banner dismissed this visit.
  }
  notify();
}
