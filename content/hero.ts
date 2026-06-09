import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Professional starter kit",
  title: "Base landing template",
  description:
    "Una base limpia y comercial para clonar, rebrandear y extender con rapidez en proyectos tipo landing, sitio institucional, SPA ligera o futuro SaaS.",
  actions: [
    {
      label: "Explorar estructura",
      href: "/#structure",
      variant: "primary",
    },
    {
      label: "Ver admin base",
      href: "/admin",
      variant: "secondary",
    },
  ],
  highlights: [
    {
      label: "Contenido editable",
      value:
        "Branding, copies, links, metadata y secciones viven en config y content, no regados por toda la UI.",
    },
    {
      label: "Preparado para media",
      value:
        "Queda lista la capa de adapters para conectar Cloudflare R2 o S3 cuando el proyecto lo necesite.",
    },
    {
      label: "Escalable sin dolor",
      value:
        "La arquitectura privilegia una sola app bien organizada hoy, pero deja separación suficiente para crecer a panel o módulos dedicados.",
    },
  ],
};
