import Link from "next/link";
import { Fragment } from "react";

import { CountUp } from "@/components/landing/motion/count-up";
import {
  DoodleUnderline,
  ScribbleArrowDraw,
} from "@/components/landing/motion/draw-on";
import { MagneticButton } from "@/components/landing/motion/magnetic";
import { Reveal } from "@/components/landing/motion/reveal";
import { Stagger, StaggerItem } from "@/components/landing/motion/stagger";
import { Badge } from "@/registry/lilt/ui/badge";
import { Button } from "@/registry/lilt/ui/button";

const stats = [
  { suffix: "components", value: "63" },
  { suffix: "component packs", value: "6" },
  { suffix: "foundation", value: "Base UI" },
  { suffix: "out of the box", value: "Light + dark" },
  { suffix: "licensed", value: "MIT" },
];

const leadingWords = ["Precision", "with", "a"];

export const Hero = () => (
  <section className="mx-auto w-full max-w-6xl px-6">
    <div className="grid gap-8 py-24 sm:py-32">
      <Reveal as="div" className="w-fit" trigger="load">
        <Badge className="w-fit">A component registry, the Lilt way</Badge>
      </Reveal>

      <Stagger
        as="h1"
        className="max-w-[16ch] font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl"
        delayChildren={0.12}
        gap={0.09}
        trigger="load"
      >
        {leadingWords.map((word) => (
          <Fragment key={word}>
            <StaggerItem as="span" className="inline-block">
              {word}
            </StaggerItem>{" "}
          </Fragment>
        ))}
        <StaggerItem as="span" className="inline-block">
          <DoodleUnderline delay={0.62} trigger="load">
            playful rhythm
          </DoodleUnderline>
        </StaggerItem>
      </Stagger>

      <Reveal
        as="p"
        className="max-w-[56ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]"
        delay={0.5}
        trigger="load"
      >
        LiltUI is a shadcn-compatible registry of 63 copy-paste React
        components, built on Base UI and Tailwind v4 and dressed in warm paper
        surfaces, hand-drawn icons, and a swappable pine-and-mint accent. Yours
        to own, edit, and rebrand.
      </Reveal>

      <Reveal
        as="div"
        className="flex flex-wrap items-end gap-6"
        delay={0.62}
        trigger="load"
      >
        <div className="flex flex-wrap items-center gap-3">
          <MagneticButton>
            <Button icon="arrow" render={<Link href="/docs" />} size="lg">
              Read the docs
            </Button>
          </MagneticButton>
          <Button
            render={<Link href="/docs/components/button" />}
            size="lg"
            variant="secondary"
          >
            Browse components
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <ScribbleArrowDraw
            className="w-16 -scale-y-100 text-[var(--lilt-primary-text)]"
            delay={0.9}
            trigger="load"
          />
          <code className="rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] px-5 py-3 text-sm">
            npx shadcn add @lilt/button
          </code>
        </div>
      </Reveal>

      <Reveal
        as="ul"
        className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--lilt-border)] pt-8 text-sm"
        delay={0.75}
        trigger="load"
      >
        {stats.map((stat) => {
          const numeric = Number(stat.value);
          const isNumber = stat.value.trim() !== "" && Number.isFinite(numeric);
          return (
            <li className="flex items-baseline gap-1.5" key={stat.suffix}>
              <span className="font-display font-semibold text-[var(--lilt-text)]">
                {isNumber ? <CountUp value={numeric} /> : stat.value}
              </span>
              <span className="text-[var(--lilt-text-muted)]">
                {stat.suffix}
              </span>
            </li>
          );
        })}
      </Reveal>
    </div>
  </section>
);
