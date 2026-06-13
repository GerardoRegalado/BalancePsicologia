import { brandConfig } from "@/config/brand";
import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: brandConfig.location,
  title: "Un espacio seguro para tu",
  titleAccent: "bienestar mental.",
  mobileTitleAccent: "bienestar emocional.",
  description:
    "En Balance Psicología te ofrecemos un acompañamiento terapéutico empático, ético y profesional. Descubre la claridad y la paz que buscas a través de un proceso de autoconocimiento guiado.",
  actions: [
    {
      label: "Solicitar cita",
      mobileLabel: "Solicitar primera sesión",
      href: brandConfig.contact.whatsappUrl,
      variant: "primary",
      external: true,
    },
    {
      label: "Conocer opciones",
      href: "#agenda",
      variant: "secondary",
    },
  ],
  highlights: [],
  image: {
    src: "/media/hero-consultorio-balance.png",
    alt: "Consultorio cálido con sillón claro, plantas y luz natural suave.",
  },
};
