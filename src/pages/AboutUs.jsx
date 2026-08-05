/**
 * ═══════════════════════════════════════════════════════════════════
 * CANONICAL ABOUT PAGE — "/about-us"
 * ──────────────────────────────────────────────────────────────────
 * This is the ONLY main About page. It uses the Overview* design-system
 * components (OverviewHero, OverviewStory, OverviewCommitment,
 * OverviewWhyChoose, OverviewTeam).
 *
 * DO NOT revert to legacy hub content. DO NOT swap in About* components
 * (AboutStatement, AboutStory, AboutPrinciples, etc.) — those belong
 * exclusively to the secondary about sub-pages at "/about-us/:slug"
 * (src/pages/about/AboutPage.jsx) and must remain untouched.
 *
 * Route: /about-us  →  <AboutUs />  (this file)
 * Route: /about-us/:slug  →  <AboutPage />  (secondary sub-pages)
 * ═══════════════════════════════════════════════════════════════════
 */
import { useSeo } from "@/lib/useSeo";
import OverviewHero from "@/components/about/OverviewHero";
import OverviewStory from "@/components/about/OverviewStory";
import OverviewCommitment from "@/components/about/OverviewCommitment";
import OverviewWhyChoose from "@/components/about/OverviewWhyChoose";
import OverviewTeam from "@/components/about/OverviewTeam";

export default function AboutUs() {
  useSeo({
    title: "About Us",
    description: "Spoor's Heating & Air has served Auburn, California with honest, family-owned HVAC service since 1925.",
    path: "/about-us/",
  });

  return (
    <div className="w-full overflow-hidden bg-white">
      <OverviewHero />
      <OverviewStory />
      <OverviewCommitment />
      <OverviewWhyChoose />
      <OverviewTeam />
    </div>
  );
}