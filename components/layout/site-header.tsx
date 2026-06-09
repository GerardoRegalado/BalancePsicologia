import type { Route } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-20 border-b backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-6">
        <div>
          <p className="text-accent text-xs tracking-[0.35em] uppercase">
            {brandConfig.shortName}
          </p>
          <Link href="/" className="text-lg font-semibold">
            {brandConfig.name}
          </Link>
        </div>

        <nav className="text-muted hidden items-center gap-6 text-sm md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href as Route}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="/admin"
            label="Ver admin base"
            variant="secondary"
          />
        </div>
      </Container>
    </header>
  );
}
