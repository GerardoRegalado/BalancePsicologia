import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { ctaClass } from "@/components/ui/cta-styles";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/hero";

export function SiteHeader() {
  const primaryAction = heroContent.actions[0] ?? {
    label: "Solicitar cita",
    href: "#agenda",
    variant: "primary" as const,
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-surface/90 backdrop-blur-md">
      <Container className="relative flex min-h-16 items-center justify-between gap-4 py-1.5 md:min-h-18 md:gap-gutter md:py-2">
        <div className="flex min-w-0 items-center justify-between gap-gutter">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80 focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
            aria-label={brandConfig.name}
          >
            <Image
              src={brandConfig.assets.logoHorizontal.src}
              alt={brandConfig.name}
              width={brandConfig.assets.logoHorizontal.width}
              height={brandConfig.assets.logoHorizontal.height}
              priority
              sizes="(min-width: 768px) 185px, 145px"
              className="h-auto w-[145px] md:w-[185px]"
            />
          </Link>
        </div>

        <nav
          aria-label="Navegación pública"
          className="hidden items-center gap-8 text-sm text-on-surface-variant md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryAction.href}
          className={ctaClass({
            variant: "primary",
            size: "sm",
            className: "hidden md:inline-flex",
          })}
        >
          {primaryAction.label}
        </a>

        <MobileNavigation
          navigation={siteConfig.navigation}
          primaryAction={primaryAction}
        />
      </Container>
    </header>
  );
}
