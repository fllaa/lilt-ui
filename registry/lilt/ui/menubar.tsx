"use client";

import { Menu } from "@base-ui/react/menu";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import type { ComponentProps } from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { CheckIcon, ChevronIcon } from "@/registry/lilt/ui/icons";

export const Menubar = ({
  className,
  ...props
}: ComponentProps<typeof BaseMenubar>) => (
  <BaseMenubar
    className={cn(
      "flex w-fit items-center gap-1 rounded-full border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-1",
      className
    )}
    {...props}
  />
);

export const MenubarMenu = (props: ComponentProps<typeof Menu.Root>) => (
  <Menu.Root {...props} />
);

export const MenubarTrigger = ({
  className,
  ...props
}: ComponentProps<typeof Menu.Trigger>) => (
  <Menu.Trigger
    className={cn(
      "inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none select-none transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] data-[popup-open]:bg-[var(--lilt-button)] data-[popup-open]:text-[var(--lilt-button-text)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45",
      className
    )}
    {...props}
  />
);

export const MenubarContent = ({
  children,
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof Menu.Positioner>) => (
  <Menu.Portal>
    <Menu.Positioner className="z-50" sideOffset={sideOffset} {...props}>
      <Menu.Popup
        className={cn(
          "min-w-48 origin-[var(--transform-origin)] rounded-[var(--radius-control)] border border-[var(--lilt-border-strong)] bg-[var(--lilt-surface)] p-1 text-[var(--lilt-text)] outline-none transition-[opacity,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] data-[starting-style]:translate-y-1 data-[starting-style]:scale-[0.985] data-[starting-style]:opacity-0 data-[ending-style]:translate-y-1 data-[ending-style]:scale-[0.985] data-[ending-style]:opacity-0",
          className
        )}
      >
        {children}
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
);

const menuItemClassName =
  "flex min-h-10 cursor-default items-center gap-2 rounded-[var(--radius-control-sm)] px-3 text-sm outline-none select-none data-[highlighted]:bg-[var(--lilt-surface-2)] data-[disabled]:opacity-45";

const dangerItemClassName =
  "text-[var(--lilt-danger-text)] data-[highlighted]:bg-[var(--lilt-danger-soft)]";

export interface MenubarItemProps extends ComponentProps<typeof Menu.Item> {
  /** "danger" styles destructive actions in Lilt's muted brick red. */
  variant?: "default" | "danger";
}

export const MenubarItem = ({
  className,
  variant = "default",
  ...props
}: MenubarItemProps) => (
  <Menu.Item
    className={cn(
      menuItemClassName,
      variant === "danger" && dangerItemClassName,
      className
    )}
    {...props}
  />
);

export const MenubarCheckboxItem = ({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu.CheckboxItem>) => (
  <Menu.CheckboxItem
    className={cn(
      menuItemClassName,
      "grid grid-cols-[1.125rem_1fr] gap-2",
      className
    )}
    {...props}
  >
    <Menu.CheckboxItemIndicator className="col-start-1 flex text-[var(--lilt-primary-text)]">
      <CheckIcon size={16} />
    </Menu.CheckboxItemIndicator>
    <span className="col-start-2 truncate">{children}</span>
  </Menu.CheckboxItem>
);

export const MenubarGroup = (props: ComponentProps<typeof Menu.Group>) => (
  <Menu.Group {...props} />
);

export const MenubarGroupLabel = ({
  className,
  ...props
}: ComponentProps<typeof Menu.GroupLabel>) => (
  <Menu.GroupLabel
    className={cn(
      "px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]",
      className
    )}
    {...props}
  />
);

export const MenubarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Menu.Separator>) => (
  <Menu.Separator
    className={cn("mx-2 my-1 h-px bg-[var(--lilt-border)]", className)}
    {...props}
  />
);

export const MenubarSub = (props: ComponentProps<typeof Menu.SubmenuRoot>) => (
  <Menu.SubmenuRoot {...props} />
);

export const MenubarSubTrigger = ({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu.SubmenuTrigger>) => (
  <Menu.SubmenuTrigger
    className={cn(menuItemClassName, "justify-between", className)}
    {...props}
  >
    {children}
    <ChevronIcon
      className="-rotate-90 text-[var(--lilt-text-subtle)]"
      size={16}
    />
  </Menu.SubmenuTrigger>
);
