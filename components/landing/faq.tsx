import { Reveal } from "@/components/landing/motion/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/lilt/ui/accordion";

import { Section, SectionHeading } from "./section";

const faqs: { answer: string; question: string }[] = [
  {
    answer:
      "A shadcn-compatible component registry for the Lilt design language: 63 copy-paste React components built on Base UI and Tailwind v4, with warm paper surfaces, a swappable pine-and-mint accent, hand-drawn icons, and restrained motion.",
    question: "What exactly is LiltUI?",
  },
  {
    answer:
      "Yes. LiltUI is MIT-licensed and the source lives on GitHub. Copy it, ship it commercially, fork it, rename it — no strings attached.",
    question: "Is it free and open source?",
  },
  {
    answer:
      "No. Instead of an npm dependency, the shadcn CLI copies each component's source into your project. You own every line, so you can read it, edit it, and never fight a version bump.",
    question: "Do I install it from npm?",
  },
  {
    answer:
      "Not really. Base UI powers accessibility and interaction under the hood, but you work with LiltUI's styled components. It's installed automatically whenever a component needs it.",
    question: "Do I need to know Base UI?",
  },
  {
    answer:
      "Override five semantic tokens (--lilt-primary, --lilt-primary-tint, --lilt-primary-soft, --lilt-primary-text, and --lilt-focus) in both light and dark. Every component follows along; no per-component edits.",
    question: "How do I change the accent?",
  },
  {
    answer:
      "Anything the shadcn CLI supports with Tailwind v4 — Next.js, Vite, React Router, and more. Components are plain React reading semantic CSS variables, so they drop into most stacks.",
    question: "Which frameworks does it work with?",
  },
  {
    answer:
      "Yes. Every interactive component builds on Base UI primitives for focus, keyboard, and ARIA, and each component page ships hand-written accessibility notes.",
    question: "Is it accessible?",
  },
];

export const Faq = () => (
  <Section id="faq">
    <SectionHeading
      description="The fine print, without the fine print."
      eyebrow="FAQ"
      title="Questions, answered plainly"
    />
    <Reveal as="div" className="mt-10 max-w-3xl">
      <Accordion multiple={false}>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionPanel>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  </Section>
);
