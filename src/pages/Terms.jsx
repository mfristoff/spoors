import { useSeo } from "@/lib/useSeo";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Terms() {
  useSeo({
    title: "Terms of Service",
    description: "Terms of service for Spoor's Heating & Air.",
    path: "/terms/",
  });

  const crumbs = [{ name: "Terms", path: "/terms/" }];

  return (
    <section className="section-pad bg-white">
      <Container className="max-w-3xl">
        <div className="mb-8">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="t-h1 text-ink-950">Terms of Ser<span className="ml-[0.025em] inline-block">vice</span></h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <div className="mt-8 space-y-6 text-ink-600 t-body">
          <p>
            These terms govern your use of the Spoor's Heating &amp; Air website. By using this
            site, you agree to these terms.
          </p>

          <Block title="Use of Our Website">
            You may use our website for lawful purposes only. You agree not to misuse the site or
            interfere with its operation.
          </Block>

          <Block title="Service Requests">
            Submitting an estimate request through our website does not constitute a confirmed
            appointment. We will contact you to confirm scheduling and any service details.
          </Block>

          <Block title="No Warranties">
            Information on this website is provided for general informational purposes and may not
            reflect the most current rebates, pricing, or availability. Service is subject to a
            separate agreement.
          </Block>

          <Block title="Limitation of Liability">
            To the fullest extent permitted by law, Spoor's Heating &amp; Air is not liable for
            damages arising from your use of this website.
          </Block>

          <Block title="Changes to These Terms">
            We may update these terms from time to time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </Block>

          <p className="text-sm text-ink-500">
            Note: This is a general terms template. Have it reviewed by legal counsel before relying
            on it for compliance.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="t-h5 text-ink-950">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}