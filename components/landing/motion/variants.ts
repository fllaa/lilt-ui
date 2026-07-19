import type { Variants } from "motion/react";

/**
 * Motion token bridge. Mirrors the CSS motion tokens in
 * registry/lilt/theme/lilt.css so JS-driven motion stays visually consistent
 * with the CSS transitions the rest of the site (and the theming copy) rely on.
 */

/** Mirrors --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1). */
export const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

/** Mirrors --duration-{fast,base,expressive}, in seconds for Motion. */
export const DUR = { base: 0.22, expressive: 0.32, fast: 0.14 } as const;

/** Fade + rise. Default StaggerItem variant and the shape Reveal animates. */
export const riseItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    transition: { duration: DUR.expressive, ease: EASE },
    y: 0,
  },
};

/** Scale + fade, for the theming swatch cascade. */
export const popItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DUR.base, ease: EASE },
  },
};
