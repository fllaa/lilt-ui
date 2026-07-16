import type { HTMLAttributes } from "react";
import { cn } from "@/registry/lilt/lib/utils";

const badgeVariants = {
  default:
    "border-transparent bg-[var(--lilt-primary-soft)] text-[var(--lilt-primary-text)]",
  warning: "border-transparent bg-[var(--lilt-warning)] text-[var(--lilt-text)]",
  highlight:
    "border-transparent bg-[var(--lilt-highlight)] text-[var(--lilt-text)]",
  danger:
    "border-transparent bg-[var(--lilt-danger-soft)] text-[var(--lilt-danger-text)]",
  outline:
    "border-[var(--lilt-border-strong)] bg-transparent text-[var(--lilt-text-muted)]",
};

export type BadgeVariant = keyof typeof badgeVariants;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
