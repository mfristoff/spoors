import { useSeo } from "@/lib/useSeo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useSeo({
    title: "Privacy Policy",
    description: "Privacy policy for Spoor's Heating & Air.",
    path: "/privacy-policy/",
  });

  const crumbs = [{ name: "Privacy Policy", path: "/privacy-policy/" }];

  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        <div className="max-w-3xl">
        <div className="mb-8">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="t-h1 text-ink-950">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-ink-600 t-body">
          <p>
            Spoor's Heating &amp; Air ("we," "us," or "our") respects your privacy. This policy
            describes how we collect, use, and protect information you provide through our website.
          </p>

          <Block title="Information We Collect">
            We collect information you voluntarily provide when you request an estimate or contact
            us, including your name, phone number, email address, service address, and any details
            you include in your message. We may also collect basic technical information such as
            your browser type and pages visited.
          </Block>

          <Block title="How We Use Your Information">
            We use your information to respond to your inquiries, schedule and provide service, send
            relevant updates, and improve our website and offerings. We may use your contact details
            to reach out for outreach and to send newsletters and promotions you've expressed interest
            in — you can opt out of these at any time.
          </Block>

          <Block title="Cookies & Analytics">
            We use cookies and similar technologies, including Google Tag Manager, Google Analytics 4,
            Google Ads, and social platform tools, to measure how our site is used and to show relevant
            content. See our{" "}
            <Link to="/cookie-policy/" className="font-semibold text-red-600 hover:underline">Cookie Policy</Link>{" "}
            for details.
          </Block>

          <Block title="Information Sharing">
            We may share information with service providers who help us operate our business, and with
            analytics and advertising partners as described in our Cookie Policy, or when required by
            law. Otherwise, your information is kept confidential.
          </Block>

          <Block title="We Never Sell Your Data">
            We do not sell your personal information to anyone, and we do not rent or trade it for
            marketing purposes. Any sharing with third parties is limited to operating our business,
            improving our services, or complying with the law.
          </Block>

          <Block title="Data Security">
            We take reasonable measures to protect your information. However, no method of
            transmission or storage is completely secure, and we cannot guarantee absolute security.
          </Block>

          <Block title="Your Choices">
            You may request access to, correction of, or deletion of your personal information by
            contacting us using the information on our Contact page.
          </Block>

          <Block title="Contact Us">
            If you have questions about this policy, please contact us through our Contact page.
          </Block>
        </div>
        </div>
      </div>
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