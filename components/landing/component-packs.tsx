import Link from "next/link";

import { Marquee } from "@/components/landing/motion/marquee";
import { Reveal } from "@/components/landing/motion/reveal";
import { Stagger, StaggerItem } from "@/components/landing/motion/stagger";
import { docEntries, docsByPack } from "@/lib/docs";

import { Section, SectionHeading } from "./section";

const packBlurb: Record<string, string> = {
  Core: "The everyday handful you reach for first.",
  Data: "Tables, charts, and calendars that carry real data.",
  Display: "Badges, avatars, meters — status and personality.",
  Form: "Inputs, controls, and validation, accessible by default.",
  Overlay: "Menus, dialogs, toasts, and the ⌘K palette.",
  Structure: "Layout, navigation, and page scaffolding.",
};

export const ComponentPacks = () => (
  <Section id="components">
    <SectionHeading
      description={`${docEntries.length} components, sorted into six packs so you can find the right one fast. Add any of them with a single shadcn command.`}
      eyebrow="The full kit"
      title="Every component, grouped by the job it does"
    />
    <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {docsByPack.map((group) => (
        <Reveal as="div" className="grid gap-4" key={group.pack}>
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">
              {group.pack}
            </h3>
            <span className="text-sm text-[var(--lilt-text-subtle)]">
              {group.entries.length} components
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--lilt-text-muted)]">
            {packBlurb[group.pack]}
          </p>
          <Stagger
            amount={0.3}
            as="ul"
            className="flex flex-wrap gap-2"
            gap={0.03}
          >
            {group.entries.map((entry) => (
              <StaggerItem as="li" key={entry.name}>
                <Link
                  className="inline-flex items-center rounded-full border border-[var(--lilt-border-strong)] px-3 py-1 text-sm text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] hover:border-[var(--lilt-primary)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
                  href={`/docs/components/${entry.name}`}
                >
                  {entry.title}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      ))}
    </div>

    <Reveal as="div" className="mt-14">
      <Marquee items={docEntries.map((entry) => entry.title)} />
    </Reveal>
  </Section>
);
