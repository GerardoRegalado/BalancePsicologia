import { brandConfig } from "@/config/brand";

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.balancepsicologia.com",
  locale: process.env.NEXT_PUBLIC_SITE_LOCALE ?? "es_MX",
  defaultTitle: brandConfig.name,
  titleTemplate: `%s | ${brandConfig.name}`,
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Balance Psicología está preparando una presencia pública profesional para informar sobre sus servicios psicológicos en Aguascalientes.",
  keywords: [
    "psicología",
    "terapia psicológica",
    "salud mental",
    "consultorio psicológico",
    "Aguascalientes",
    "Balance Psicología",
  ],
  ogImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ?? "/media/og-default.svg",
  navigation: [
    { label: "Inicio", href: "/" },
  ] satisfies NavigationItem[],
} as const;
