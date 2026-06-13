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
      <Container className="flex flex-col items-center justify-between gap-7 py-10 md:flex-row md:gap-6 md:py-7">
        <Image
          src={brandConfig.assets.logoStacked.src}
          alt={brandConfig.name}
          width={brandConfig.assets.logoStacked.width}
          height={brandConfig.assets.logoStacked.height}
          sizes="(min-width: 768px) 145px, 165px"
          className="h-auto w-[165px] shrink-0 md:w-[145px]"
        />

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
          <SocialLinks
            className="flex flex-wrap justify-center gap-x-5 gap-y-3"
            linkClassName="transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
          />
        </div>

        <div className="flex max-w-sm flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p className="text-sm leading-6 text-primary">
            © {currentYear} {brandConfig.name}. Todos los derechos reservados.{" "}
            {brandConfig.location}.
          </p>
          <a
            href={brandConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-on-secondary-container transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
          >
            WhatsApp: {brandConfig.contact.whatsappDisplay}
          </a>
        </div>
      </Container>
    </footer>
  );
}
