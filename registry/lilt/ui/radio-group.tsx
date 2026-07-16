"use client";

import type { ComponentProps } from "react";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cn } from "@/registry/lilt/lib/utils";

export function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}

export function RadioGroupItem({
  className,
  ...props
}: ComponentProps<typeof Radio.Root>) {
  return (
    <Radio.Root
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--lilt-border-strong)] bg-[var(--lilt-field)] outline-none transition-colors duration-[var(--duration-fast)] data-[checked]:border-[var(--lilt-button)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        className,
      )}
      {...props}
    >
      <Radio.Indicator className="flex data-[unchecked]:hidden">
        <span className="size-2.5 rounded-full bg-[var(--lilt-button)]" />
      </Radio.Indicator>
    </Radio.Root>
  );
}
