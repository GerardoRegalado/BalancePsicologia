import { adminConfig } from "@/config/admin";
import { brandConfig } from "@/config/brand";
import { mapsConfig } from "@/config/maps";
import { siteConfig } from "@/config/site";
import { aboutSectionContent } from "@/content/about";
import {
  contactSectionContent,
  footerContent,
  locationSectionContent,
} from "@/content/contact";
import { faqSectionContent } from "@/content/faq";
import { featureSectionContent } from "@/content/features";
import { heroContent } from "@/content/hero";
import { appointmentSectionContent } from "@/content/lead-form";
import { packagesSectionContent, packagePreviews } from "@/content/packages";
import { pricingPlans } from "@/content/pricing";
import { serviceItems, servicesSectionContent } from "@/content/services";
import {
  testimonialItems,
  testimonialsSectionContent,
} from "@/content/testimonials";
import { describe, expect, it } from "vitest";

describe("project readiness", () => {
  it("keeps public site config aligned with Balance Psicología", () => {
    expect(brandConfig.name).toBe("Balance Psicología");
    expect(brandConfig.location).toBe("Aguascalientes, México");
    expect(brandConfig.address.clinicName).toBe("Clínica MIND");
    expect(brandConfig.address.display).toBe(
      "Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.",
    );
    expect(brandConfig.address.mapsUrl).toBe(
      "https://maps.app.goo.gl/yeoxjHcLFUmbPkCm7",
    );
    expect(siteConfig.url).toBe("https://www.balancepsicologia.com");
    expect(siteConfig.locale).toBe("es_MX");
    expect(siteConfig.navigation).not.toContainEqual(
      expect.objectContaining({ href: "/admin" }),
    );
    expect(siteConfig.description).not.toMatch(
      /template|repo base|prepara una landing/i,
    );
    expect(siteConfig.description).toMatch(/Aguascalientes/);
    expect(siteConfig.defaultTitle).toBe(
      "Balance Psicología | Terapia en Aguascalientes",
    );
    expect(siteConfig.canonicalUrl).toBe("https://www.balancepsicologia.com");
    expect(siteConfig.ogImage).toBe("/media/balance-psicologia-og.png");
  });

  it("keeps the public content model prepared for the next landing phase", () => {
    expect(featureSectionContent.items.length).toBeGreaterThanOrEqual(4);
    expect(serviceItems.length).toBeGreaterThanOrEqual(3);
    expect(packagePreviews.length).toBeGreaterThanOrEqual(3);
    expect(packagePreviews).toHaveLength(3);
    expect(testimonialsSectionContent.items).toBe(testimonialItems);
    expect(testimonialsSectionContent.emptyState.title).toMatch(/testimonios/i);
    expect(faqSectionContent.items.length).toBeGreaterThanOrEqual(4);
    expect(contactSectionContent.channels.length).toBeGreaterThanOrEqual(4);
    expect(footerContent.navigation).not.toContainEqual(
      expect.objectContaining({ href: "/admin" }),
    );
    expect(footerContent.navigation).not.toContainEqual(
      expect.objectContaining({ href: expect.stringContaining("app.") }),
    );
    expect(footerContent.credit.prefix).toContain(
      "Desarrollado con mucha cafeína",
    );
    expect(footerContent.credit.label).toBe("Gerardo Regalado");
    expect(footerContent.credit.href).toBe("https://www.gerardoregalado.dev/");
    expect(appointmentSectionContent.steps).toHaveLength(3);
  });

  it("keeps the FAQ aligned with published public inputs", () => {
    expect(faqSectionContent.items).toHaveLength(4);

    const contactFaq = faqSectionContent.items[0]!;
    const locationFaq = faqSectionContent.items[1]!;
    const pricingFaq = faqSectionContent.items[2]!;
    const appointmentFaq = faqSectionContent.items[3]!;

    expect(contactFaq.question).toBe("¿Cómo puedo solicitar información?");
    expect(contactFaq.answer).toContain(brandConfig.contact.whatsappDisplay);

    expect(locationFaq.question).toBe(
      "¿Dónde se encuentra Balance Psicología?",
    );
    expect(locationFaq.answer).toContain(brandConfig.address.clinicName);
    expect(locationFaq.answer).toContain(brandConfig.address.display);

    expect(pricingFaq.question).toBe("¿Los costos ya están disponibles?");
    for (const plan of pricingPlans) {
      expect(pricingFaq.answer).toContain(plan.price);
    }

    expect(appointmentFaq.question).toBe(
      "¿La solicitud de cita confirma una agenda?",
    );
    expect(appointmentFaq.answer).toMatch(/No\./);
    expect(appointmentFaq.answer).toMatch(/después de recibir respuesta/i);

    expect(JSON.stringify(faqSectionContent.items)).not.toMatch(
      /Muy pronto|Próximamente|se integrarán los canales|la dirección exacta se publicará|la información comercial se publicará|cuando la información esté lista/i,
    );
    expect(JSON.stringify(faqSectionContent.items)).not.toContain("Ags..");
    expect(JSON.stringify(faqSectionContent.items)).not.toMatch(/\.\./);
    expect(aboutSectionContent.body).not.toMatch(
      /se integrará|se integrarán|cuando la información esté disponible|información esté disponible/i,
    );
    expect(testimonialItems).toEqual([]);
    expect(testimonialsSectionContent.items).toBe(testimonialItems);
  });

  it("uses the approved WhatsApp contact without a prefilled message", () => {
    expect(brandConfig.contact.whatsappDisplay).toBe("449 555 6035");
    expect(brandConfig.contact.whatsappInternational).toBe("524495556035");
    expect(brandConfig.contact.whatsappUrl).toBe(
      "https://wa.me/524495556035",
    );
    expect(brandConfig.contact.whatsappUrl).not.toContain("text=");

    expect(heroContent.actions[0]).toEqual(
      expect.objectContaining({
        label: "Solicitar cita",
        mobileLabel: "Solicitar primera sesión",
        href: brandConfig.contact.whatsappUrl,
        variant: "primary",
        external: true,
      }),
    );
    expect(heroContent.actions[0]).not.toHaveProperty("disabled");
    expect(heroContent.actions[1]).toEqual(
      expect.objectContaining({
        label: "Cómo agendar",
        href: "#agenda",
        variant: "secondary",
      }),
    );

    expect(appointmentSectionContent.primaryAction).toEqual(
      expect.objectContaining({
        label: "Solicitar cita por WhatsApp",
        mobileLabel: "Solicitar cita por WhatsApp",
        href: brandConfig.contact.whatsappUrl,
        variant: "primary",
        external: true,
      }),
    );
    expect(appointmentSectionContent.secondaryAction).toEqual(
      expect.objectContaining({
        label: "Ver costos",
        href: "#costos",
        variant: "secondary",
      }),
    );
    expect(appointmentSectionContent.description).toMatch(/Actualmente/);
    expect(appointmentSectionContent.intro.description).toMatch(/Por ahora/);
    expect(JSON.stringify(appointmentSectionContent)).not.toMatch(
      /permanente|siempre|definitivo/i,
    );
    expect("fields" in appointmentSectionContent).toBe(false);
    expect("visualSubmitLabel" in appointmentSectionContent).toBe(false);
    expect(JSON.stringify(appointmentSectionContent)).not.toMatch(
      /Próximamente|vista previa visual|Canales oficiales próximamente|agenda automática|confirmación inmediata/i,
    );
    expect(JSON.stringify(appointmentSectionContent)).not.toMatch(
      /Firebase|Firestore|lead|paciente|app privada|Cloud Function/i,
    );
    expect(appointmentSectionContent.privacyNote).toMatch(
      /Evita compartir información clínica sensible/i,
    );

    expect(
      contactSectionContent.channels.find(
        (channel) => channel.kind === "whatsapp",
      ),
    ).toEqual(
      expect.objectContaining({
        label: "WhatsApp",
        status: brandConfig.contact.whatsappDisplay,
      }),
    );
  });

  it("uses only the approved social profiles without tracking parameters", () => {
    expect(brandConfig.social.facebook).toBe(
      "https://www.facebook.com/people/Psic-Fernanda-Regalado-Terapia-Cognitivo-Conductual/61590600875459/",
    );
    expect(brandConfig.social.instagram).toBe(
      "https://www.instagram.com/psic.fernandaregalado/",
    );
    expect("linkedin" in brandConfig.social).toBe(false);

    for (const url of [
      brandConfig.social.facebook,
      brandConfig.social.instagram,
    ]) {
      expect(url).not.toContain("utm_");
      expect(url).not.toContain("igsh");
      expect(url).not.toContain("ref=");
    }

    expect(contactSectionContent.channels.map((channel) => channel.kind)).toEqual(
      ["whatsapp", "facebook", "instagram", "location"],
    );
    expect(
      contactSectionContent.channels.find(
        (channel) => channel.kind === "facebook",
      ),
    ).toEqual(
      expect.objectContaining({
        label: "Facebook",
        status: "Psic. Fernanda Regalado",
      }),
    );
    expect(
      contactSectionContent.channels.find(
        (channel) => channel.kind === "instagram",
      ),
    ).toEqual(
      expect.objectContaining({
        label: "Instagram",
        status: "@psic.fernandaregalado",
      }),
    );
    expect(
      contactSectionContent.channels.some(
        (channel) =>
          channel.kind === "facebook" &&
          channel.status === "Disponible próximamente",
      ),
    ).toBe(false);
    expect(
      contactSectionContent.channels.some(
        (channel) =>
          channel.kind === "instagram" &&
          channel.status === "Disponible próximamente",
      ),
    ).toBe(false);
    expect(
      contactSectionContent.channels.some(
        (channel) => channel.label === "Correo",
      ),
    ).toBe(false);

    expect(brandConfig.contact.whatsappDisplay).toBe("449 555 6035");
    expect(brandConfig.contact.whatsappUrl).toBe(
      "https://wa.me/524495556035",
    );
    expect(
      contactSectionContent.channels.find(
        (channel) => channel.kind === "location",
      ),
    ).toEqual(
      expect.objectContaining({
        label: "Ubicación",
        status: brandConfig.address.clinicName,
        description: brandConfig.address.display,
      }),
    );
    expect(JSON.stringify(contactSectionContent.channels)).not.toContain(
      '"kind":"general"',
    );

    expect(locationSectionContent.clinicName).toBe("Clínica MIND");
    expect(locationSectionContent.address).toBe(brandConfig.address.display);
    expect(locationSectionContent.mapsUrl).toBe(brandConfig.address.mapsUrl);
    expect(mapsConfig.query).toBe(
      `${brandConfig.address.clinicName}, ${brandConfig.address.display}`,
    );
    expect(JSON.stringify(locationSectionContent)).not.toMatch(
      /ubicación exacta se integrará|Referencia general|Área general de atención|vista abstracta|ayuda visual|mapa aproximado/i,
    );
    expect(JSON.stringify(locationSectionContent)).not.toMatch(
      /entrecalles|estacionamiento|horarios|piso|interior|referencia para llegar/i,
    );
  });

  it("publishes only the approved therapy modalities and session costs", () => {
    expect(pricingPlans).toHaveLength(3);
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

    for (const plan of pricingPlans) {
      expect(plan).not.toHaveProperty("featured");
    }

    expect(packagesSectionContent.items).toEqual(
      pricingPlans.map((plan) => ({
        name: plan.name,
        summary: plan.description,
        detail: "Costo por sesión",
        meta: plan.price,
      })),
    );
    expect(packagePreviews).toBe(packagesSectionContent.items);
    expect(servicesSectionContent.items.map((item) => item.title)).toEqual(
      pricingPlans.map((plan) => plan.name),
    );
    expect(serviceItems.map((item) => item.name)).toEqual(
      pricingPlans.map((plan) => plan.name),
    );

    const commercialContent = JSON.stringify({
      packagesSectionContent,
      pricingPlans,
      serviceItems,
      servicesSectionContent,
    });

    expect(commercialContent).not.toMatch(
      /Próximamente|Orientación inicial|Proceso de continuidad|Sesión de acompañamiento/i,
    );
    expect(commercialContent).not.toMatch(/paquete|descuento|promoción/i);
    expect(commercialContent).not.toMatch(
      /\b\d+\s*(minutos|min|horas|hrs|h)\b/i,
    );
    expect(commercialContent).not.toMatch(
      /cancelación|reembolso|facturación|forma de pago|mensualidad|bono/i,
    );
  });

  it("keeps the admin roadmap aligned with future internal modules", () => {
    expect(adminConfig.routePrefix).toBe("/admin");
    expect(adminConfig.futureModules.map((module) => module.key)).toEqual(
      expect.arrayContaining([
        "clients",
        "leads",
        "projects",
        "content",
        "media",
      ]),
    );
  });
});
