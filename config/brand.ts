export const brandConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Balance Psicología",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Balance",
  legalName: process.env.NEXT_PUBLIC_SITE_LEGAL_NAME ?? "Balance Psicología",
  tagline:
    process.env.NEXT_PUBLIC_SITE_TAGLINE ??
    "Acompañamiento psicológico cálido y profesional en Aguascalientes.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  location: process.env.NEXT_PUBLIC_BRAND_LOCATION ?? "Aguascalientes, México",
  address: {
    display: "Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.",
    mapsUrl: "https://maps.app.goo.gl/yeoxjHcLFUmbPkCm7",
  },
  contact: {
    whatsappDisplay: "449 555 6035",
    whatsappInternational: "524495556035",
    whatsappUrl:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/524495556035",
  },
  assets: {
    logoHorizontal: {
      src: "/brand/balance-logo-horizontal-color-transparent.png",
      width: 900,
      height: 297,
    },
    logoStacked: {
      src: "/brand/balance-logo-stacked-color-transparent.png",
      width: 720,
      height: 576,
    },
  },
  social: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ??
      "https://www.facebook.com/people/Psic-Fernanda-Regalado-Terapia-Cognitivo-Conductual/61590600875459/",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/psic.fernandaregalado/",
  },
} as const;
