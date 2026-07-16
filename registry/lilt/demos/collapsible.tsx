"use client";

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/lilt/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-xs">
      <CollapsibleTrigger>Show 3 more projects</CollapsibleTrigger>
      <CollapsiblePanel>
        <ul className="flex flex-col gap-1">
          <li>mint-condition</li>
          <li>quiet-confetti</li>
          <li>penguin-parade</li>
        </ul>
      </CollapsiblePanel>
    </Collapsible>
  );
}
