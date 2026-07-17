import type { ReactNode } from "react";

import { DocsMobileNav } from "@/components/docs-mobile-nav";
import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";
import { docsByPack } from "@/lib/docs";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-10 md:grid-cols-[13rem_1fr]">
        <aside className="hidden md:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <DocsSidebar groups={docsByPack} />
          </div>
        </aside>
        <div className="min-w-0">
          <DocsMobileNav groups={docsByPack} />
          {children}
        </div>
      </div>
    </>
  );
}
