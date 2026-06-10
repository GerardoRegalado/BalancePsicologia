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
    "Balance Psicologia esta preparando una presencia publica profesional para informar sobre sus servicios psicologicos en Aguascalientes.",
  keywords: [
    "psicologia",
    "terapia psicologica",
    "salud mental",
    "consultorio psicologico",
    "Aguascalientes",
    "Balance Psicologia",
  ],
  ogImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ?? "/media/og-default.svg",
  navigation: [
    { label: "Inicio", href: "/" },
  ] satisfies NavigationItem[],
} as const;
