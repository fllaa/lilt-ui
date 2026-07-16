"use client";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { MinusIcon, PlusIcon } from "@/registry/lilt/ui/icons";

export const NumberField = (
  props: ComponentProps<typeof BaseNumberField.Root>
) => <BaseNumberField.Root {...props} />;

/** Lilt's hand-drawn left-right arrows, shown while scrubbing. */
const ScrubCursorIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    viewBox="0 0 26 14"
    width="26"
  >
    <path
      d="M4.1 7.1c5.9-.2 12-.15 17.9-.05"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="M7.4 3.5 3.7 7.05l3.8 3.5M18.7 3.6l3.7 3.55-3.6 3.45"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const NumberFieldScrubArea = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.ScrubArea>) => (
  <BaseNumberField.ScrubArea
    className={cn("cursor-ew-resize select-none", className)}
    {...props}
  >
    {children}
    <BaseNumberField.ScrubAreaCursor className="z-50 flex text-[var(--lilt-text)]">
      <ScrubCursorIcon />
    </BaseNumberField.ScrubAreaCursor>
  </BaseNumberField.ScrubArea>
);

export const NumberFieldGroup = ({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Group>) => (
  <BaseNumberField.Group
    className={cn(
      "flex min-h-12 w-fit items-stretch overflow-hidden rounded-[var(--radius-control)] border border-[var(--lilt-border)] bg-[var(--lilt-field)] transition-[border-color] focus-within:border-[var(--lilt-focus)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);

export const NumberFieldDecrement = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Decrement>) => (
  <BaseNumberField.Decrement
    aria-label="Decrease"
    className={cn(
      "flex w-12 items-center justify-center border-r border-[var(--lilt-border)] text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)]",
      className
    )}
    {...props}
  >
    {children ?? <MinusIcon size={16} />}
  </BaseNumberField.Decrement>
);

export const NumberFieldInput = ({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Input>) => (
  <BaseNumberField.Input
    className={cn(
      "w-20 bg-transparent text-center text-base tabular-nums outline-none placeholder:text-[var(--lilt-text-subtle)]",
      className
    )}
    {...props}
  />
);

export const NumberFieldIncrement = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Increment>) => (
  <BaseNumberField.Increment
    aria-label="Increase"
    className={cn(
      "flex w-12 items-center justify-center border-l border-[var(--lilt-border)] text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)]",
      className
    )}
    {...props}
  >
    {children ?? <PlusIcon size={16} />}
  </BaseNumberField.Increment>
);
