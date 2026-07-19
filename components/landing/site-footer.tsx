import Link from "next/link";

import { Reveal } from "@/components/landing/motion/reveal";
import { LiltMark } from "@/components/lilt-logo";
import { GithubIcon } from "@/registry/lilt/ui/icons";

const columns: {
  heading: string;
  links: { external?: boolean; href: string; label: string }[];
}[] = [
  {
    heading: "Docs",
    links: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/theming", label: "Theming" },
      { href: "/docs/components/button", label: "Components" },
    ],
  },
  {
    heading: "Project",
    links: [
      {
        external: true,
        href: "https://github.com/fllaa/lilt-ui.git",
        label: "GitHub",
      },
      { href: "/llms.txt", label: "llms.txt" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
];

const linkClass =
  "rounded-full text-[var(--lilt-text-muted)] outline-none transition-colors hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]";

export const SiteFooter = () => (
  <footer className="border-t border-[var(--lilt-border)]">
    <Reveal
      as="div"
      className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-[1.6fr_1fr_1fr]"
      y={12}
    >
      <div className="grid content-start gap-3">
        <Link
          className="inline-flex w-fit items-center gap-2 rounded-full font-display text-lg font-semibold tracking-[-0.02em] outline-none focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="/"
        >
          <LiltMark className="text-[var(--lilt-primary-text)]" size={22} />
          LiltUI
        </Link>
        <p className="max-w-[38ch] text-sm leading-relaxed text-[var(--lilt-text-muted)]">
          A precise, warm, playful design language — copy-paste React components
          built on Base UI and Tailwind v4.
        </p>
      </div>
      {columns.map((column) => (
        <nav
          aria-label={column.heading}
          className="grid content-start gap-3 text-sm"
          key={column.heading}
        >
          <span className="font-display font-semibold text-[var(--lilt-text)]">
            {column.heading}
          </span>
          {column.links.map((link) =>
            link.external ? (
              <a
                className={linkClass}
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ) : (
              <Link className={linkClass} href={link.href} key={link.label}>
                {link.label}
              </Link>
            )
          )}
        </nav>
      ))}
    </Reveal>
    <div className="border-t border-[var(--lilt-border)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6 text-sm text-[var(--lilt-text-muted)]">
        <p>Lilt — a precise, warm, playful design language.</p>
        <a
          aria-label="View source on GitHub"
          className="inline-flex items-center gap-2 rounded-full outline-none transition-colors hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="https://github.com/fllaa/lilt-ui.git"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon size={18} />
          MIT licensed
        </a>
      </div>
    </div>
  </footer>
);
