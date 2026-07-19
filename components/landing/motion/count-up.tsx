"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

import { EASE } from "./variants";

// useLayoutEffect on the server warns; fall back to useEffect there.
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

interface CountUpProps {
  value: number;
  className?: string;
  /** Animation length in seconds. */
  duration?: number;
}

/**
 * Counts from 0 up to `value` when scrolled into view. SSR renders the final
 * value (correct with no JS, zero layout shift); the client blanks it to 0
 * before paint only when it will animate. Honors reduced motion.
 */
export const CountUp = ({ value, className, duration = 1 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    node.textContent = "0";
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = String(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span className={className} ref={ref} suppressHydrationWarning>
      {value}
    </span>
  );
};
