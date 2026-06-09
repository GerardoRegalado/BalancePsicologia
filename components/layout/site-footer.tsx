import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";

const stackHighlights = ["Next.js", "TypeScript", "Tailwind CSS", "SEO base"];

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-accent text-xs tracking-[0.3em] uppercase">
            Reusable foundation
          </p>
          <h2 className="text-2xl font-semibold">{brandConfig.name}</h2>
          <p className="text-muted text-sm leading-7">
            Plantilla profesional pensada para arrancar landings, sitios
            institucionales, SPAs ligeras y futuros SaaS sin rehacer la base.
          </p>
        </div>

        <div className="text-muted flex flex-wrap gap-2 text-xs tracking-[0.2em] uppercase">
          {stackHighlights.map((item) => (
            <span
              key={item}
              className="border-border bg-surface/80 rounded-full border px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </footer>
  );
}
