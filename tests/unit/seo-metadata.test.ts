import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { buildRobots } from "@/app/robots";
import { buildSitemap } from "@/app/sitemap";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { buildLocalBusinessJsonLd } from "@/lib/seo/build-local-business-json-ld";
import { resolveIndexingPolicy } from "@/lib/seo/resolve-indexing-policy";
import { describe, expect, it } from "vitest";

function readPngSize(path: string) {
  const buffer = readFileSync(path);

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

describe("seo metadata", () => {
  it("uses the approved canonical metadata and social image", () => {
    const metadata = buildMetadata();

    expect(siteConfig.canonicalUrl).toBe("https://www.balancepsicologia.com");
    expect(new URL("/", siteConfig.canonicalUrl).toString()).toBe(
      "https://www.balancepsicologia.com/",
    );
    expect(siteConfig.defaultTitle).toBe(
      "Balance Psicología | Terapia en Aguascalientes",
    );
    expect(
      siteConfig.titleTemplate.replace(
        "%s",
        "Terapia psicológica en Aguascalientes",
      ),
    ).toBe("Terapia psicológica en Aguascalientes | Balance Psicología");
    expect(siteConfig.description).toBe(
      "Terapia psicológica individual, de pareja y familiar en Aguascalientes. Conoce costos, ubicación y solicita información con Balance Psicología.",
    );
    expect(siteConfig.ogImage).toBe("/media/balance-psicologia-og.png");
    expect(siteConfig.ogImage).not.toBe("/media/og-default.svg");
    expect(JSON.stringify(metadata)).not.toMatch(
      /og-default\.svg|REPO BASE|Base Landing Template|Reusable starter/i,
    );
    expect(metadata.alternates?.canonical).toBe(
      "https://www.balancepsicologia.com/",
    );
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: "https://www.balancepsicologia.com/media/balance-psicologia-og.png",
        width: 1200,
        height: 630,
      }),
    ]);
    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        card: "summary_large_image",
        images: [
          "https://www.balancepsicologia.com/media/balance-psicologia-og.png",
        ],
      }),
    );
  });

  it("resolves indexing policy safely", () => {
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "production",
        configuredUrl: "https://www.balancepsicologia.com",
      }),
    ).toBe(true);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "preview",
        configuredUrl: "https://www.balancepsicologia.com",
      }),
    ).toBe(false);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "development",
        configuredUrl: "https://www.balancepsicologia.com",
      }),
    ).toBe(false);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "production",
        vercelTargetEnvironment: "staging",
        configuredUrl: "https://staging.balancepsicologia.com",
      }),
    ).toBe(false);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "production",
        configuredUrl: "https://balance-preview.vercel.app",
      }),
    ).toBe(false);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "production",
        configuredUrl: "not a url",
      }),
    ).toBe(false);
    expect(
      resolveIndexingPolicy({
        vercelEnvironment: "unknown",
        configuredUrl: "https://www.balancepsicologia.com",
      }),
    ).toBe(false);
  });

  it("builds robots and sitemap for indexable and non-indexable environments", () => {
    expect(buildRobots(true)).toEqual(
      expect.objectContaining({
        sitemap: "https://www.balancepsicologia.com/sitemap.xml",
        host: "https://www.balancepsicologia.com",
      }),
    );

    const noIndexRobots = buildRobots(false);
    expect(noIndexRobots).not.toHaveProperty("sitemap");
    expect(noIndexRobots).not.toHaveProperty("host");
    expect(JSON.stringify(noIndexRobots)).not.toContain('"disallow":"/"');

    const productionSitemap = buildSitemap(true);
    expect(productionSitemap).toHaveLength(1);
    expect(productionSitemap[0]).toEqual(
      expect.objectContaining({
        url: "https://www.balancepsicologia.com/",
        changeFrequency: "monthly",
        priority: 1,
      }),
    );
    expect(buildSitemap(false)).toEqual([]);
  });

  it("builds conservative local business JSON-LD", () => {
    const jsonLd = buildLocalBusinessJsonLd();
    const serialized = JSON.stringify(jsonLd);

    expect(jsonLd).toEqual(
      expect.objectContaining({
        "@type": "ProfessionalService",
        name: "Balance Psicología",
        url: "https://www.balancepsicologia.com/",
        telephone: "+524495556035",
        hasMap: brandConfig.address.mapsUrl,
      }),
    );
    expect(jsonLd.address).toEqual({
      "@type": "PostalAddress",
      streetAddress: "Jacaranda 552, Las Arboledas",
      addressLocality: "Aguascalientes",
      addressRegion: "Aguascalientes",
      postalCode: "20020",
      addressCountry: "MX",
    });
    expect(jsonLd.sameAs).toEqual([
      brandConfig.social.facebook,
      brandConfig.social.instagram,
    ]);
    expect(serialized).not.toMatch(
      /email|openingHours|aggregateRating|review|latitude|longitude|geo|medicalSpecialty|founder|employee|priceRange|currenciesAccepted/i,
    );
    expect(serialized).not.toMatch(/\/admin|app\.balancepsicologia\.com/i);
  });

  it("uses the final favicon and Open Graph image assets", () => {
    expect(existsSync(join(process.cwd(), "app/icon.png"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app/apple-icon.png"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app/favicon.ico"))).toBe(false);

    expect(
      existsSync(join(process.cwd(), "public/media/balance-psicologia-og.png")),
    ).toBe(true);
    expect(existsSync(join(process.cwd(), "public/media/og-default.svg"))).toBe(
      false,
    );
    expect(readPngSize("public/media/balance-psicologia-og.png")).toEqual({
      width: 1200,
      height: 630,
    });
  });
});
