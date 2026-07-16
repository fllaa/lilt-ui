"use client";

import { Separator } from "@/registry/lilt/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div>
        <p className="font-display text-base font-semibold">Lilt</p>
        <p className="text-sm text-[var(--lilt-text-muted)]">
          Precision with a playful rhythm.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Tokens</span>
      </div>
    </div>
  );
}
