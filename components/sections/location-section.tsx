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
        <div
          className="relative min-h-80 overflow-hidden rounded-xl border border-dashed border-outline-variant bg-surface-container"
          aria-label={locationSectionContent.mapLabel}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(193,200,196,0.22)_1px,transparent_1px),linear-gradient(rgba(193,200,196,0.22)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-primary/10" />
          <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          <div className="relative flex h-full min-h-80 items-end p-6 md:p-8">
            <div className="rounded-lg border border-outline-variant/50 bg-surface-container-lowest/95 p-5 shadow-atmospheric-sm">
              <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
                {locationSectionContent.mapLabel}
              </p>
              <p className="mt-2 font-serif text-2xl font-medium text-on-surface">
                {locationSectionContent.areaLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-primary p-8 text-on-primary">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            {locationSectionContent.areaLabel}
          </p>
          <h3 className="mt-4 font-serif text-3xl font-medium">
            {locationSectionContent.note.title}
          </h3>
          <p className="mt-5 leading-8 text-on-primary/85">
            {locationSectionContent.note.description}
          </p>
        </div>
      </div>
    </LandingSectionShell>
  );
}
