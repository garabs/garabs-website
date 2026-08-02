import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

const navRoutes = [
  { to: "/", key: "home" },
  { to: "/servicios", key: "services" },
  { to: "/como-trabajamos", key: "process" },
  { to: "/sobre-garabs", key: "about" },
  { to: "/preguntas-frecuentes", key: "faq" },
  { to: "/contacto", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="rule-thin bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img
              src="/garabs-isotipo-transparent.png"
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-primary">
              {t.brand.name}
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {t.footer.description}
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            {t.footer.languages}
          </p>
        </div>

        <nav className="min-w-0" aria-label={t.footer.navTitle}>
          <h2 className="text-sm font-semibold text-primary">
            {t.footer.navTitle}
          </h2>

          <ul className="mt-4 space-y-2.5">
            {navRoutes.map((route) => (
              <li key={route.to}>
                <Link
                  to={route.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.nav[route.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="min-w-0" aria-label={t.footer.legalTitle}>
          <h2 className="text-sm font-semibold text-primary">
            {t.footer.legalTitle}
          </h2>

          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                to="/privacidad"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Política de Privacidad
              </Link>
            </li>

            <li>
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="rule-thin">
        <div className="container-page py-5">
          <p className="text-xs text-muted-foreground">
            © {year} {t.brand.legal}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
