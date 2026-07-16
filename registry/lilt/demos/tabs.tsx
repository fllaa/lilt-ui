"use client";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/lilt/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs className="w-full max-w-md" defaultValue="write">
      <TabsList>
        <TabsTab value="write">Write</TabsTab>
        <TabsTab value="preview">Preview</TabsTab>
        <TabsTab value="history">History</TabsTab>
      </TabsList>
      <TabsPanel
        className="text-sm leading-relaxed text-[var(--lilt-text-muted)]"
        value="write"
      >
        Draft in peace. Nothing autosubmits, nothing rushes you.
      </TabsPanel>
      <TabsPanel
        className="text-sm leading-relaxed text-[var(--lilt-text-muted)]"
        value="preview"
      >
        Exactly what readers will see, in the same warm light.
      </TabsPanel>
      <TabsPanel
        className="text-sm leading-relaxed text-[var(--lilt-text-muted)]"
        value="history"
      >
        Every version kept. Restore anything with one click.
      </TabsPanel>
    </Tabs>
  );
}
