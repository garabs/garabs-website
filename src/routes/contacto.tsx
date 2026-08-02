import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { PageHeader, buttonStyles } from "@/components/ui-kit";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — GARABS LLC" },
      {
        name: "description",
        content:
          "Cuéntanos qué necesita tu negocio y conversemos sobre tu presencia digital. Atención en español e inglés.",
      },
      { property: "og:title", content: "Contacto — GARABS LLC" },
      {
        property: "og:description",
        content: "Escríbenos y conversemos sobre tu presencia digital.",
      },
      { property: "og:url", content: "/contacto" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground";

const labelClass = "block text-sm font-medium text-primary";

function ContactPage() {
  const { t } = useLanguage();
  const f = t.contactPage.fields;
  const o = t.contactPage.options;

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "ddc797a5-9de2-4147-888b-3996310b290d",
    );
    formData.append("subject", "Nuevo mensaje desde garabs.com");
    formData.append("from_name", "Formulario de contacto de GARABS");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("¡Gracias! Tu mensaje fue enviado correctamente.");
        form.reset();
      } else {
        setResult(
          "No pudimos enviar tu mensaje. Por favor, inténtalo nuevamente.",
        );
      }
    } catch {
      setResult(
        "Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        body={t.contactPage.body}
      />

      <section className="section-y">
        <div className="container-page max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="name">
                  {f.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label className={labelClass} htmlFor="business">
                  {f.business}
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  autoComplete="organization"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label className={labelClass} htmlFor="email">
                  {f.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label className={labelClass} htmlFor="phone">
                  {f.phone}{" "}
                  <span className="font-normal text-muted-foreground">
                    ({f.optional})
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label className={labelClass} htmlFor="language">
                  {f.language}
                </label>
                <select
                  id="language"
                  name="language"
                  required
                  className={fieldClass}
                >
                  <option value="">{o.choose}</option>
                  {o.languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-0">
                <label className={labelClass} htmlFor="helpType">
                  {f.helpType}
                </label>
                <select
                  id="helpType"
                  name="helpType"
                  required
                  className={fieldClass}
                >
                  <option value="">{o.choose}</option>
                  {o.help.map((helpType) => (
                    <option key={helpType} value={helpType}>
                      {helpType}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="min-w-0">
              <label className={labelClass} htmlFor="description">
                {f.description}
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                minLength={10}
                className={fieldClass}
              />
            </div>

            <fieldset className="min-w-0">
              <legend className={labelClass}>{f.hasSite}</legend>

              <div className="mt-2 flex flex-wrap gap-5">
                {[o.yes, o.no].map((value) => (
                  <label
                    key={value}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <input
                      type="radio"
                      name="hasSite"
                      value={value}
                      required
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    {value}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label className={labelClass} htmlFor="siteUrl">
                  {f.siteUrl}{" "}
                  <span className="font-normal text-muted-foreground">
                    ({f.optional})
                  </span>
                </label>
                <input
                  id="siteUrl"
                  name="siteUrl"
                  type="url"
                  inputMode="url"
                  placeholder="https://"
                  className={fieldClass}
                />
              </div>

              <div className="min-w-0">
                <label
                  className={labelClass}
                  htmlFor="preferredContact"
                >
                  {f.preferredContact}
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  required
                  className={fieldClass}
                >
                  <option value="">{o.choose}</option>
                  {o.contact.map((contactMethod) => (
                    <option
                      key={contactMethod}
                      value={contactMethod}
                    >
                      {contactMethod}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${buttonStyles.primary} w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isSubmitting
                  ? "Enviando..."
                  : t.contactPage.submit}
              </button>
            </div>

            <p
              aria-live="polite"
              className="text-sm text-muted-foreground"
            >
              {result}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
