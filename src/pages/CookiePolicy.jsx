import { useSeo } from "@/lib/useSeo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  useSeo({
    title: "Cookie Policy",
    description: "Cookie policy for Spoor's Heating & Air — how we use cookies for analytics, advertising, and site improvement.",
    path: "/cookie-policy/",
  });

  const crumbs = [{ name: "Cookie Policy", path: "/cookie-policy/" }];

  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        <div className="max-w-3xl">
        <div className="mb-8">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="t-h1 text-ink-950">Cookie Policy</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: {new Date().toLocaleDateString("en-US")}</p>

        <div className="prose mt-8 max-w-none space-y-6 text-ink-600 t-body">
          <p>
            Spoor's Heating &amp; Air ("we," "us," or "our") uses cookies and similar technologies on our website
            to improve your experience, understand how the site is used, and deliver relevant content. This policy
            explains what cookies are, which ones we use, and how you can control them.
          </p>

          <Block title="What Are Cookies?">
            Cookies are small text files placed on your device when you visit a website. They help the site remember
            your preferences, keep track of items like a service request in progress, and measure how visitors use
            the site. Cookies do not harm your device and do not by themselves identify you personally.
          </Block>

          <Block title="Cookies We Use">
            <p>We use the following categories of cookies:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Essential cookies</strong> — required for core site functions, such as remembering your consent choice and enabling forms to work.</li>
              <li><strong>Analytics cookies</strong> — we use Google Tag Manager (GTM), Google Analytics 4 (GA4), and related tools to understand traffic patterns, page performance, and how visitors find us. This helps us improve the site.</li>
              <li><strong>Advertising cookies</strong> — we use Google Ads and similar services to measure ad performance and show relevant ads to people who have visited our site (remarketing). These cookies may be set by Google and other advertising partners.</li>
              <li><strong>Social cookies</strong> — when you interact with embedded social content or sharing features, those platforms may set cookies to enable those features.</li>
            </ul>
          </Block>

          <Block title="Why We Use Cookies">
            We use cookies to keep the site working smoothly, understand which pages and services are most useful,
            measure the effectiveness of our advertising so we don't waste your time or ours, and deliver a better,
            more relevant experience. We do <strong>not</strong> use cookies to sell your data.
          </Block>

          <Block title="Your Cookie Choices">
            Most browsers let you accept, block, or delete cookies through their settings. Blocking all cookies may
            affect how parts of our site function. When you first visit our site, we show a short cookie notice; once
            you acknowledge it, it won't appear again. You can clear your browser's cookies at any time to revisit
            that notice.
          </Block>

          <Block title="Third-Party Services">
            Some cookies are placed by third parties such as Google and social platforms. These providers may use
            cookies to deliver and measure their own services. Their use of cookies is governed by their own privacy
            policies, which you can review at the links below.
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Google Privacy &amp; Terms — https://policies.google.com/privacy</li>
              <li>Google Ads — https://policies.google.com/technologies/ads</li>
            </ul>
          </Block>

          <Block title="Updates to This Policy">
            We may update this Cookie Policy from time to time. Changes take effect when posted on this page, and we'll
            update the "Last updated" date above.
          </Block>

          <Block title="Contact Us">
            Questions about cookies or your privacy? Reach out through our{" "}
            <Link to="/contact-us/" className="font-semibold text-red-600 hover:underline">Contact page</Link> or see our{" "}
            <Link to="/privacy-policy/" className="font-semibold text-red-600 hover:underline">Privacy Policy</Link>.
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
      <div className="mt-2">{children}</div>
    </div>
  );
}