"use client";

import { useState } from "react";
import { Button } from "@/registry/lilt/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/lilt/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  const [digest, setDigest] = useState(true);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="secondary">Project options</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Project</DropdownMenuGroupLabel>
          <DropdownMenuItem>Rename</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={digest}
          onCheckedChange={setDigest}
        >
          Weekly digest
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="danger">Delete project</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
