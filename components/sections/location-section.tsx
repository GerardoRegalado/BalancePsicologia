import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { locationSectionContent } from "@/content/contact";

export function LocationSection() {
  return (
    <LandingSectionShell
      id={locationSectionContent.id}
      eyebrow={locationSectionContent.eyebrow}
      title={locationSectionContent.title}
      description={locationSectionContent.description}
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
        <a
          href={locationSectionContent.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative min-h-72 overflow-hidden rounded-xl border border-dashed border-outline-variant bg-surface-container transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-atmospheric-sm focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none md:min-h-80"
          aria-label={`Abrir Google Maps de ${locationSectionContent.clinicName}`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(193,200,196,0.22)_1px,transparent_1px),linear-gradient(rgba(193,200,196,0.22)_1px,transparent_1px)] bg-[size:48px_48px]"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 bottom-10 h-28 w-44 rounded-full border border-primary/20 bg-primary/10"
          />
          <div
            aria-hidden="true"
            className="absolute top-10 left-8 h-20 w-36 rounded-full border border-secondary/20 bg-secondary/10"
          />
          <div className="relative flex h-full min-h-72 items-end p-5 md:min-h-80 md:p-8">
            <div className="rounded-lg border border-outline-variant/50 bg-surface-container-lowest/95 p-4 shadow-atmospheric-sm md:p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
                Vista abstracta de ubicación
              </p>
              <p className="mt-2 font-serif text-2xl font-medium text-on-surface">
                {locationSectionContent.ctaLabel}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-on-surface-variant">
                Este bloque es una ayuda visual; el enlace abre Google Maps.
              </p>
            </div>
          </div>
        </a>

        <div className="rounded-xl bg-primary p-6 text-on-primary md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            Dirección
          </p>
          <h3 className="mt-4 font-serif text-2xl font-medium text-on-primary md:text-3xl">
            {locationSectionContent.clinicName}
          </h3>
          <address className="mt-5 text-lg leading-8 text-on-primary/90 not-italic">
            {locationSectionContent.address}
          </address>
          <p className="mt-5 leading-8 text-on-primary/80">
            Consulta la ubicación exacta en Google Maps.
          </p>
          <a
            href={locationSectionContent.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-on-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container focus-visible:ring-4 focus-visible:ring-on-primary/30 focus-visible:outline-none"
          >
            {locationSectionContent.ctaLabel}
          </a>
        </div>
      </div>
    </LandingSectionShell>
  );
}
