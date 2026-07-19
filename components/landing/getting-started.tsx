import { CodeBlock } from "@/components/code-block";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineTitle,
} from "@/registry/lilt/ui/timeline";

import { Section, SectionHeading } from "./section";

const steps: { code: string; lang: string; text: string; title: string }[] = [
  {
    code: `{
  "registries": {
    "@lilt": "https://lilt-ui.vercel.app/r/{name}.json"
  }
}`,
    lang: "json",
    text: "Point the shadcn CLI at the LiltUI registry once, in your components.json. Works in any React project with Tailwind v4 — Next.js, Vite, and anything the CLI supports.",
    title: "Register the @lilt namespace",
  },
  {
    code: "npx shadcn add @lilt/theme",
    lang: "bash",
    text: "Pull in the Lilt design tokens for light and dark, then load Space Grotesk + DM Sans and wrap your app in the theme-provider.",
    title: "Add the theme",
  },
  {
    code: "npx shadcn add @lilt/button @lilt/field @lilt/dialog",
    lang: "bash",
    text: "Add components by name. Dependencies and any missing theme variables merge in automatically, and Base UI is installed as needed.",
    title: "Add the components you need",
  },
  {
    code: `import { Button } from "@/components/ui/button";

export const Ship = () => <Button icon="arrow">Ship it</Button>;`,
    lang: "tsx",
    text: "The source now lives in your repo. Read it, restyle it, delete what you don't use — it's yours, with no version to fight.",
    title: "Own the code",
  },
];

export const GettingStarted = () => (
  <Section className="bg-[var(--lilt-surface)]" id="installation">
    <SectionHeading
      description="From zero to your first component in four small steps."
      eyebrow="Getting started"
      title="Install what you want, own what you keep"
    />
    <Timeline className="mt-12 max-w-2xl">
      {steps.map((step, index) => (
        <TimelineItem key={step.title}>
          <TimelineDot variant="mint" />
          {index < steps.length - 1 ? <TimelineConnector /> : null}
          <TimelineContent className="gap-3 pb-10">
            <TimelineTitle className="font-display text-lg tracking-[-0.02em]">
              {step.title}
            </TimelineTitle>
            <p className="text-sm leading-relaxed text-[var(--lilt-text-muted)]">
              {step.text}
            </p>
            <CodeBlock code={step.code} lang={step.lang} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Section>
);
