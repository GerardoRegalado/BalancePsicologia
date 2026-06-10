import type { ServiceItem, ServicesSectionContent } from "@/types/content";

export const servicesSectionContent: ServicesSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Servicios terapéuticos",
  description:
    "Un enfoque personalizado para distintas necesidades emocionales y relacionales, en un entorno profesional, discreto y seguro.",
  items: [
    {
      title: "Terapia individual",
      description:
        "Espacio confidencial para explorar ansiedad, estrés, duelo, autoestima o momentos de cambio personal con acompañamiento respetuoso.",
      icon: "individual",
      tags: ["Ansiedad", "Autoestima"],
    },
    {
      title: "Terapia de pareja",
      description:
        "Acompañamiento para conversar con mayor claridad, reconocer patrones de conflicto y abrir acuerdos desde un espacio neutral.",
      icon: "couple",
      tags: ["Comunicación", "Conflictos"],
    },
    {
      title: "Terapia familiar",
      description:
        "Apoyo para comprender dinámicas familiares, mejorar la convivencia y construir conversaciones más cuidadosas entre sus integrantes.",
      icon: "family",
      tags: ["Dinámicas", "Crianza"],
    },
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    name: "Terapia individual",
    summary:
      "Espacio confidencial para explorar ansiedad, estrés, duelo, autoestima o momentos de cambio personal.",
    outcome: "Acompañamiento respetuoso al ritmo de cada persona.",
  },
  {
    name: "Terapia de pareja",
    summary:
      "Acompañamiento para conversar con mayor claridad y reconocer patrones de conflicto.",
    outcome: "Un espacio neutral para abrir acuerdos y mejorar la comunicación.",
  },
  {
    name: "Terapia familiar",
    summary:
      "Apoyo para comprender dinámicas familiares y mejorar la convivencia.",
    outcome: "Conversaciones más cuidadosas entre sus integrantes.",
  },
];
