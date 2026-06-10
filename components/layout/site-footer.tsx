import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { comingSoonContent } from "@/content/coming-soon";

export function SiteFooter() {
  return (
    <footer aria-label="Footer" className="bg-surface-container w-full">
      <Container className="flex flex-col items-center justify-between gap-gutter py-stack-md md:flex-row">
        <div className="font-serif text-xl leading-7 font-medium text-primary">
          <span className="block">Balance</span>
          <span className="block">Psicologia</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm font-medium tracking-[0.16em] text-on-secondary-container">
          {comingSoonContent.footerItems.map((item) => (
            <span
              key={item}
              aria-disabled="true"
              className="cursor-default transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="max-w-sm text-center text-sm font-medium leading-6 text-primary md:text-left">
          © 2024 {brandConfig.name}. Todos los derechos reservados.{" "}
          {comingSoonContent.location}.
        </p>
      </Container>
    </footer>
  );
}
