import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import ServiceReviews from "@/components/ServiceReviews";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Image } from "@/components/ui/image";
import { cdnImage } from "@/lib/cdnImage";
import { business } from "@/lib/siteConfig";
import { heroFadeDown, heroFadeUp, heroStagger } from "@/lib/motionVariants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" } },
};

const LIGHTNING = {
  gold: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/a644f8a64_b1461a2cf_1646_187.svg",
  goldShadow: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/18f3ce20a_09b5f0c4c_1646_188.svg",
  white: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/409b95b25_1710bb802_245_943.svg",
  whiteShadow: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/2703648e9_e2a84a7e2_245_944.svg",
  faq: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/349410b5e_81e805bde_1512_363.svg",
};

function LightningPair({ variant = "gold" }) {
  const main = variant === "white" ? LIGHTNING.white : LIGHTNING.gold;
  const shadow = variant === "white" ? LIGHTNING.whiteShadow : LIGHTNING.goldShadow;
  return (
    <div className="w-[17px] h-6 relative shrink-0">
      <img className="w-[13px] h-2.5 absolute top-px left-0" src={main} alt="" aria-hidden="true" />
      <img className="w-[13px] h-2.5 opacity-50 absolute top-[11px] left-[2px]" src={shadow} alt="" aria-hidden="true" />
    </div>
  );
}

export default function ServiceDetailLayout({
  heroImage,
  heroImageMobile,
  heroAlt = "Spoor's Heating & Air technician at work",
  heroFocal,
  heroObjectPosition = "center center",
  heroMobileObjectPosition,
  heroImagePlacement = "full",
  heroDimRight = false,
  badge,
  headline,
  intro,
  sectionLabel,
  sectionHeading,
  sectionSubheading,
  services,
  featureSection,
  breakImage,
  breakAlt = "Spoor's Heating & Air technician working on an HVAC system",
  breakFocal,
  breakObjectPosition = "center center",
  breakHeightClass = "h-[260px] lg:h-[400px]",
  faqs,
  reviews = [],
  reviewsServiceLabel = "HVAC Services",
  scheduleLabel = "Schedule Online",
  quoteLabel = "Get Free Quote",
  faqEyebrow = "FAQ",
  faqHeading = "Frequently Asked Questions",
  ctaPrompt = "Didn't find what you were looking for?",
  ctaButton = "Contact Our Experts",
}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white overflow-clip flex flex-col font-display">
      {/* ── HERO ── */}
      <section className="relative w-full h-[calc(100svh-112px)] min-h-[440px] lg:min-h-[600px] lg:h-[calc(100vh-220px)] lg:max-h-[860px] overflow-hidden flex flex-col bg-[#0a1228]">
        <div
          className={
            heroImagePlacement === "right"
              ? "absolute inset-y-0 right-0 w-full bg-[#0a1228] lg:w-[62%]"
              : "absolute inset-0 bg-[#0a1228]"
          }
        >
          {heroImageMobile && (
            <img
              src={cdnImage(heroImageMobile, 900, 1200, heroFocal)}
              alt={heroAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover lg:hidden"
              style={{ objectPosition: heroMobileObjectPosition || heroObjectPosition }}
            />
          )}
          <img
            src={cdnImage(heroImage, 2560, 1600, heroFocal)}
            alt={heroAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${heroImageMobile ? "hidden lg:block" : ""}`}
            style={{ objectPosition: heroObjectPosition }}
          />
        </div>
        {/* left-to-right gradient + subtle radial vignette for legibility and blur masking */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.56)_35%,rgba(0,0,0,0.22)_65%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_50%,rgba(0,0,0,0)_15%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.6)_100%)]" />
        {heroDimRight && (
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.68)_70%,rgba(0,0,0,0.8)_100%)]" />
        )}

        {/* eyebrow + headline — top-left */}
        <div className="site-shell relative z-10 w-full pt-[clamp(48px,9vw,140px)]">
          <motion.div initial="hidden" animate="visible" variants={heroStagger} className="flex max-w-[820px] flex-col items-start gap-5">
            <motion.div variants={heroFadeDown} className="flex flex-row items-center gap-[11px] bg-black/30 backdrop-blur-sm py-2 px-4 rounded-[8px] border border-white/20">
              <LightningPair variant="white" />
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.08em] text-white uppercase">{badge}</span>
            </motion.div>
            <motion.h1 variants={heroFadeUp} className="text-[clamp(38px,3.8vw,72px)] font-bold leading-[1.0] tracking-[-0.018em] text-white">
              {headline}
            </motion.h1>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1" />

        {/* bottom bar — liquid glass, top stroke #515151, intro + Frame37 pill button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="relative z-10 w-full bg-white/5 backdrop-blur-2xl border-t border-[#515151]"
        >
          <div className="site-shell w-full py-5 lg:py-6 flex flex-col items-start sm:flex-row sm:items-center justify-between gap-4">
            <p className="w-full text-[14px] font-[440] leading-[1.6] text-white/85 max-w-[640px] text-left">{intro}</p>

            {/* Mobile: match the split CTA used on secondary About-page heroes. */}
            <Link
              to={business.schedulingUrl}
              className="group inline-flex h-[58px] shrink-0 items-stretch overflow-hidden rounded-[5px] bg-red-600 sm:hidden"
            >
              <span className="flex items-center whitespace-nowrap px-6 text-[18px] font-semibold tracking-[-0.2px] text-white">{scheduleLabel}</span>
              <span className="flex w-[50px] items-center justify-center bg-red-800 transition-colors group-hover:bg-red-900">
                <ArrowUpRight className="h-[18px] w-[18px] text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            {/* Tablet/desktop: preserve the existing service-page CTA. */}
            <Link
              to={business.schedulingUrl}
              className="hidden h-[50px] shrink-0 items-center justify-center rounded-[9px] border border-red-700 bg-red-600 px-8 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:inline-flex"
            >
              {scheduleLabel}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES — PDF LAYOUT: sticky left col + single-column card list right ── */}
      <section className="w-full bg-white py-[clamp(60px,8vw,140px)]">
        <div className="service-row-aligned mx-auto w-full ">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-24">

            {/* LEFT — sticky heading column */}
            <div className="shrink-0 lg:w-[320px] xl:w-[380px]">
              <div
                className="flex flex-col gap-5 lg:sticky"
                style={{ top: "calc(var(--sticky-header-height, 220px) + 48px)" }}
              >
                <div className="flex flex-row items-center gap-[11px]">
                  <LightningPair variant="gold" />
                  <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.06em] text-[#3d3d3d] uppercase">{sectionLabel}</span>
                </div>
                <h2 className="text-[clamp(28px,2.6vw,48px)] font-bold leading-[1.12] tracking-[-0.018em] text-[#1a1a1a]">
                  {sectionHeading}
                </h2>
                {sectionSubheading && (
                  <p className="text-[16px] font-[440] leading-[1.6] text-[#616161] mt-2">
                    {sectionSubheading}
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT — single-column stacked cards with image */}
            <div className="flex-1 flex flex-col gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group flex flex-col sm:flex-row bg-white rounded-[16px] border border-[#e4e4e4] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-shadow overflow-hidden"
                >
                  {/* image — left side on sm+, top on mobile */}
                  <div className="relative sm:w-[220px] xl:w-[260px] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Spoor's Heating & Air`}
                      fittingType="fill"
                      focalPointX={service.focalPointX}
                      focalPointY={service.focalPointY}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                  </div>

                  {/* text */}
                  <div className="flex flex-col gap-3 p-6 flex-1">
                    <h3 className="text-[clamp(18px,1.3vw,22px)] font-bold leading-[1.15] tracking-[-0.015em] text-[#1a1a1a]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] font-[440] leading-[1.65] text-[#616161] flex-1">
                      {service.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveCard(service)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-red-600 hover:underline cursor-pointer pt-1 w-fit text-left"
                    >
                      {quoteLabel} <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {featureSection && (
        <section className="relative w-full overflow-hidden bg-[#0b1131] py-[clamp(64px,8vw,128px)]">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
          <div className="service-row-aligned relative z-10 mx-auto w-full ">
            <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-white/10 lg:min-h-[620px]"
              >
                <img
                  src={cdnImage(featureSection.image, 1400, 1600, featureSection.imageFocal)}
                  alt={featureSection.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: featureSection.imageObjectPosition || "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1131]/55 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="flex flex-col justify-center"
              >
                <div className="mb-5 flex items-center gap-[11px]">
                  <LightningPair variant="white" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/75 md:text-[13px]">
                    {featureSection.eyebrow}
                  </span>
                </div>
                <h2 className="max-w-[760px] text-[clamp(32px,3.2vw,58px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                  {featureSection.heading}
                </h2>
                <p className="mt-6 max-w-[760px] text-[16px] font-[440] leading-[1.75] text-white/75 md:text-[18px]">
                  {featureSection.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {featureSection.benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="rounded-[14px] border border-white/15 bg-white/[0.055] p-5 backdrop-blur-sm"
                    >
                      <h3 className="text-[18px] font-bold text-white">{benefit.title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.65] text-white/70">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCard({ title: featureSection.formService || featureSection.heading })}
                  className="mt-8 inline-flex h-[52px] w-fit items-center justify-center gap-2 rounded-[9px] bg-red-600 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
                >
                  {featureSection.ctaLabel} <ArrowRight size={17} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── FULL WIDTH IMAGE BREAK ── */}
      <section className={`w-full relative overflow-hidden ${breakHeightClass}`}>

        <div className="absolute inset-0">
          <img
            src={cdnImage(breakImage, 2048, 960, breakFocal)}
            alt={breakAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: breakObjectPosition }}
          />
        </div>

      </section>

      {/* ── REVIEWS ── */}
      <ServiceReviews reviews={reviews} heading={`What Local Homeowners Say About Spoor's ${reviewsServiceLabel}`} onBook={() => setActiveCard({ title: reviewsServiceLabel })} />

      {/* ── FAQ ── */}
      <section className="w-full bg-white py-[clamp(60px,7vw,120px)]">
        <div className="max-w-[970px] mx-auto px-6 md:px-[5%] flex flex-col items-center gap-12">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-row items-center gap-[11px]">
              <LightningPair variant="faq" />
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.06em] text-[#3d3d3d] uppercase">{faqEyebrow}</span>
            </div>
            <h2 className="text-[clamp(28px,2.6vw,48px)] font-bold leading-[1.12] tracking-[-0.018em] text-center text-[#1a1a1a]">
              {faqHeading}
            </h2>
          </motion.div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-0" defaultValue="item-1">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`} className="border-b border-[#e4e4e4] py-6">
                  <AccordionTrigger className="hover:no-underline py-0 flex justify-between items-center group">
                    <span className="text-[clamp(17px,1.3vw,22px)] font-bold leading-[1.3] tracking-[-0.01em] text-[#1a1a1a] text-left max-w-[804px] group-hover:text-red-600 transition-colors">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-5 pb-0">
                    <p className="text-[16px] font-[440] leading-[1.65] text-[#616161] max-w-[860px]">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
            <span className="text-[16px] font-[440] leading-[1.6] text-[#3d3d3d] text-center">
              {ctaPrompt}
            </span>
            <Link
              to="/contact-us"
              className="inline-flex justify-center items-center py-3 px-7 bg-red-600 rounded-[9px] hover:bg-red-700 transition-colors text-[16px] font-semibold text-white border-[3px] border-[#d8d8d8]/70"
            >
              {ctaButton}
            </Link>
          </div>
        </div>
      </section>

      <ServiceQuoteModal
        open={!!activeCard}
        onClose={() => setActiveCard(null)}
        service={reviewsServiceLabel}
        formService={activeCard?.title}
      />
    </div>
  );
}