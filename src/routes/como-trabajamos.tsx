import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { LinkButton, PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/como-trabajamos")({
  head: () => ({
    meta: [
      { title: "Cómo trabajamos — GARABS LLC" },
      {
        name: "description",
        content:
          "Un proceso claro en seis etapas: conocemos tu negocio, definimos lo necesario, diseñamos y configuramos, revisamos contigo, publicamos y seguimos disponibles.",
      },
      { property: "og:title", content: "Cómo trabajamos — GARABS LLC" },
      {
        property: "og:description",
        content: "Así avanza cada proyecto en GARABS, etapa por etapa.",
      },
      { property: "og:url", content: "/como-trabajamos" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/como-trabajamos" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.processPage.eyebrow}
        title={t.processPage.title}
        body={t.processPage.body}
      />

      <section className="section-y">
        <div className="container-page">
          {/* Línea de tiempo sencilla */}
          <ol className="grid gap-0 border-l border-border pl-6 sm:pl-8">
            {t.processPage.steps.map((step, i) => (
              <li key={step.title} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.72rem] h-3 w-3 rounded-full bg-accent sm:-left-[2.22rem]"
                />
                <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1.5 text-lg font-semibold sm:text-xl">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <LinkButton to="/contacto">{t.cta.consult}</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
