import { CapabilityGrid } from "@/components/sections/capability-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { featureSectionContent } from "@/content/features";
import { heroContent } from "@/content/hero";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Base landing template",
  path: "/",
});

export default function MarketingHomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <CapabilityGrid content={featureSectionContent} />
    </>
  );
}
