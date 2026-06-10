import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

type LandingSectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  headerClassName?: string;
  publicNote?: string;
};

export function LandingSectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  publicNote,
}: LandingSectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-32 py-20 md:py-28", className)}
    >
      <Container className="space-y-10 md:space-y-12">
        <div className={cn("max-w-3xl space-y-4", headerClassName)}>
          <p className="text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
            {eyebrow}
          </p>
          <h2 className="text-3xl leading-tight font-medium text-balance md:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-8 text-on-surface-variant md:text-lg">
            {description}
          </p>
          {publicNote ? (
            <p className="inline-flex rounded-full border border-secondary-container bg-secondary-container/35 px-3 py-1.5 text-xs font-medium text-on-secondary-container">
              {publicNote}
            </p>
          ) : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
