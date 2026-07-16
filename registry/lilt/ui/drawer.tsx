"use client";

import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";
import { createContext, useContext } from "react";

import { cn } from "@/registry/lilt/lib/utils";

type DrawerSide = "bottom" | "right" | "left";

const DrawerSideContext = createContext<DrawerSide>("bottom");

const swipeDirections = {
  bottom: "down",
  left: "left",
  right: "right",
} as const;

export interface DrawerProps extends ComponentProps<typeof BaseDrawer.Root> {
  /** Edge the drawer slides in from. Swipe-to-dismiss follows along. */
  side?: DrawerSide;
}

export const Drawer = ({ side = "bottom", ...props }: DrawerProps) => (
  <DrawerSideContext.Provider value={side}>
    <BaseDrawer.Root swipeDirection={swipeDirections[side]} {...props} />
  </DrawerSideContext.Provider>
);

export const DrawerTrigger = (
  props: ComponentProps<typeof BaseDrawer.Trigger>
) => <BaseDrawer.Trigger {...props} />;

export const DrawerClose = (props: ComponentProps<typeof BaseDrawer.Close>) => (
  <BaseDrawer.Close {...props} />
);

const viewportSideClassNames: Record<DrawerSide, string> = {
  bottom: "items-end justify-center",
  left: "justify-start",
  right: "justify-end",
};

const popupSideClassNames: Record<DrawerSide, string> = {
  bottom:
    "max-h-[85vh] w-full rounded-t-[var(--radius-dialog)] border-t [transform:translateY(var(--drawer-swipe-movement-y))] data-[starting-style]:[transform:translateY(100%)] data-[ending-style]:[transform:translateY(100%)]",
  left: "h-full w-[min(92vw,24rem)] border-r [transform:translateX(var(--drawer-swipe-movement-x))] data-[starting-style]:[transform:translateX(-100%)] data-[ending-style]:[transform:translateX(-100%)]",
  right:
    "h-full w-[min(92vw,24rem)] border-l [transform:translateX(var(--drawer-swipe-movement-x))] data-[starting-style]:[transform:translateX(100%)] data-[ending-style]:[transform:translateX(100%)]",
};

export const DrawerContent = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseDrawer.Popup>) => {
  const side = useContext(DrawerSideContext);

  return (
    <BaseDrawer.Portal>
      <BaseDrawer.Backdrop className="fixed inset-0 z-50 bg-[rgba(8,12,9,0.68)] opacity-[calc(1-var(--drawer-swipe-progress))] backdrop-blur-[2px] transition-opacity duration-[var(--duration-base)] ease-[var(--ease-out)] data-[swiping]:transition-none data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
      <BaseDrawer.Viewport
        className={cn("fixed inset-0 z-50 flex", viewportSideClassNames[side])}
      >
        <BaseDrawer.Popup
          className={cn(
            "overflow-y-auto overscroll-contain border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-6 text-[var(--lilt-text)] outline-none transition-transform duration-[var(--duration-expressive)] ease-[var(--ease-out)] data-[swiping]:select-none data-[swiping]:transition-none",
            popupSideClassNames[side],
            className
          )}
          {...props}
        >
          <BaseDrawer.Content>{children}</BaseDrawer.Content>
        </BaseDrawer.Popup>
      </BaseDrawer.Viewport>
    </BaseDrawer.Portal>
  );
};

export const DrawerHandle = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    aria-hidden="true"
    className={cn(
      "mx-auto mb-4 h-1.5 w-10 rounded-full bg-[var(--lilt-border)]",
      className
    )}
    {...props}
  />
);

export const DrawerTitle = ({
  className,
  ...props
}: ComponentProps<typeof BaseDrawer.Title>) => (
  <BaseDrawer.Title
    className={cn(
      "font-display text-2xl font-semibold tracking-[-0.035em]",
      className
    )}
    {...props}
  />
);

export const DrawerDescription = ({
  className,
  ...props
}: ComponentProps<typeof BaseDrawer.Description>) => (
  <BaseDrawer.Description
    className={cn(
      "mt-3 max-w-[44ch] leading-7 text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const DrawerFooter = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("mt-6 flex flex-wrap items-center gap-3", className)}
    {...props}
  />
);
