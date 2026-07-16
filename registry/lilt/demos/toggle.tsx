"use client";

import { SparkIcon } from "@/registry/lilt/ui/icons";
import { Toggle } from "@/registry/lilt/ui/toggle";

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <Toggle aria-label="Favorite" iconOnly>
        <SparkIcon size={18} />
      </Toggle>
      <Toggle>Preview mode</Toggle>
    </div>
  );
}
