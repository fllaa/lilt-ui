import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";
import tokens from "@/tokens/lilt.tokens.json";

export const metadata: Metadata = {
  title: "Theming — LiltUI",
};

const rebrandSnippet = `:root {
  --lilt-primary: #5b46b8;      /* your accent, deep enough to fill controls */
  --lilt-primary-tint: #c7b9ff; /* its pale wash: selection, soft hovers */
  --lilt-primary-soft: #efeaff; /* its soft tint */
  --lilt-primary-text: #3a2d73; /* AAA text on the tint */
  --lilt-focus: #5b46b8;        /* focus ring, AA on canvas */
}
.dark {
  --lilt-primary: #b6a6f5;
  --lilt-primary-tint: #b6a6f5;
  --lilt-primary-soft: #2c2352;
  --lilt-primary-text: #cfc3ff;
  --lilt-focus: #b6a6f5;
}`;

const kebab = (name: string) =>
  name
    .replaceAll(/(?<lower>[a-z0-9])(?<upper>[A-Z])/gu, "$<lower>-$<upper>")
    .toLowerCase();

const SwatchTable = ({
  mode,
  colors,
}: {
  mode: "light" | "dark";
  colors: Record<string, { $value: string }>;
}) => {
  const primitives = tokens.color.primitive as Record<
    string,
    { $value: string }
  >;
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)]">
      <table className="w-full text-sm">
        <thead className="border-b border-[var(--lilt-border)]">
          <tr>
            <th className="h-12 px-4 text-left font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
              Token ({mode})
            </th>
            <th className="h-12 px-4 text-left font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-muted)]">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {Object.entries(colors).map(([name, token]) => {
            const raw = token.$value;
            const resolved = raw.startsWith("{")
              ? (primitives[raw.slice(raw.lastIndexOf(".") + 1, -1)]?.$value ??
                raw)
              : raw;
            return (
              <tr className="border-b border-[var(--lilt-border)]" key={name}>
                <td className="px-4 py-2.5 font-mono text-xs">
                  --lilt-{kebab(name)}
                </td>
                <td
                  aria-label={`Swatch color for ${resolved}`}
                  className="px-4 py-2.5"
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block size-5 rounded-md border border-[var(--lilt-border)]"
                      style={{ background: resolved }}
                    />
                    <code className="text-xs">{resolved}</code>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function ThemingPage() {
  return (
    <article className="grid max-w-3xl gap-10">
      <header className="grid gap-3">
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-primary-text)]">
          Theming
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.035em]">
          Tokens, and how to make Lilt yours
        </h1>
        <p className="text-lg leading-relaxed text-[var(--lilt-text-muted)]">
          Every component reads semantic <code>--lilt-*</code> variables — never
          raw hex values. The tables below render live from{" "}
          <code>tokens/lilt.tokens.json</code>, the canonical W3C-format token
          source.
        </p>
      </header>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          Rebranding: mint is a guest
        </h2>
        <p className="leading-relaxed text-[var(--lilt-text-muted)]">
          The pine accent and its mint wash are swappable defaults. To rebrand,
          replace five semantic values per mode and keep the contrast rules: a
          deep primary that can fill controls in light mode, a pale one in dark.
          Every button, badge, focus ring, and selection follows automatically:
        </p>
        <CodeBlock code={rebrandSnippet} lang="css" />
      </section>

      <section className="grid gap-4">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          Color tokens
        </h2>
        <SwatchTable
          colors={tokens.color.light as Record<string, { $value: string }>}
          mode="light"
        />
        <SwatchTable
          colors={tokens.color.dark as Record<string, { $value: string }>}
          mode="dark"
        />
      </section>

      <section className="grid gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">
          Radius, motion, and type
        </h2>
        <ul className="grid gap-2 leading-relaxed text-[var(--lilt-text-muted)]">
          <li>
            <strong className="text-[var(--lilt-text)]">Radius roles:</strong>{" "}
            12px compact controls, 16px controls and cards, 20px dialogs, pills
            for md/lg buttons.
          </li>
          <li>
            <strong className="text-[var(--lilt-text)]">Motion:</strong> 140ms
            fast / 220ms base / 320ms expressive, one shared ease-out curve,
            hover lift capped at 2px — all removed under reduced motion.
          </li>
          <li>
            <strong className="text-[var(--lilt-text)]">Type:</strong> Space
            Grotesk (display, tight tracking) and DM Sans (body, 1.65 line
            height).
          </li>
          <li>
            <strong className="text-[var(--lilt-text)]">Elevation:</strong>{" "}
            none. Borders and surface shifts only.
          </li>
        </ul>
      </section>
    </article>
  );
}
