import type { FaqItem, FaqSectionContent, PricingPlan } from "@/types/content";
import { brandConfig } from "@/config/brand";
import { pricingPlans } from "@/content/pricing";

function getPricingPlan(id: PricingPlan["id"]) {
  const plan = pricingPlans.find((item) => item.id === id);

  if (!plan) {
    throw new Error(`Missing pricing plan: ${id}`);
  }

  return plan;
}

const individualPlan = getPricingPlan("individual");
const couplePlan = getPricingPlan("couple");
const familyPlan = getPricingPlan("family");

export const faqItems: FaqItem[] = [
  {
    question: "¿Cómo puedo solicitar información?",
    answer: `Actualmente puedes solicitar información por WhatsApp al ${brandConfig.contact.whatsappDisplay} o consultar los perfiles oficiales de Balance Psicología.`,
  },
  {
    question: "¿Dónde se encuentra Balance Psicología?",
    answer: `Balance Psicología se encuentra en ${brandConfig.address.clinicName}, ${brandConfig.address.display}. Puedes consultar la ubicación en Google Maps.`,
  },
  {
    question: "¿Los costos ya están disponibles?",
    answer: `Sí. Los costos publicados son ${individualPlan.price} para ${individualPlan.name.toLowerCase()}, ${couplePlan.price} para ${couplePlan.name.toLowerCase()} y ${familyPlan.price} para ${familyPlan.name.toLowerCase()}.`,
  },
  {
    question: "¿La solicitud de cita confirma una agenda?",
    answer:
      "No. El mensaje inicia el proceso de contacto; la fecha y hora se consideran confirmadas únicamente después de recibir respuesta.",
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
