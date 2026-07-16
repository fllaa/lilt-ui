"use client";

import { Checkbox } from "@/registry/lilt/ui/checkbox";
import { Label } from "@/registry/lilt/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="checkbox-demo-updates" />
        <Label className="font-medium" htmlFor="checkbox-demo-updates">
          Email me the weekly digest
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-demo-indeterminate" indeterminate />
        <Label className="font-medium" htmlFor="checkbox-demo-indeterminate">
          Some projects selected
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled id="checkbox-demo-disabled" />
        <Label className="font-medium opacity-50" htmlFor="checkbox-demo-disabled">
          Disabled
        </Label>
      </div>
    </div>
  );
}
