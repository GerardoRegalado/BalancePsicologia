import type { PackagesSectionContent } from "@/types/content";

export const packagesSectionContent: PackagesSectionContent = {
  id: "costos",
  eyebrow: "Costos / Paquetes",
  title: "Opciones de acompañamiento",
  description:
    "La información comercial se presentará de forma clara para que puedas revisar opciones antes de iniciar contacto.",
  publicNote: "Información disponible próximamente.",
  items: [
    {
      name: "Orientación inicial",
      summary:
        "Un punto de partida para resolver dudas generales sobre modalidad, disponibilidad y siguiente paso de contacto.",
      detail: "Para iniciar una conversación con claridad.",
      meta: "Próximamente",
    },
    {
      name: "Sesión de acompañamiento",
      summary:
        "Aquí se publicará la información aprobada sobre inversión, modalidad y condiciones de atención.",
      detail: "Detalles disponibles cuando la información esté lista.",
      meta: "Próximamente",
    },
    {
      name: "Proceso de continuidad",
      summary:
        "Espacio para presentar opciones de seguimiento si Balance Psicología decide publicarlas.",
      detail: "Pensado para consultar alternativas con calma.",
      meta: "Próximamente",
    },
  ],
  note: {
    title: "Detalles con Balance Psicología",
    description:
      "Los costos finales se integrarán cuando exista información comercial aprobada para publicación.",
  },
};

export const packagePreviews = packagesSectionContent.items;
