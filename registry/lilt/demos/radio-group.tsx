"use client";

import { Label } from "@/registry/lilt/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/lilt/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="weekly">
      <div className="flex items-center gap-3">
        <RadioGroupItem id="radio-demo-daily" value="daily" />
        <Label className="font-medium" htmlFor="radio-demo-daily">
          Daily
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="radio-demo-weekly" value="weekly" />
        <Label className="font-medium" htmlFor="radio-demo-weekly">
          Weekly — a gentle pace
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem id="radio-demo-never" value="never" />
        <Label className="font-medium" htmlFor="radio-demo-never">
          Never
        </Label>
      </div>
    </RadioGroup>
  );
}
