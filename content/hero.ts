import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Balance Psicologia",
  title: "Estamos preparando un espacio para tu bienestar.",
  description:
    "Muy pronto este sitio reunira informacion clara sobre servicios psicologicos, ubicacion y formas de contacto en Aguascalientes.",
  actions: [
    {
      label: "Sitio en preparacion",
      href: "/",
      variant: "primary",
    },
  ],
  highlights: [
    {
      label: "Fase actual",
      value:
        "Limpieza inicial de referencias del template antes de construir la pagina temporal aprobada.",
    },
    {
      label: "Proximo entregable",
      value:
        "Pagina temporal publica para comunicar que Balance Psicologia esta en construccion.",
    },
    {
      label: "Limite de alcance",
      value:
        "No se implementa app privada, login, base de datos ni captura de informacion en esta subfase.",
    },
  ],
};
