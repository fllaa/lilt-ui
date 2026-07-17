"use client";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Checkbox } from "@/registry/lilt/ui/checkbox";

export const CheckboxGroup = ({
  className,
  ...props
}: ComponentProps<typeof BaseCheckboxGroup>) => (
  <BaseCheckboxGroup
    className={cn("flex flex-col items-start gap-3", className)}
    {...props}
  />
);

export const CheckboxGroupItem = ({
  children,
  ...props
}: ComponentProps<typeof Checkbox> & { children?: ReactNode }) => (
  <label className="flex items-center gap-3 text-sm font-medium text-[var(--lilt-text)]">
    <Checkbox {...props} />
    {children}
  </label>
);
