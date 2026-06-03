import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "hero-secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs"
      : size === "lg"
        ? "px-7 py-3.5 text-base"
        : "px-6 py-3 text-sm";
  const base = `inline-flex items-center justify-center rounded-full font-semibold transition-colors ${sizeClasses}`;
  const classes =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)]"
      : variant === "hero-secondary"
        ? "border border-white text-white hover:bg-white/10"
        : "border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white";

  if (href) {
    return (
      <Link href={href} className={`${base} ${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${base} ${classes} ${className}`}>
      {children}
    </button>
  );
}
