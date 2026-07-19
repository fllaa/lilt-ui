import type { ReactNode } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Badge } from "@/registry/lilt/ui/badge";

import { Reveal } from "./motion/reveal";

/**
 * Full-bleed landing section: a top border for the divider rhythm, an inner
 * max-w-6xl container, and consistent vertical spacing. Pass a background via
 * className (e.g. surface) for a tinted band.
 */
export const Section = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    className={cn("border-t border-[var(--lilt-border)]", className)}
    id={id}
  >
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      {children}
    </div>
  </section>
);

export const SectionHeading = ({
  className,
  description,
  eyebrow,
  title,
}: {
  className?: string;
  description?: ReactNode;
  eyebrow: string;
  title: ReactNode;
}) => (
  <Reveal as="div" className={cn("grid gap-4", className)}>
    <Badge className="w-fit" variant="outline">
      {eyebrow}
    </Badge>
    <h2 className="max-w-[24ch] font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--lilt-text-muted)]">
        {description}
      </p>
    ) : null}
  </Reveal>
);
