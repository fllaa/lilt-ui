"use client";

import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Fieldset = ({
  className,
  ...props
}: ComponentProps<typeof BaseFieldset.Root>) => (
  <BaseFieldset.Root
    // Native <fieldset> ships browser margin/border/padding — reset them here.
    className={cn("m-0 grid min-w-0 gap-4 border-0 p-0", className)}
    {...props}
  />
);

export const FieldsetLegend = ({
  className,
  ...props
}: ComponentProps<typeof BaseFieldset.Legend>) => (
  // Renders a <div>, not a native <legend> — Base UI wires the association.
  <BaseFieldset.Legend
    className={cn(
      "w-full border-b border-[var(--lilt-border)] pb-2 font-display text-base font-semibold tracking-[-0.02em] text-[var(--lilt-text)]",
      className
    )}
    {...props}
  />
);
