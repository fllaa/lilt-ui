"use client";

import { useState } from "react";

import { Button } from "@/registry/lilt/ui/button";
import {
  Progress,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/lilt/ui/progress";

export default function ProgressDemo() {
  const [value, setValue] = useState(20);
  const done = value >= 100;

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value}>
        <div className="flex items-baseline justify-between gap-3">
          <ProgressLabel>Uploading sketches…</ProgressLabel>
          <ProgressValue />
        </div>
        <ProgressTrack />
      </Progress>
      <Button
        className="self-start"
        disabled={done}
        onClick={() => setValue((current) => Math.min(100, current + 20))}
        size="sm"
        variant="secondary"
      >
        {done ? "All sketches landed" : "Nudge it along"}
      </Button>
    </div>
  );
}
