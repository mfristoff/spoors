import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";

const BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/04dc9d564_Bolt.svg";

export default function OverviewHero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#0a1226]">
      <img src={spoorsImageLibrary.hvacTechnician} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center 65%" }} loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/85" />

      <div className="relative z-10 flex min-h-[560px] flex-col">
        {/* Headline + floating card */}
        <div className="flex flex-1 items-end">
          <div className="site-shell flex w-full flex-col gap-8 pb-8 pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-10 lg:pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-none lg:max-w-[700px] text-[clamp(40px,5.5vw,68px)] font-bold leading-[1.05] tracking-[-0.025em] text-white"
            >
              Auburn's HVAC Company Since 1925.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[260px] sm:max-w-[320px] overflow-hidden rounded-2xl bg-white p-5 sm:p-8 shadow-2xl"
            >
              <img src={BOLT} alt="" className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 object-contain" style={{ opacity: 0.08 }} />
              <h2 className="relative text-[clamp(22px,2.5vw,30px)] font-bold leading-tight text-ink-900">
                Integrity. Expertise. Community.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Full-width dark bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full border-t border-white/10 bg-black/70"
        >
          <div className="site-shell flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[760px] text-[clamp(14px,1.2vw,18px)] font-medium leading-relaxed text-white">
              Built on a foundation of professional expertise and a customer-first philosophy, we take pride in delivering honest HVAC solutions.
            </p>
            <button
              onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
              className="group inline-flex h-[52px] shrink-0 items-stretch overflow-hidden rounded-[9px] shadow-lg"
            >
              <span className="flex items-center whitespace-nowrap bg-[#FF2D2D] px-6 text-[16px] font-semibold text-white transition-colors group-hover:bg-[#e51e1e]">Learn More</span>
              <span className="flex w-[44px] items-center justify-center rounded-r-[9px] bg-[#C81E1E] transition-colors group-hover:bg-[#a51818]">
                <ArrowDownRight className="h-5 w-5 text-white" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}