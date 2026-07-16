"use client";

import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Toggle } from "@/registry/lilt/ui/toggle";

export const ToggleGroup = ({
  className,
  ...props
}: ComponentProps<typeof BaseToggleGroup>) => (
  <BaseToggleGroup
    className={cn(
      "flex w-fit gap-1 rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1 data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

export const ToggleGroupItem = ({
  className,
  ...props
}: ComponentProps<typeof Toggle> & { value: string }) => (
  <Toggle
    className={cn("rounded-full border-transparent", className)}
    {...props}
  />
);
