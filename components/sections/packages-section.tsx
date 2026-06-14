import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { packagesSectionContent } from "@/content/packages";

export function PackagesSection() {
  return (
    <LandingSectionShell
      id={packagesSectionContent.id}
      eyebrow={packagesSectionContent.eyebrow}
      title={packagesSectionContent.title}
      description={packagesSectionContent.description}
      publicNote={packagesSectionContent.publicNote}
      className="bg-surface-container-low"
    >
      <div className="grid gap-5 md:grid-cols-3 md:gap-8">
        {packagesSectionContent.items.map((item) => (
          <article
            key={item.name}
            className="flex flex-col rounded-lg border border-outline-variant/60 bg-surface-container-lowest p-6 md:min-h-72 md:p-8"
          >
            <p className="font-serif text-3xl font-medium text-on-surface md:text-4xl">
              {item.meta}
            </p>
            <h3 className="mt-4 font-serif text-2xl font-medium text-on-surface">
              {item.name}
            </h3>
            <p className="mt-4 grow text-sm leading-7 text-on-surface-variant">
              {item.summary}
            </p>
            <span className="mt-6 rounded-lg bg-secondary-container px-3 py-2 text-xs leading-5 font-medium text-on-secondary-container">
              {item.detail}
            </span>
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-primary/10 bg-surface-container-lowest p-5 shadow-atmospheric-sm md:flex md:items-center md:justify-between md:gap-8 md:p-6">
        <div>
          <h3 className="text-sm font-bold text-on-surface">
            {packagesSectionContent.note.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-on-surface-variant">
            {packagesSectionContent.note.description}
          </p>
        </div>
      </div>
    </LandingSectionShell>
  );
}
