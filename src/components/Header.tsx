import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { buttonStyles } from "@/components/ui-kit";

const routes = [
  { to: "/", key: "home" },
  { to: "/servicios", key: "services" },
  { to: "/como-trabajamos", key: "process" },
  { to: "/sobre-garabs", key: "about" },
  { to: "/preguntas-frecuentes", key: "faq" },
  { to: "/contacto", key: "contact" },
] as const;

function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className="flex shrink-0 items-center rounded-md border border-input p-0.5"
      role="group"
      aria-label={t.cta.langLabel}
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded px-2 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 lg:flex lg:justify-between lg:gap-8 lg:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5"
          aria-label={`${t.brand.name} — ${t.nav.home}`}
        >
          {/* Móvil: solo isotipo. Escritorio: isotipo + palabra GARABS. */}
          <img
            src="/garabs-isotipo-transparent.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="font-display hidden text-lg font-semibold tracking-[0.14em] text-primary lg:inline">
            {t.brand.name}
          </span>
        </Link>


        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={t.nav.home}
        >
          {routes.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              activeOptions={{ exact: r.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{
                className: "text-primary font-semibold",
                "aria-current": "page",
              }}
            >
              {t.nav[r.key]}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitch />
          {/* El CTA largo no aparece en el header móvil: vive en el menú desplegable. */}
          <div className="hidden lg:block">
            <Link to="/contacto" className={`${buttonStyles.primary} px-4 py-2`}>
              {t.cta.consult}
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-input text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.cta.closeMenu : t.cta.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav className="container-page flex flex-col py-2" aria-label="">
            {routes.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                activeOptions={{ exact: r.to === "/" }}
                className="rule-thin py-3 text-base font-medium text-muted-foreground first:border-t-0"
                activeProps={{
                  className: "text-primary font-semibold",
                  "aria-current": "page",
                }}
              >
                {t.nav[r.key]}
              </Link>
            ))}
            <Link
              to="/contacto"
              className={`${buttonStyles.primary} my-4 w-full`}
            >
              {t.cta.consult}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
