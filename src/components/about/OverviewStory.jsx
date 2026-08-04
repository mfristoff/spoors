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
          <motion.div variants={fadeUpVariant} className="bg-[#0b1131] rounded-[17px] w-full aspect-[640/330] md:aspect-auto md:h-[377px] overflow-clip relative flex flex-col justify-between md:justify-end md:gap-3 py-7 px-6">
            <p className="text-[36px] md:text-[28px] font-bold leading-[1.1] text-white relative z-10">100%</p>
            <p className="text-[16px] leading-[1.5] text-white/70 w-full max-w-[256px] relative z-10">Family-owned and locally operated since day one.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-[#0b1131] rounded-[17px] w-full aspect-[640/330] md:aspect-auto md:h-[377px] overflow-clip relative flex flex-col justify-between md:justify-end md:gap-3 py-7 px-6 md:px-[25px]">
            <p className="text-[36px] md:text-[28px] font-bold leading-[1.1] text-white relative z-10">5K+</p>
            <p className="text-[16px] leading-[1.5] text-white/70 w-full max-w-[305px] relative z-10">Successful comfort tune-ups completed and counting across the region.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-white border border-[#e0e0e0] rounded-[17px] w-full aspect-[640/330] md:aspect-auto md:h-[377px] overflow-clip relative flex flex-col justify-between md:justify-end md:gap-3 py-7 px-6">
            <p className="text-[30px] md:text-[24px] font-bold leading-[1.1] text-[#333333] relative z-10">Zero Hidden Fees</p>
            <p className="text-[16px] leading-[1.5] text-[#666666] w-full max-w-[305px] relative z-10">No surprise costs. We provide upfront pricing on every single visit.</p>
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