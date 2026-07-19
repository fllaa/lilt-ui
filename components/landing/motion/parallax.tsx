"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface ParallaxItemProps {
  children: ReactNode;
  className?: string;
  /**
   * Vertical drift in px across the element's pass through the viewport.
   * Positive drifts up as it scrolls in; alternate signs across items for a
   * gentle multi-speed feel. Keep small so nothing reads as "floating".
   */
  offset?: number;
}

/**
 * Applies a subtle scroll-linked vertical drift to its child. Transform-only
 * (no layout), so it is safe inside CSS multi-column masonry. Static under
 * reduced motion.
 */
export const ParallaxItem = ({
  children,
  className,
  offset = 10,
}: ParallaxItemProps) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      className={className}
      ref={ref}
      style={reduce ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
};
