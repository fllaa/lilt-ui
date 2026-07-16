"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export interface SliderProps extends ComponentProps<typeof BaseSlider.Root> {
  /**
   * Accessible name for each thumb, in value order (e.g. ["Min", "Max"]).
   * Base UI requires labeling every thumb input; skip this only when a
   * visible SliderLabel already names a single-thumb slider.
   */
  thumbLabels?: string[];
}

export const Slider = ({
  children,
  className,
  thumbLabels,
  ...props
}: SliderProps) => {
  const rawValue = props.value ?? props.defaultValue;
  const thumbCount = Array.isArray(rawValue) ? rawValue.length : 1;

  return (
    <BaseSlider.Root
      className={cn(
        "flex w-full flex-col gap-1 data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
        className
      )}
      {...props}
    >
      {children}
      <BaseSlider.Control className="flex min-h-11 w-full touch-none items-center select-none">
        <BaseSlider.Track className="h-1.5 w-full rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface-2)] select-none">
          <BaseSlider.Indicator className="rounded-full bg-[var(--lilt-primary)] select-none" />
          {Array.from({ length: thumbCount }, (_, index) => (
            <BaseSlider.Thumb
              aria-label={thumbLabels?.[index]}
              className="size-6 rounded-full border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] transition-[scale] duration-[var(--duration-fast)] ease-[var(--ease-out)] select-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--lilt-focus)] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-[var(--lilt-canvas)] data-[dragging]:scale-110"
              index={index}
              key={index}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
};

export const SliderLabel = ({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Label>) => (
  <BaseSlider.Label
    className={cn("text-sm font-semibold text-[var(--lilt-text)]", className)}
    {...props}
  />
);

export const SliderValue = ({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Value>) => (
  <BaseSlider.Value
    className={cn(
      "text-sm text-[var(--lilt-text-muted)] tabular-nums",
      className
    )}
    {...props}
  />
);
