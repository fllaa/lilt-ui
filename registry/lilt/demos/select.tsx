"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/lilt/ui/select";

const paces = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Only when it matters", value: "important" },
];

export default function SelectDemo() {
  return (
    <div className="w-full max-w-64">
      <Select items={paces}>
        <SelectTrigger aria-label="Digest pace">
          <SelectValue placeholder="Pick a pace" />
        </SelectTrigger>
        <SelectContent>
          {paces.map((pace) => (
            <SelectItem key={pace.value} value={pace.value}>
              {pace.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
