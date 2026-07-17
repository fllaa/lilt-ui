"use client";

import { useId, useState } from "react";

import {
  CheckboxGroup,
  CheckboxGroupItem,
} from "@/registry/lilt/ui/checkbox-group";

const toppings = ["tomato", "basil", "olives"];

export default function CheckboxGroupDemo() {
  const id = useId();
  const [value, setValue] = useState<string[]>(["basil"]);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]"
        id={id}
      >
        Toppings
      </div>
      <CheckboxGroup
        allValues={toppings}
        aria-labelledby={id}
        onValueChange={setValue}
        value={value}
      >
        <CheckboxGroupItem parent>Everything on it</CheckboxGroupItem>
        <CheckboxGroupItem value="tomato">Sun-ripened tomato</CheckboxGroupItem>
        <CheckboxGroupItem value="basil">
          Basil, straight from the window box
        </CheckboxGroupItem>
        <CheckboxGroupItem value="olives">
          Briny little olives
        </CheckboxGroupItem>
      </CheckboxGroup>
    </div>
  );
}
