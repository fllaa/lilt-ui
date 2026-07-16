"use client";

import type { ComponentProps, ReactNode } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Input } from "@/registry/lilt/ui/input";
import { cn } from "@/registry/lilt/lib/utils";

export function Field({
  className,
  ...props
}: ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root className={cn("grid gap-2", className)} {...props} />
  );
}

export interface FieldLabelProps
  extends ComponentProps<typeof BaseField.Label> {
  /** Renders Lilt's gentle "Optional, no pressure" note beside the label. */
  optional?: boolean;
  optionalLabel?: ReactNode;
}

export function FieldLabel({
  children,
  className,
  optional = false,
  optionalLabel = "Optional, no pressure",
  ...props
}: FieldLabelProps) {
  const label = (
    <BaseField.Label
      className={cn("text-sm font-semibold text-[var(--lilt-text)]", className)}
      {...props}
    >
      {children}
    </BaseField.Label>
  );
  if (!optional) return label;
  return (
    <div className="flex items-baseline justify-between gap-4">
      {label}
      <span className="text-xs text-[var(--lilt-text-muted)]">
        {optionalLabel}
      </span>
    </div>
  );
}

export function FieldControl({
  render,
  ...props
}: ComponentProps<typeof BaseField.Control>) {
  return <BaseField.Control render={render ?? <Input />} {...props} />;
}

export function FieldDescription({
  className,
  ...props
}: ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description
      className={cn("text-sm text-[var(--lilt-text-muted)]", className)}
      {...props}
    />
  );
}

export function FieldError({
  className,
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error
      className={cn(
        "text-sm font-medium text-[var(--lilt-danger-text)]",
        className,
      )}
      {...props}
    />
  );
}
