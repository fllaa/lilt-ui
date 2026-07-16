"use client";

import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@/registry/lilt/ui/icons";
import { useTheme } from "@/registry/lilt/ui/theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // oxlint-disable-next-line react/react-compiler -- intentional: this setState must run only after hydration (not as a lazy initializer) so the first client render matches the server-rendered markup; flipping to true post-mount is what lets us safely show the localStorage-derived theme afterward.
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label={
        mounted && theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="inline-flex aspect-square min-h-10 items-center justify-center rounded-full border border-[var(--lilt-border-strong)] text-[var(--lilt-text)] outline-none transition-colors duration-[var(--duration-fast)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
      onClick={toggleTheme}
      type="button"
    >
      {mounted && theme === "dark" ? (
        <SunIcon size={18} />
      ) : (
        <MoonIcon size={18} />
      )}
    </button>
  );
};
