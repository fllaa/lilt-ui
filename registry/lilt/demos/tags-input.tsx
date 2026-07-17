"use client";

import { Label } from "@/registry/lilt/ui/label";
import { TagsInput } from "@/registry/lilt/ui/tags-input";

export default function TagsInputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="plant-tags">Seed packet labels</Label>
      <TagsInput
        defaultValue={["Basil", "Fern"]}
        id="plant-tags"
        max={6}
        placeholder="Add a plant..."
      />
      <p className="text-xs text-[var(--lilt-text-muted)]">
        Up to six — even the windowsill has limits.
      </p>
    </div>
  );
}
