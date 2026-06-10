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
        "focus-visible:ring-primary/30 inline-flex min-h-11 items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 ease-out hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:outline-none",
        variant === "primary"
          ? "bg-primary text-on-primary hover:bg-primary-container"
          : "border-primary/25 bg-surface-container-lowest text-primary hover:border-primary/50 hover:bg-surface-container-low border",
      )}
    >
      {label}
    </Link>
  );
}
