import { ComponentPacks } from "@/components/landing/component-packs";
import { CallToAction } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { GettingStarted } from "@/components/landing/getting-started";
import { Hero } from "@/components/landing/hero";
import { Showcase } from "@/components/landing/showcase";
import { SiteFooter } from "@/components/landing/site-footer";
import { Theming } from "@/components/landing/theming";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Showcase />
        <FeatureGrid />
        <ComponentPacks />
        <Theming />
        <GettingStarted />
        <Faq />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
