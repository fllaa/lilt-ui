"use client";

import { MoonIcon, SparkIcon, SunIcon } from "@/registry/lilt/ui/icons";
import { Kbd } from "@/registry/lilt/ui/kbd";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/lilt/ui/sidebar";

export default function SidebarDemo() {
  return (
    <SidebarProvider className="h-[400px] min-h-0 w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--lilt-border)]">
      <Sidebar>
        <SidebarHeader>
          <div className="flex min-h-11 items-center gap-3 px-3 group-data-[state=collapsed]/sidebar:justify-center group-data-[state=collapsed]/sidebar:px-0">
            <SparkIcon
              className="shrink-0 text-[var(--lilt-primary-text)]"
              size={20}
            />
            <span className="font-display text-lg font-semibold tracking-[-0.02em] group-data-[state=collapsed]/sidebar:hidden">
              Lilt
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Garden</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <SunIcon size={18} />
                  <span>Morning beds</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MoonIcon size={18} />
                  <span>Night blooms</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SparkIcon size={18} />
                  <span>Wish list</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p className="px-3 text-xs text-[var(--lilt-text-subtle)] group-data-[state=collapsed]/sidebar:hidden">
            Planted with care.
          </p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 border-b border-[var(--lilt-border)] p-3">
          <SidebarTrigger />
          <Kbd>⌘B</Kbd>
        </header>
        <p className="p-6 text-sm leading-relaxed text-[var(--lilt-text-muted)]">
          The rail folds down to a tidy row of icons — press the trigger or ⌘B
          and watch it tuck itself in for the night.
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
}
