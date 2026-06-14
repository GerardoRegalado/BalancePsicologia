import type { PricingPlan } from "@/types/content";

export const pricingPlans: PricingPlan[] = [
  {
    id: "individual",
    name: "Terapia individual",
    price: "$450 MXN",
    description:
      "Espacio individual para conversar sobre lo que estás viviendo y trabajar tus necesidades con acompañamiento profesional y respetuoso.",
    icon: "individual",
    tags: ["Claridad", "Autocuidado"],
  },
  {
    id: "couple",
    name: "Terapia de pareja",
    price: "$700 MXN",
    description:
      "Espacio para abordar dinámicas de pareja, facilitar conversaciones más claras y trabajar dificultades de comunicación.",
    icon: "couple",
    tags: ["Comunicación", "Relación"],
  },
  {
    id: "family",
    name: "Terapia familiar",
    price: "$900 MXN",
    description:
      "Espacio para abordar dinámicas familiares y promover una comunicación más respetuosa entre sus integrantes.",
    icon: "family",
    tags: ["Dinámicas", "Convivencia"],
  },
];
