import { codeToHtml } from "shiki";

export async function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const html = await codeToHtml(code.trim(), {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });

  return (
    <div
      className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-4 text-sm leading-relaxed [&_pre]:bg-transparent!"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
