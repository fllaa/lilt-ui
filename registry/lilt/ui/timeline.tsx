import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Timeline = ({ className, ...props }: ComponentProps<"ol">) => (
  <ol className={cn("flex flex-col", className)} {...props} />
);

export const TimelineItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("relative flex gap-4 pb-8 last:pb-0", className)}
    {...props}
  />
);

const timelineDotVariants = {
  danger: "border-transparent bg-[var(--lilt-danger)]",
  default: "border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)]",
  mint: "border-transparent bg-[var(--lilt-primary)]",
};

export type TimelineDotVariant = keyof typeof timelineDotVariants;

export const TimelineDot = ({
  className,
  variant = "default",
  ...props
}: { variant?: TimelineDotVariant } & ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn(
      "relative z-10 mt-1.5 size-3 shrink-0 rounded-full border",
      timelineDotVariants[variant],
      className
    )}
    {...props}
  />
);

export const TimelineConnector = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn(
      "absolute left-[5px] top-5 h-[calc(100%-1rem)] w-px bg-[var(--lilt-border)]",
      className
    )}
    {...props}
  />
);

export const TimelineContent = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}
    {...props}
  />
);

export const TimelineTitle = ({
  className,
  ...props
}: ComponentProps<"h3">) => (
  // oxlint-disable-next-line jsx-a11y/heading-has-content -- passthrough primitive, callers supply children via props spread
  <h3 className={cn("text-sm font-semibold", className)} {...props} />
);

export const TimelineTime = ({
  className,
  ...props
}: ComponentProps<"time">) => (
  <time
    className={cn("text-xs text-[var(--lilt-text-subtle)]", className)}
    {...props}
  />
);
