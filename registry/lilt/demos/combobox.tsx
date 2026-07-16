"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/lilt/ui/combobox";

const plants = [
  "Basil",
  "Chamomile",
  "Fern",
  "Lavender",
  "Marigold",
  "Nasturtium",
  "Rosemary",
  "Sunflower",
];

export default function ComboboxDemo() {
  return (
    <div className="w-full max-w-72">
      <Combobox items={plants}>
        <ComboboxInput
          aria-label="Garden plant"
          placeholder="Pick a garden plant"
        />
        <ComboboxContent>
          <ComboboxEmpty />
          <ComboboxList>
            {(plant: string) => (
              <ComboboxItem key={plant} value={plant}>
                {plant}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
