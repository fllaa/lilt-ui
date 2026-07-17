"use client";

import type { ComponentProps } from "react";
import { useEffect, useRef } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import type { ChevronProps, DayButtonProps } from "react-day-picker";

import { cn } from "@/registry/lilt/lib/utils";
import { ChevronIcon } from "@/registry/lilt/ui/icons";

const Chevron = ({ className, orientation }: ChevronProps) => (
  <ChevronIcon
    className={cn(
      orientation === "left" && "rotate-90",
      orientation === "right" && "-rotate-90",
      className
    )}
    size={16}
  />
);

export const CalendarDayButton = ({
  className,
  day,
  modifiers,
  ...props
}: DayButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);

  return (
    <button
      className={cn(
        "flex aspect-square size-10 items-center justify-center rounded-full border border-transparent text-sm font-medium text-[var(--lilt-text)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] disabled:pointer-events-none disabled:opacity-45",
        "data-[selected-single=true]:bg-[var(--lilt-primary)] data-[selected-single=true]:text-[var(--lilt-selection-text)] data-[selected-single=true]:hover:bg-[var(--lilt-primary)]",
        "data-[range-start=true]:bg-[var(--lilt-primary)] data-[range-start=true]:text-[var(--lilt-selection-text)] data-[range-start=true]:hover:bg-[var(--lilt-primary)]",
        "data-[range-end=true]:bg-[var(--lilt-primary)] data-[range-end=true]:text-[var(--lilt-selection-text)] data-[range-end=true]:hover:bg-[var(--lilt-primary)]",
        "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-transparent data-[range-middle=true]:text-[var(--lilt-primary-text)] data-[range-middle=true]:hover:bg-transparent",
        modifiers.today &&
          !modifiers.selected &&
          "border-[var(--lilt-border-strong)]",
        className
      )}
      data-day={day.date.toLocaleDateString()}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      ref={ref}
      type="button"
      {...props}
    />
  );
};

export const Calendar = ({
  captionLayout = "label",
  className,
  classNames,
  components,
  showOutsideDays = true,
  ...props
}: ComponentProps<typeof DayPicker>) => {
  const defaultClassNames = getDefaultClassNames();

  const navButton =
    "inline-flex size-10 items-center justify-center rounded-full text-[var(--lilt-text)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] disabled:pointer-events-none disabled:opacity-45";

  return (
    <DayPicker
      captionLayout={captionLayout}
      className={cn("group/calendar p-3", className)}
      classNames={{
        button_next: cn(navButton, defaultClassNames.button_next),
        button_previous: cn(navButton, defaultClassNames.button_previous),
        caption_label: cn(
          "select-none",
          captionLayout !== "label" &&
            "flex h-8 items-center gap-1 rounded-[var(--radius-control-sm)] px-2 [&>svg]:text-[var(--lilt-text-subtle)]",
          defaultClassNames.caption_label
        ),
        day: cn(
          "group/day relative aspect-square size-10 p-0 text-center select-none",
          defaultClassNames.day
        ),
        disabled: cn(defaultClassNames.disabled),
        dropdown: cn(
          "absolute inset-0 cursor-pointer rounded-[var(--radius-control-sm)] bg-transparent text-sm font-semibold opacity-0",
          defaultClassNames.dropdown
        ),
        dropdown_root: cn(
          "relative rounded-[var(--radius-control-sm)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--lilt-focus)] hover:bg-[var(--lilt-surface-2)]",
          defaultClassNames.dropdown_root
        ),
        dropdowns: cn(
          "flex h-10 w-full items-center justify-center gap-1.5 text-sm font-semibold",
          defaultClassNames.dropdowns
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        month_caption: cn(
          "flex h-10 w-full items-center justify-center px-10 font-display text-sm font-semibold text-[var(--lilt-text)]",
          defaultClassNames.month_caption
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        outside: cn(
          "text-[var(--lilt-text-subtle)] opacity-60",
          defaultClassNames.outside
        ),
        range_end: cn(
          "rounded-full bg-[var(--lilt-primary)]",
          defaultClassNames.range_end
        ),
        range_middle: cn(
          "rounded-none bg-[var(--lilt-primary-soft)] text-[var(--lilt-primary-text)]",
          defaultClassNames.range_middle
        ),
        range_start: cn(
          "rounded-full bg-[var(--lilt-primary)]",
          defaultClassNames.range_start
        ),
        today: cn(defaultClassNames.today),
        week: cn("mt-1 flex w-full", defaultClassNames.week),
        week_number: cn(
          "flex size-10 items-center justify-center font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--lilt-text-subtle)]",
          defaultClassNames.week_number
        ),
        week_number_header: cn("size-10", defaultClassNames.week_number_header),
        weekday: cn(
          "flex size-10 items-center justify-center font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--lilt-text-subtle)]",
          defaultClassNames.weekday
        ),
        weekdays: cn("flex", defaultClassNames.weekdays),
        ...classNames,
      }}
      components={{
        Chevron,
        DayButton: CalendarDayButton,
        ...components,
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
};
