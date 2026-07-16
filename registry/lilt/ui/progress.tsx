"use client";

import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Progress = ({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Root>) => (
  <BaseProgress.Root className={cn("grid gap-2", className)} {...props} />
);

export const ProgressLabel = ({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Label>) => (
  <BaseProgress.Label
    className={cn("text-sm font-semibold text-[var(--lilt-text)]", className)}
    {...props}
  />
);

export const ProgressValue = ({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Value>) => (
  <BaseProgress.Value
    className={cn(
      "text-sm text-[var(--lilt-text-muted)] tabular-nums",
      className
    )}
    {...props}
  />
);

export const ProgressTrack = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Track> & { children?: ReactNode }) => (
  <BaseProgress.Track
    className={cn(
      "h-2.5 overflow-hidden rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface-2)]",
      className
    )}
    {...props}
  >
    {children}
    <BaseProgress.Indicator className="h-full rounded-full bg-[var(--lilt-button)] transition-[width] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[indeterminate]:w-1/3 data-[indeterminate]:animate-pulse" />
  </BaseProgress.Track>
);
