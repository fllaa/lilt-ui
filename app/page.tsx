import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/registry/lilt/ui/badge";
import { Button } from "@/registry/lilt/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/lilt/ui/card";
import { ScribbleArrow } from "@/registry/lilt/ui/icons";

const traits = [
  {
    description:
      "Hierarchy comes from 1px borders and warm surface shifts. Nothing floats, nothing looms.",
    title: "Borders, not shadows",
  },
  {
    description:
      "Hover movement is capped at 2px, and reduced-motion mode removes it entirely.",
    title: "One gentle lift",
  },
  {
    description:
      "The pale mint accent is a swappable default. Rebrand by replacing four semantic tokens.",
    title: "Mint is a guest",
  },
  {
    description:
      "Long-form text stays near-black on near-white. Pastels carry status and personality only.",
    title: "AAA-minded text",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="grid gap-8 py-24 sm:py-32">
          <Badge className="w-fit">A component registry, the Lilt way</Badge>
          <h1 className="max-w-[16ch] font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
            Precision with a{" "}
            <span className="doodle-underline">playful rhythm</span>
          </h1>
          <p className="max-w-[52ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]">
            Copy-paste React components built on Base UI and Tailwind v4,
            wearing warm paper surfaces, hand-drawn icons, and a swappable mint
            accent. Yours to own, edit, and rebrand.
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
        </section>

        <section className="grid gap-6 pb-24 sm:grid-cols-2 sm:pb-32">
          {traits.map((trait) => (
            <Card key={trait.title}>
              <CardHeader className="mb-0">
                <CardTitle>{trait.title}</CardTitle>
                <CardDescription>{trait.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </main>
      <footer className="border-t border-[var(--lilt-border)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--lilt-text-muted)]">
          <p>Lilt — a precise, warm, playful design language.</p>
          <Link
            className="rounded-full outline-none hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
            href="/docs"
          >
            Documentation
          </Link>
        </div>
      </footer>
    </>
  );
}
