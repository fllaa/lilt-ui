"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { DUR, EASE } from "./variants";

interface DoodleUnderlineProps {
  children: ReactNode;
  trigger?: "inView" | "load";
  delay?: number;
}

/**
 * The Lilt doodle underline that wipes itself on. The resting mark is pixel-
 * identical to the CSS `.doodle-underline` utility (rounded mint bar, tilted
 * -1deg); it just grows in from the left. Reduced motion renders the static
 * CSS utility instead.
 */
export const DoodleUnderline = ({
  children,
  trigger = "inView",
  delay = 0,
}: DoodleUnderlineProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className="doodle-underline">{children}</span>;
  }

  const grow = { rotate: -1, scaleX: 1 };

  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.08em] -left-[0.03em] -right-[0.03em] h-[0.12em] origin-left rounded-full bg-[var(--lilt-primary)]"
        initial={{ rotate: -1, scaleX: 0 }}
        transition={{ delay, duration: DUR.expressive * 1.6, ease: EASE }}
        {...(trigger === "load"
          ? { animate: grow }
          : { viewport: { once: true }, whileInView: grow })}
      />
    </span>
  );
};

interface ScribbleArrowDrawProps {
  className?: string;
  trigger?: "inView" | "load";
  delay?: number;
}

/**
 * The hero scribble arrow, drawing itself on. Reuses the exact path data from
 * ScribbleArrow (registry/lilt/ui/icons) so the registry stays motion-free.
 * Reduced motion renders the arrow already drawn.
 */
export const ScribbleArrowDraw = ({
  className,
  trigger = "inView",
  delay = 0,
}: ScribbleArrowDrawProps) => {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { pathLength: 0 };
  const drawn = { pathLength: 1 };
  const strokeDuration = DUR.expressive * 2.2;

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 104 60"
    >
      <motion.path
        d="M5 14c22-8 45-5 58 5 12 9 10 22-1 28-8 4-20 1-17-8 4-11 27-13 48-6"
        initial={initial}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        transition={{ delay, duration: strokeDuration, ease: EASE }}
        {...(trigger === "load"
          ? { animate: drawn }
          : { viewport: { once: true }, whileInView: drawn })}
      />
      <motion.path
        d="m86 26 9 7-10 5"
        initial={initial}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transition={{
          delay: delay + strokeDuration * 0.9,
          duration: DUR.base,
          ease: EASE,
        }}
        {...(trigger === "load"
          ? { animate: drawn }
          : { viewport: { once: true }, whileInView: drawn })}
      />
    </svg>
  );
};
