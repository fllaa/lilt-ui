"use client";

import { Input } from "@/registry/lilt/ui/input";
import { Label } from "@/registry/lilt/ui/label";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-demo-name">Project name</Label>
      <Input id="label-demo-name" placeholder="Something memorable" />
    </div>
  );
}
