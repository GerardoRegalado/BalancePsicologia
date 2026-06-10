import { adminConfig } from "@/config/admin";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { featureSectionContent } from "@/content/features";
import { leadFormContent } from "@/content/lead-form";
import { packagePreviews } from "@/content/packages";
import { serviceItems } from "@/content/services";
import { testimonialItems } from "@/content/testimonials";
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
    expect(siteConfig.description).not.toMatch(/template|repo base/i);
  });

  it("keeps the public content model prepared for the next landing phase", () => {
    expect(featureSectionContent.items.length).toBeGreaterThanOrEqual(4);
    expect(serviceItems.length).toBeGreaterThanOrEqual(3);
    expect(packagePreviews.length).toBeGreaterThanOrEqual(3);
    expect(testimonialItems.length).toBeGreaterThanOrEqual(2);
    expect(leadFormContent.fields.map((field) => field.name)).toEqual(
      expect.arrayContaining(["name", "email", "projectType", "scope"]),
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
