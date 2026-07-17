"use client";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CloseIcon } from "@/registry/lilt/ui/icons";

export const Autocomplete = (
  props: ComponentProps<typeof BaseAutocomplete.Root>
) => <BaseAutocomplete.Root {...props} />;

export const AutocompleteInput = ({
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Input>) => (
  <BaseAutocomplete.InputGroup
    className={cn(
      "flex min-h-12 w-full items-center rounded-[var(--radius-control)] border border-[var(--lilt-border)] bg-[var(--lilt-field)] pr-2 text-base text-[var(--lilt-text)] transition-[border-color,background-color] hover:border-[var(--lilt-border-strong)] focus-within:border-[var(--lilt-focus)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45 data-[invalid]:border-[var(--lilt-danger)]",
      className
    )}
  >
    <BaseAutocomplete.Input
      className="min-h-12 w-full bg-transparent px-4 outline-none placeholder:text-[var(--lilt-text-subtle)]"
      {...props}
    />
    <BaseAutocomplete.Clear
      aria-label="Clear input"
      className="flex w-8 items-center justify-center self-stretch text-[var(--lilt-text-subtle)] outline-none"
    >
      <CloseIcon size={16} />
    </BaseAutocomplete.Clear>
  </BaseAutocomplete.InputGroup>
);

export const AutocompleteContent = ({
  children,
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Positioner>) => (
  <BaseAutocomplete.Portal>
    <BaseAutocomplete.Positioner
      className="z-50 select-none"
      sideOffset={sideOffset}
      {...props}
    >
      <BaseAutocomplete.Popup
        className={cn(
          "max-h-[min(24rem,var(--available-height))] w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-y-auto rounded-[var(--radius-control)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] p-1 text-[var(--lilt-text)] outline-none transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:translate-y-1 data-[starting-style]:scale-[0.985] data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:scale-[0.985] data-[ending-style]:opacity-0",
          className
        )}
      >
        {children}
      </BaseAutocomplete.Popup>
    </BaseAutocomplete.Positioner>
  </BaseAutocomplete.Portal>
);

export const AutocompleteList = ({
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.List>) => (
  <BaseAutocomplete.List className={cn("outline-none", className)} {...props} />
);

export const AutocompleteEmpty = ({
  children = "Nothing like that yet. Keep typing?",
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Empty>) => (
  <BaseAutocomplete.Empty
    className={cn(
      "px-3 py-4 text-sm text-[var(--lilt-text-muted)] empty:p-0",
      className
    )}
    {...props}
  >
    {children}
  </BaseAutocomplete.Empty>
);

export const AutocompleteStatus = ({
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Status>) => (
  <BaseAutocomplete.Status
    className={cn(
      "px-3 py-2 text-sm text-[var(--lilt-text-muted)] empty:p-0",
      className
    )}
    {...props}
  />
);

export const AutocompleteItem = ({
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Item>) => (
  <BaseAutocomplete.Item
    className={cn(
      "flex min-h-10 cursor-default items-center gap-2 rounded-[var(--radius-control-sm)] px-3 text-sm outline-none select-none data-[highlighted]:bg-[var(--lilt-surface-2)] data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);

export const AutocompleteGroup = (
  props: ComponentProps<typeof BaseAutocomplete.Group>
) => <BaseAutocomplete.Group {...props} />;

export const AutocompleteGroupLabel = ({
  className,
  ...props
}: ComponentProps<typeof BaseAutocomplete.GroupLabel>) => (
  <BaseAutocomplete.GroupLabel
    className={cn(
      "px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const AutocompleteCollection = (
  props: ComponentProps<typeof BaseAutocomplete.Collection>
) => <BaseAutocomplete.Collection {...props} />;

export const useAutocompleteFilter = BaseAutocomplete.useFilter;
