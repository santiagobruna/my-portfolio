export type Theme = "dark" | "light";

export const STORAGE_KEY = "portfolio-theme";

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

/** Preferência do sistema; fallback dark se o navegador não informar. */
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (prefersDark) return "dark";
  if (prefersLight) return "light";
  return "dark";
}

/** Escolha manual salva, senão tema do sistema. */
export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0a0a0b" : "#ffffff");
  }
}

export function persistTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}
