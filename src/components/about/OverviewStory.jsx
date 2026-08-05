import React from "react";
import { motion } from "framer-motion";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";

export default function OverviewStory() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="relative w-full bg-figma-color-16-3 grid grid-cols-1 lg:grid-cols-[1322fr_598fr]">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 py-10 md:py-16 lg:pl-[clamp(18px,6.2vw,120px)] lg:pr-[clamp(16px,4.7vw,90px)] lg:py-[clamp(26px,5.5vw,106px)] gap-8 md:gap-12 lg:gap-9 z-10">

        {/* Hero Text with Inline Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="w-full max-w-[1112px]"
        >
          <p className="text-[clamp(16px,1.56vw,30px)] font-medium leading-[1.8] tracking-[-0.0133em] text-figma-text-1-2 inline-block">
            We started with a simple goal
            <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#ffeeee] rounded-[46px] shadow-[inset_0_0_0_0px_#ffe9e9] w-[78px] h-8 mx-3 my-1 align-middle">
              <span className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
                <img className="w-[11px] h-3 absolute top-2 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2601f245e_7c189b63a_220_96.svg" alt="" />
                <img className="w-[11px] h-3 opacity-[0.5] absolute top-1 left-3 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a5bd5cd9_6a6ba95d9_220_97.svg" alt="" />
              </span>
            </span>
            to raise the standard of what honest home maintenance feels like. Backed by technical expertise, transparent pricing, and a neighbor-first mindset.
            <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#feedda] rounded-[46px] shadow-[inset_0_0_0_0px_#ffe4c5] w-[78px] h-8 mx-3 my-1 align-middle">
              <span className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
                <img className="w-[11px] h-3 absolute top-2 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2f9433937_11f1914a9_220_106.svg" alt="" />
                <img className="w-[11px] h-3 opacity-[0.5] absolute top-1 left-3 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/4597d52bb_534abce25_220_107.svg" alt="" />
              </span>
            </span>
            Spoor&rsquo;s has grown into the most trusted HVAC partner across Auburn, Meadow Vista, and beyond.
            <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-figma-color-19-3 rounded-[46px] shadow-[inset_0_0_0_0px_#dcffdc] w-[78px] h-8 mx-3 my-1 align-middle">
              <span className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
                <img className="w-[11px] h-3 absolute top-2 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/9785d3dab_1b7095c06_220_113.svg" alt="" />
                <img className="w-[11px] h-3 opacity-[0.5] absolute top-1 left-3 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/50b492e02_2834674aa_220_114.svg" alt="" />
              </span>
            </span>
          </p>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-[1112px]"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group relative flex w-full aspect-[640/330] flex-col justify-between overflow-hidden rounded-[22px] border border-[#dfd0c9] bg-[#f2e5e1] px-6 py-7 shadow-[0_18px_45px_rgba(74,45,41,0.08)] md:aspect-auto md:h-[320px] md:px-7 md:py-8"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] origin-left bg-[#c84d4b] transition-transform duration-500 ease-out group-hover:scale-x-[0.72]" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-2 text-[112px] font-bold leading-none tracking-[-0.08em] text-[#5f4640]/[0.055]">01</span>
            <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9d514f]">01</span>
            <div className="relative z-10">
              <p className="text-[clamp(38px,3vw,54px)] font-bold leading-[0.95] tracking-[-0.045em] text-[#24201f]">100%</p>
              <p className="mt-4 w-full max-w-[270px] text-[16px] leading-[1.55] text-[#625a57]">Family-owned and locally operated since day one.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group relative flex w-full aspect-[640/330] flex-col justify-between overflow-hidden rounded-[22px] border border-[#ded8cf] bg-[#f6f2ec] px-6 py-7 shadow-[0_18px_45px_rgba(74,45,41,0.07)] md:aspect-auto md:h-[320px] md:px-7 md:py-8"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] origin-left bg-[#c84d4b] transition-transform duration-500 ease-out group-hover:scale-x-[0.72]" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-2 text-[112px] font-bold leading-none tracking-[-0.08em] text-[#5f4640]/[0.05]">02</span>
            <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9d514f]">02</span>
            <div className="relative z-10">
              <p className="text-[clamp(38px,3vw,54px)] font-bold leading-[0.95] tracking-[-0.045em] text-[#24201f]">5K+</p>
              <p className="mt-4 w-full max-w-[305px] text-[16px] leading-[1.55] text-[#625a57]">Successful comfort tune-ups completed and counting across the region.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group relative flex w-full aspect-[640/330] flex-col justify-between overflow-hidden rounded-[22px] border border-[#ded8cf] bg-[#fffdf9] px-6 py-7 shadow-[0_18px_45px_rgba(74,45,41,0.06)] md:aspect-auto md:h-[320px] md:px-7 md:py-8"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] origin-left bg-[#c84d4b] transition-transform duration-500 ease-out group-hover:scale-x-[0.72]" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-2 text-[112px] font-bold leading-none tracking-[-0.08em] text-[#5f4640]/[0.045]">03</span>
            <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9d514f]">03</span>
            <div className="relative z-10">
              <p className="max-w-[280px] text-[clamp(29px,2.2vw,40px)] font-bold leading-[1.02] tracking-[-0.035em] text-[#24201f]">Zero Hidden Fees</p>
              <p className="mt-4 w-full max-w-[305px] text-[16px] leading-[1.55] text-[#625a57]">No surprise costs. We provide upfront pricing on every single visit.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image — technician from our image library */}
      <div className="relative w-full lg:h-auto">
        <img className="absolute inset-0 w-full h-full object-cover object-center lg:object-[72%_center] z-[3]" src={spoorsImageLibrary.acRepairTechnician} alt="Spoor's HVAC technician working on equipment" />
      </div>
    </section>
  );
}