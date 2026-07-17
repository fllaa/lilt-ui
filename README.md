<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/lilt-lockup-dark.svg">
    <img alt="LiltUI" src="public/brand/lilt-lockup-light.svg" width="380">
  </picture>
</p>

<p align="center">
  Precision with a playful rhythm — a precise, warm, playful component registry
  built on the <strong>Lilt</strong> design system.
</p>

---

LiltUI is a [shadcn-compatible](https://ui.shadcn.com/docs/registry) component registry: copy-paste React components built on [Base UI](https://base-ui.com) primitives and Tailwind v4, styled through semantic `--lilt-*` design tokens. Warm paper surfaces, a pale-mint accent, borders instead of shadows, and one gentle lift of motion.

## Usage

Add components straight from the registry with the `shadcn` CLI:

```bash
npx shadcn add @lilt/button
```

Start with the theme to pull in the Lilt tokens:

```bash
npx shadcn add @lilt/theme
```

Browse all components and docs at [lilt-ui.vercel.app](https://lilt-ui.vercel.app).

## Development

```bash
bun install
bun run dev              # docs site + registry playground
bun run registry:build   # rebuild public/r after editing registry/lilt
```

## Brand assets

The logo (a lilting wave resolving into a spark) lives in `components/lilt-logo.tsx`. Lockups, favicons, and the OG-image path data are generated from it:

```bash
bun scripts/generate-brand.ts
```
