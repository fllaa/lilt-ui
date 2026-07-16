import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { docEntries, getDocEntry } from "@/lib/docs";

export const generateStaticParams = () =>
  docEntries.map((entry) => ({ name: entry.name }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> => {
  const { name } = await params;
  const entry = getDocEntry(name);
  return { title: `${entry?.title ?? name} — Lilt UI` };
};

const a11yNotes: Record<string, string[]> = {
  accordion: [
    "Triggers are buttons inside headings; arrow keys move between them.",
  ],
  button: [
    "Icon-only buttons require an aria-label.",
    "Focus ring is a 2px Lilt-green ring with a 2px offset, visible in both modes.",
  ],
  dialog: [
    "Focus moves into the dialog on open and returns to the trigger on close.",
    "Escape closes. The title is announced via the dialog's accessible name.",
  ],
  "dropdown-menu": [
    "Full keyboard navigation with type-ahead. Danger items are styled, not hidden.",
  ],
  field: [
    "Labels, descriptions, and errors are wired to the control automatically — no manual ids.",
    "Errors set aria-invalid on the control, which flips the border to the danger token.",
  ],
  "input-otp": [
    "Acts as one field: paste fills every slot, Backspace walks backward, SMS autofill works via one-time-code.",
    "Slots after the first carry 'Character N of L' labels so focus position is announced.",
  ],
  "number-field": [
    "Arrow keys step, Shift+Arrow steps by 10; values clamp to min/max and steppers repeat on hold.",
    "The scrub label still works as a plain label for assistive tech — scrubbing is pointer-only sugar.",
  ],
  select: [
    "Full keyboard support: arrows, type-ahead, Home/End, Escape.",
    "The trigger needs an aria-label when used without a visible label — or wrap it in a Field.",
  ],
  slider: [
    "Each thumb is a native range input: arrows step, Shift+Arrow large-steps, Home/End jump.",
    "Label single sliders with SliderLabel; pass thumbLabels for ranges.",
  ],
  tabs: [
    "Arrow keys move between tabs; the panel is focusable and rings on focus.",
    "The active pill glides between tabs; reduced-motion mode makes the change instant.",
  ],
  toast: [
    "Toasts are announced politely by screen readers and pause on hover or focus.",
    "F6 moves focus into the toast viewport; swipe or the close button dismisses.",
  ],
  toggle: [
    "Uses aria-pressed — keep the label identical in both states and let the style change.",
    "Icon-only toggles require an aria-label.",
  ],
  "toggle-group": [
    "One tab stop; arrow keys move between options.",
    "The group needs an aria-label; each icon-only item needs its own.",
  ],
  tooltip: ["Appears on focus as well as hover, and never traps the pointer."],
};

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const entry = getDocEntry(name);
  if (!entry) {
    notFound();
  }

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
