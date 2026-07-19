import Link from "next/link";

import { Badge } from "@/registry/lilt/ui/badge";
import { Button } from "@/registry/lilt/ui/button";
import { ScribbleArrow } from "@/registry/lilt/ui/icons";

const stats = [
  { suffix: "components", value: "63" },
  { suffix: "component packs", value: "6" },
  { suffix: "foundation", value: "Base UI" },
  { suffix: "out of the box", value: "Light + dark" },
  { suffix: "licensed", value: "MIT" },
];

export const Hero = () => (
  <section className="mx-auto w-full max-w-6xl px-6">
    <div className="grid gap-8 py-24 sm:py-32">
      <Badge className="w-fit">A component registry, the Lilt way</Badge>
      <h1 className="max-w-[16ch] font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
        Precision with a{" "}
        <span className="doodle-underline">playful rhythm</span>
      </h1>
      <p className="max-w-[56ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]">
        LiltUI is a shadcn-compatible registry of 63 copy-paste React
        components, built on Base UI and Tailwind v4 and dressed in warm paper
        surfaces, hand-drawn icons, and a swappable mint accent. Yours to own,
        edit, and rebrand.
      </p>
      <div className="flex flex-wrap items-end gap-6">
        <div className="flex flex-wrap items-center gap-3">
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
        <div className="flex items-center gap-3">
          <ScribbleArrow className="w-16 -scale-y-100 text-[var(--lilt-primary-text)]" />
          <code className="rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] px-5 py-3 text-sm">
            npx shadcn add @lilt/button
          </code>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--lilt-border)] pt-8 text-sm">
        {stats.map((stat) => (
          <li className="flex items-baseline gap-1.5" key={stat.suffix}>
            <span className="font-display font-semibold text-[var(--lilt-text)]">
              {stat.value}
            </span>
            <span className="text-[var(--lilt-text-muted)]">{stat.suffix}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
