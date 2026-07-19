"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/lilt/ui/drawer";
import { MenuIcon } from "@/registry/lilt/ui/icons";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/components/button", label: "Components" },
] as const;

export const SiteMobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Base UI drawers stay open across client-side navigation, so close on route change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <Drawer onOpenChange={setOpen} open={open} side="left">
      <DrawerTrigger
        aria-label="Open navigation menu"
        className="inline-flex aspect-square min-h-10 items-center justify-center rounded-full border border-[var(--lilt-border-strong)] text-[var(--lilt-text)] outline-none transition-colors duration-[var(--duration-fast)] hover:bg-[var(--lilt-surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] md:hidden"
      >
        <MenuIcon size={18} />
      </DrawerTrigger>
      <DrawerContent className="w-[18rem] p-4">
        <DrawerTitle className="px-3 pb-4 text-base">Navigation</DrawerTitle>
        <nav className="flex flex-col gap-1 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              className="rounded-[var(--radius-control-sm)] px-3 py-2 text-[var(--lilt-text-muted)] outline-none transition-colors hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};
