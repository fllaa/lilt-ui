"use client";

import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const Toolbar = ({
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Root>) => (
  <BaseToolbar.Root
    className={cn(
      "flex items-center gap-1 rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1 data-[orientation=vertical]:w-fit data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

export const ToolbarButton = ({
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Button>) => (
  <BaseToolbar.Button
    className={cn(
      "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] select-none hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);

export const ToolbarLink = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Link>) => (
  <BaseToolbar.Link
    className={cn(
      "inline-flex min-h-10 items-center rounded-full px-3 text-sm font-medium text-[var(--lilt-text-muted)] no-underline outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] select-none hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
      className
    )}
    {...props}
  >
    {children}
  </BaseToolbar.Link>
);

export const ToolbarGroup = ({
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Group>) => (
  <BaseToolbar.Group
    className={cn(
      "flex items-center gap-1 data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

export const ToolbarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Separator>) => (
  <BaseToolbar.Separator
    className={cn(
      "mx-1 h-6 w-px shrink-0 bg-[var(--lilt-border)] data-[orientation=horizontal]:mx-0 data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-6",
      className
    )}
    {...props}
  />
);

export const ToolbarInput = ({
  className,
  ...props
}: ComponentProps<typeof BaseToolbar.Input>) => (
  <BaseToolbar.Input
    className={cn(
      "min-h-10 rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-field)] px-4 text-sm text-[var(--lilt-text)] outline-none transition-[border-color,background-color] placeholder:text-[var(--lilt-text-subtle)] hover:border-[var(--lilt-border-strong)] focus:border-[var(--lilt-focus)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);
