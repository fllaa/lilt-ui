"use client";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Toggle = ({
  className,
  iconOnly = false,
  ...props
}: ComponentProps<typeof BaseToggle> & { iconOnly?: boolean }) => (
  <BaseToggle
    className={cn(
      "inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-control-sm)] border border-[var(--lilt-border)] bg-transparent px-3 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] select-none hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[pressed]:border-transparent data-[pressed]:bg-[var(--lilt-primary)] data-[pressed]:text-[var(--lilt-button-text)]",
      iconOnly && "aspect-square px-0",
      className
    )}
    {...props}
  />
);
