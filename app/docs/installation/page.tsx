import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Installation — Lilt UI",
};

const registryConfig = `{
  "registries": {
    "@lilt": "https://lilt-ui.vercel.app/r/{name}.json"
  }
}`;

const addCommand = `npx shadcn@latest add @lilt/button
# or several at once
npx shadcn@latest add @lilt/field @lilt/dialog @lilt/toast`;

const fontsSnippet = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
  rel="stylesheet"
/>`;

const themeProviderSnippet = `import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="isolate">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}`;

const darkVariantSnippet = `@custom-variant dark (&:where(.dark, [data-theme="dark"], .dark *, [data-theme="dark"] *));`;

export default function InstallationPage() {
  return (
    <article className="grid max-w-3xl gap-10">
      <header className="grid gap-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-primary-text)]">
          Installation
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.035em]">
          Get Lilt into your project
        </h1>
        <p className="text-lg leading-relaxed text-[var(--lilt-text-muted)]">
          Lilt UI works in any React project with Tailwind v4 — Next.js,
          Vite, anything the shadcn CLI supports.
        </p>
      </header>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          1. Register the @lilt namespace
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Run <code>npx shadcn@latest init</code> if your project has no{" "}
          <code>components.json</code> yet, then add the registry:
        </p>
        <CodeBlock code={registryConfig} lang="json" />
      </section>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          2. Add components
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Each component brings its dependencies with it — the Lilt theme
          variables merge into your CSS automatically, and Base UI is
          installed when a component needs it.
        </p>
        <CodeBlock code={addCommand} lang="bash" />
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          <strong className="text-[var(--lilt-text)]">
            Fresh create-next-app?
          </strong>{" "}
          Delete the boilerplate <code>--background</code>/
          <code>--foreground</code> variables and the unlayered{" "}
          <code>body</code> rule from <code>globals.css</code> — unlayered
          styles beat Lilt&apos;s <code>@layer base</code> body styling, so
          the page keeps Next&apos;s default background until they&apos;re
          gone.
        </p>
      </section>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          3. Load the fonts
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Lilt uses Space Grotesk for display text and DM Sans for body text.
          The simplest path is Google Fonts in your document head (or use{" "}
          <code>next/font</code> and map the same families onto{" "}
          <code>--font-display</code> and <code>--font-sans</code>):
        </p>
        <CodeBlock code={fontsSnippet} lang="html" />
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          If your <code>@theme</code> already defines <code>--font-sans</code>{" "}
          (create-next-app sets it to Geist), the CLI keeps your value —
          replace it with the DM Sans stack yourself:{" "}
          <code>
            --font-sans: &quot;DM Sans&quot;, ui-sans-serif, system-ui,
            sans-serif;
          </code>
        </p>
      </section>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          4. Theme switching
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          Add <code>@lilt/theme-provider</code> and wrap your app. Dark mode
          flips on the <code>.dark</code> class; the provider also sets{" "}
          <code>data-theme</code> and persists the choice. The{" "}
          <code>isolate</code> wrapper keeps Base UI popups above your
          content without z-index wars.
        </p>
        <CodeBlock code={themeProviderSnippet} />
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          If your project already uses a different dark-mode convention, add
          Lilt&apos;s widened variant to your CSS:
        </p>
        <CodeBlock code={darkVariantSnippet} lang="css" />
      </section>
    </article>
  );
}
