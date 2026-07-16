"use client";

import { OTPField } from "@base-ui/react/otp-field";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { MinusIcon } from "@/registry/lilt/ui/icons";

export const InputOTP = ({
  className,
  ...props
}: ComponentProps<typeof OTPField.Root>) => (
  <OTPField.Root
    className={cn("group flex items-center gap-2", className)}
    {...props}
  />
);

export interface InputOTPSlotProps extends ComponentProps<
  typeof OTPField.Input
> {
  /**
   * Zero-based slot position. Together with `length`, slots after the first
   * get an automatic `aria-label` of "Character N of L". The first slot keeps
   * its accessible name from the field's associated label.
   */
  index?: number;
  /** Total number of slots, used with `index` to build the aria-label. */
  length?: number;
}

export const InputOTPSlot = ({
  className,
  index,
  length,
  ...props
}: InputOTPSlotProps) => (
  <OTPField.Input
    aria-label={
      index !== undefined && length !== undefined && index > 0
        ? `Character ${index + 1} of ${length}`
        : undefined
    }
    className={cn(
      "size-12 rounded-[var(--radius-control-sm)] border border-[var(--lilt-border)] bg-[var(--lilt-field)] text-center font-display text-lg font-semibold text-[var(--lilt-text)] outline-none transition-[border-color] focus:border-[var(--lilt-focus)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--lilt-focus)_25%,transparent)] data-[disabled]:opacity-45 data-[invalid]:border-[var(--lilt-danger)] group-data-[complete]:border-[var(--lilt-primary)]",
      className
    )}
    {...props}
  />
);

export const InputOTPSeparator = ({
  className,
  ...props
}: ComponentProps<typeof OTPField.Separator>) => (
  <OTPField.Separator
    className={cn("flex text-[var(--lilt-text-subtle)]", className)}
    {...props}
  >
    <MinusIcon size={16} />
  </OTPField.Separator>
);
