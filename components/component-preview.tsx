import fs from "node:fs";
import path from "node:path";
import { CodeBlock } from "@/components/code-block";
import { demos } from "@/registry/lilt/demos";

export function DemoFrame({ name }: { name: string }) {
  const Demo = demos[name];
  if (!Demo) return null;
  return (
    <div className="flex min-h-64 items-center justify-center rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-canvas)] p-8">
      <Demo />
    </div>
  );
}

export function ComponentPreview({ name }: { name: string }) {
  const source = fs.readFileSync(
    path.join(process.cwd(), "registry/lilt/demos", `${name}.tsx`),
    "utf8",
  );

  return (
    <div className="grid gap-3">
      <DemoFrame name={name} />
      <details className="group">
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
}
