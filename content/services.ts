import type { ServiceItem, ServicesSectionContent } from "@/types/content";
import { pricingPlans } from "@/content/pricing";

export const servicesSectionContent: ServicesSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Modalidades de terapia",
  description:
    "Conoce las modalidades de atención disponibles en Balance Psicología.",
  items: pricingPlans.map((plan) => ({
    title: plan.name,
    description: plan.description,
    icon: plan.icon,
    tags: plan.tags,
  })),
};

export const serviceItems: ServiceItem[] = pricingPlans.map((plan) => ({
  name: plan.name,
  summary: plan.description,
  outcome: plan.tags.join(" y "),
}));
