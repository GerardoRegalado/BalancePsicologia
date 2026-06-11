import { brandConfig } from "@/config/brand";
import { landingNavigation } from "@/content/landing";

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
    "Balance Psicología ofrece un espacio cálido y profesional en Aguascalientes para conocer opciones de acompañamiento psicológico, costos, ubicación y solicitud de cita.",
  keywords: [
    "psicología",
    "terapia psicológica",
    "salud mental",
    "consultorio psicológico",
    "Aguascalientes",
    "Balance Psicología",
  ],
  ogImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ?? "/media/og-default.svg",
  navigation: landingNavigation satisfies NavigationItem[],
} as const;
