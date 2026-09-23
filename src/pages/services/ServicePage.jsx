import { useParams, Navigate, Link } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import { getService, images } from "@/lib/siteConfig";
import ServiceHero from "./ServiceHero";
import ServiceScrollStory from "./ServiceScrollStory";
import ServiceMedia from "./ServiceMedia";
import ServiceFaq from "./ServiceFaq";
import ServiceFooterBanner from "./ServiceFooterBanner";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service ? service.seoTitle || service.title : "Service",
    description: service ? service.metaDescription || service.short : undefined,
    path: `/services/${slug}/`,
    image: service ? service.image : undefined,
  });

  if (!service) return <Navigate to="/services/" replace />;

  const sectionLabel =
    slug === "air-conditioning"
      ? "AC SERVICE & REPAIRS"
      : `${service.title} Service & Repairs`.toUpperCase();

  const heroEyebrow =
    slug === "air-conditioning"
      ? "AC SERVICES"
      : `${service.title} Services`.toUpperCase();

  const QUOTE_SERVICE_MAP = {
    "air-conditioning": "Air Conditioning Services",
    heating: "Heating Services",
    "indoor-air-quality": "HVAC Indoor Air Quality Services",
    "ductless-mini-splits": "Mini-Split Services",
    "maintenance-tune-ups": "HVAC Maintenance",
    "emergency-repairs": "Emergency Repairs",
    "swamp-coolers": "Swamp Coolers",
    "water-heater-services": "Water Heater Services",
    "planned-maintenance": "Planned Maintenance",
  };
  const quoteService = QUOTE_SERVICE_MAP[slug] || service.title;

  // Distinct image per sub-service tab (no two tabs share an image).
  const SERVICE_IMAGES = {
    "air-conditioning": [images.acHero, images.acService, images.introAir, images.introTech, images.hero],
    heating: [images.heatingFurnace, images.introTech, images.introAir, images.auburn, images.aboutTeam],
    "indoor-air-quality": [images.introAir, images.acService, images.introTech, images.aboutTeam, images.auburn],
    "emergency-repairs": [images.introTech, images.acService, images.introAir, images.heatingFurnace, images.auburn],
    "maintenance-tune-ups": [images.acService, images.introTech, images.acHero, images.heatingFurnace, images.introAir],
    "ductless-mini-splits": [images.ductlessImage, images.introAir, images.introTech, images.acHero, images.acService],
    "swamp-coolers": [images.swampCoolerImage, images.introAir, images.acService, images.introTech, images.auburn],
    "water-heater-services": [images.waterHeaterImage, images.introTech, images.aboutTeam, images.auburn, images.acService],
    "planned-maintenance": [images.introTech, images.acService, images.acHero, images.heatingFurnace, images.introAir],
  };

  return (
    <>
      <ServiceHero image={service.image} eyebrow={heroEyebrow} headline={service.h1 || service.headline} />
      <ServiceScrollStory
        label={sectionLabel}
        header={service.controlHeader}
        items={service.subServices}
        image={service.image}
        images={SERVICE_IMAGES[slug]}
        quoteService={quoteService}
        related={service.related}
        overview={service.overview}
      />
      <ServiceMedia image={images.introTruck} />
      <ServiceFaq faqs={service.faqs} title={`Frequently Asked Questions About Our ${service.title} Services`} />
      {service.internalLinks && service.internalLinks.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="site-shell">
            <h2 className="font-heading text-[22px] font-bold text-ink-950 md:text-[26px]">Related services & resources</h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {service.internalLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-[16px] font-semibold text-red-600 underline underline-offset-4 hover:text-red-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <ServiceFooterBanner />
    </>
  );
}