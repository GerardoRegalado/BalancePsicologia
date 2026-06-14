import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.canonicalUrl).toString();
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl("/")}#organization`,
    name: brandConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    telephone: `+${brandConfig.contact.whatsappInternational}`,
    hasMap: brandConfig.address.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jacaranda 552, Las Arboledas",
      addressLocality: "Aguascalientes",
      addressRegion: "Aguascalientes",
      postalCode: "20020",
      addressCountry: "MX",
    },
    logo: absoluteUrl(brandConfig.assets.logoHorizontal.src),
    image: absoluteUrl(siteConfig.ogImage),
    sameAs: [brandConfig.social.facebook, brandConfig.social.instagram],
    areaServed: "Aguascalientes",
  };
}
