import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import { getServiceArea, images } from "@/lib/siteConfig";
import { areaFaqs } from "@/lib/areaContent";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import AreaHero from "./AreaHero";
import AreaLocalChallenges from "./AreaLocalChallenges";
import AreaServiceGrid from "./AreaServiceGrid";
import AreaWhyChoose from "./AreaWhyChoose";
import AreaProblems from "./AreaProblems";
import AreaProcessScroll from "./AreaProcessScroll";
import AreaExploreStrip from "./AreaExploreStrip";
import AreaProducts from "./AreaProducts";
import AreaLocationCta from "./AreaLocationCta";
import AreaFaq from "./AreaFaq";

/**
 * Detailed service-area template. One reusable template, location-specific
 * data. Exact section order per spec; no city is hardcoded into the template.
 * Shared native-scroll engine powers the Why-Choose story; the Process section
 * uses the same reveal system with its own stacked Figma layout.
 */
export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = getServiceArea(slug);
  const [quote, setQuote] = useState({ open: false });
  const openQuote = (service) => setQuote({ open: true, service });

  useSeo({
    title: area ? `HVAC Services in ${area.name}, CA | Spoor's Heating & Air` : "Service Area",
    description: area
      ? `HVAC services in ${area.name}, CA from Spoor's Heating & Air — AC repair, heating service, maintenance, and 24/7 emergency support for Placer County homes since 1925.`
      : undefined,
    path: `/service-areas/${slug}/`,
    image: area ? (area.image || images.acHero) : undefined,
  });

  const crumbs = area
    ? [
        { name: "Service Areas", path: "/service-areas/" },
        { name: area.name, path: `/service-areas/${slug}/` },
      ]
    : [];

  if (!area) return <Navigate to="/service-areas/" replace />;

  return (
    <>
      <AreaHero
        area={area}
        crumbs={crumbs}
        image={area.image || images.acHero}
        sideL={images.introTech}
        sideR={images.introAir}
        onQuote={openQuote}
      />
      <AreaLocalChallenges area={area} image={images.aboutTeam} onQuote={openQuote} />
      <AreaServiceGrid area={area} />
      <AreaWhyChoose area={area} />
      <AreaProblems />
      <AreaProcessScroll area={area} />
      <AreaExploreStrip />
      <AreaProducts area={area} />
      <AreaLocationCta area={area} onQuote={openQuote} />
      <AreaFaq area={area} faqs={areaFaqs(area.name)} />

      <ServiceQuoteModal
        open={quote.open}
        onClose={() => setQuote({ open: false })}
        service={quote.service || `${area.name} HVAC`}
        eyebrow={`FREE ${area.name.toUpperCase()} HVAC QUOTE`}
        headline={`How Fast Do You Need HVAC Help in ${area.name}?`}
        support={`Tell us what's going on with your heating or cooling in ${area.name} and choose a time that works for you. Spoor's will review your request and follow up with clear next steps.`}
      />
    </>
  );
}