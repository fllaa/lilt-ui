"use client";

import { Label } from "@/registry/lilt/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/lilt/ui/number-field";

export default function NumberFieldDemo() {
  return (
    <NumberField
      className="flex flex-col items-start gap-2"
      defaultValue={3}
      id="number-field-demo"
      max={20}
      min={0}
    >
      <NumberFieldScrubArea>
        <Label className="cursor-ew-resize" htmlFor="number-field-demo">
          Seedlings
        </Label>
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
      <p className="text-sm text-[var(--lilt-text-muted)]">
        Scrub the label sideways, or hold a stepper and let it run.
      </p>
    </NumberField>
  );
}
