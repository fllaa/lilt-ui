import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/lilt/ui/resizable";

export default function ResizableDemo() {
  return (
    <div className="h-64 w-full max-w-2xl overflow-hidden rounded-[var(--radius-card)] border border-[var(--lilt-border)]">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel
          className="flex items-center justify-center"
          defaultSize="30"
          minSize="20"
        >
          <p className="text-sm text-[var(--lilt-text-muted)]">Seed drawer</p>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize="30">
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel className="flex items-center justify-center">
              <p className="text-sm text-[var(--lilt-text-muted)]">
                Potting bench
              </p>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="flex items-center justify-center">
              <p className="text-sm text-[var(--lilt-text-muted)]">
                Garden notes
              </p>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
