import { docsByPack } from "@/lib/docs";
import registry from "@/registry.json";

export const dynamic = "force-static";

const BASE = registry.homepage;

export const GET = () => {
  const lines = [
    "# Lilt UI",
    "",
    "> A shadcn-compatible React component registry built on the Lilt design system:",
    "> precise structure, warm paper surfaces, a swappable pale-mint accent, hand-drawn",
    "> icons, and restrained motion.",
    "",
    "Components are not installed from npm — their source is copied into your project with",
    "the shadcn CLI (`npx shadcn add @lilt/<name>`), built on Base UI primitives and styled",
    "with Tailwind v4 semantic `--lilt-*` tokens. Start with `npx shadcn add @lilt/theme` to",
    "pull in the design tokens.",
    "",
    "## Docs",
    "",
    `- [Introduction](${BASE}/docs): What Lilt UI is, how the registry works, and the design rules.`,
    `- [Installation](${BASE}/docs/installation): Point the shadcn CLI at the @lilt registry, fonts, and ThemeProvider setup.`,
    `- [Theming](${BASE}/docs/theming): Semantic --lilt-* design tokens for color, radius, motion, type, and elevation.`,
    "",
    "## Components",
    "",
  ];

  for (const { pack, entries } of docsByPack) {
    lines.push(`### ${pack}`, "");
    for (const entry of entries) {
      lines.push(
        `- [${entry.title}](${BASE}/docs/components/${entry.name}): ${entry.description}`
      );
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
