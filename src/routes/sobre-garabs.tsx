import { createFileRoute } from "@tanstack/react-router";
import isotipo from "@/assets/logo.png.asset.json";
import { useLanguage } from "@/lib/i18n";
import { LinkButton, PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/sobre-garabs")({
  head: () => ({
    meta: [
      { title: "Sobre GARABS — GARABS LLC" },
      {
        name: "description",
        content:
          "Nuestro propósito, nuestra filosofía y nuestra forma de acompañar a pequeños negocios con claridad y atención personalizada.",
      },
      { property: "og:title", content: "Sobre GARABS — GARABS LLC" },
      {
        property: "og:description",
        content:
          "Tecnología explicada con claridad para pequeños negocios y emprendedores.",
      },
      { property: "og:url", content: "/sobre-garabs" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/sobre-garabs" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        body={t.aboutPage.intro}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <img
                src={isotipo.url}
                alt="Isotipo de GARABS"
                width={128}
                height={128}
                loading="lazy"
                className="mx-auto h-20 w-20 object-contain"
              />
              <p className="font-display mt-4 text-xl font-semibold tracking-[0.22em] text-primary">
                {t.brand.name}
              </p>
              <p className="mt-3 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                {t.brand.tagline}
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-8 sm:grid-cols-2">
            {t.aboutPage.blocks.map((block) => (
              <div key={block.title} className="min-w-0">
                <h2 className="text-base font-semibold">{block.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="text-section">{t.aboutPage.commitment.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {t.aboutPage.commitment.body}
          </p>
          <div className="mt-8">
            <LinkButton to="/contacto">{t.cta.talk}</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
