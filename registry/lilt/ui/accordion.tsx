"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { ChevronIcon } from "@/registry/lilt/ui/icons";

export const Accordion = ({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Root>) => (
  <BaseAccordion.Root className={cn("flex flex-col", className)} {...props} />
);

export const AccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Item>) => (
  <BaseAccordion.Item
    className={cn("border-b border-[var(--lilt-border)]", className)}
    {...props}
  />
);

export const AccordionTrigger = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Trigger>) => (
  <BaseAccordion.Header className="m-0">
    <BaseAccordion.Trigger
      className={cn(
        "group flex min-h-12 w-full items-center justify-between gap-4 rounded-[var(--radius-control-sm)] py-3 text-left font-display text-base font-semibold tracking-[-0.01em] text-[var(--lilt-text)] outline-none transition-colors hover:text-[var(--lilt-primary-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
        className
      )}
      {...props}
    >
      {children}
      <ChevronIcon
        className="shrink-0 text-[var(--lilt-text-subtle)] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-data-[panel-open]:rotate-180"
        size={18}
      />
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
);

export const AccordionPanel = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Panel>) => (
  <BaseAccordion.Panel
    className={cn(
      "h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:h-0 data-[ending-style]:h-0",
      className
    )}
    {...props}
  >
    <div className="pb-4 text-sm leading-relaxed text-[var(--lilt-text-muted)]">
      {children}
    </div>
  </BaseAccordion.Panel>
);
