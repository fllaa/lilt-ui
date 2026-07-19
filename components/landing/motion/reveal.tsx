"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { DUR, EASE } from "./variants";

type RevealTag = "div" | "section" | "span" | "ul" | "ol" | "li" | "p";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  /** Rise distance in px before settling. */
  y?: number;
  delay?: number;
  duration?: number;
  /** Fraction of the element visible before it fires (inView only). */
  amount?: number;
  once?: boolean;
  /** "inView" fires on scroll into view; "load" fires immediately on mount. */
  trigger?: "inView" | "load";
}

/**
 * Fade + rise wrapper. Accepts server-rendered children (they stay on the
 * server). Under reduced motion it renders the final resting state with no
 * animation and no scroll gating.
 */
export const Reveal = ({
  children,
  className,
  as = "div",
  y = 16,
  delay = 0,
  duration = DUR.expressive,
  amount = 0.3,
  once = true,
  trigger = "inView",
}: RevealProps) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  const target = { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      transition={{ delay, duration, ease: EASE }}
      {...(trigger === "load"
        ? { animate: target }
        : { viewport: { amount, once }, whileInView: target })}
    >
      {children}
    </Tag>
  );
};
