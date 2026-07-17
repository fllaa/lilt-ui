"use client";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/lilt/ui/autocomplete";

const notes = [
  "First frost",
  "Bumblebee count",
  "Compost turned",
  "Seedlings up",
  "Rain gauge reading",
  "Ladybird sighting",
  "Mulch topped off",
  "Sweet pea trellis",
];

export default function AutocompleteDemo() {
  return (
    <div className="w-full max-w-72">
      <Autocomplete items={notes} openOnInputClick>
        <AutocompleteInput
          aria-label="Search field notes"
          placeholder="Search the field notes"
        />
        <AutocompleteContent>
          <AutocompleteEmpty />
          <AutocompleteList>
            {(note: string) => (
              <AutocompleteItem key={note} value={note}>
                {note}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
}
