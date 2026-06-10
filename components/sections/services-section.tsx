import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import {
  landingServiceCards,
  landingServicesContent,
} from "@/content/landing";

export function ServicesSection() {
  return (
    <LandingSectionShell
      {...landingServicesContent}
      headerClassName="mx-auto text-center"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {landingServiceCards.map((service) => (
          <article
            key={service.title}
            className="rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-6 shadow-atmospheric-sm"
          >
            <div className="mb-6 h-12 w-12 rounded-md bg-surface-container-high" />
            <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
              {service.meta}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-medium text-on-surface">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
}
