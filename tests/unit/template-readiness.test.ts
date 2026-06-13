import { adminConfig } from "@/config/admin";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";
import {
  contactSectionContent,
  footerContent,
  locationSectionContent,
} from "@/content/contact";
import { faqSectionContent } from "@/content/faq";
import { featureSectionContent } from "@/content/features";
import { heroContent } from "@/content/hero";
import { leadFormContent } from "@/content/lead-form";
import { packagePreviews } from "@/content/packages";
import { serviceItems } from "@/content/services";
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
    expect(siteConfig.ogImage).toMatch(/^\/media\//);
  });

  it("keeps the public content model prepared for the next landing phase", () => {
    expect(featureSectionContent.items.length).toBeGreaterThanOrEqual(4);
    expect(serviceItems.length).toBeGreaterThanOrEqual(3);
    expect(packagePreviews.length).toBeGreaterThanOrEqual(3);
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
    expect(leadFormContent.fields.map((field) => field.name)).toEqual(
      expect.arrayContaining([
        "name",
        "phone",
        "email",
        "serviceInterest",
        "message",
      ]),
    );
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
        label: "Conocer opciones",
        href: "#agenda",
        variant: "secondary",
      }),
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
    expect(JSON.stringify(locationSectionContent)).not.toMatch(
      /ubicación exacta se integrará|Referencia general|Área general de atención/i,
    );
    expect(packagePreviews.map((item) => item.detail).join(" ")).not.toContain(
      "$450",
    );
    expect(JSON.stringify(locationSectionContent)).not.toMatch(
      /entrecalles|estacionamiento|horarios|piso|interior|referencia para llegar/i,
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
