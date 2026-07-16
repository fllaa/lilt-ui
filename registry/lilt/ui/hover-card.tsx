"use client";

import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";

export const HoverCard = (
  props: ComponentProps<typeof BasePreviewCard.Root>
) => <BasePreviewCard.Root {...props} />;

export const HoverCardTrigger = ({
  className,
  delay = 600,
  closeDelay = 300,
  ...props
}: ComponentProps<typeof BasePreviewCard.Trigger>) => (
  <BasePreviewCard.Trigger
    className={cn(
      "rounded-[var(--radius-control-sm)] underline decoration-[var(--lilt-border-strong)] underline-offset-4 outline-none transition-[text-decoration-color] duration-[var(--duration-fast)] hover:decoration-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] data-[popup-open]:decoration-[var(--lilt-text)]",
      className
    )}
    closeDelay={closeDelay}
    delay={delay}
    {...props}
  />
);

export const HoverCardContent = ({
  children,
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof BasePreviewCard.Positioner>) => (
  <BasePreviewCard.Portal>
    <BasePreviewCard.Positioner
      className="z-50"
      sideOffset={sideOffset}
      {...props}
    >
      <BasePreviewCard.Popup
        className={cn(
          "w-72 origin-[var(--transform-origin)] rounded-[var(--radius-card)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] p-4 text-[var(--lilt-text)] outline-none transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:translate-y-1 data-[starting-style]:scale-[0.985] data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:scale-[0.985] data-[ending-style]:opacity-0",
          className
        )}
      >
        {children}
      </BasePreviewCard.Popup>
    </BasePreviewCard.Positioner>
  </BasePreviewCard.Portal>
);
