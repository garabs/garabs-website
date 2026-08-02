import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

/** Estilos de botón compartidos, derivados de los tokens del design system. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2";

export const buttonStyles = {
  primary: `${base} bg-primary text-primary-foreground hover:bg-primary-soft`,
  accent: `${base} bg-accent text-accent-foreground hover:opacity-90`,
  outline: `${base} border border-input bg-background text-primary hover:bg-surface`,
  ghost: `${base} px-0 text-primary underline-offset-4 hover:text-accent hover:underline`,
} as const;

type Variant = keyof typeof buttonStyles;

export function LinkButton({
  to,
  variant = "primary",
  className = "",
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${buttonStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-eyebrow">{children}</p>;
}

export function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <header className="section-y bg-surface">
      <div className="container-page max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-section mt-3">{title}</h1>
        {body ? (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {body}
          </p>
        ) : null}
      </div>
    </header>
  );
}
