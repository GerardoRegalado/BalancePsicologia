import { cn } from "@/lib/utils/cn";

type CtaStyleOptions = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
};

const baseCtaClass =
  "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-[background-color,border-color,color,opacity,transform] duration-300 focus-visible:ring-4 focus-visible:outline-none";

const ctaSizeClass = {
  sm: "min-h-11 px-6 py-3",
  md: "min-h-12 px-6 py-3",
  lg: "min-h-14 px-8 py-4",
} as const;

const ctaVariantClass = {
  primary:
    "bg-primary [color:var(--on-primary)] hover:bg-primary-container hover:[color:var(--on-primary)] focus-visible:ring-primary/25",
  secondary:
    "gap-2 border border-primary/20 bg-surface-container-lowest text-primary hover:bg-surface-container-low focus-visible:ring-primary/20",
} as const;

export function ctaClass({
  variant = "primary",
  size = "md",
  disabled = false,
  className,
}: CtaStyleOptions = {}) {
  return cn(
    baseCtaClass,
    ctaSizeClass[size],
    ctaVariantClass[variant],
    disabled && "cursor-not-allowed opacity-70",
    className,
  );
}
