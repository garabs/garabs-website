import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui-kit";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GARABS LLC" },
      {
        name: "description",
        content:
          "Learn how GARABS LLC collects, uses, and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — GARABS LLC" },
      {
        property: "og:description",
        content:
          "Information about how GARABS LLC handles data submitted through garabs.com.",
      },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
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
        eyebrow="Privacy"
        title="Privacy Policy"
        body="This policy explains what information GARABS LLC collects through garabs.com, how it is used, and what choices you have."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl space-y-10">
          <p className="text-sm text-muted-foreground">
            Last updated: August 2, 2026
          </p>

          <section className={sectionClass}>
            <h2 className={headingClass}>1. Who we are</h2>
            <p className={paragraphClass}>
              This website is operated by GARABS LLC, a company registered in
              Ohio, United States. In this policy, “GARABS,” “we,” “us,” and
              “our” refer to GARABS LLC.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Information we collect</h2>
            <p className={paragraphClass}>
              We collect information that you voluntarily submit through our
              contact form, including:
            </p>
            <ul className={listClass}>
              <li>Name.</li>
              <li>Business name.</li>
              <li>Email address.</li>
              <li>Phone number, when provided.</li>
              <li>Preferred language.</li>
              <li>Type of assistance or service requested.</li>
              <li>Description of your project or business need.</li>
              <li>Information about your current website, when applicable.</li>
              <li>Preferred contact method.</li>
            </ul>
            <p className={paragraphClass}>
              The website may also generate basic technical information, such
              as IP address, browser type, device, and visit date and time,
              through the hosting, security, and website operation services we
              use.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. How we use information</h2>
            <p className={paragraphClass}>
              We use information only for purposes related to your inquiry and
              the operation of GARABS, including:
            </p>
            <ul className={listClass}>
              <li>Responding to questions or requests.</li>
              <li>Understanding your business needs.</li>
              <li>Preparing a conversation, proposal, or estimate.</li>
              <li>Following up on a service request.</li>
              <li>Protecting the website from fraud, abuse, or malicious activity.</li>
              <li>Meeting legal obligations when applicable.</li>
            </ul>
            <p className={paragraphClass}>
              We do not sell or rent your personal information.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Service providers</h2>
            <p className={paragraphClass}>
              We use third-party providers to operate this website. Those
              providers may process technical information or data submitted
              through the contact form. They currently include:
            </p>
            <ul className={listClass}>
              <li>
                <strong>Web3Forms:</strong> processes contact form submissions
                and forwards them to the email address designated by GARABS.
              </li>
              <li>
                <strong>Vercel:</strong> hosts and publishes the website.
              </li>
              <li>
                <strong>Cloudflare:</strong> manages domain, DNS, and security
                services related to garabs.com.
              </li>
            </ul>
            <p className={paragraphClass}>
              These providers may process information according to their own
              privacy policies, terms, and security practices.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Data retention</h2>
            <p className={paragraphClass}>
              We keep information for as long as reasonably necessary to
              respond to your inquiry, follow up on a business relationship,
              maintain operational records, or meet legal obligations. When
              information is no longer needed, we seek to delete it or stop
              retaining it.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. Security</h2>
            <p className={paragraphClass}>
              We use reasonable measures to protect information against loss,
              misuse, unauthorized access, alteration, or disclosure. However,
              no Internet transmission or storage system can guarantee absolute
              security.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Cookies and analytics</h2>
            <p className={paragraphClass}>
              GARABS currently does not use its own behavioral advertising or
              marketing analytics tools on this website. Technical providers
              may use strictly necessary cookies or technical logs for
              security, operation, and delivery of the website.
            </p>
            <p className={paragraphClass}>
              If we later add analytics, advertising, a chatbot, or other
              technologies that change these practices, we will update this
              policy.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. External links</h2>
            <p className={paragraphClass}>
              The website may contain links to third-party websites or
              services. GARABS does not control their privacy practices and
              recommends reviewing their policies before providing them with
              information.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>9. Children’s privacy</h2>
            <p className={paragraphClass}>
              This website is intended for adults and businesses. We do not
              knowingly collect personal information from children under 13.
              If we receive such information by mistake, we will take
              reasonable steps to delete it.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>10. Your choices</h2>
            <p className={paragraphClass}>
              You may request access to, correction of, or deletion of personal
              information you submitted to GARABS, subject to applicable legal
              and operational obligations.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>11. Changes to this policy</h2>
            <p className={paragraphClass}>
              We may update this Privacy Policy when our practices, services,
              or legal requirements change. The latest revision date will
              appear at the top of this page.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>12. Contact</h2>
            <p className={paragraphClass}>
              For questions about this policy or how we handle your
              information, use our{" "}
              <a
                href="/contacto"
                className="font-medium text-primary underline underline-offset-4"
              >
                contact form
              </a>
              .
            </p>
          </section>

          <p className="border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
            This policy provides general information about the current
            practices of GARABS LLC and does not constitute legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
