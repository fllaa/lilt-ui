"use client";

import { Input } from "@/registry/lilt/ui/input";

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Input placeholder="you@example.com" type="email" />
      <Input aria-invalid defaultValue="not-an-email" type="email" />
      <Input disabled placeholder="Disabled" />
    </div>
  );
}
