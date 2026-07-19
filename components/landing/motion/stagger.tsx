"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";

import { riseItem } from "./variants";

type StaggerTag =
  | "div"
  | "section"
  | "ul"
  | "ol"
  | "li"
  | "span"
  | "p"
  | "code"
  | "h1"
  | "h2";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: StaggerTag;
  /** Delay between each child, in seconds. */
  gap?: number;
  /** Delay before the first child starts, in seconds. */
  delayChildren?: number;
  amount?: number;
  once?: boolean;
  trigger?: "inView" | "load";
}

/**
 * Orchestrates a staggered reveal of its `StaggerItem` children. Children must
 * be `StaggerItem`s (motion elements that consume the shared variant label);
 * their own children stay server-rendered.
 */
export const Stagger = ({
  children,
  className,
  as = "div",
  gap = 0.06,
  delayChildren = 0,
  amount = 0.2,
  once = true,
  trigger = "inView",
}: StaggerProps) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      variants={{
        show: {
          transition: {
            delayChildren: reduce ? 0 : delayChildren,
            staggerChildren: reduce ? 0 : gap,
          },
        },
      }}
      {...(trigger === "load"
        ? { animate: "show" }
        : { viewport: { amount, once }, whileInView: "show" })}
    >
      {children}
    </Tag>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: StaggerTag;
  /** Override the default fade+rise variant (e.g. popItem for swatches). */
  variants?: Variants;
}

/**
 * A single item inside a `Stagger`. Inherits the parent's variant label — do
 * NOT give it its own `animate`/`whileInView` or it detaches from the timeline.
 */
export const StaggerItem = ({
  children,
  className,
  as = "div",
  variants = riseItem,
}: StaggerItemProps) => {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
};
