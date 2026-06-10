import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { landingFooterLinks } from "@/content/landing";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="w-full bg-surface-container"
    >
      <Container className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-7">
        <div className="font-serif text-xl leading-7 font-medium text-primary">
          <span className="block">Balance</span>
          <span className="block">Psicología</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-xs font-medium tracking-[0.12em] text-on-secondary-container uppercase">
          {landingFooterLinks.map((item) => (
            <span
              key={item}
              aria-disabled="true"
              className="cursor-default transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="max-w-sm text-center text-sm leading-6 text-primary md:text-left">
          © 2024 {brandConfig.name}. Todos los derechos reservados.{" "}
          {brandConfig.location}.
        </p>
      </Container>
    </footer>
  );
}
