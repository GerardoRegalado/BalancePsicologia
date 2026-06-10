import type { PricingPlan } from "@/types/content";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Sesion individual",
    description:
      "Placeholder para costo de sesion cuando exista informacion comercial aprobada.",
    featured: false,
  },
  {
    name: "Proceso terapeutico",
    description:
      "Espacio para paquetes o continuidad si el cliente decide publicarlos.",
    featured: true,
  },
];
