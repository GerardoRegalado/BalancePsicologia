import type { ServiceItem, ServicesSectionContent } from "@/types/content";

export const servicesSectionContent: ServicesSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Servicios terapéuticos",
  description:
    "Una guía inicial de espacios de acompañamiento emocional y relacional, presentada con un tono claro, profesional y cuidadoso.",
  items: [
    {
      title: "Acompañamiento individual",
      description:
        "Espacio pensado para conversar con calma sobre lo que estás viviendo y reconocer necesidades personales con acompañamiento respetuoso.",
      icon: "individual",
      tags: ["Claridad", "Autocuidado"],
    },
    {
      title: "Acompañamiento para parejas",
      description:
        "Espacio orientado a facilitar conversaciones más claras, reconocer dinámicas de relación y abrir acuerdos de forma cuidadosa.",
      icon: "couple",
      tags: ["Comunicación", "Conflictos"],
    },
    {
      title: "Acompañamiento familiar",
      description:
        "Espacio para mirar dinámicas familiares, fortalecer la convivencia y promover conversaciones más respetuosas entre sus integrantes.",
      icon: "family",
      tags: ["Dinámicas", "Convivencia"],
    },
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    name: "Acompañamiento individual",
    summary:
      "Espacio pensado para conversar con calma sobre lo que estás viviendo y reconocer necesidades personales.",
    outcome: "Acompañamiento respetuoso al ritmo de cada persona.",
  },
  {
    name: "Acompañamiento para parejas",
    summary:
      "Espacio orientado a facilitar conversaciones más claras y reconocer dinámicas de relación.",
    outcome: "Un entorno cuidadoso para abrir acuerdos y mejorar la comunicación.",
  },
  {
    name: "Acompañamiento familiar",
    summary:
      "Espacio para mirar dinámicas familiares y fortalecer la convivencia.",
    outcome: "Conversaciones más cuidadosas entre sus integrantes.",
  },
];
