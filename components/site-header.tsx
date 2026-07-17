import Link from "next/link";

import { LiltMark } from "@/components/lilt-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/registry/lilt/ui/icons";

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-[var(--lilt-border)] bg-[color-mix(in_oklab,var(--lilt-canvas)_86%,transparent)] backdrop-blur-md">
    <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
      <Link
        className="inline-flex items-center gap-2 rounded-full font-display text-lg font-semibold tracking-[-0.02em] outline-none focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
        href="/"
      >
        <LiltMark className="text-[var(--lilt-primary-text)]" size={22} />
        Lilt UI
      </Link>
      <nav
        aria-label="Site"
        className="flex items-center gap-1 text-sm font-semibold"
      >
        <Link
          className="rounded-full px-4 py-2 text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="/docs"
        >
          Docs
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="/docs/components/button"
        >
          Components
        </Link>
        <a
          aria-label="View source on GitHub"
          className="inline-flex aspect-square min-h-10 items-center justify-center rounded-full border border-[var(--lilt-border-strong)] text-[var(--lilt-text)] outline-none transition-colors duration-[var(--duration-fast)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="https://github.com/fllaa/lilt-ui.git"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon size={18} />
        </a>
        <ThemeToggle />
      </nav>
    </div>
  </header>
);
