import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import {
  landingPackageCards,
  landingPackagesContent,
} from "@/content/landing";

export function PackagesSection() {
  return (
    <LandingSectionShell
      {...landingPackagesContent}
      className="bg-surface-container-low"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {landingPackageCards.map((item) => (
          <article
            key={item.title}
            className="flex min-h-64 flex-col rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-6"
          >
            <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
              {item.meta}
            </p>
            <h3 className="mt-4 font-serif text-2xl font-medium text-on-surface">
              {item.title}
            </h3>
            <p className="mt-4 grow text-sm leading-7 text-on-surface-variant">
              {item.description}
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-secondary-container px-3 py-1.5 text-xs font-medium text-on-secondary-container">
              Contenido editable
            </span>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
}
