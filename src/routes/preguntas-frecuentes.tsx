import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { LinkButton, PageHeader } from "@/components/ui-kit";
import { ChevronIcon } from "@/components/icons";
import { es } from "@/lib/content";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — GARABS LLC" },
      {
        name: "description",
        content:
          "Respuestas sobre dominios, correos profesionales, tiempos, mantenimiento, pagos y atención en español e inglés.",
      },
      { property: "og:title", content: "Preguntas frecuentes — GARABS LLC" },
      {
        property: "og:description",
        content: "Dudas comunes sobre los servicios de GARABS, respondidas con claridad.",
      },
      { property: "og:url", content: "/preguntas-frecuentes" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/preguntas-frecuentes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: es.faqPage.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow={t.faqPage.eyebrow}
        title={t.faqPage.title}
        body={t.faqPage.body}
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="border-t border-border">
            {t.faqPage.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-border">
                  <h2>
                    <button
                      type="button"
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-display text-base font-semibold text-primary sm:text-lg">
                        {item.q}
                      </span>
                      <ChevronIcon
                        className={`mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h2>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={!isOpen}
                    className="pr-8 pb-5"
                  >
                    <p className="text-sm text-muted-foreground sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <LinkButton to="/contacto">{t.cta.consult}</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
