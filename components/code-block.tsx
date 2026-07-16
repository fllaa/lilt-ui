import { codeToHtml } from "shiki";

export const CodeBlock = async ({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) => {
  const html = await codeToHtml(code.trim(), {
    defaultColor: false,
    lang,
    themes: { dark: "github-dark", light: "github-light" },
  });

  return (
    <div
      className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--lilt-border)] bg-[var(--lilt-surface)] p-4 text-sm leading-relaxed [&_pre]:bg-transparent!"
      // oxlint-disable-next-line react/no-danger -- trusted shiki output, server-rendered from this repo's own source snippets, not user input
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
