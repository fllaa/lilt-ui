import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/registry/lilt/ui/timeline";

export default function TimelineDemo() {
  return (
    <Timeline className="w-full max-w-sm">
      <TimelineItem>
        <TimelineDot variant="mint" />
        <TimelineConnector />
        <TimelineContent>
          <TimelineTitle>Shipped the combobox</TimelineTitle>
          <TimelineTime dateTime="2026-07-01">July 1</TimelineTime>
          <p className="text-sm leading-relaxed text-[var(--lilt-text-muted)]">
            Planted, watered, and released into the wild.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineConnector />
        <TimelineContent>
          <TimelineTitle>Wrote the docs</TimelineTitle>
          <TimelineTime dateTime="2026-07-08">July 8</TimelineTime>
          <p className="text-sm leading-relaxed text-[var(--lilt-text-muted)]">
            Every prop pressed neatly, like flowers in a notebook.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="danger" />
        <TimelineContent>
          <TimelineTitle>Broke the build, briefly</TimelineTitle>
          <TimelineTime dateTime="2026-07-15">July 15</TimelineTime>
          <p className="text-sm leading-relaxed text-[var(--lilt-text-muted)]">
            A rogue semicolon. We do not speak of it.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
