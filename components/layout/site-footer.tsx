import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";

const stackHighlights = ["Next.js", "TypeScript", "Tailwind CSS", "SEO base"];

export function SiteFooter() {
  return (
    <footer className="border-outline-variant bg-surface-container-low border-t">
      <Container className="flex flex-col gap-gutter py-stack-lg md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
            Reusable foundation
          </p>
          <h2 className="font-serif text-2xl font-medium text-primary">
            {brandConfig.name}
          </h2>
          <p className="text-on-surface-variant text-sm leading-7">
            Plantilla profesional pensada para arrancar landings, sitios
            institucionales, SPAs ligeras y futuros SaaS sin rehacer la base.
          </p>
        </div>

        <div className="text-on-secondary-fixed flex flex-wrap gap-2 text-xs tracking-[0.15em] uppercase">
          {stackHighlights.map((item) => (
            <span
              key={item}
              className="border-primary/15 bg-secondary-fixed rounded-full border px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </footer>
  );
}
