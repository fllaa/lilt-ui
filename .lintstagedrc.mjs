// public/r is shadcn build output: ultracite ignores it, and it exits
// non-zero when every file it receives is ignored — so filter those out
// here and skip the run entirely for artifacts-only commits.
const IGNORED_SEGMENTS = ["/public/"];

export default {
  "*.{js,jsx,ts,tsx,json,jsonc,css,scss,md,mdx}": (files) => {
    const lintable = files.filter(
      (file) => !IGNORED_SEGMENTS.some((segment) => file.includes(segment)),
    );
    if (lintable.length === 0) {
      return [];
    }
    return [
      `bun x ultracite fix ${lintable.map((file) => JSON.stringify(file)).join(" ")}`,
    ];
  },
};
