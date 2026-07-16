"use client";

import { ScrollArea } from "@/registry/lilt/ui/scroll-area";

const gardenNotes = [
  { day: "Apr 02", note: "Sowed the snap peas. Whispered encouragement." },
  { day: "Apr 04", note: "First radish sprout. Named it Ravi." },
  { day: "Apr 07", note: "The basil forgave us for last week's drought." },
  { day: "Apr 09", note: "Squirrel inspection passed, barely." },
  { day: "Apr 11", note: "Tomato seedlings potted up. They seem smug." },
  { day: "Apr 13", note: "Rain did the watering. Took the day off." },
  { day: "Apr 15", note: "Mint is plotting an escape. Contained for now." },
  { day: "Apr 17", note: "Thinned the carrots. Apologized to each one." },
  { day: "Apr 19", note: "Ladybug spotted on the roses. Hired on sight." },
  { day: "Apr 21", note: "Staked the peas. They immediately leaned left." },
  { day: "Apr 23", note: "Compost turned. Smells like progress." },
  { day: "Apr 25", note: "Zucchini planted. Told no one. They'll know soon." },
  { day: "Apr 27", note: "Slug summit held at dusk. Talks broke down." },
  { day: "Apr 29", note: "Sunflowers up. Already taller than the radishes." },
  { day: "May 01", note: "Mulched the beds. Everything looks tucked in." },
  { day: "May 03", note: "First strawberry blossom. Guarding it closely." },
  {
    day: "May 05",
    note: "Ravi the radish was harvested. A moment of silence.",
  },
  { day: "May 07", note: "Beans are climbing the wrong trellis. Respect." },
  { day: "May 09", note: "Watered at dawn. The quiet was the real harvest." },
  { day: "May 11", note: "Lettuce ready. Dinner tastes like showing off." },
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 w-full max-w-sm rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)]">
      <div className="p-4">
        <p className="pb-3 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
          Garden notes
        </p>
        <ul className="flex flex-col divide-y divide-[var(--lilt-border)]">
          {gardenNotes.map((entry) => (
            <li className="flex items-baseline gap-3 py-2.5" key={entry.day}>
              <span className="w-14 shrink-0 font-display text-xs font-semibold text-[var(--lilt-text-subtle)]">
                {entry.day}
              </span>
              <span className="text-sm leading-relaxed text-[var(--lilt-text)]">
                {entry.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
}
