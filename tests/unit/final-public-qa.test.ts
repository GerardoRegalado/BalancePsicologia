import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildRobots } from "@/app/robots";
import { buildSitemap } from "@/app/sitemap";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { brandConfig } from "@/config/brand";
import { mapsConfig } from "@/config/maps";
import { siteConfig } from "@/config/site";
import { aboutSectionContent } from "@/content/about";
import { contactSectionContent, locationSectionContent } from "@/content/contact";
import { faqSectionContent } from "@/content/faq";
import { appointmentSectionContent } from "@/content/lead-form";
import { packagesSectionContent } from "@/content/packages";
import { pricingPlans } from "@/content/pricing";
import { servicesSectionContent } from "@/content/services";
import {
  testimonialItems,
  testimonialsSectionContent,
} from "@/content/testimonials";
import { buildLocalBusinessJsonLd } from "@/lib/seo/build-local-business-json-ld";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { resolveIndexingPolicy } from "@/lib/seo/resolve-indexing-policy";
import { describe, expect, it } from "vitest";

function readPngSize(path: string) {
  const buffer = readFileSync(path);

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

describe("final public QA", () => {
  it("keeps public copy complete and free from unfinished placeholders", () => {
    expect(faqSectionContent.items).toHaveLength(4);

    const faqContent = JSON.stringify(faqSectionContent.items);
    expect(faqContent).not.toContain("Ags..");
    expect(faqContent).not.toMatch(/\.\./);
    expect(faqContent).not.toMatch(
      /Muy pronto|Próximamente|se integrará|se integrarán|se publicará cuando|cuando la información esté disponible|vista previa|placeholder|repo base|template/i,
    );

    expect(aboutSectionContent.body).toBe(
      "El acompañamiento se presenta con una mirada ética, cercana y respetuosa del ritmo de cada persona, priorizando la escucha, la claridad y un trabajo colaborativo.",
    );
    expect(aboutSectionContent.body).not.toMatch(
      /se integrará|se integrarán|información esté disponible|trayectoria profesional|detalles del equipo/i,
    );
  });

  it("does not render testimonials while there are no authorized items", () => {
    expect(testimonialItems).toEqual([]);
    expect(testimonialsSectionContent.items).toBe(testimonialItems);

    const markup = renderToStaticMarkup(createElement(TestimonialsSection));

    expect(markup).toBe("");
    expect(markup).not.toMatch(/Testimonios disponibles próximamente/i);
  });

  it("keeps public data, services and costs aligned", () => {
    expect(brandConfig.contact.whatsappDisplay).toBe("449 555 6035");
    expect(brandConfig.contact.whatsappUrl).toBe(
      "https://wa.me/524495556035",
    );
    expect(brandConfig.address.clinicName).toBe("Clínica MIND");
    expect(brandConfig.address.display).toBe(
      "Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.",
    );
    expect(locationSectionContent.mapsUrl).toBe(brandConfig.address.mapsUrl);
    expect(mapsConfig.query).toBe(
      `${brandConfig.address.clinicName}, ${brandConfig.address.display}`,
    );

    expect(pricingPlans.map((plan) => plan.name)).toEqual([
      "Terapia individual",
      "Terapia de pareja",
      "Terapia familiar",
    ]);
    expect(pricingPlans.map((plan) => plan.price)).toEqual([
      "$450 MXN",
      "$700 MXN",
      "$900 MXN",
    ]);
    expect(servicesSectionContent.items.map((item) => item.title)).toEqual(
      pricingPlans.map((plan) => plan.name),
    );
    expect(packagesSectionContent.items.map((item) => item.name)).toEqual(
      pricingPlans.map((plan) => plan.name),
    );
    expect(JSON.stringify({ pricingPlans, packagesSectionContent })).not.toMatch(
      /descuento|promoción|\b\d+\s*(minutos|min|horas|hrs|h)\b/i,
    );
  });

  it("keeps the appointment flow as WhatsApp-only without a fake form", () => {
    const appointmentComponent = readFileSync(
      "components/sections/appointment-section.tsx",
      "utf8",
    );

    expect(appointmentSectionContent.primaryAction.href).toBe(
      brandConfig.contact.whatsappUrl,
    );
    expect(appointmentSectionContent.primaryAction.external).toBe(true);
    expect(appointmentSectionContent.intro.description).toMatch(/Por ahora/);
    expect(appointmentSectionContent.privacyNote).toMatch(
      /Evita compartir información clínica sensible/i,
    );
    expect(appointmentComponent).not.toMatch(
      /<form|<input|<select|<textarea|type="submit"|disabled/i,
    );
  });

  it("keeps SEO metadata, noindex preview policy and assets stable", () => {
    const metadata = buildMetadata({
      title: "Terapia psicológica en Aguascalientes",
      path: "/",
    });
    const jsonLd = buildLocalBusinessJsonLd();

    expect(siteConfig.defaultTitle).toBe(
      "Balance Psicología | Terapia en Aguascalientes",
    );
    expect(
      siteConfig.titleTemplate.replace(
        "%s",
        "Terapia psicológica en Aguascalientes",
      ),
    ).toBe("Terapia psicológica en Aguascalientes | Balance Psicología");
    expect(metadata.alternates?.canonical).toBe(
      "https://www.balancepsicologia.com/",
    );
    expect(siteConfig.ogImage).toBe("/media/balance-psicologia-og.png");
    expect(metadata.twitter).toEqual(
      expect.objectContaining({ card: "summary_large_image" }),
    );
    expect(jsonLd).toEqual(
      expect.objectContaining({
        "@type": "ProfessionalService",
        name: "Balance Psicología",
      }),
    );
    expect(resolveIndexingPolicy({
      vercelEnvironment: "preview",
      configuredUrl: "https://www.balancepsicologia.com",
    })).toBe(false);
    expect(buildRobots(false).rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
    expect(buildSitemap(false)).toEqual([]);

    expect(existsSync(join(process.cwd(), "app/icon.png"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app/apple-icon.png"))).toBe(true);
    expect(
      existsSync(join(process.cwd(), "public/media/balance-psicologia-og.png")),
    ).toBe(true);
    expect(readPngSize("public/media/balance-psicologia-og.png")).toEqual({
      width: 1200,
      height: 630,
    });
  });

  it("keeps private routes and template terms out of public surfaces", () => {
    const marketingPage = readFileSync("app/(marketing)/page.tsx", "utf8");
    const publicContent = JSON.stringify({
      aboutSectionContent,
      appointmentSectionContent,
      contactSectionContent,
      faqSectionContent,
      locationSectionContent,
      packagesSectionContent,
      pricingPlans,
      servicesSectionContent,
    });

    expect(marketingPage).toMatch(/<LandingHeroSection/);
    expect(marketingPage).toMatch(/<AboutSection/);
    expect(marketingPage).toMatch(/<ServicesSection/);
    expect(marketingPage).toMatch(/<PackagesSection/);
    expect(marketingPage).toMatch(/<AppointmentSection/);
    expect(marketingPage).toMatch(/<TestimonialsSection/);
    expect(marketingPage).toMatch(/<FaqSection/);
    expect(marketingPage).toMatch(/<ContactSection/);
    expect(marketingPage).toMatch(/<LocationSection/);

    expect(publicContent).not.toMatch(
      /Base Landing Template|REPO BASE|Reusable starter|\/admin|app\.balancepsicologia\.com/i,
    );
    expect(publicContent).not.toMatch(
      /AIza|SECRET|PRIVATE_KEY|NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=.+/i,
    );
  });
});
