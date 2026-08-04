import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "@/lib/siteConfig";
import { SOCIAL_PROOF_LOGOS } from "@/lib/socialProofLogos";
import { Image } from "@/components/ui/image";
import DeferredHeroVideo from "@/pages/home/DeferredHeroVideo";
import HeroBackdrop from "@/pages/home/HeroBackdrop";

const BOLT_ICON = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/04dc9d564_Bolt.svg";

const HERO_VIDEO = "https://spoors.olivemedia.agency/wp-content/uploads/2026/07/hero.mp4";

// Per-mark sizing for the hero logo strip. BBB is width-driven (matching the
// supplied mark); Meadow Vista and Auburn Chamber are slightly shorter for
// balance. Base values serve the mobile bar; md: values serve the desktop strip.
const HERO_LOGO_CLASS = {
  "BBB Accredited Business": "w-auto h-[36px] md:h-[46px] object-contain",
  "Bryant Heating & Cooling Systems": "w-auto h-[42px] md:h-[72px] object-contain",
  "Fujitsu Elite Contractor": "w-auto h-[40px] md:h-[68px] object-contain",
  "Meadow Vista Merchants Association Member": "w-auto h-[38px] md:h-[64px] object-contain",
  "Auburn Chamber of Commerce": "w-auto h-[38px] md:h-[64px] object-contain"
};

const TRUST_STATEMENT =
  "Trusted by Local Homeowners & Businesses Throughout Our Close-Knit Community.";

function HistoryCard() {
  return (
    <div className="flex h-[189px] w-full max-w-[426px] overflow-hidden rounded-lg bg-white shadow-2xl">
      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-[#fce6e6] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#d32f2f]">
          <img src={BOLT_ICON} alt="" className="h-4 w-4" aria-hidden="true" />
          Family Owned
        </span>
        <p className="mt-4 font-heading text-[19px] font-bold leading-tight text-ink-950 sm:text-[22px]">
          Our family serving<br />yours since <span className="text-[#d32f2f]">1925</span>.
        </p>
      </div>
      <div className="relative w-[44%] shrink-0 sm:w-[140px]">
        <Image
          src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/864bc4072_unnamed.webp"
          alt="Spoor's Heating & Air team at a ribbon-cutting ceremony"
          className="absolute inset-0 h-full w-full"
          fittingType="fill"
          quality={82}
          loading="lazy" />
        
      </div>
    </div>);

}

export default function Hero({ onSchedule }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100svh - var(--expanded-header-height, 220px))" }}>
      
      <HeroBackdrop />
      <DeferredHeroVideo src={HERO_VIDEO} />

      {/* Layered black gradient: strongest behind the left headline, softer center, black bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 32%, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.30) 100%)"
        }} />
      
      <div
        className="absolute inset-0"
        style={{
          background:
          "radial-gradient(ellipse 70% 80% at 50% 38%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.72) 100%)"
        }} />
      
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: 220,
          background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 60%, #000000 100%)"
        }} />
      

      {/* Headline + CTA */}
      <div className="relative z-10 mx-auto pb-14 pt-10 md:pb-[140px] md:pt-[14vh] site-shell">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px] font-heading font-bold leading-[1.06] tracking-tight text-white"
          style={{ fontSize: "clamp(40px, 5.6vw, 80px)", letterSpacing: "-0.022em" }}>
          
          The Best Techs.<br />
          The Best <span className="whitespace-nowrap">Ser<span className="ml-[0.025em]">vice.</span></span><br />
          100% Guaranteed.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          
          <button
            type="button"
            onClick={onSchedule}
            className="group inline-flex items-stretch overflow-hidden rounded-[9px] text-white transition-transform duration-200 hover:-translate-y-0.5"
            style={{ height: 56 }}>
            
            <span
              className="flex items-center bg-[#FF2929] px-6 text-[15px] font-semibold transition-colors duration-200 group-hover:bg-[#d11f1f]"
              style={{ width: 168 }}>
              
              Schedule Online
            </span>
            <span
              className="flex items-center justify-center bg-[#c81e1e] transition-colors duration-200 group-hover:bg-[#a61717]"
              style={{ width: 32 }}>
              
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                
                <path
                  d="M3.375 3.375L14.625 14.625M6.1875 14.625L14.625 14.625L14.625 6.1875"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                
              </svg>
            </span>
          </button>
          <Link
            to="/services/"
            className="text-[15px] font-semibold text-white underline underline-offset-4 hover:text-white/90">
            
            Explore More
          </Link>
        </motion.div>

        {/* History card — in-flow on mobile */}
        <div className="mt-10 md:hidden">
          <HistoryCard />
        </div>
      </div>

      {/* History card — floating bottom-right on desktop, left edge aligned with header CTA block */}
      <div className="pointer-events-none absolute z-10 hidden md:block" style={{ bottom: 187, right: 'calc(195.5px + max(0px, (100vw - 1920px) / 2))' }}>
        <div className="pointer-events-auto">
          <HistoryCard />
        </div>
      </div>

      {/* Bottom strip: translucent bar with tagline (left) + white logo box pinned to screen right (max 555px) */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden md:block" style={{ height: 120, background: 'rgba(0,0,0,0.12)', borderTop: '1px solid rgba(190,200,215,0.28)' }}>
        {/* Tagline within site-shell */}
        <div className="relative flex h-full items-center site-shell">
          <p className="max-w-[420px] text-left text-[14px] font-medium leading-[1.55] tracking-[0.015em] text-white/90">{TRUST_STATEMENT}</p>
        </div>
        {/* White logo box pinned to the right edge of the screen */}
        <div className="absolute right-0 top-0 flex h-full items-center justify-center bg-white px-6" style={{ width: 'calc(var(--site-gutter, 115px) + 680px)' }}>
          <div className="flex items-center justify-center gap-5">
            {SOCIAL_PROOF_LOGOS.map((logo) =>
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              originWidth={logo.width}
              originHeight={logo.height}
              fittingType="fit"
              quality={82}
              className={HERO_LOGO_CLASS[logo.alt] ?? "h-[72px] w-auto object-contain"}
              loading="lazy" />

            )}
          </div>
        </div>
      </div>

      {/* Mobile bottom: trust statement, then a compact wrapping logo grid */}
      <div className="relative z-10 px-5 pb-6 md:hidden">
        <p className="max-w-[300px] text-left text-[14px] font-medium leading-[1.5] tracking-[0.015em] text-white/90" style={{ textWrap: "balance" }}>
          {TRUST_STATEMENT}
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 bg-white px-5 py-5 md:hidden">
        {SOCIAL_PROOF_LOGOS.map((logo) =>
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          originWidth={logo.width}
          originHeight={logo.height}
          fittingType="fit"
          quality={82}
          className={HERO_LOGO_CLASS[logo.alt] ?? "h-[56px] w-auto object-contain"}
          loading="lazy" />

        )}
      </div>
    </section>);

}