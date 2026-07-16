"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/lilt/ui/toggle-group";

const AlignLeftIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M4 6.8c4.4-.2 9.6-.1 16 0M4 12c3.3-.1 6.7-.05 10 0M4 17.2c4.3.15 8.7.1 13 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const AlignCenterIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M4 6.8c4.4-.2 9.6-.1 16 0M7 12c3.3-.1 6.7-.05 10 0M5.5 17.2c4.3.15 8.7.1 13 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const AlignRightIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <path
      d="M4 6.8c4.4-.2 9.6-.1 16 0M10 12c3.3-.1 6.7-.05 10 0M7 17.2c4.3.15 8.7.1 13 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
      <ToggleGroupItem aria-label="Left" iconOnly value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Center" iconOnly value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Right" iconOnly value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
