// External store around the active theme. The inline script in the root layout
// sets data-theme before first paint; this lets components read it with
// useSyncExternalStore rather than syncing it through an effect.
const STORAGE_KEY = "sd-theme";

const listeners = new Set();

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getTheme() {
  return document.documentElement.dataset.theme || "dark";
}

// No DOM during SSR; the layout renders data-theme="dark" to match.
export function getServerTheme() {
  return "dark";
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Preference simply will not persist if storage is unavailable.
  }
  for (const listener of listeners) listener();
}
