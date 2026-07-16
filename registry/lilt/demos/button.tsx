"use client";

import { Button } from "@/registry/lilt/ui/button";
import { CloseIcon } from "@/registry/lilt/ui/icons";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Save changes</Button>
        <Button variant="secondary">Preview</Button>
        <Button variant="soft" icon="arrow">
          Explore
        </Button>
        <Button variant="danger">Delete draft</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm" variant="secondary">
          Compact
        </Button>
        <Button size="lg" icon="arrow">
          Get started
        </Button>
        <Button aria-label="Close" iconOnly size="sm" variant="secondary">
          <CloseIcon size={16} />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
