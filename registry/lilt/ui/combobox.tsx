"use client";

import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CheckIcon, ChevronIcon, CloseIcon } from "@/registry/lilt/ui/icons";

export const Combobox = (props: ComponentProps<typeof BaseCombobox.Root>) => (
  <BaseCombobox.Root {...props} />
);

export const ComboboxInput = ({
  className,
  ...props
}: ComponentProps<typeof BaseCombobox.Input>) => (
  <BaseCombobox.InputGroup
    className={cn(
      "flex min-h-12 w-full items-center rounded-[var(--radius-control)] border border-[var(--lilt-border)] bg-[var(--lilt-field)] pr-2 text-base text-[var(--lilt-text)] transition-[border-color,background-color] hover:border-[var(--lilt-border-strong)] focus-within:border-[var(--lilt-focus)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[invalid]:border-[var(--lilt-danger)]",
      className
    )}
  >
    <BaseCombobox.Input
      className="min-h-12 w-full bg-transparent px-4 outline-none placeholder:text-[var(--lilt-text-subtle)]"
      {...props}
    />
    <BaseCombobox.Clear
      aria-label="Clear selection"
      className="flex w-8 items-center justify-center self-stretch text-[var(--lilt-text-subtle)] outline-none"
    >
      <CloseIcon size={16} />
    </BaseCombobox.Clear>
    <BaseCombobox.Trigger
      aria-label="Open list"
      className="flex w-8 items-center justify-center self-stretch text-[var(--lilt-text-subtle)] outline-none"
    >
      <ChevronIcon size={18} />
    </BaseCombobox.Trigger>
  </BaseCombobox.InputGroup>
);

export const ComboboxContent = ({
  children,
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof BaseCombobox.Positioner>) => (
  <BaseCombobox.Portal>
    <BaseCombobox.Positioner
      className="z-50 select-none"
      sideOffset={sideOffset}
      {...props}
    >
      <BaseCombobox.Popup
        className={cn(
          "max-h-[min(24rem,var(--available-height))] w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-y-auto rounded-[var(--radius-control)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] p-1 text-[var(--lilt-text)] outline-none transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:translate-y-1 data-[starting-style]:scale-[0.985] data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:scale-[0.985] data-[ending-style]:opacity-0",
          className
        )}
      >
        {children}
      </BaseCombobox.Popup>
    </BaseCombobox.Positioner>
  </BaseCombobox.Portal>
);

export const ComboboxList = ({
  className,
  ...props
}: ComponentProps<typeof BaseCombobox.List>) => (
  <BaseCombobox.List className={cn("outline-none", className)} {...props} />
);

export const ComboboxEmpty = ({
  children = "No matches. Try fewer letters?",
  className,
  ...props
}: ComponentProps<typeof BaseCombobox.Empty>) => (
  <BaseCombobox.Empty
    className={cn(
      "px-3 py-4 text-sm text-[var(--lilt-text-muted)] empty:p-0",
      className
    )}
    {...props}
  >
    {children}
  </BaseCombobox.Empty>
);

export const ComboboxItem = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseCombobox.Item>) => (
  <BaseCombobox.Item
    className={cn(
      "grid min-h-10 cursor-default grid-cols-[1.125rem_1fr] items-center gap-2 rounded-[var(--radius-control-sm)] px-3 text-sm outline-none select-none data-[highlighted]:bg-[var(--lilt-surface-2)] data-[disabled]:opacity-45",
      className
    )}
    {...props}
  >
    <BaseCombobox.ItemIndicator className="col-start-1 flex text-[var(--lilt-primary-text)]">
      <CheckIcon size={16} />
    </BaseCombobox.ItemIndicator>
    <span className="col-start-2 truncate">{children}</span>
  </BaseCombobox.Item>
);

export const ComboboxGroup = (
  props: ComponentProps<typeof BaseCombobox.Group>
) => <BaseCombobox.Group {...props} />;

export const ComboboxGroupLabel = ({
  className,
  ...props
}: ComponentProps<typeof BaseCombobox.GroupLabel>) => (
  <BaseCombobox.GroupLabel
    className={cn(
      "px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);
