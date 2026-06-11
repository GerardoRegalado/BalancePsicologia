import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { footerContent } from "@/content/contact";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="w-full bg-surface-container"
    >
      <Container className="flex flex-col items-center justify-between gap-7 py-10 md:flex-row md:gap-6 md:py-7">
        <div className="text-center font-serif text-xl leading-7 font-medium text-primary md:text-left">
          <span className="block">Balance</span>
          <span className="block">Psicología</span>
        </div>

        <div className="flex flex-col items-center gap-4 text-center text-xs font-medium tracking-[0.12em] text-on-secondary-container uppercase md:gap-3">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {footerContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {footerContent.legal.map((item) => (
              <span
                key={item.label}
                aria-disabled="true"
                className="cursor-default"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <p className="max-w-sm text-center text-sm leading-6 text-primary md:text-left">
          © 2024 {brandConfig.name}. Todos los derechos reservados.{" "}
          {brandConfig.location}.
        </p>
      </Container>
    </footer>
  );
}
