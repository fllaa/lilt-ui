"use client";

import {
  Meter,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@/registry/lilt/ui/meter";

export default function MeterDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Meter format={{ style: "unit", unit: "gigabyte" }} value={64}>
        <div className="flex items-baseline justify-between gap-3">
          <MeterLabel>Storage used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack />
      </Meter>
      <Meter value={80}>
        <div className="flex items-baseline justify-between gap-3">
          <MeterLabel>Weekly focus</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack />
      </Meter>
    </div>
  );
}
