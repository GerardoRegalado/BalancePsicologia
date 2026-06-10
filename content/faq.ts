import type { FaqItem, FaqSectionContent } from "@/types/content";

export const faqItems: FaqItem[] = [
  {
    question: "¿Cómo puedo solicitar información?",
    answer:
      "Muy pronto se integrarán los canales oficiales para iniciar contacto con Balance Psicología.",
  },
  {
    question: "¿Dónde se encuentra Balance Psicología?",
    answer:
      "La atención se ubica en Aguascalientes. La dirección exacta se publicará cuando la información esté lista.",
  },
  {
    question: "¿Los costos ya están disponibles?",
    answer:
      "La información comercial se publicará de forma clara cuando existan datos aprobados para compartir.",
  },
  {
    question: "¿La solicitud de cita confirma una agenda?",
    answer:
      "La solicitud funciona como primer contacto. La confirmación de una cita dependerá de los canales oficiales de Balance Psicología.",
  },
];

export const faqSectionContent: FaqSectionContent = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
  description:
    "Respuestas breves para orientar antes de iniciar contacto, sin sustituir una conversación directa con Balance Psicología.",
  items: faqItems,
};
