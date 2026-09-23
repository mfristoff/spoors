import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cdnImage } from "@/lib/cdnImage";

const RED = "#FF292D";
const RED_DARK = "#D11F23";
const INK = "#333333";
const CITY_RED = "#FF161B";

const FADE_LEFT =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,.25) 14%, #000 40%, #000 100%)";
const FADE_RIGHT =
  "linear-gradient(to left, transparent 0%, rgba(0,0,0,.25) 14%, #000 40%, #000 100%)";

const BG = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/d6942bc0b_HeroSection12.png";
const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/657f6b7b2_Bolt.svg";

/**
 * Location-page hero (Figma 1:1, normal document flow). Centered local h1,
 * red "Schedule Online" button with attached darker-red arrow segment,
 * underlined "Explore More" link, and a three-image gallery built as ONE
 * centered CSS grid: left + center + right columns. The black-framed center
 * portrait sits in the middle column; the two side images sit 108px lower
 * with outer-edge gradient fades. No viewport-height scaling, no absolute
 * horizontal positioning — the gallery is centered with auto margins and
 * scales fluidly via percentages / aspect ratios.
 */
export default function AreaHero({ area, image, sideL, sideR, onQuote }) {
  const heroRef = useRef(null);

  const explore = () => {
    const top = heroRef.current ? heroRef.current.offsetHeight : window.innerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
        overflowY: "visible",
        minHeight: 0,
        height: "auto",
      }}
    >

      <div className="relative z-10 flex flex-col items-center px-4 pt-[clamp(48px,6vw,88px)] text-center">
        {/* Local SEO eyebrow with bolt */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="flex items-center gap-2"
        >
          <img src={BOLT} alt="" className="h-4 w-4" />
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-red-600">{area.name}&rsquo;s Trusted HVAC Experts</span>
        </motion.div>
        {/* Local h1 */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 max-w-[1400px] font-heading"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.02em", color: INK }}
        >
          HVAC Ser<span className="ml-[0.025em] inline-block">vices</span> in <span style={{ color: CITY_RED }}>{area.name}</span>.
        </motion.h1>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-[clamp(16px,2.5vw,32px)] flex flex-col items-center gap-6 sm:flex-row sm:gap-[44px]"
        >
          <button
            type="button"
            onClick={() => onQuote()}
            className="group inline-flex h-[64px] items-stretch overflow-hidden rounded-[6px] text-white transition-filter hover:brightness-95"
            style={{ background: RED }}
          >
            <span className="flex items-center px-6 text-[20px] font-semibold tracking-[-0.2px]">Schedule Online</span>
            <span className="flex w-[52px] items-center justify-center" style={{ background: RED_DARK }}>
              <ArrowRight className="h-5 w-5" />
            </span>
          </button>
          <button
            type="button"
            onClick={explore}
            className="text-[20px] font-semibold underline underline-offset-4 transition-colors hover:text-red-600"
            style={{ color: INK }}
          >
            Explore More
          </button>
        </motion.div>

        {/* Desktop / tablet gallery — one centered CSS grid, normal flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="mx-auto mt-[clamp(36px,4.5vw,64px)] hidden md:grid"
          style={{
            width: "min(1670px, calc(100% - 48px))",
            gridTemplateColumns: "minmax(0,31.976%) minmax(0,32.695%) minmax(0,31.976%)",
            columnGap: "1.6765%",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          {/* Left HVAC image */}
          <div
            style={{
              gridColumn: 1,
              position: "relative",
              width: "100%",
              aspectRatio: "534 / 349",
              marginTop: 0,
              borderRadius: "30px",
              overflow: "hidden",
              zIndex: 1,
              background: "#FFFFFF",
            }}
          >
            <img
              key={sideL}
              src={cdnImage(sideL, 1068, 698)}
              alt={`HVAC technician servicing equipment in ${area.name}, California`}
              width={534}
              height={349}
              loading="eager"
              className="h-full w-full object-cover"
              style={{ WebkitMaskImage: FADE_LEFT, maskImage: FADE_LEFT }}
            />
          </div>

          {/* Center framed location image — landscape, aligned with side images, city shown */}
          <div
            style={{
              gridColumn: 2,
              position: "relative",
              width: "100%",
              aspectRatio: "534 / 430",
              boxSizing: "border-box",
              border: "6px solid rgba(255,255,255,0.55)",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(200,210,230,0.4)",
              backdropFilter: "blur(8px)",
              background: "#FFFFFF",
              zIndex: 3,
            }}
          >
            <img
              key={image}
              src={cdnImage(image, 1068, 860)}
              alt={area.imageAlt || `HVAC services in ${area.name}, California`}
              width={534}
              height={430}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right HVAC image */}
          <div
            style={{
              gridColumn: 3,
              position: "relative",
              width: "100%",
              aspectRatio: "534 / 349",
              marginTop: 0,
              borderRadius: "30px",
              overflow: "hidden",
              zIndex: 1,
              background: "#FFFFFF",
            }}
          >
            <img
              key={sideR}
              src={cdnImage(sideR, 1068, 698)}
              alt={`HVAC equipment detail in ${area.name}, California`}
              width={534}
              height={349}
              loading="eager"
              className="h-full w-full object-cover"
              style={{ WebkitMaskImage: FADE_RIGHT, maskImage: FADE_RIGHT }}
            />
          </div>
        </motion.div>

        {/* Mobile gallery — centered framed location image only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="mt-10 flex w-full justify-center md:hidden"
        >
          <div
            style={{
              position: "relative",
              width: "calc(100% - 48px)",
              aspectRatio: "546 / 635",
              boxSizing: "border-box",
              border: "5px solid rgba(255,255,255,0.55)",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(200,210,230,0.4)",
              background: "#FFFFFF",
            }}
          >
            <img
              key={`${image}-mobile`}
              src={cdnImage(image, 1092, 1270)}
              alt={area.imageAlt || `HVAC services in ${area.name}, California`}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
              style={{ borderRadius: "20px" }}
            />

          </div>
        </motion.div>

        {/* 80px breathing room beneath the gallery before the next section */}
        <div style={{ height: "80px" }} />
      </div>
    </section>
  );
}