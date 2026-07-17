"use client";

import { useState } from "react";

import { Calendar } from "@/registry/lilt/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)]">
        <Calendar mode="single" onSelect={setDate} selected={date} />
      </div>
      <p className="text-sm text-[var(--lilt-text-muted)]">
        {date
          ? `Penciled in for ${date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            })}. The ferns approve.`
          : "Pick a day — the seedlings can wait."}
      </p>
    </div>
  );
}
