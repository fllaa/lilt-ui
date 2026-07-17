"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import type { SidebarGroup } from "@/components/docs-sidebar";
import { DocsSidebar } from "@/components/docs-sidebar";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/lilt/ui/drawer";
import { MenuIcon } from "@/registry/lilt/ui/icons";

export const DocsMobileNav = ({ groups }: { groups: SidebarGroup[] }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Base UI drawers stay open across client-side navigation, so close on route change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <div className="mb-6 md:hidden">
      <Drawer onOpenChange={setOpen} open={open} side="left">
        <DrawerTrigger className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-control-sm)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] px-3 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)]">
          <MenuIcon size={18} />
          Menu
        </DrawerTrigger>
        <DrawerContent className="w-[18rem] p-4">
          <DrawerTitle className="px-3 pb-4 text-base">Navigation</DrawerTitle>
          <DocsSidebar groups={groups} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
