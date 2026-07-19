import Link from "next/link";
import type { ReactNode } from "react";

import AvatarDemo from "@/registry/lilt/demos/avatar";
import BadgeDemo from "@/registry/lilt/demos/badge";
import ButtonDemo from "@/registry/lilt/demos/button";
import CalendarDemo from "@/registry/lilt/demos/calendar";
import ChartDemo from "@/registry/lilt/demos/chart";
import CommandDemo from "@/registry/lilt/demos/command";
import MeterDemo from "@/registry/lilt/demos/meter";
import RatingDemo from "@/registry/lilt/demos/rating";
import SliderDemo from "@/registry/lilt/demos/slider";
import SwitchDemo from "@/registry/lilt/demos/switch";
import TimelineDemo from "@/registry/lilt/demos/timeline";
import { cn } from "@/registry/lilt/lib/utils";
import { ArrowIcon } from "@/registry/lilt/ui/icons";

import { Section, SectionHeading } from "./section";

const ShowcaseFrame = ({
  children,
  className,
  href,
  name,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  name: string;
}) => (
  <figure
    className={cn(
      "mb-4 flex break-inside-avoid flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-canvas)]",
      className
    )}
  >
    <div className="flex min-h-44 flex-1 items-center justify-center overflow-x-auto p-6">
      {children}
    </div>
    <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--lilt-border)] px-4 py-2.5 text-xs">
      <span className="font-display font-semibold tracking-[-0.01em]">
        {name}
      </span>
      <Link
        className="rounded-full text-[var(--lilt-text-subtle)] outline-none transition-colors hover:text-[var(--lilt-primary-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
        href={href}
      >
        Docs →
      </Link>
    </figcaption>
  </figure>
);

export const Showcase = () => (
  <Section className="bg-[var(--lilt-surface)]" id="showcase">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        description="Every tile below is the real component, rendered right here — not a screenshot. Click, drag, toggle, and press ⌘K. What you see is what gets copied into your project."
        eyebrow="Live, not screenshots"
        title="Sixty-three components, one gentle rhythm"
      />
      <Link
        className="group inline-flex shrink-0 items-center gap-2 rounded-full font-semibold text-[var(--lilt-text)] outline-none transition-colors hover:text-[var(--lilt-primary-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
        href="/docs/components/button"
      >
        Browse all 63
        <ArrowIcon
          className="transition-transform group-hover:translate-x-0.5"
          size={19}
        />
      </Link>
    </div>

    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      <ShowcaseFrame href="/docs/components/chart" name="Chart">
        <ChartDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/button" name="Button">
        <ButtonDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/calendar" name="Calendar">
        <CalendarDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/badge" name="Badge">
        <BadgeDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/command" name="Command">
        <CommandDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/slider" name="Slider">
        <SliderDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/rating" name="Rating">
        <RatingDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/meter" name="Meter">
        <MeterDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/avatar" name="Avatar">
        <AvatarDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/switch" name="Switch">
        <SwitchDemo />
      </ShowcaseFrame>
      <ShowcaseFrame href="/docs/components/timeline" name="Timeline">
        <TimelineDemo />
      </ShowcaseFrame>
    </div>
  </Section>
);
