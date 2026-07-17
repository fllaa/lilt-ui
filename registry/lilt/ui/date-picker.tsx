"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/registry/lilt/lib/utils";
import { Button } from "@/registry/lilt/ui/button";
import { Calendar } from "@/registry/lilt/ui/calendar";
import { CalendarIcon } from "@/registry/lilt/ui/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/lilt/ui/popover";

type CalendarProps = Omit<
  ComponentProps<typeof Calendar>,
  "mode" | "selected" | "onSelect"
>;

const defaultFormatDate = (date: Date) =>
  date.toLocaleDateString(undefined, { dateStyle: "medium" });

const formatRangeStart = (date: Date) =>
  date.toLocaleDateString(undefined, { day: "numeric", month: "short" });

const formatRangeLabel = (
  range: DateRange | undefined,
  formatDate?: (date: Date) => string
) => {
  if (!range?.from) {
    return null;
  }
  const formatEnd = formatDate ?? defaultFormatDate;
  if (!range.to) {
    return formatEnd(range.from);
  }
  const formatStart = formatDate ?? formatRangeStart;
  return `${formatStart(range.from)} – ${formatEnd(range.to)}`;
};

export interface DatePickerProps {
  calendarProps?: CalendarProps;
  className?: string;
  defaultValue?: Date;
  disabled?: boolean;
  formatDate?: (date: Date) => string;
  onValueChange?: (date: Date | undefined) => void;
  placeholder?: string;
  value?: Date;
}

export const DatePicker = ({
  calendarProps,
  className,
  defaultValue,
  disabled,
  formatDate = defaultFormatDate,
  onValueChange,
  placeholder = "Pick a date",
  value,
}: DatePickerProps) => {
  const [internalValue, setInternalValue] = useState<Date | undefined>(
    defaultValue
  );
  const [open, setOpen] = useState(false);
  const date = value ?? internalValue;

  const handleSelect = (selected: Date | undefined) => {
    setInternalValue(selected);
    onValueChange?.(selected);
    setOpen(false);
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button
            className={cn(
              "min-w-56 justify-start gap-2 font-medium",
              className
            )}
            disabled={disabled}
            variant="secondary"
          >
            <CalendarIcon
              className="shrink-0 text-[var(--lilt-text-subtle)]"
              size={18}
            />
            {date ? (
              formatDate(date)
            ) : (
              <span className="text-[var(--lilt-text-subtle)]">
                {placeholder}
              </span>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-1">
        <Calendar
          defaultMonth={date}
          {...calendarProps}
          mode="single"
          onSelect={handleSelect}
          required={false}
          selected={date}
        />
      </PopoverContent>
    </Popover>
  );
};

export interface DateRangePickerProps {
  calendarProps?: CalendarProps;
  className?: string;
  defaultValue?: DateRange;
  disabled?: boolean;
  formatDate?: (date: Date) => string;
  onValueChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  value?: DateRange;
}

export const DateRangePicker = ({
  calendarProps,
  className,
  defaultValue,
  disabled,
  formatDate,
  onValueChange,
  placeholder = "Pick a date range",
  value,
}: DateRangePickerProps) => {
  const [internalValue, setInternalValue] = useState<DateRange | undefined>(
    defaultValue
  );
  const [open, setOpen] = useState(false);
  const range = value ?? internalValue;

  const handleSelect = (selected: DateRange | undefined) => {
    setInternalValue(selected);
    onValueChange?.(selected);
    if (selected?.from && selected?.to) {
      setOpen(false);
    }
  };

  const label = formatRangeLabel(range, formatDate);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button
            className={cn(
              "min-w-56 justify-start gap-2 font-medium",
              className
            )}
            disabled={disabled}
            variant="secondary"
          >
            <CalendarIcon
              className="shrink-0 text-[var(--lilt-text-subtle)]"
              size={18}
            />
            {label ?? (
              <span className="text-[var(--lilt-text-subtle)]">
                {placeholder}
              </span>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-1">
        <Calendar
          defaultMonth={range?.from}
          numberOfMonths={2}
          {...calendarProps}
          mode="range"
          onSelect={handleSelect}
          required={false}
          // Without resetOnSelect the first click yields a complete
          // single-day range ({ from, to: day }) which would close the
          // popover instantly, and clicking a finished range would only
          // nudge its nearest endpoint — the start date could never change.
          // With it, a click on an empty or finished range starts fresh, so
          // `to` is only ever set by a genuine completing click.
          resetOnSelect
          selected={range}
        />
      </PopoverContent>
    </Popover>
  );
};
