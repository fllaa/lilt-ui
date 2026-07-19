import Link from "next/link";
import type { ReactNode } from "react";

import { ParallaxItem } from "@/components/landing/motion/parallax";
import { Reveal } from "@/components/landing/motion/reveal";
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
      "flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-canvas)]",
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

const frames: { demo: ReactNode; href: string; name: string }[] = [
  { demo: <ChartDemo />, href: "/docs/components/chart", name: "Chart" },
  { demo: <ButtonDemo />, href: "/docs/components/button", name: "Button" },
  {
    demo: <CalendarDemo />,
    href: "/docs/components/calendar",
    name: "Calendar",
  },
  { demo: <BadgeDemo />, href: "/docs/components/badge", name: "Badge" },
  { demo: <CommandDemo />, href: "/docs/components/command", name: "Command" },
  { demo: <SliderDemo />, href: "/docs/components/slider", name: "Slider" },
  { demo: <RatingDemo />, href: "/docs/components/rating", name: "Rating" },
  { demo: <MeterDemo />, href: "/docs/components/meter", name: "Meter" },
  { demo: <AvatarDemo />, href: "/docs/components/avatar", name: "Avatar" },
  { demo: <SwitchDemo />, href: "/docs/components/switch", name: "Switch" },
  {
    demo: <TimelineDemo />,
    href: "/docs/components/timeline",
    name: "Timeline",
  },
];

// Gentle, alternating scroll drift so the columns feel like they breathe at
// slightly different speeds. Kept small so nothing reads as "floating".
const drift = [8, -5, 3];

export const Showcase = () => (
  <Section className="bg-[var(--lilt-surface)]" id="showcase">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        description="Every tile below is the real component, rendered right here — not a screenshot. Click, drag, toggle, and press ⌘K. What you see is what gets copied into your project."
        eyebrow="Live, not screenshots"
        title="Sixty-three components, one gentle rhythm"
      />
      <Reveal as="div" className="shrink-0" delay={0.1}>
        <Link
          className="group inline-flex items-center gap-2 rounded-full font-semibold text-[var(--lilt-text)] outline-none transition-colors hover:text-[var(--lilt-primary-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
          href="/docs/components/button"
        >
          Browse all 63
          <ArrowIcon
            className="transition-transform group-hover:translate-x-0.5"
            size={19}
          />
        </Link>
      </Reveal>
    </div>

    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {frames.map((frame, index) => (
        <ParallaxItem
          className="mb-4 break-inside-avoid"
          key={frame.name}
          offset={drift[index % drift.length]}
        >
          <Reveal amount={0.25} delay={(index % 3) * 0.05}>
            <ShowcaseFrame href={frame.href} name={frame.name}>
              {frame.demo}
            </ShowcaseFrame>
          </Reveal>
        </ParallaxItem>
      ))}
    </div>
  </Section>
);
