"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/lilt/lib/utils";

interface SidebarGroup {
  pack: string;
  entries: { name: string; title: string }[];
}

const guides = [
  { href: "/docs", title: "Introduction" },
  { href: "/docs/installation", title: "Installation" },
  { href: "/docs/theming", title: "Theming" },
];

export function DocsSidebar({ groups }: { groups: SidebarGroup[] }) {
  const pathname = usePathname();

  const linkClassName = (active: boolean) =>
    cn(
      "block rounded-[var(--radius-control-sm)] px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]",
      active
        ? "bg-[var(--lilt-primary-soft)] font-semibold text-[var(--lilt-primary-text)]"
        : "text-[var(--lilt-text-muted)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)]",
    );

  return (
    <nav aria-label="Docs" className="grid content-start gap-6">
      <div className="grid gap-1">
        <p className="px-3 pb-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-subtle)]">
          Guides
        </p>
        {guides.map((guide) => (
          <Link
            aria-current={pathname === guide.href ? "page" : undefined}
            className={linkClassName(pathname === guide.href)}
            href={guide.href}
            key={guide.href}
          >
            {guide.title}
          </Link>
        ))}
      </div>
      {groups.map((group) => (
        <div className="grid gap-1" key={group.pack}>
          <p className="px-3 pb-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-subtle)]">
            {group.pack}
          </p>
          {group.entries.map((entry) => {
            const href = `/docs/components/${entry.name}`;
            return (
              <Link
                aria-current={pathname === href ? "page" : undefined}
                className={linkClassName(pathname === href)}
                href={href}
                key={entry.name}
              >
                {entry.title}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
