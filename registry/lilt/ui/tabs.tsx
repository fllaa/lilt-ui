"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Tabs = ({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Root>) => (
  <BaseTabs.Root className={cn("flex flex-col gap-4", className)} {...props} />
);

export const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.List>) => (
  <BaseTabs.List
    className={cn(
      "flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1",
      className
    )}
    {...props}
  />
);

export const TabsTab = ({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Tab>) => (
  <BaseTabs.Tab
    className={cn(
      "inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] data-[selected]:bg-[var(--lilt-button)] data-[selected]:text-[var(--lilt-button-text)] data-[selected]:hover:bg-[var(--lilt-button)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);

export const TabsPanel = ({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Panel>) => (
  <BaseTabs.Panel
    className={cn(
      "rounded-[var(--radius-control-sm)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)]",
      className
    )}
    {...props}
  />
);
