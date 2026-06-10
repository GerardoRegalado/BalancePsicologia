import { HeroSection } from "@/components/sections/hero-section";
import { heroContent } from "@/content/hero";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Balance Psicologia",
  path: "/",
});

export default function MarketingHomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
    </>
  );
}
