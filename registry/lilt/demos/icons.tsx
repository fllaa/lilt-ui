"use client";

import {
  ArrowIcon,
  CheckIcon,
  ChevronIcon,
  CloseIcon,
  InfoIcon,
  MenuIcon,
  MinusIcon,
  MoonIcon,
  ScribbleArrow,
  SparkIcon,
  SunIcon,
  WarningIcon,
} from "@/registry/lilt/ui/icons";

const icons = [
  { name: "SparkIcon", Icon: SparkIcon },
  { name: "ArrowIcon", Icon: ArrowIcon },
  { name: "ChevronIcon", Icon: ChevronIcon },
  { name: "CheckIcon", Icon: CheckIcon },
  { name: "CloseIcon", Icon: CloseIcon },
  { name: "MinusIcon", Icon: MinusIcon },
  { name: "MenuIcon", Icon: MenuIcon },
  { name: "SunIcon", Icon: SunIcon },
  { name: "MoonIcon", Icon: MoonIcon },
  { name: "InfoIcon", Icon: InfoIcon },
  { name: "WarningIcon", Icon: WarningIcon },
];

export default function IconsDemo() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {icons.map(({ name, Icon }) => (
          <div
            className="flex flex-col items-center gap-2 rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-4"
            key={name}
          >
            <Icon size={22} />
            <span className="text-xs text-[var(--lilt-text-muted)]">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-[var(--lilt-primary-text)]">
        <ScribbleArrow className="w-24" />
      </div>
    </div>
  );
}
