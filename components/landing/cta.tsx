import Link from "next/link";

import { DoodleUnderline } from "@/components/landing/motion/draw-on";
import { MagneticButton } from "@/components/landing/motion/magnetic";
import { Stagger, StaggerItem } from "@/components/landing/motion/stagger";
import { popItem } from "@/components/landing/motion/variants";
import { Button } from "@/registry/lilt/ui/button";
import { SparkIcon } from "@/registry/lilt/ui/icons";

import { Section } from "./section";

export const CallToAction = () => (
  <Section className="bg-[var(--lilt-surface)]" id="start">
    <Stagger
      as="div"
      className="grid justify-items-center gap-7 text-center"
      gap={0.08}
    >
      <StaggerItem as="div" variants={popItem}>
        <SparkIcon className="text-[var(--lilt-primary-text)]" size={40} />
      </StaggerItem>
      <StaggerItem
        as="h2"
        className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl"
      >
        Start building with <DoodleUnderline>LiltUI</DoodleUnderline>
      </StaggerItem>
      <StaggerItem
        as="p"
        className="max-w-[50ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]"
      >
        Precision with a playful rhythm. Copy in the theme, add your first
        component, and make it yours in minutes.
      </StaggerItem>
      <StaggerItem
        as="div"
        className="flex flex-wrap items-center justify-center gap-3"
      >
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
      </StaggerItem>
      <StaggerItem
        as="code"
        className="rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-canvas)] px-5 py-3 text-sm"
      >
        npx shadcn add @lilt/theme
      </StaggerItem>
    </Stagger>
  </Section>
);
