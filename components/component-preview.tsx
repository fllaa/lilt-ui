import fs from "node:fs";
import path from "node:path";

import { CodeBlock } from "@/components/code-block";
import { demos } from "@/registry/lilt/demos";

export const DemoFrame = ({ name }: { name: string }) => {
  const Demo = demos[name];
  if (!Demo) {
    return null;
  }
  return (
    <div className="flex min-h-64 min-w-0 items-center justify-center overflow-x-auto rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-canvas)] p-8">
      <Demo />
    </div>
  );
};

export const ComponentPreview = ({ name }: { name: string }) => {
  const source = fs.readFileSync(
    path.join(process.cwd(), "registry/lilt/demos", `${name}.tsx`),
    "utf-8"
  );

  return (
    <div className="grid min-w-0 gap-3">
      <DemoFrame name={name} />
      {/* min-w-0: as a grid item, details would otherwise size to the
          widest code line and overflow the page instead of letting the
          CodeBlock scroll. */}
      <details className="group min-w-0">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-[var(--radius-control-sm)] px-2 py-1 text-sm font-semibold text-[var(--lilt-text-muted)] outline-none transition-colors hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)]">
          <span className="group-open:hidden">Show code</span>
          <span className="hidden group-open:inline">Hide code</span>
        </summary>
        <div className="mt-3">
          <CodeBlock code={source} />
        </div>
      </details>
    </div>
  );
};
