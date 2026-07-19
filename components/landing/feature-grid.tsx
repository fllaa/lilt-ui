import type { ComponentType } from "react";

import { Card, CardDescription, CardTitle } from "@/registry/lilt/ui/card";
import {
  CheckIcon,
  FileIcon,
  GripIcon,
  MoonIcon,
  SearchIcon,
  SparkIcon,
} from "@/registry/lilt/ui/icons";
import type { IconProps } from "@/registry/lilt/ui/icons";

import { Section, SectionHeading } from "./section";

const features: {
  description: string;
  icon: ComponentType<IconProps>;
  title: string;
}[] = [
  {
    description:
      "Every interactive component is a Base UI primitive underneath — focus management, keyboard navigation, and ARIA handled for you, with hand-written accessibility notes on each component page.",
    icon: CheckIcon,
    title: "Accessible on Base UI",
  },
  {
    description:
      "Components aren't installed from npm. The shadcn CLI copies the source into your project, so you can read every line, edit freely, and never fight a version bump.",
    icon: FileIcon,
    title: "You own every line",
  },
  {
    description:
      "The pale-mint accent is a guest, not a landlord. Swap four semantic tokens — primary, soft, text, and focus — and the whole registry rebrands with you.",
    icon: SparkIcon,
    title: "Rebrand with four tokens",
  },
  {
    description:
      "Full semantic token sets ship for both modes. Long-form text stays AAA-minded near-black on near-white; pastels carry status and personality only.",
    icon: MoonIcon,
    title: "Light and dark, both tuned",
  },
  {
    description:
      "Hierarchy comes from 1px borders and warm surface shifts. Nothing floats, nothing looms — and hover motion is capped at one 2px lift, removed entirely under reduced-motion.",
    icon: GripIcon,
    title: "Borders, not shadows",
  },
  {
    description:
      "Ships /llms.txt and a /context7.json manifest generated straight from the registry, so coding assistants can index LiltUI and install components accurately.",
    icon: SearchIcon,
    title: "Built to be AI-discoverable",
  },
];

export const FeatureGrid = () => (
  <Section>
    <SectionHeading
      description="Precise structure, restrained motion, and copy-paste ownership — the Lilt design language, distilled into components you can trust and reshape."
      eyebrow="Why LiltUI"
      title="Opinionated where it counts, yours everywhere else"
    />
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Card className="grid gap-3" interactive key={feature.title}>
            <span className="flex size-10 items-center justify-center rounded-[var(--radius-control-sm)] bg-[var(--lilt-primary-soft)] text-[var(--lilt-primary-text)]">
              <Icon size={20} />
            </span>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        );
      })}
    </div>
  </Section>
);
