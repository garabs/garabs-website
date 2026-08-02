import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — GARABS LLC" },
      {
        name: "description",
        content:
          "Conoce cómo GARABS LLC recopila, usa y protege la información que envías a través de este sitio web.",
      },
      { property: "og:title", content: "Política de Privacidad — GARABS LLC" },
      {
        property: "og:description",
        content:
          "Información sobre cómo GARABS LLC trata los datos enviados a través de garabs.com.",
      },
      { property: "og:url", content: "/privacidad" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacyPage,
});

const sectionClass = "space-y-3";
const headingClass = "text-xl font-semibold text-primary";
const paragraphClass = "leading-7 text-muted-foreground";
const listClass = "list-disc space-y-2 pl-6 leading-7 text-muted-foreground";

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacidad"
        title="Política de Privacidad"
        body="Esta política explica qué información recopila GARABS LLC a través de garabs.com, cómo la utiliza y qué opciones tienes."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-10">
          <p className="text-sm text-muted-foreground">
            Última actualización: 2 de agosto de 2026
          </p>

          <section className={sectionClass}>
            <h2 className={headingClass}>1. Quiénes somos</h2>
            <p className={paragraphClass}>
              Este sitio web es operado por GARABS LLC, una empresa registrada
              en Ohio, Estados Unidos. En esta política, “GARABS”, “nosotros” y
              “nuestro” se refieren a GARABS LLC.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Información que recopilamos</h2>
            <p className={paragraphClass}>
              Recopilamos la información que decides enviar voluntariamente a
              través de nuestro formulario de contacto, incluyendo:
            </p>
            <ul className={listClass}>
              <li>Nombre.</li>
              <li>Nombre de tu negocio.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono, cuando lo proporcionas.</li>
              <li>Idioma de preferencia.</li>
              <li>Tipo de ayuda o servicio solicitado.</li>
              <li>Descripción de tu proyecto o necesidad.</li>
              <li>Información sobre tu sitio web actual, si corresponde.</li>
              <li>Método de contacto preferido.</li>
            </ul>
            <p className={paragraphClass}>
              El sitio también puede generar información técnica básica, como
              dirección IP, tipo de navegador, dispositivo, fecha y hora de la
              visita, a través de los servicios de alojamiento, seguridad y
              funcionamiento del sitio.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. Cómo utilizamos la información</h2>
            <p className={paragraphClass}>
              Utilizamos la información únicamente para fines relacionados con
              tu consulta y con la operación de GARABS, incluyendo:
            </p>
            <ul className={listClass}>
              <li>Responder a tus preguntas o solicitudes.</li>
              <li>Comprender las necesidades de tu negocio.</li>
              <li>Preparar una conversación, propuesta o cotización.</li>
              <li>Brindar seguimiento a una solicitud de servicio.</li>
              <li>Proteger el sitio contra fraude, abuso o actividad maliciosa.</li>
              <li>Cumplir obligaciones legales cuando corresponda.</li>
            </ul>
            <p className={paragraphClass}>
              No vendemos ni alquilamos tu información personal.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Proveedores de servicios</h2>
            <p className={paragraphClass}>
              Para operar este sitio utilizamos proveedores externos que pueden
              procesar información técnica o datos enviados por el formulario.
              Actualmente incluyen:
            </p>
            <ul className={listClass}>
              <li>
                <strong>Web3Forms:</strong> procesa los datos enviados mediante
                el formulario de contacto y los reenvía al correo designado por
                GARABS.
              </li>
              <li>
                <strong>Vercel:</strong> aloja y publica el sitio web.
              </li>
              <li>
                <strong>Cloudflare:</strong> administra servicios de dominio,
                DNS y seguridad relacionados con garabs.com.
              </li>
            </ul>
            <p className={paragraphClass}>
              Estos proveedores pueden tratar información conforme a sus
              propias políticas, términos y prácticas de seguridad.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Conservación de la información</h2>
            <p className={paragraphClass}>
              Conservamos la información durante el tiempo razonablemente
              necesario para responder a tu consulta, dar seguimiento a una
              relación comercial, mantener registros operativos o cumplir
              obligaciones legales. Cuando la información deja de ser
              necesaria, procuramos eliminarla o dejar de conservarla.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. Seguridad</h2>
            <p className={paragraphClass}>
              Aplicamos medidas razonables para proteger la información contra
              pérdida, uso indebido, acceso no autorizado, alteración o
              divulgación. Sin embargo, ningún sistema de transmisión o
              almacenamiento en Internet puede garantizar seguridad absoluta.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Cookies y analítica</h2>
            <p className={paragraphClass}>
              Actualmente GARABS no utiliza herramientas propias de publicidad
              conductual ni de analítica de marketing en este sitio. Algunos
              proveedores técnicos pueden utilizar cookies estrictamente
              necesarias o registros técnicos para seguridad, funcionamiento y
              entrega del sitio.
            </p>
            <p className={paragraphClass}>
              Si en el futuro añadimos herramientas de analítica, publicidad,
              chatbot u otras tecnologías que cambien esta práctica,
              actualizaremos esta política.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Enlaces externos</h2>
            <p className={paragraphClass}>
              El sitio puede incluir enlaces a páginas o servicios de terceros.
              GARABS no controla sus prácticas de privacidad y recomienda
              revisar las políticas de esos terceros antes de proporcionarles
              información.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>9. Privacidad de menores</h2>
            <p className={paragraphClass}>
              Este sitio está dirigido a personas adultas y negocios. No
              recopilamos intencionalmente información personal de menores de
              13 años. Si recibimos información de un menor por error, tomaremos
              medidas razonables para eliminarla.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>10. Tus opciones</h2>
            <p className={paragraphClass}>
              Puedes solicitar acceso, corrección o eliminación de la
              información personal que hayas enviado a GARABS, sujeto a las
              obligaciones legales y operativas aplicables.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>11. Cambios a esta política</h2>
            <p className={paragraphClass}>
              Podemos actualizar esta Política de Privacidad cuando cambien
              nuestras prácticas, servicios o requisitos legales. La fecha de
              la última actualización aparecerá al comienzo de esta página.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>12. Contacto</h2>
            <p className={paragraphClass}>
              Para preguntas sobre esta política o sobre el tratamiento de tu
              información, utiliza nuestro{" "}
              <a
                href="/contacto"
                className="font-medium text-primary underline underline-offset-4"
              >
                formulario de contacto
              </a>
              .
            </p>
          </section>

          <p className="border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
            Esta política ofrece información general sobre las prácticas
            actuales de GARABS LLC y no constituye asesoría legal.
          </p>
        </div>
      </section>
    </>
  );
}
