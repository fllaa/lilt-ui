import { CodeBlock } from "@/components/code-block";
import { Reveal } from "@/components/landing/motion/reveal";
import { Stagger, StaggerItem } from "@/components/landing/motion/stagger";
import { popItem } from "@/components/landing/motion/variants";
import { cn } from "@/registry/lilt/lib/utils";

import { Section, SectionHeading } from "./section";

const swatches: { className: string; name: string; token: string }[] = [
  {
    className: "bg-[var(--lilt-canvas)]",
    name: "Canvas",
    token: "--lilt-canvas",
  },
  {
    className: "bg-[var(--lilt-surface)]",
    name: "Surface",
    token: "--lilt-surface",
  },
  { className: "bg-[var(--lilt-text)]", name: "Text", token: "--lilt-text" },
  {
    className: "bg-[var(--lilt-primary)]",
    name: "Mint",
    token: "--lilt-primary",
  },
  {
    className: "bg-[var(--lilt-primary-soft)]",
    name: "Mint soft",
    token: "--lilt-primary-soft",
  },
  { className: "bg-[var(--lilt-focus)]", name: "Focus", token: "--lilt-focus" },
  {
    className: "bg-[var(--lilt-warning)]",
    name: "Warning",
    token: "--lilt-warning",
  },
  {
    className: "bg-[var(--lilt-highlight)]",
    name: "Highlight",
    token: "--lilt-highlight",
  },
  {
    className: "bg-[var(--lilt-danger)]",
    name: "Danger",
    token: "--lilt-danger",
  },
  {
    className: "bg-[var(--lilt-chart-1)]",
    name: "Chart 1",
    token: "--lilt-chart-1",
  },
  {
    className: "bg-[var(--lilt-chart-2)]",
    name: "Chart 2",
    token: "--lilt-chart-2",
  },
  {
    className: "bg-[var(--lilt-chart-3)]",
    name: "Chart 3",
    token: "--lilt-chart-3",
  },
  {
    className: "bg-[var(--lilt-chart-4)]",
    name: "Chart 4",
    token: "--lilt-chart-4",
  },
  {
    className: "bg-[var(--lilt-chart-5)]",
    name: "Chart 5",
    token: "--lilt-chart-5",
  },
];

const rebrandSnippet = `/* Rebrand: replace these four tokens, keep everything else. */
:root {
  --lilt-primary: #aeeacf;       /* swap the mint for your brand */
  --lilt-primary-soft: #e3f7ed;  /* soft fills & badges          */
  --lilt-primary-text: #164c35;  /* text on soft fills           */
  --lilt-focus: #167f55;         /* focus rings                  */
}`;

export const Theming = () => (
  <Section id="theming">
    <SectionHeading
      description="Components read semantic --lilt-* variables, never raw hex. Warm paper surfaces, AAA-minded text, and a pale-mint accent that stays a guest — swap four tokens and the whole registry follows you into a new brand."
      eyebrow="Theming"
      title="Mint is a guest, not a landlord"
    />

    <Stagger
      amount={0.2}
      as="div"
      className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7"
      gap={0.04}
    >
      {swatches.map((swatch) => (
        <StaggerItem
          as="div"
          className="grid gap-2"
          key={swatch.token}
          variants={popItem}
        >
          <span
            className={cn(
              "h-14 rounded-[var(--radius-control)] border border-[var(--lilt-border)]",
              swatch.className
            )}
          />
          <div className="grid gap-0.5">
            <span className="text-sm font-semibold text-[var(--lilt-text)]">
              {swatch.name}
            </span>
            <code className="text-xs text-[var(--lilt-text-subtle)]">
              {swatch.token}
            </code>
          </div>
        </StaggerItem>
      ))}
    </Stagger>

    <Reveal
      as="div"
      className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center"
    >
      <div className="grid gap-4">
        <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
          Rebrand in four tokens
        </h3>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Every accent in LiltUI traces back to the same four variables, in both
          light and dark. Override them once and buttons, badges, focus rings,
          links, and charts all shift together — no component edits, no theme
          fork to maintain.
        </p>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Radii, motion durations, and the shared ease-out live in tokens too,
          so the rhythm stays consistent wherever you take it.
        </p>
      </div>
      <CodeBlock code={rebrandSnippet} lang="css" />
    </Reveal>
  </Section>
);
