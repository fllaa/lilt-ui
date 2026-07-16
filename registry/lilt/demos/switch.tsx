"use client";

import { Label } from "@/registry/lilt/ui/label";
import { Switch } from "@/registry/lilt/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked id="switch-demo" />
      <Label className="font-medium" htmlFor="switch-demo">
        Reduced motion honors your system setting
      </Label>
    </div>
  );
}
