import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { mapsConfig } from "@/config/maps";
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
        <div className="relative min-h-80 overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container md:min-h-96">
          {mapsConfig.embedUrl ? (
            <iframe
              title={`Mapa de ${locationSectionContent.clinicName}`}
              src={mapsConfig.embedUrl}
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <div className="flex h-full min-h-80 flex-col items-center justify-center p-6 text-center md:min-h-96 md:p-8">
              <div className="max-w-sm space-y-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
                  Mapa no configurado en este entorno
                </p>
                <p className="font-serif text-2xl font-medium text-on-surface">
                  Consulta la ubicación directamente en Google Maps.
                </p>
                <a
                  href={locationSectionContent.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
                >
                  {locationSectionContent.ctaLabel}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-xl bg-primary p-6 text-on-primary md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            Dirección
          </p>
          <h3 className="mt-4 font-serif text-2xl font-medium !text-on-primary md:text-3xl">
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
