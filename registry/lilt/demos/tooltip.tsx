"use client";

import { Button } from "@/registry/lilt/ui/button";
import { MenuIcon } from "@/registry/lilt/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/lilt/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button aria-label="Open menu" iconOnly size="sm" variant="secondary">
              <MenuIcon size={16} />
            </Button>
          }
        />
        <TooltipContent>Open the menu</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
