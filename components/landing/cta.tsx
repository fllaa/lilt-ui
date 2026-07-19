import Link from "next/link";

import { Button } from "@/registry/lilt/ui/button";
import { SparkIcon } from "@/registry/lilt/ui/icons";

import { Section } from "./section";

export const CallToAction = () => (
  <Section className="bg-[var(--lilt-surface)]" id="start">
    <div className="grid justify-items-center gap-7 text-center">
      <SparkIcon className="text-[var(--lilt-primary-text)]" size={40} />
      <h2 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
        Start building with <span className="doodle-underline">LiltUI</span>
      </h2>
      <p className="max-w-[50ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]">
        Precision with a playful rhythm. Copy in the theme, add your first
        component, and make it yours in minutes.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button icon="arrow" render={<Link href="/docs" />} size="lg">
          Read the docs
        </Button>
        <Button
          render={<Link href="/docs/components/button" />}
          size="lg"
          variant="secondary"
        >
          Browse components
        </Button>
      </div>
      <code className="rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-canvas)] px-5 py-3 text-sm">
        npx shadcn add @lilt/theme
      </code>
    </div>
  </Section>
);
