import type { FeatureSectionContent } from "@/types/content";

export const featureSectionContent: FeatureSectionContent = {
  eyebrow: "Landing publica",
  title: "Estructura lista para completar la experiencia publica.",
  description:
    "La pagina queda organizada por secciones editables para integrar contenido real sin mezclar copy comercial dentro de la UI.",
  items: [
    {
      tag: "Hero",
      title: "Entrada principal preparada",
      description:
        "El espacio inicial queda reservado para la propuesta principal y CTAs de la siguiente subfase.",
    },
    {
      tag: "Contenido",
      title: "Copy editable centralizado",
      description:
        "Las secciones leen placeholders desde content para poder reemplazarlos por textos aprobados.",
    },
    {
      tag: "Contacto",
      title: "Canales pendientes protegidos",
      description:
        "Telefono, WhatsApp, correo y mapa se dejan como pendientes hasta tener datos confirmados.",
    },
    {
      tag: "Scope",
      title: "Sin funcionalidad prematura",
      description:
        "La estructura no captura datos, no agenda citas y no integra proveedores externos.",
    },
  ],
};
