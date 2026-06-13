import { adminConfig } from "@/config/admin";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { contactSectionContent, footerContent } from "@/content/contact";
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
