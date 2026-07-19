"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/registry/lilt/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Maximum pull toward the cursor, in px. */
  strength?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Wraps an interactive element so it leans toward the cursor within a small
 * radius, then springs back on leave. Mouse only — disabled under reduced
 * motion and for touch/pen so it never fights a tap.
 */
export const MagneticButton = ({
  children,
  className,
  strength = 9,
}: MagneticButtonProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 16, mass: 0.35, stiffness: 220 });
  const springY = useSpring(y, { damping: 16, mass: 0.35, stiffness: 220 });

  if (reduce) {
    return <span className={cn("inline-flex", className)}>{children}</span>;
  }

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    const el = ref.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(clamp(relX * 0.32, -strength, strength));
    y.set(clamp(relY * 0.32, -strength, strength));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={cn("inline-flex", className)}
      onPointerLeave={reset}
      onPointerMove={handleMove}
      ref={ref}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.span>
  );
};
