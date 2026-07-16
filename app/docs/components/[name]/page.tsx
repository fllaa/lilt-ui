import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { docEntries, getDocEntry } from "@/lib/docs";

export function generateStaticParams() {
  return docEntries.map((entry) => ({ name: entry.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const entry = getDocEntry(name);
  return { title: `${entry?.title ?? name} — Lilt UI` };
}

const a11yNotes: Record<string, string[]> = {
  button: [
    "Icon-only buttons require an aria-label.",
    "Focus ring is a 2px Lilt-green ring with a 2px offset, visible in both modes.",
  ],
  dialog: [
    "Focus moves into the dialog on open and returns to the trigger on close.",
    "Escape closes. The title is announced via the dialog's accessible name.",
  ],
  select: [
    "Full keyboard support: arrows, type-ahead, Home/End, Escape.",
    "The trigger needs an aria-label when used without a visible label — or wrap it in a Field.",
  ],
  field: [
    "Labels, descriptions, and errors are wired to the control automatically — no manual ids.",
    "Errors set aria-invalid on the control, which flips the border to the danger token.",
  ],
  toast: [
    "Toasts are announced politely by screen readers and pause on hover or focus.",
    "F6 moves focus into the toast viewport; swipe or the close button dismisses.",
  ],
  tabs: [
    "Arrow keys move between tabs; the panel is focusable and rings on focus.",
  ],
  accordion: [
    "Triggers are buttons inside headings; arrow keys move between them.",
  ],
  tooltip: [
    "Appears on focus as well as hover, and never traps the pointer.",
  ],
  "segmented-nav": [
    "Selected item carries aria-current=\"page\". Use href items for real navigation.",
  ],
  "dropdown-menu": [
    "Full keyboard navigation with type-ahead. Danger items are styled, not hidden.",
  ],
};

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const entry = getDocEntry(name);
  if (!entry) notFound();

  const notes = a11yNotes[name];

  return (
    <article className="grid max-w-3xl gap-8">
      <header className="grid gap-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-primary-text)]">
          {entry.pack}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.035em]">
          {entry.title}
        </h1>
        <p className="text-lg leading-relaxed text-[var(--lilt-text-muted)]">
          {entry.description}
        </p>
      </header>

      <ComponentPreview name={entry.name} />

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          Installation
        </h2>
        <CodeBlock
          code={`npx shadcn@latest add @lilt/${entry.name}`}
          lang="bash"
        />
      </section>

      {notes ? (
        <section className="grid gap-3">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
            Accessibility
          </h2>
          <ul className="grid gap-2 leading-relaxed text-[var(--lilt-text-muted)]">
            {notes.map((note) => (
              <li className="flex gap-3" key={note}>
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--lilt-primary)]"
                />
                {note}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
