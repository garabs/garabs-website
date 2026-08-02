import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — GARABS LLC" },
      {
        name: "description",
        content:
          "Cómo GARABS LLC trata la información recibida a través de este sitio.",
      },
      { property: "og:title", content: "Política de privacidad — GARABS LLC" },
      {
        property: "og:description",
        content: "Tratamiento de la información recibida a través del sitio de GARABS.",
      },
      { property: "og:url", content: "/politica-de-privacidad" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidad" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLanguage();
  const doc = t.legal.privacy;

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
