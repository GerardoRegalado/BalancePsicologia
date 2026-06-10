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
  placeholderNote?: string;
};

export function LandingSectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  placeholderNote,
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
          {placeholderNote ? (
            <p className="inline-flex rounded-full border border-secondary-container bg-secondary-container/35 px-3 py-1.5 text-xs font-medium text-on-secondary-container">
              {placeholderNote}
            </p>
          ) : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
