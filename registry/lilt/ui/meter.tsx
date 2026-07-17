"use client";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Meter = ({
  className,
  ...props
}: ComponentProps<typeof BaseMeter.Root>) => (
  <BaseMeter.Root className={cn("grid gap-2", className)} {...props} />
);

export const MeterLabel = ({
  className,
  ...props
}: ComponentProps<typeof BaseMeter.Label>) => (
  <BaseMeter.Label
    className={cn("text-sm font-semibold text-[var(--lilt-text)]", className)}
    {...props}
  />
);

export const MeterValue = ({
  className,
  ...props
}: ComponentProps<typeof BaseMeter.Value>) => (
  <BaseMeter.Value
    className={cn(
      "text-sm text-[var(--lilt-text-muted)] tabular-nums",
      className
    )}
    {...props}
  />
);

export const MeterTrack = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseMeter.Track> & { children?: ReactNode }) => (
  <BaseMeter.Track
    className={cn(
      "h-2.5 overflow-hidden rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface-2)]",
      className
    )}
    {...props}
  >
    {children}
    <BaseMeter.Indicator className="h-full rounded-full bg-[var(--lilt-primary)] transition-[width] duration-[var(--duration-base)] ease-[var(--ease-out)]" />
  </BaseMeter.Track>
);
