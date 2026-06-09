import type { FeatureSectionContent } from "@/types/content";

export const featureSectionContent: FeatureSectionContent = {
  eyebrow: "Estructura base",
  title: "Todo queda listo para crecer sin sobreingeniería temprana.",
  description:
    "El template separa branding, contenido, servicios y UI para poder clonar el repo, rebrandearlo rápido y evolucionarlo por cliente.",
  items: [
    {
      tag: "Architecture",
      title: "Single app, modular por diseño",
      description:
        "Se elige una sola app Next.js para mantener simplicidad hoy, con separación clara entre superficies, servicios, configuración y contenido.",
    },
    {
      tag: "Content",
      title: "Contenido reusable por archivos",
      description:
        "Hero, features, pricing, FAQ y metadata usan archivos TypeScript fáciles de versionar y luego reemplazar por CMS o base de datos.",
    },
    {
      tag: "Admin readiness",
      title: "Ruta interna preparada",
      description:
        "La sección /admin ya existe como placeholder y deja resuelta la frontera conceptual para futuras herramientas internas del cliente.",
    },
    {
      tag: "Media",
      title: "Storage desacoplado",
      description:
        "Los adapters de media aíslan la futura integración cloud para que UI y contenido no dependan del proveedor elegido.",
    },
  ],
};
