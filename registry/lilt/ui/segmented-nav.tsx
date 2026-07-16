"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export interface SegmentedNavItem {
  id: string;
  label: ReactNode;
  /** When set, the item renders as a link instead of a button. */
  href?: string;
}

export interface SegmentedNavProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "onSelect"
> {
  items: SegmentedNavItem[];
  selected?: string;
  onSelect?: (id: string) => void;
}

const itemBaseClassName =
  "inline-flex min-h-10 shrink-0 items-center rounded-full px-4 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]";

const itemClassName = (isSelected: boolean) =>
  cn(
    itemBaseClassName,
    isSelected
      ? "bg-[var(--lilt-button)] text-[var(--lilt-button-text)]"
      : "text-[var(--lilt-text-muted)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)]"
  );

export const SegmentedNav = ({
  className,
  items,
  onSelect,
  selected,
  ...props
}: SegmentedNavProps) => (
  <nav
    aria-label="Sections"
    className={cn(
      "flex gap-1 overflow-x-auto rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1",
      className
    )}
    {...props}
  >
    {items.map((item) =>
      item.href ? (
        <a
          aria-current={selected === item.id ? "page" : undefined}
          className={itemClassName(selected === item.id)}
          href={item.href}
          key={item.id}
        >
          {item.label}
        </a>
      ) : (
        <button
          aria-current={selected === item.id ? "page" : undefined}
          className={itemClassName(selected === item.id)}
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          type="button"
        >
          {item.label}
        </button>
      )
    )}
  </nav>
);
