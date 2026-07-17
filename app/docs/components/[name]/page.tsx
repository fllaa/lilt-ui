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
  return { title: `${entry?.title ?? name} — LiltUI` };
};

const a11yNotes: Record<string, string[]> = {
  accordion: [
    "Triggers are buttons inside headings; arrow keys move between them.",
  ],
  "alert-dialog": [
    "Focus is trapped and clicking the backdrop does not dismiss — the user must pick an action.",
    "Announced as role=alertdialog, named by its title.",
  ],
  autocomplete: [
    "Combobox semantics on a free-text input: suggestions are optional, arrows navigate, Escape closes — what you typed always stands.",
    "Give it a visible label or wrap it in a Field; the clear button carries its own aria-label.",
  ],
  button: [
    "Icon-only buttons require an aria-label.",
    "Focus ring is a 2px Lilt-green ring with a 2px offset, visible in both modes.",
  ],
  calendar: [
    "A real date grid: arrow keys move by day, PageUp/PageDown by month — roving focus comes from react-day-picker.",
    "Today is marked with a border, not color alone; selected days announce via aria-selected and the nav buttons carry labels.",
  ],
  carousel: [
    "A labeled region (aria-roledescription='carousel'); each slide announces as 'slide' and arrow keys scroll once focused.",
    "Previous/Next are real buttons with labels and honest disabled states; if you add autoplay, pause it on hover and focus.",
  ],
  chart: [
    "The demo enables recharts' accessibilityLayer, so charts are keyboard-navigable and announce data points; give each ChartContainer an aria-label.",
    "Series never rely on hue alone — the tooltip and legend carry text labels, and the five chart tokens keep contrast in both modes.",
  ],
  "checkbox-group": [
    "Label the group with aria-labelledby and a sibling heading; each item's enclosing label makes the whole row clickable.",
    "The parent checkbox reports mixed state as indeterminate — announced as 'mixed', shown as Lilt's minus.",
  ],
  collapsible: [
    "The trigger is a real button with aria-expanded and aria-controls wired automatically.",
    "hiddenUntilFound lets browser find-in-page open the panel.",
  ],
  combobox: [
    "A real text input with combobox semantics — arrows navigate, Enter selects, Escape closes.",
    "Give it a visible label or wrap it in a Field; the clear and open buttons carry their own aria-labels.",
  ],
  command: [
    "One dialog, one combobox: focus lands in the search input, arrows walk the list, Enter runs the highlighted command, Escape closes.",
    "The empty state is announced politely, and the trigger advertises the ⌘K shortcut as text, not just a glyph.",
  ],
  "context-menu": [
    "Long-press opens it on touch; arrow keys and type-ahead navigate once open.",
    "Context menus are a shortcut, not the only path — mirror actions somewhere clickable.",
  ],
  "data-table": [
    "Sortable headers are real buttons inside th elements, and the th carries aria-sort so the current order is announced.",
    "Row checkboxes carry per-row labels, the header checkbox announces its 'some selected' mixed state, and Previous/Next keep text labels.",
  ],
  "date-picker": [
    "The trigger is a real button whose accessible name includes the chosen date; Escape closes the popover and returns focus to it.",
    "Pair it with a visible Label (or aria-label) so the empty 'Pick a date' state still announces the field's purpose.",
  ],
  dialog: [
    "Focus moves into the dialog on open and returns to the trigger on close.",
    "Escape closes. The title is announced via the dialog's accessible name.",
  ],
  drawer: [
    "Same semantics as Dialog — focus trap, Escape closes, the title names the surface.",
    "Swipe toward its edge to dismiss on touch; the close button always works too.",
  ],
  "dropdown-menu": [
    "Full keyboard navigation with type-ahead. Danger items are styled, not hidden.",
  ],
  "empty-state": [
    "The title is a real heading, so screen-reader users can jump to it.",
    "The icon slot is decorative (aria-hidden) — meaning lives in the text.",
  ],
  field: [
    "Labels, descriptions, and errors are wired to the control automatically — no manual ids.",
    "Errors set aria-invalid on the control, which flips the border to the danger token.",
  ],
  fieldset: [
    "A native fieldset: the legend names the whole group, so screen readers announce it before each field inside.",
    "Disabling the fieldset disables every control in it — one prop, no per-field bookkeeping.",
  ],
  "file-upload": [
    "The keyboard and screen-reader path is the real file input inside the label — Enter/Space opens the picker; drag-and-drop is pointer-only sugar.",
    "Adds and removes are announced politely, and each remove button names its file.",
  ],
  form: [
    "Consolidated error handling: after submit, focus moves to the first invalid field and each error is tied to its control via Field.",
    "Server errors passed through the errors prop are announced the same way as client-side ones — one system, no custom wiring.",
  ],
  "hover-card": [
    "Opens on keyboard focus as well as hover; Escape dismisses.",
    "Touch users never see the preview — the link must stand on its own.",
  ],
  "input-otp": [
    "Acts as one field: paste fills every slot, Backspace walks backward, SMS autofill works via one-time-code.",
    "Slots after the first carry 'Character N of L' labels so focus position is announced.",
  ],
  kbd: [
    "Real <kbd> elements — key names are plain text for screen readers.",
    "Prefer text like 'Ctrl' over symbol-only glyphs for ambiguous keys.",
  ],
  menubar: [
    "One tab stop for the whole bar; arrows move across menus, Escape backs out level by level.",
    "Triggers expose aria-haspopup and aria-expanded automatically.",
  ],
  meter: [
    "Announced as a meter named by its label, with the current value exposed via aria-valuenow and formatted text.",
    "Unlike Progress there is no indeterminate state — a meter always reports a real value within its range.",
  ],
  "navigation-menu": [
    "A real nav landmark: Tab reaches each trigger, Enter/Space or hover opens, Escape closes, and links inside are plain anchors.",
    "The panel's slide and resize animations collapse to instant cuts under prefers-reduced-motion — the theme handles it globally.",
  ],
  "number-field": [
    "Arrow keys step, Shift+Arrow steps by 10; values clamp to min/max and steppers repeat on hold.",
    "The scrub label still works as a plain label for assistive tech — scrubbing is pointer-only sugar.",
  ],
  pagination: [
    "A nav landmark labeled 'Pagination'; the current page carries aria-current=page.",
    "Previous and Next keep text labels, not just arrows.",
  ],
  progress: [
    "Announced as a progressbar named by its label; the value is exposed via aria-valuenow.",
    "value={null} renders indeterminate — it announces as busy, not as 0%.",
  ],
  rating: [
    "Each star is a real radio labelled '1 star' through '5 stars' — one Tab stop, arrow keys adjust.",
    "readOnly mode renders role='img' named 'N of 5 stars'; the star glyphs themselves are decorative.",
  ],
  resizable: [
    "Each handle is a real role='separator' with aria-valuenow — arrow keys resize, Home/End snap, and it shows the lilt focus ring.",
    "The visible line is 1px but the pointer hit target is widened by the library, keeping drags forgiving.",
  ],
  "scroll-area": [
    "The viewport is keyboard-focusable and shows the lilt focus ring, so arrow keys scroll.",
    "Scrolling stays native underneath — screen readers and trackpads behave normally.",
  ],
  select: [
    "Full keyboard support: arrows, type-ahead, Home/End, Escape.",
    "The trigger needs an aria-label when used without a visible label — or wrap it in a Field.",
  ],
  sidebar: [
    "Collapsing hides labels visually but keeps them for screen readers; the active item carries aria-current='page'.",
    "Cmd/Ctrl+B toggles it; on mobile the sidebar becomes a drawer with full dialog semantics — focus trap, Escape closes.",
  ],
  slider: [
    "Each thumb is a native range input: arrows step, Shift+Arrow large-steps, Home/End jump.",
    "Label single sliders with SliderLabel; pass thumbLabels for ranges.",
  ],
  spinner: [
    "Announces 'Loading' via role=status; pass label to change it, or label={null} inside already-labeled buttons.",
    "Reduced-motion users see a static arc instead of a spin.",
  ],
  stepper: [
    "A real ordered list — screen readers announce position and count; the current step carries aria-current='step'.",
    "With onValueChange steps are real buttons; without it nothing is focusable — no dead tab stops in display mode.",
  ],
  tabs: [
    "Arrow keys move between tabs; the panel is focusable and rings on focus.",
    "The active pill glides between tabs; reduced-motion mode makes the change instant.",
  ],
  "tags-input": [
    "The field stays a plain text input — Enter or comma commits, Backspace in an empty field takes the last tag back; changes are announced politely.",
    "Every chip's remove button carries an aria-label naming its tag.",
  ],
  timeline: [
    "An ordered list under the hood — item count and position come free for screen readers.",
    "Dates are real time elements with dateTime; dots and connectors are aria-hidden decoration.",
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
  toolbar: [
    "One tab stop for the whole bar; arrow keys rove between controls and loop at the ends.",
    "Disabled items stay focusable by default so shortcuts stay discoverable; give the bar an aria-label.",
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
