"use client";

import { useId, useState } from "react";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { StarIcon } from "@/registry/lilt/ui/icons";

export type RatingProps = Omit<
  ComponentProps<"div">,
  "defaultValue" | "onChange"
> & {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export const Rating = ({
  className,
  defaultValue = 0,
  disabled = false,
  label = "Rating",
  max = 5,
  onValueChange,
  readOnly = false,
  value,
  ...props
}: RatingProps) => {
  const name = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const current = value ?? internalValue;
  const display = hovered ?? current;
  const stars = Array.from({ length: max }, (_, index) => index + 1);

  const setValue = (next: number) => {
    if (value === undefined) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  if (readOnly) {
    return (
      <div
        aria-label={`${current} of ${max} stars`}
        className={cn("flex items-center gap-1", className)}
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- an <img> tag cannot hold the SVG star glyphs; role="img" on the container is the WAI-ARIA pattern for a composite read-only graphic
        role="img"
        {...props}
      >
        {stars.map((star) => (
          <span className="flex rounded-full p-0.5" key={star}>
            <StarIcon
              className={
                star <= current
                  ? "text-[var(--lilt-primary-text)]"
                  : "text-[var(--lilt-border-strong)]"
              }
              filled={star <= current}
              size={24}
            />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      aria-label={label}
      className={cn(
        "flex items-center gap-1",
        disabled && "pointer-events-none opacity-45",
        className
      )}
      data-disabled={disabled ? "" : undefined}
      role="radiogroup"
      {...props}
    >
      {stars.map((star) => (
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover preview is pointer-only sugar; keyboard and AT interaction live on the radio input inside the label
        <label
          className="cursor-pointer"
          key={star}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
        >
          <input
            aria-label={star === 1 ? "1 star" : `${star} stars`}
            checked={current === star}
            className="peer sr-only"
            disabled={disabled}
            name={name}
            onChange={() => setValue(star)}
            type="radio"
            value={star}
          />
          <span className="flex rounded-full p-0.5 transition-colors duration-[var(--duration-fast)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--lilt-focus)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--lilt-canvas)]">
            <StarIcon
              className={
                star <= display
                  ? "text-[var(--lilt-primary-text)]"
                  : "text-[var(--lilt-border-strong)]"
              }
              filled={star <= display}
              size={24}
            />
          </span>
        </label>
      ))}
    </div>
  );
};
