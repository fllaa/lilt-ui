"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/lilt/ui/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
} from "@/registry/lilt/ui/toolbar";

const BoldIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M8.2 5.1c-.12 4.6-.15 9.2 0 13.8M8 5.2c2.3-.15 4.7-.35 6.1.6 1.7 1.2 1.6 3.8-.1 4.9-1.8 1-3.9.85-6 .8m0 0c2.3-.05 4.7-.2 6.6.8 2 1.1 2 4.1-.1 5.2-2 .9-4.3.7-6.5.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const ItalicIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M10.2 5.1c2.6-.12 5.2-.05 7.8.05M6 18.9c2.6.12 5.3.15 8 .02M14.6 5.3c-1.9 4.5-3.5 9-5.1 13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const UnderlineIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M7.1 4.6c-.1 2.5-.3 5.2.5 7.6.8 2.3 3.8 3.3 6 2.3 2.3-1.1 2.7-3.8 2.5-6.1-.1-1.3-.05-2.6.02-3.9M5.5 19.2c4.3.15 8.7.1 13 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export default function ToolbarDemo() {
  return (
    <Toolbar aria-label="Formatting" className="w-fit">
      <ToggleGroup
        aria-label="Text style"
        className="border-0 bg-transparent p-0"
        defaultValue={["bold"]}
      >
        <ToolbarButton
          className="px-0"
          render={<ToggleGroupItem aria-label="Bold" iconOnly value="bold" />}
        >
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton
          className="px-0"
          render={
            <ToggleGroupItem aria-label="Italic" iconOnly value="italic" />
          }
        >
          <ItalicIcon />
        </ToolbarButton>
        <ToolbarButton
          className="px-0"
          render={
            <ToggleGroupItem
              aria-label="Underline"
              iconOnly
              value="underline"
            />
          }
        >
          <UnderlineIcon />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton>Link</ToolbarButton>
      <ToolbarButton>Quote</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarLink className="ml-2" href="#">
        Edited 5m ago
      </ToolbarLink>
    </Toolbar>
  );
}
