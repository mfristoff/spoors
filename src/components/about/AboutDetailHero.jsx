import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cdnImage } from "@/lib/cdnImage";
import ServiceGap from "@/components/ui/ServiceGap";
import { heroFadeDown, heroFadeUp, heroStagger } from "@/lib/motionVariants";

export default function AboutDetailHero({ page }) {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#050d38]">
      <img
        key={page.image}
        src={cdnImage(page.image, 2400, 1600, page.heroFocalPoint)}
        alt={page.heroAlt || `${page.title} at Spoor's Heating & Air`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{
          objectPosition: page.heroBackgroundPosition || "center",
          transform: page.heroImageScale ? `scale(${page.heroImageScale})` : undefined,
          transformOrigin: "center center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
      {page.darkMobileOverlay && <div className="absolute inset-0 -z-10 bg-black/55 md:hidden" />}
      <div className="site-shell flex min-h-[560px] flex-col justify-between py-10 md:py-16">
        <motion.div initial="hidden" animate="visible" variants={heroStagger} className="flex flex-col gap-0">
          <motion.div variants={heroFadeDown} className="flex items-center gap-2 text-sm font-medium text-background/70">
            <Link to="/about-us/" className="hover:text-background">About</Link><span>/</span><span className="text-background">{page.title}</span>
          </motion.div>
          <motion.div variants={heroStagger} className="mt-[clamp(52px,7vw,92px)] max-w-[920px]">
            <motion.div variants={heroFadeDown} className="mb-7 flex items-center gap-2">
              <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-red-300">{page.eyebrow}</span>
            </motion.div>
            <motion.h1 variants={heroFadeUp} className="font-heading text-[clamp(44px,6vw,80px)] font-bold leading-[0.98] tracking-[-0.03em] text-background"><ServiceGap text={page.title} /></motion.h1>
            <motion.p variants={heroFadeUp} className="mt-7 max-w-[760px] text-[clamp(18px,1.55vw,24px)] leading-relaxed text-background/85">{page.hero}</motion.p>
            <motion.div variants={heroFadeUp}>
              <Link to="/contact-us/" className="group mt-9 inline-flex h-[58px] items-stretch overflow-hidden rounded-[5px] bg-red-600">
                <span className="flex items-center whitespace-nowrap px-6 text-[18px] font-semibold tracking-[-0.2px] text-white">Schedule Online</span>
                <span className="flex w-[50px] items-center justify-center bg-red-800 transition-colors group-hover:bg-red-900">
                  <ArrowUpRight className="h-[18px] w-[18px] text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
