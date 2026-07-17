"use client";

import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { ChevronIcon } from "@/registry/lilt/ui/icons";

export const NavigationMenu = ({
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Root>) => (
  <BaseNavigationMenu.Root className={cn("min-w-max", className)} {...props} />
);

export const NavigationMenuList = ({
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.List>) => (
  <BaseNavigationMenu.List
    className={cn(
      "relative flex w-fit list-none items-center gap-1 rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1",
      className
    )}
    {...props}
  />
);

export const NavigationMenuItem = (
  props: ComponentProps<typeof BaseNavigationMenu.Item>
) => <BaseNavigationMenu.Item {...props} />;

export const NavigationMenuTrigger = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Trigger>) => (
  <BaseNavigationMenu.Trigger
    className={cn(
      "inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none select-none transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] data-[popup-open]:bg-[var(--lilt-button)] data-[popup-open]:text-[var(--lilt-button-text)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
      className
    )}
    {...props}
  >
    {children}
    <BaseNavigationMenu.Icon className="flex transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] data-[popup-open]:rotate-180">
      <ChevronIcon size={16} />
    </BaseNavigationMenu.Icon>
  </BaseNavigationMenu.Trigger>
);

export const NavigationMenuContent = ({
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Content>) => (
  <BaseNavigationMenu.Content
    className={cn(
      "h-full w-[calc(100vw-2.5rem)] p-2 sm:w-max sm:max-w-lg",
      "transition-[opacity,transform,translate] duration-[var(--duration-base)] ease-[var(--ease-out)]",
      "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
      "data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%]",
      "data-[starting-style]:data-[activation-direction=right]:translate-x-[50%]",
      "data-[ending-style]:data-[activation-direction=left]:translate-x-[50%]",
      "data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]",
      className
    )}
    {...props}
  />
);

const VIEWPORT_COLLISION_PADDING = { bottom: 8, left: 16, right: 16, top: 8 };
// "none" keeps the panel from flipping sides mid-slide while it morphs.
const VIEWPORT_COLLISION_AVOIDANCE = { side: "none" } as const;

export const NavigationMenuViewport = ({
  className,
  sideOffset = 8,
  collisionPadding = VIEWPORT_COLLISION_PADDING,
  collisionAvoidance = VIEWPORT_COLLISION_AVOIDANCE,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Positioner>) => (
  <BaseNavigationMenu.Portal>
    <BaseNavigationMenu.Positioner
      className={cn(
        "z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[instant]:transition-none",
        // Hover bridge: an invisible strip spanning the gap between the
        // trigger rail and the panel so the pointer never "leaves" the menu.
        "before:absolute before:content-[''] data-[side=bottom]:before:top-[-8px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2",
        className
      )}
      collisionAvoidance={collisionAvoidance}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      {...props}
    >
      {/* h/w popup vars are load-bearing: they drive the resize morph. */}
      <BaseNavigationMenu.Popup className="relative h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] rounded-[var(--radius-card)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] text-[var(--lilt-text)] outline-none transition-[opacity,transform,width,height,scale] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:scale-[0.985] data-[starting-style]:opacity-0 data-[ending-style]:scale-[0.985] data-[ending-style]:opacity-0">
        <BaseNavigationMenu.Viewport className="relative h-full w-full overflow-hidden rounded-[inherit]" />
      </BaseNavigationMenu.Popup>
    </BaseNavigationMenu.Positioner>
  </BaseNavigationMenu.Portal>
);

export const NavigationMenuLink = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Link>) => (
  <BaseNavigationMenu.Link
    className={cn(
      "block rounded-[var(--radius-control-sm)] p-3 text-sm no-underline outline-none transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-inset data-[active]:bg-[var(--lilt-primary-soft)] data-[active]:text-[var(--lilt-primary-text)]",
      className
    )}
    {...props}
  >
    {children}
  </BaseNavigationMenu.Link>
);
