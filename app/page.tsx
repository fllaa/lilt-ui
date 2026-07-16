export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-primary-text)]">
        Work in progress
      </p>
      <h1 className="font-display text-5xl font-semibold tracking-[-0.035em]">
        Lilt <span className="doodle-underline">UI</span>
      </h1>
      <p className="max-w-[48ch] leading-relaxed text-[var(--lilt-text-muted)]">
        A precise, warm, playful component registry. The docs site lands here
        soon — components are being ported wave by wave.
      </p>
    </main>
  );
}
