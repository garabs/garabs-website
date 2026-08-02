import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { LinkButton, Eyebrow } from "@/components/ui-kit";
import { CheckIcon, DotIcon, serviceIcons } from "@/components/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GARABS LLC — Presencia digital para negocios pequeños" },
      {
        name: "description",
        content:
          "GARABS ayuda a pequeños negocios y emprendedores a crear, organizar y administrar su presencia digital: sitios web, dominios, correos y soporte.",
      },
      {
        property: "og:title",
        content: "GARABS LLC — Presencia digital para negocios pequeños",
      },
      {
        property: "og:description",
        content:
          "Sitios web, dominios, correos profesionales y mantenimiento, explicados con claridad.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="section-y">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="text-hero mt-4">{t.hero.title}</h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton to="/contacto">{t.cta.consult}</LinkButton>
              <LinkButton to="/servicios" variant="outline">
                {t.cta.services}
              </LinkButton>
            </div>
          </div>

          {/* Composición de marca: isotipo oficial + nombre + tagline */}
          <div className="min-w-0 rounded-xl border border-border bg-background p-8 sm:p-12">

            <div className="flex flex-col items-center text-center">
              <img
                src="/garabs-isotipo-transparent.png"
                alt="Isotipo de GARABS"
                width={160}
                height={160}
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
              />
              <p className="font-display mt-5 text-2xl font-semibold tracking-[0.22em] text-primary sm:text-3xl">
                {t.brand.name}
              </p>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <DotIcon className="h-2.5 w-2.5 shrink-0 text-accent" />
                <span className="text-xs tracking-[0.12em] uppercase sm:text-sm">
                  {t.brand.tagline}
                </span>
                <DotIcon className="h-2.5 w-2.5 shrink-0 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro enfoque */}
      <section className="section-y bg-surface" id="enfoque">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>{t.approach.eyebrow}</Eyebrow>
            <h2 className="text-section mt-3">{t.approach.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.approach.body}</p>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.approach.items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3.5 gap-y-1"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="col-start-2 text-sm text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="section-y" id="servicios">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <h2 className="text-section mt-3">{t.services.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.services.body}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.services.items.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <li
                  key={service.slug}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-1.5 rounded-xl border border-border p-5 sm:p-6"
                >
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="col-start-2 text-sm text-muted-foreground">
                    {service.short}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <LinkButton to="/servicios" variant="outline">
              {t.services.all}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Flexibilidad */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <Eyebrow>{t.flexibility.eyebrow}</Eyebrow>
            <h2 className="text-section mt-3">{t.flexibility.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.flexibility.body}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {t.flexibility.modes.map((mode) => (
              <li
                key={mode.title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h3 className="text-base font-semibold">{mode.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {mode.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Razones para elegir GARABS */}
      <section className="section-y">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow>{t.why.eyebrow}</Eyebrow>
            <h2 className="text-section mt-3">{t.why.title}</h2>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.why.items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3.5 gap-y-1"
              >
                <DotIcon className="mt-1.5 h-2.5 w-2.5 shrink-0 text-accent" />
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="col-start-2 text-sm text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-y bg-primary">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-section text-primary-foreground">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {t.finalCta.body}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <LinkButton to="/contacto" variant="accent" className="w-full sm:w-auto">
              {t.cta.consult}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
