import type { Route } from "next";
import Link from "next/link";
import { ctaClass } from "@/components/ui/cta-styles";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href as Route}
      className={ctaClass({
        variant,
        size: "sm",
        className:
          variant === "primary"
            ? "hover:-translate-y-0.5"
            : "hover:border-primary/50",
      })}
    >
      {label}
    </Link>
  );
}
