import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { LinkButton, PageHeader } from "@/components/ui-kit";
import { CheckIcon, DotIcon, serviceIcons } from "@/components/icons";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — GARABS LLC" },
      {
        name: "description",
        content:
          "Sitios web profesionales, dominios y configuración técnica, correos profesionales, mantenimiento y soporte para negocios pequeños.",
      },
      { property: "og:title", content: "Servicios — GARABS LLC" },
      {
        property: "og:description",
        content:
          "Servicios de presencia digital para negocios pequeños, explicados con claridad.",
      },
      { property: "og:url", content: "/servicios" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        body={t.servicesPage.body}
      />

      <div className="section-y">
        <div className="container-page grid gap-12">
          {t.services.items.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="rule-thin grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-2 pt-10 first:border-t-0 first:pt-0"
              >
                <Icon className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {service.title}
                </h2>
                <div className="col-start-2 min-w-0">
                  <p className="max-w-2xl text-muted-foreground">
                    {service.detail}
                  </p>

                  <div className="mt-7 grid gap-8 sm:grid-cols-2">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                        {t.servicesPage.problemsLabel}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.problems.map((p) => (
                          <li
                            key={p}
                            className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3"
                          >
                            <DotIcon className="mt-2 h-2 w-2 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                        {t.servicesPage.includesLabel}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.includes.map((i) => (
                          <li
                            key={i}
                            className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3"
                          >
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">
                              {i}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7">
                    <LinkButton to="/contacto" variant="outline">
                      {t.cta.consult}
                    </LinkButton>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section className="section-y bg-primary">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-section text-primary-foreground">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {t.finalCta.body}
          </p>
          <div className="mt-8">
            <LinkButton to="/contacto" variant="accent">
              {t.cta.talk}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
