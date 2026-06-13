import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { brandConfig } from "@/config/brand";
import { footerContent } from "@/content/contact";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="w-full bg-surface-container"
    >
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1.25fr)] md:items-start md:gap-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src={brandConfig.assets.logoStacked.src}
              alt={brandConfig.name}
              width={brandConfig.assets.logoStacked.width}
              height={brandConfig.assets.logoStacked.height}
              sizes="(min-width: 768px) 155px, 170px"
              className="h-auto w-[170px] shrink-0 md:w-[155px]"
            />
          </div>

          <div className="flex flex-col items-center gap-5 text-center text-xs font-medium tracking-[0.12em] text-on-secondary-container uppercase md:items-start md:text-left">
            <nav
              aria-label="Navegación del footer"
              className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start"
            >
              {footerContent.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start">
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

          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <p className="text-sm leading-6 text-primary">
              © {currentYear} {brandConfig.name}. Todos los derechos reservados.
            </p>

            <div className="flex flex-col items-center gap-3 text-sm leading-6 text-on-secondary-container md:items-start">
              <SocialLinks
                className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start"
                linkClassName="font-medium transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
              />
              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
              >
                WhatsApp · {brandConfig.contact.whatsappDisplay}
              </a>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase">
                  Dirección
                </p>
                <a
                  href={brandConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir Google Maps de ${brandConfig.name}`}
                  className="inline-flex max-w-xs font-medium transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
                >
                  {brandConfig.address.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-outline-variant/55 pt-6 text-center text-xs leading-6 text-on-secondary-container md:mt-12 md:text-right">
          <span>{footerContent.credit.prefix} </span>
          <a
            href={footerContent.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
          >
            {footerContent.credit.label}
          </a>
        </div>
      </Container>
    </footer>
  );
}
