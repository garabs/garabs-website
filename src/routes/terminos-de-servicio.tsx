import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/terminos-de-servicio")({
  head: () => ({
    meta: [
      { title: "Términos de servicio — GARABS LLC" },
      {
        name: "description",
        content:
          "Condiciones generales de uso del sitio y de los servicios de GARABS LLC.",
      },
      { property: "og:title", content: "Términos de servicio — GARABS LLC" },
      {
        property: "og:description",
        content: "Condiciones generales de uso del sitio y los servicios de GARABS LLC.",
      },
      { property: "og:url", content: "/terminos-de-servicio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terminos-de-servicio" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { t } = useLanguage();
  const doc = t.legal.terms;

  return (
    <>
      <PageHeader eyebrow={t.footer.legalTitle} title={doc.title} body={doc.body} />
      <section className="section-y">
        <div className="container-page grid max-w-3xl gap-8">
          {doc.sections.map((s) => (
            <div key={s.title} className="min-w-0">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
