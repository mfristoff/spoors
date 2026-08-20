import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSeo } from "@/lib/useSeo";
import { services, images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import { Image } from "@/components/ui/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import { getSubServiceCta } from "@/lib/serviceQuoteCopy";
import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { cdnImage } from "@/lib/cdnImage";
import SocialProofLogos from "@/components/ui/SocialProofLogos";
import { preloadRouteAssets } from "@/lib/routePreload";

// Background photo extracted from the uploaded hero design (Wix-optimizable host).
const HERO_PHOTO =
  "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/08b2af924_hero-bg.png";

const U1 = "/assets/images/update-1";
const U3 = "/assets/images/update-3";

const BLUE_BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/ba0b14249_Bolt-Blue.svg";
const RED_BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/1f65ed898_Bolt.svg";
const GREEN_BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/8d4428aab_Green-Bolt.svg";
const NEUTRAL_BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/8384ef21e_Neutral-Bolt.svg";

// Service category → bolt color + rotation. Red is the reference orientation;
// blue is rotated +47deg and green +63deg so all three bolts point the same way.
const CATEGORY = {
  cold: { bolt: BLUE_BOLT, rotate: 0, color: "#296DFF" },
  heat: { bolt: RED_BOLT, rotate: 0, color: "#FF2929" },
  clean: { bolt: GREEN_BOLT, rotate: 0, color: "#1BD121" },
};
const SLUG_CATEGORY = {
  "air-conditioning": "cold",
  "swamp-coolers": "cold",
  "ductless-mini-splits": "cold",
  heating: "heat",
  "water-heater-services": "heat",
  "indoor-air-quality": "clean",
  "planned-maintenance": "clean",
};

const SERVICE_PANEL_IMAGES = {
  // Every image on /services/ is unique within this page. The accordion art
  // also mirrors the strongest imagery used on the matching detail pages.
  "air-conditioning": [
    spoorsImageLibrary.acDiagnosticTesting,
    spoorsImageLibrary.acElectricalRepair,
    spoorsImageLibrary.acMaintenance,
    spoorsImageLibrary.acRefrigerantService,
    `${U3}/spoors-auburn-ca-services-hvac-indoor-air-quality.webp`,
  ],
  heating: [
    "/assets/images/services-overview/spoors-auburn-ca-hvac-indoor-air-quality-system-service.webp",
    "/assets/images/services-overview/spoors-auburn-ca-heating-maintenance-furnace-system.webp",
    "/assets/images/services-overview/spoors-auburn-ca-heating-installation-technician.webp",
    "/assets/images/services-overview/spoors-auburn-ca-emergency-heating-repair-furnace.webp",
    "/assets/images/services-overview/spoors-auburn-ca-indoor-air-quality-living-room-comfort.webp",
  ],
  "indoor-air-quality": [
    `${U3}/spoors-auburn-ca-services-air-filtration-systems.webp`,
    `${U1}/spoors-auburn-ca-services-iaq-humidity-control.webp`,
    `${U1}/spoors-auburn-ca-services-iaq-ventilation.webp`,
    `${U1}/spoors-auburn-ca-services-iaq-uv-treatment.webp`,
    `${U1}/spoors-auburn-ca-services-iaq-duct-cleaning.webp`,
  ],
  "emergency-repairs": [
    `${U1}/spoors-auburn-ca-services-emergency-urgent-ac.webp`,
    `${U1}/spoors-auburn-ca-services-emergency-heating.webp`,
    `${U1}/spoors-auburn-ca-services-emergency-rapid-diagnosis.webp`,
    `${U3}/spoors-auburn-ca-services-emergency-after-hours.webp`,
    `${U1}/spoors-auburn-ca-services-emergency-prevention.webp`,
  ],
  "maintenance-tune-ups": [
    `${U1}/spoors-auburn-ca-services-maintenance-ac-tuneup.webp`,
    `${U1}/spoors-auburn-ca-services-maintenance-heating-tuneup.webp`,
    `${U1}/spoors-auburn-ca-services-maintenance-system-inspection.webp`,
    `${U1}/spoors-auburn-ca-services-maintenance-filter-coil.webp`,
    `${U1}/spoors-auburn-ca-services-maintenance-reports.webp`,
  ],
  "ductless-mini-splits": [
    "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-indoor-head-closeup.webp",
    `${U1}/spoors-auburn-ca-services-ductless-repair.webp`,
    "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-home-comfort-remote.webp",
    `${U1}/spoors-auburn-ca-services-ductless-maintenance.webp`,
    `${U1}/spoors-auburn-ca-services-ductless-system-design.webp`,
  ],
  "swamp-coolers": [
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-simple-reliable-upkeep.webp",
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-keep-running-right.webp",
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-repairs-restore-cool-air.webp",
    `${U3}/spoors-auburn-ca-services-swamp-winterization.webp`,
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-efficient-evaporative-cooling.webp",
  ],
  "water-heater-services": [
    "/assets/images/water-heaters/spoors-auburn-ca-water-heater-repair-heating-element.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-traditional-tank-water-heater-room.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-tankless-water-heater-installation.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-hybrid-heat-pump-water-heater-service-technician.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-water-heater-piping-and-gauge-service.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-hero.webp",
  ],
  "planned-maintenance": [
    `${U3}/spoors-auburn-ca-services-planned-seasonal-tuneups.webp`,
    `${U1}/spoors-auburn-ca-services-planned-priority.webp`,
    `${U3}/spoors-auburn-ca-services-planned-detailed-history.webp`,
    `${U1}/spoors-auburn-ca-services-planned-early-detection.webp`,
    `${U3}/spoors-auburn-ca-services-planned-enrollment-review.webp`,
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceShowcaseCard({ service, index, openQuoteFor }) {
  const flip = index % 2 === 1;
  const cat = CATEGORY[SLUG_CATEGORY[service.slug] || "heat"];
  const initialValue = `svc-${service.slug}-0`;
  const [activeValue, setActiveValue] = useState(initialValue);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const panelImages = SERVICE_PANEL_IMAGES[service.slug] || [service.image];
  const activeImage = panelImages[activeIndex] || service.image;
  const activeTitle = service.subServices[activeIndex]?.title || service.title;

  const handleValueChange = (value) => {
    setActiveValue(value);
    if (!value) return;
    const nextIndex = Number(value.split("-").pop());
    if (Number.isInteger(nextIndex)) setActiveIndex(nextIndex);
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onViewportEnter={() => setImagesReady(true)}
      variants={fadeUp}
      className="grid w-full overflow-hidden rounded-[20px] border border-border-light bg-white lg:grid-cols-2"
    >
      <div className={cn("order-2 flex flex-col gap-7 px-3 pt-8 pb-5 lg:p-12", !flip && "lg:order-1")}>
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${cat.color}1a` }}>
            <img src={cat.bolt} alt="" aria-hidden="true" className="h-5 w-5" style={{ transform: `rotate(${cat.rotate}deg)` }} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: cat.color }}>
            {service.title}
          </span>
        </div>
        <h3 className="font-heading text-[clamp(26px,2.5vw,44px)] font-bold leading-[1.05] tracking-[-0.01em] text-ink-950">
          {service.headline}
        </h3>
        <p className="text-[17px] leading-[1.6] text-ink-600">{service.overview}</p>

        <Accordion
          type="single"
          collapsible
          value={activeValue}
          onValueChange={handleValueChange}
          className="flex flex-col gap-3"
        >
          {service.subServices.map((sub, subIndex) => (
            <AccordionItem
              key={sub.title}
              value={`svc-${service.slug}-${subIndex}`}
              className="group overflow-hidden rounded-[14px] border transition-all duration-300 data-[state=closed]:border-[#f2dcdc] data-[state=closed]:bg-soft-red data-[state=open]:border-[#e8e8e8] data-[state=open]:bg-white data-[state=open]:shadow-[0_2px_14px_rgba(5,13,56,0.06)] data-[state=closed]:hover:border-[#e9c4c4] data-[state=closed]:hover:bg-[#fbe4e4]"
            >
              <AccordionTrigger className="gap-4 px-5 py-4 hover:no-underline [&>svg]:hidden">
                <span className="w-full text-left text-[17px] font-bold leading-[1.35] tracking-[-0.01em] text-ink-950 md:text-[19px]">
                  {sub.title}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/5 bg-white/70 text-ink-600 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:bg-soft-red">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0">
                <p className="text-[15px] leading-[1.6] text-ink-600">{sub.description}</p>
                {(() => {
                  const cta = getSubServiceCta(sub.title, service.title);
                  return (
                    <button
                      type="button"
                      onClick={() => openQuoteFor(cta)}
                      className="group relative mt-4 mb-2 inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-[#858893] transition-colors duration-300 group-hover:text-[#e31e24]"
                    >
                      <span className="relative inline-block">
                        {cta.cta}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                          className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-[#858893] transition-colors duration-300 group-hover:bg-[#e31e24]"
                          aria-hidden="true"
                        />
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </button>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className={cn("relative order-1 min-h-[300px] overflow-hidden bg-[#e9e9e9] lg:min-h-full", !flip && "lg:order-2")}>
        {(imagesReady ? panelImages : [activeImage]).map((image, imageIndex) => {
          const resolvedIndex = imagesReady ? imageIndex : activeIndex;
          const isActive = resolvedIndex === activeIndex;
          const title = service.subServices[resolvedIndex]?.title || activeTitle;
          return (
            <motion.div
              key={`${service.slug}-${resolvedIndex}-${image}`}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.012 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              aria-hidden={!isActive}
            >
              <Image
                src={image}
                alt={`${title} from Spoor's Heating & Air`}
                fittingType="fill"
                quality={82}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </motion.div>
          );
        })}
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%), rgba(0,0,0,0.2)" }} />
        <div className="absolute inset-x-5 bottom-5 flex max-w-[726px] flex-col gap-4 rounded-[14px] border border-white/30 bg-black/45 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[420px] text-[clamp(18px,1.3vw,24px)] font-bold leading-tight text-white">
            {service.short}
          </p>
          <Link
            to={`/services/${service.slug}/`}
            onMouseEnter={() => preloadRouteAssets(`/services/${service.slug}/`)}
            onFocus={() => preloadRouteAssets(`/services/${service.slug}/`)}
            onPointerDown={() => preloadRouteAssets(`/services/${service.slug}/`)}
            className="shrink-0 w-full rounded-[9px] bg-red-600 px-6 py-3.5 text-center text-[17px] font-semibold text-white hover:bg-red-700 sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [quote, setQuote] = useState(null);
  const openQuoteFor = (ctx) => setQuote(ctx);
  const closeQuote = () => setQuote(null);

  useSeo({
    title: "HVAC Services in Auburn, CA | Spoor's Heating & Air",
    description:
      "Air conditioning, heating, indoor air quality, maintenance, emergency repairs, ductless, swamp coolers, and water heaters from Spoor's Heating & Air in Auburn, CA — family-owned since 1925.",
    path: "/services/",
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[560px] lg:min-h-[calc(100svh-var(--expanded-header-height,220px))]">
        {/* Background photo — fills on mobile, cropped to the lower hero region (y 220→1150) on desktop */}
        <div className="absolute inset-0 z-0">
          <img
            src={cdnImage(HERO_PHOTO, 2400, 1500, { x: 0.5, y: 0.6 })}
            alt="Spoor's Heating & Air technicians at work"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 60%" }}
          />
        </div>
        {/* Tint + dark radial gradient overlay (bottom-right vignette per source design) */}
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 130% at 50% 78%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.58) 38%, rgba(0,0,0,0.3) 62%, rgba(0,0,0,0.1) 84%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Text block — bottom-right on desktop (per the source layout), bottom-left/full on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:bottom-[10%] lg:left-auto lg:right-[6%] lg:w-[86%] lg:p-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } }}
            className="flex flex-col"
          >
            <motion.p
              variants={fadeUp}
              className="font-heading font-semibold tracking-[-0.01em] text-white"
              style={{ fontSize: "16px", marginBottom: "clamp(16px,1.7vw,33px)" }}
            >
              Family-Owned HVAC Excellence Since 1925
            </motion.p>
            <motion.h1
              variants={fadeDown}
              className="font-heading font-bold tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(34px,5vw,76px)", lineHeight: 1.15, marginBottom: "clamp(24px,3vw,59px)" }}
            >
              The Right Service. Done Properly.<br />
              100% Guaranteed.
            </motion.h1>
            <motion.div
              variants={fadeDown}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[clamp(20px,2.1vw,41px)]"
            >
              <button
                type="button"
                onClick={() =>
                  openQuoteFor({
                    cta: "Get Your HVAC Quote",
                    eyebrow: "FREE HVAC QUOTE",
                    headline: "Get a Clear Quote for Your Comfort.",
                    support: "Tell us what you need. Spoor's will review the details and follow up with clear recommendations and a free quote.",
                    service: "HVAC Services",
                  })
                }
                className="group inline-flex items-stretch overflow-hidden rounded-[5px] text-white"
                style={{
                  height: "clamp(44px,3vw,58px)",
                  fontSize: "clamp(15px,0.9vw,16px)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="flex items-center bg-[#FF2929] group-hover:bg-[#d11f1f] font-semibold tracking-[-0.2px] whitespace-nowrap transition-colors duration-200"
                  style={{ paddingLeft: "clamp(18px,1.5vw,24px)", paddingRight: "clamp(16px,1.3vw,22px)" }}
                >
                  Schedule Online
                </span>
                <span
                  className="flex items-center justify-center bg-[#c81e1e] group-hover:bg-[#a61717] transition-colors duration-200"
                  style={{ width: "clamp(44px,3vw,58px)" }}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              <a
                href="#services"
                className="font-semibold text-white underline decoration-white/80 decoration-1 underline-offset-4"
                style={{ fontSize: "clamp(14px,0.94vw,18px)" }}
              >
                Explore More Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Social proof logos ── */}
      <section className="bg-neutral-bg">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-[80px] pb-[60px] md:pb-[140px]">
          <SocialProofLogos />
        </div>
      </section>

      {/* ── Services grid ── */}
      <section id="services" className="bg-neutral-bg pb-20 lg:pb-32">
        <div className="site-shell flex flex-col items-center gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div variants={fadeUp} className="flex justify-center">
              <img
                src={NEUTRAL_BOLT}
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="max-w-[900px] text-center font-heading text-[clamp(30px,3.3vw,58px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink-950"
            >
              Transform climate volatility{" "}
              <span className="italic text-[#73757F]">into your predictable comfort</span>
            </motion.h2>
          </motion.div>

          <div className="flex w-full flex-col gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <ServiceShowcaseCard
                key={service.slug}
                service={service}
                index={index}
                openQuoteFor={openQuoteFor}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceQuoteModal
        open={!!quote}
        onClose={closeQuote}
        service={quote?.service || "HVAC Services"}
        eyebrow={quote?.eyebrow}
        headline={quote?.headline}
        support={quote?.support}
      />
    </>
  );
}