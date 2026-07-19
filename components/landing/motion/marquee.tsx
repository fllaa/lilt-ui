"use client";

import { useReducedMotion } from "motion/react";

import { cn } from "@/registry/lilt/lib/utils";

const Chip = ({ label }: { label: string }) => (
  <span className="inline-flex shrink-0 items-center rounded-full border border-[var(--lilt-border-strong)] px-4 py-1.5 text-sm text-[var(--lilt-text-muted)]">
    {label}
  </span>
);

interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop. */
  speed?: number;
  className?: string;
}

/**
 * A single, slow, pause-on-hover marquee band. Under reduced motion it becomes
 * a static wrapping row of the same chips. CSS-animated (transform only) with a
 * duplicated track for a seamless loop.
 */
export const Marquee = ({ items, speed = 46, className }: MarqueeProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        {items.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
    );
  }

  const track = [...items, ...items];

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className="flex w-max gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animation: `lilt-marquee ${speed}s linear infinite` }}
      >
        {track.map((item, index) => (
          <Chip key={`${item}-${index}`} label={item} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--lilt-canvas)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--lilt-canvas)] to-transparent" />
    </div>
  );
};
