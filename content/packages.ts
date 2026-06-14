import type { PackagesSectionContent } from "@/types/content";
import { pricingPlans } from "@/content/pricing";

export const packagesSectionContent: PackagesSectionContent = {
  id: "costos",
  eyebrow: "Costos",
  title: "Costos por sesión",
  description: "Consulta los costos de las modalidades de terapia disponibles.",
  publicNote: "Precios expresados en pesos mexicanos.",
  items: pricingPlans.map((plan) => ({
    name: plan.name,
    summary: plan.description,
    detail: "Costo por sesión",
    meta: plan.price,
  })),
  note: {
    title: "¿Tienes dudas antes de agendar?",
    description:
      "Consulta disponibilidad y detalles de atención a través de los canales oficiales de contacto.",
  },
};

export const packagePreviews = packagesSectionContent.items;
