import type { HTMLAttributes } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Adds the 2px hover lift and border-strengthen for clickable cards. */
  interactive?: boolean;
}

export const Card = ({
  className,
  interactive = false,
  ...props
}: CardProps) => (
  <article
    className={cn(
      "rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-5",
      interactive &&
        "transition-[transform,border-color] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--lilt-border-strong)]",
      className
    )}
    {...props}
  />
);

export const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4 grid gap-1", className)} {...props} />
);

export const CardTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  // oxlint-disable-next-line jsx-a11y/heading-has-content -- passthrough primitive, callers supply children via props spread
  <h3
    className={cn(
      "font-display text-lg font-semibold tracking-[-0.02em]",
      className
    )}
    {...props}
  />
);

export const CardDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "text-sm leading-relaxed text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-base", className)} {...props} />
);

export const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-4 flex items-center gap-3", className)} {...props} />
);
