"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/registry/lilt/ui/icons";
import { useTheme } from "@/registry/lilt/ui/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
}
