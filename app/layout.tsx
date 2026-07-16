import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/registry/lilt/ui/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lilt UI",
  description:
    "A precise, warm, playful component registry built on the Lilt design system.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("lilt-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.dataset.theme=t;r.style.colorScheme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="isolate">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
