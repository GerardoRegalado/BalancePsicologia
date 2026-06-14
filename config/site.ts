import { brandConfig } from "@/config/brand";
import { landingNavigation } from "@/content/landing";
import { resolveIndexingPolicy } from "@/lib/seo/resolve-indexing-policy";

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.balancepsicologia.com",
  canonicalUrl: "https://www.balancepsicologia.com",
  locale: process.env.NEXT_PUBLIC_SITE_LOCALE ?? "es_MX",
  defaultTitle: "Balance Psicología | Terapia en Aguascalientes",
  titleTemplate: `%s | ${brandConfig.name}`,
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Terapia psicológica individual, de pareja y familiar en Aguascalientes. Conoce costos, ubicación y solicita información con Balance Psicología.",
  keywords: [
    "psicología en Aguascalientes",
    "terapia psicológica en Aguascalientes",
    "terapia individual",
    "terapia de pareja",
    "terapia familiar",
    "Balance Psicología",
  ],
  ogImage:
    process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ??
    "/media/balance-psicologia-og.png",
  isIndexable: resolveIndexingPolicy({
    vercelEnvironment: process.env.VERCEL_ENV,
    vercelTargetEnvironment: process.env.VERCEL_TARGET_ENV,
    configuredUrl:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.balancepsicologia.com",
  }),
  navigation: landingNavigation satisfies NavigationItem[],
} as const;
