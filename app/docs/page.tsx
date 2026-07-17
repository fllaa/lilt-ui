import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/registry/lilt/ui/button";

export const metadata: Metadata = {
  title: "Introduction — LiltUI",
};

const rules = [
  "Layout is open; cards are functional boundaries, not decoration.",
  "Text carries AAA-minded contrast; pastels carry status and personality.",
  "Medium and large primary buttons are pills; compact controls use a 12px radius.",
  "Hover movement is limited to a 2px lift.",
  "Reduced-motion mode removes translation entirely.",
  "Humor is welcome in ordinary moments, absent from high-risk outcomes.",
];

export default function DocsPage() {
  return (
    <article className="grid max-w-3xl gap-8">
      <header className="grid gap-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-primary-text)]">
          Introduction
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.035em]">
          What is LiltUI?
        </h1>
        <p className="text-lg leading-relaxed text-[var(--lilt-text-muted)]">
          LiltUI is a shadcn-compatible component registry for the Lilt design
          language: precise structure, warm near-white and neutral-charcoal
          surfaces, a swappable pale-mint accent, hand-drawn icons, and
          restrained physical interaction.
        </p>
      </header>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          How it works
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Components are not installed from npm — their source is copied into
          your project with the shadcn CLI, so you own every line. Interactive
          widgets are built on{" "}
          <a
            className="font-semibold text-[var(--lilt-primary-text)] underline underline-offset-4"
            href="https://base-ui.com"
            rel="noreferrer"
            target="_blank"
          >
            Base UI
          </a>{" "}
          primitives for accessibility, and styled with Tailwind v4 reading
          Lilt&apos;s semantic <code>--lilt-*</code> CSS variables.
        </p>
      </section>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          Design rules
        </h2>
        <ul className="grid gap-2 leading-relaxed text-[var(--lilt-text-muted)]">
          {rules.map((rule) => (
            <li className="flex gap-3" key={rule}>
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--lilt-primary)]"
              />
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button icon="arrow" render={<Link href="/docs/installation" />}>
          Install LiltUI
        </Button>
        <Button render={<Link href="/docs/theming" />} variant="secondary">
          Explore the tokens
        </Button>
      </div>
    </article>
  );
}
