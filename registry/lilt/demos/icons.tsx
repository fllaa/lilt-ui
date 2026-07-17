"use client";

import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  ChevronIcon,
  ChevronsUpDownIcon,
  CloseIcon,
  FileIcon,
  GripIcon,
  InfoIcon,
  MenuIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  ScribbleArrow,
  SearchIcon,
  SparkIcon,
  StarIcon,
  SunIcon,
  WarningIcon,
} from "@/registry/lilt/ui/icons";

const icons = [
  { Icon: SparkIcon, name: "SparkIcon" },
  { Icon: ArrowIcon, name: "ArrowIcon" },
  { Icon: ChevronIcon, name: "ChevronIcon" },
  { Icon: ChevronsUpDownIcon, name: "ChevronsUpDownIcon" },
  { Icon: CheckIcon, name: "CheckIcon" },
  { Icon: CloseIcon, name: "CloseIcon" },
  { Icon: PlusIcon, name: "PlusIcon" },
  { Icon: MinusIcon, name: "MinusIcon" },
  { Icon: MenuIcon, name: "MenuIcon" },
  { Icon: SearchIcon, name: "SearchIcon" },
  { Icon: StarIcon, name: "StarIcon" },
  { Icon: CalendarIcon, name: "CalendarIcon" },
  { Icon: FileIcon, name: "FileIcon" },
  { Icon: GripIcon, name: "GripIcon" },
  { Icon: SunIcon, name: "SunIcon" },
  { Icon: MoonIcon, name: "MoonIcon" },
  { Icon: InfoIcon, name: "InfoIcon" },
  { Icon: WarningIcon, name: "WarningIcon" },
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
