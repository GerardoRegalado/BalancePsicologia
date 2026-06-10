import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { servicesSectionContent } from "@/content/services";
import type { ServiceCardItem } from "@/types/content";

function ServiceIcon({ icon }: { icon: ServiceCardItem["icon"] }) {
  const paths = {
    individual: (
      <>
        <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </>
    ),
    couple: (
      <>
        <path d="M12 19s-6-3.8-6-8.2A3.2 3.2 0 0 1 12 9a3.2 3.2 0 0 1 6 1.8C18 15.2 12 19 12 19Z" />
      </>
    ),
    family: (
      <>
        <path d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M4 20a4 4 0 0 1 8 0" />
        <path d="M12 20a4 4 0 0 1 8 0" />
      </>
    ),
  } as const;

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[icon]}
      </g>
    </svg>
  );
}

export function ServicesSection() {
  return (
    <LandingSectionShell
      id={servicesSectionContent.id}
      eyebrow={servicesSectionContent.eyebrow}
      title={servicesSectionContent.title}
      description={servicesSectionContent.description}
      headerClassName="mx-auto text-center"
    >
      <div className="grid gap-5 md:grid-cols-3 md:gap-8">
        {servicesSectionContent.items.map((service) => (
          <article
            key={service.title}
            className="group flex min-h-80 flex-col rounded-lg border border-outline-variant/50 bg-surface-container-lowest p-6 transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-atmospheric-sm md:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-surface-container-high text-primary transition-colors duration-300 group-hover:bg-primary group-hover:[color:var(--on-primary)]">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-on-surface">
              {service.title}
            </h3>
            <p className="mt-4 grow text-sm leading-7 text-on-surface-variant">
              {service.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary-fixed/55 px-3 py-1 text-xs font-semibold text-on-secondary-fixed"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
}
