import type { IconProps } from "@/registry/lilt/ui/icons";

// Brand mark, site-only on purpose — it identifies Lilt itself and must not
// ship to consumers through the @lilt/icons registry item.
// Path data is shared with scripts/generate-brand.ts (favicons, lockups, OG).
export const LILT_WAVE_PATH =
  "M2.8 17.3c2.1-4.7 4.4-5.2 6.5-3 2 2.1 4.1 1.8 5.8-1.6 1.2-2.4 2.3-4.1 3.6-5.4";
export const LILT_SPARK_PATH =
  "M20.1 2.7c.2 1.8 1 2.6 2.8 2.9-1.8.3-2.6 1.1-2.9 2.8-.2-1.7-1-2.5-2.7-2.8 1.8-.3 2.6-1.1 2.8-2.9Z";

export const LiltMark = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path
      d={LILT_WAVE_PATH}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d={LILT_SPARK_PATH}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    />
  </svg>
);
