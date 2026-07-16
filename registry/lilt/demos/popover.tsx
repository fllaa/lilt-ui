"use client";

import { Button } from "@/registry/lilt/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/lilt/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary">What is Lilt?</Button>} />
      <PopoverContent>
        <PopoverTitle>Precision with a playful rhythm</PopoverTitle>
        <PopoverDescription>
          Warm paper surfaces, a swappable mint accent, borders instead of
          shadows, and one gentle 2px lift.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  );
}
