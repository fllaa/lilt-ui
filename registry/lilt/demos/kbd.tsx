"use client";

import { Kbd, KbdGroup } from "@/registry/lilt/ui/kbd";

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4 text-sm text-[var(--lilt-text)]">
      <p>
        Press{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>{" "}
        to search — or just wander.
      </p>
      <div className="flex items-center gap-3 text-[var(--lilt-text-muted)]">
        <Kbd>Esc</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>↵</Kbd>
        <Kbd>Space</Kbd>
      </div>
    </div>
  );
}
