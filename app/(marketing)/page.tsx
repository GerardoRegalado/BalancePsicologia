import { ComingSoonSection } from "@/components/sections/coming-soon-section";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Próximamente",
  path: "/",
});

export default function MarketingHomePage() {
  return <ComingSoonSection />;
}
