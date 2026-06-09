export type AdminModuleStatus = "planned" | "placeholder";

export type AdminModule = {
  key: "clients" | "leads" | "projects" | "content" | "media";
  label: string;
  description: string;
  status: AdminModuleStatus;
  owner: "operations" | "delivery" | "content";
};

export const adminConfig = {
  routePrefix: "/admin",
  intro: {
    eyebrow: "Internal workspace",
    title: "Admin panel roadmap",
    description:
      "Esta superficie queda reservada para la operación interna del estudio. Todavía no incluye auth, base de datos ni uploads reales; solo la frontera correcta para crecer sin rehacer la app pública.",
  },
  futureModules: [
    {
      key: "clients",
      label: "Clientes",
      description:
        "Seguimiento de cuentas, contactos, accesos, handoff y estado comercial por cliente.",
      status: "placeholder",
      owner: "operations",
    },
    {
      key: "leads",
      label: "Leads",
      description:
        "Captura de oportunidades, estado del pipeline, notas de discovery y próximos pasos comerciales.",
      status: "planned",
      owner: "operations",
    },
    {
      key: "projects",
      label: "Proyectos",
      description:
        "Vista interna para alcance, entregables, milestones, QA, fechas y riesgos de delivery.",
      status: "planned",
      owner: "delivery",
    },
    {
      key: "content",
      label: "Contenido",
      description:
        "Edición futura de copies, enlaces, bloques de landing y metadata sin mezclar lógica de UI.",
      status: "planned",
      owner: "content",
    },
    {
      key: "media",
      label: "Media",
      description:
        "Gestión futura de imágenes, videos y archivos conectados a storage S3-compatible y signed uploads.",
      status: "planned",
      owner: "content",
    },
  ] satisfies AdminModule[],
} as const;
