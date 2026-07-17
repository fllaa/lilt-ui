"use client";

import { useEffect, useState } from "react";

import { Button } from "@/registry/lilt/ui/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandTrigger,
} from "@/registry/lilt/ui/command";
import { Kbd, KbdGroup } from "@/registry/lilt/ui/kbd";

interface CommandEntry {
  value: string;
  label: string;
  shortcut?: string[];
}

interface CommandGroupEntry {
  value: string;
  items: CommandEntry[];
}

const groupedCommands: CommandGroupEntry[] = [
  {
    items: [
      { label: "Garden journal", value: "garden-journal" },
      { label: "Seed library", value: "seed-library" },
      { label: "Watering schedule", value: "watering-schedule" },
      { label: "Pressed flowers", value: "pressed-flowers" },
    ],
    value: "Pages",
  },
  {
    items: [
      {
        label: "Plant a new note",
        shortcut: ["⌘", "N"],
        value: "plant-a-note",
      },
      {
        label: "Water everything",
        shortcut: ["⌘", "W"],
        value: "water-everything",
      },
      {
        label: "Press a flower for later",
        shortcut: ["⌘", "P"],
        value: "press-a-flower",
      },
    ],
    value: "Actions",
  },
];

export default function CommandDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen((previous) => !previous);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Command onOpenChange={setOpen} open={open}>
      <CommandTrigger render={<Button variant="secondary" />}>
        Search anything...
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </CommandTrigger>
      <CommandDialog items={groupedCommands}>
        <CommandInput />
        <CommandEmpty />
        <CommandList>
          {(group: CommandGroupEntry) => (
            <CommandGroup items={group.items} key={group.value}>
              <CommandGroupLabel>{group.value}</CommandGroupLabel>
              <CommandCollection>
                {(item: CommandEntry) => (
                  <CommandItem
                    key={item.value}
                    onClick={() => setOpen(false)}
                    shortcut={item.shortcut}
                    value={item}
                  >
                    {item.label}
                  </CommandItem>
                )}
              </CommandCollection>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </Command>
  );
}
