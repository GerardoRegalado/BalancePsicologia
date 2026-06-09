import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

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
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition",
        variant === "primary"
          ? "bg-accent hover:bg-accent-strong text-white"
          : "border-border bg-surface/80 text-foreground hover:border-accent/40 hover:bg-surface border",
      )}
    >
      {label}
    </Link>
  );
}
