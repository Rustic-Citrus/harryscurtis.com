import { useEffect, useMemo } from "preact/hooks";
import { useSignal } from "@preact/signals";

type Theme = "rustic" | "night";

export default function ThemeToggle() {
  const theme = useSignal<Theme | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
      theme.value = isDark ? "night" : "rustic";
    }
  }, []);

  useEffect(() => {
    if (theme.value) {
      localStorage.setItem("theme", theme.value);
      document.documentElement.setAttribute("data-theme", theme.value);
    }
  }, [theme.value]);

  const isDark = useMemo(() => theme.value === "night", [theme.value]);

  const toggleTheme = () => {
    theme.value = isDark ? "rustic" : "night";
  };

  return (
    <button class="btn btn-circle btn-ghost" onClick={toggleTheme}>
      {isDark
        ? (
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )
        : (
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
    </button>
  );
}
