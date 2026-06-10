import { AboutSection } from "@/components/sections/about-section";
import { AppointmentSection } from "@/components/sections/appointment-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LandingHeroSection } from "@/components/sections/landing-hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Inicio",
  path: "/",
});

export default function MarketingHomePage() {
  return (
    <>
      <LandingHeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <AppointmentSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <LocationSection />
    </>
  );
}
