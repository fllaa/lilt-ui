"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { DatePicker, DateRangePicker } from "@/registry/lilt/ui/date-picker";

export default function DatePickerDemo() {
  const [sowDate, setSowDate] = useState<Date | undefined>();
  const [tripDates, setTripDates] = useState<DateRange | undefined>();

  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
          Sowing day
        </span>
        <DatePicker
          onValueChange={setSowDate}
          placeholder="When do seeds go in?"
          value={sowDate}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
          Trip dates
        </span>
        <DateRangePicker
          onValueChange={setTripDates}
          placeholder="While the garden waits"
          value={tripDates}
        />
      </div>
    </div>
  );
}
