"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/registry/lilt/ui/navigation-menu";

interface PanelLink {
  title: string;
  description: string;
  href: string;
  active?: boolean;
}

const productLinks: PanelLink[] = [
  {
    description: "Paper that forgives second thoughts.",
    href: "#journals",
    title: "Journals",
  },
  {
    description: "Weeks laid out like tidy garden beds.",
    href: "#planners",
    title: "Planners",
  },
  {
    active: true,
    description: "Four calm colors, zero drama.",
    href: "#ink",
    title: "Ink",
  },
  {
    description: "Tiny rewards for finished chores.",
    href: "#stickers",
    title: "Stickers",
  },
];

const resourceLinks: PanelLink[] = [
  {
    description: "What to write, and when to write it.",
    href: "#planting-guide",
    title: "Planting guide",
  },
  {
    description: "Keep pages crisp through every season.",
    href: "#paper-care",
    title: "Paper care",
  },
  {
    description: "Swap spreads with fellow gardeners.",
    href: "#community-plot",
    title: "Community plot",
  },
  {
    description: "Friendly humans, rarely rushed.",
    href: "#help-desk",
    title: "Help desk",
  },
];

const PanelGrid = ({ links }: { links: PanelLink[] }) => (
  <div className="grid w-[min(28rem,80vw)] grid-cols-2 gap-1">
    {links.map((link) => (
      // For Next.js routing, pass render={<Link href={link.href} />} instead
      // of href so navigation stays client-side.
      <NavigationMenuLink active={link.active} href={link.href} key={link.href}>
        <div className="text-sm font-semibold">{link.title}</div>
        <p className="mt-1 text-sm text-[var(--lilt-text-muted)]">
          {link.description}
        </p>
      </NavigationMenuLink>
    ))}
  </div>
);

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <PanelGrid links={productLinks} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <PanelGrid links={resourceLinks} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="inline-flex min-h-10 items-center rounded-full px-4 py-0 font-semibold"
            href="#pricing"
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}
