import React from "react";
import { motion } from "framer-motion";

export default function Group32() {
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
    <div className="w-full overflow-clip bg-figma-primary font-display">
      {/* Top Section */}
      <section className="relative w-full bg-figma-color-16-3 grid grid-cols-1 lg:grid-cols-[1322fr_598fr]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 py-16 lg:pl-[clamp(18px,6.2vw,120px)] lg:pr-[clamp(16px,4.7vw,90px)] lg:py-[clamp(26px,5.5vw,106px)] gap-12 lg:gap-9 z-10">

          {/* Hero Text with Inline Pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="w-full max-w-[1112px]"
          >
            <p className="text-[clamp(16px,1.56vw,30px)] font-medium leading-[1.6] tracking-[-0.0133em] text-figma-text-1-2 inline-block">
              We started with a simple goal
              <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#ffeeee] rounded-[46px] shadow-[inset_0_0_0_0px_#ffe9e9] w-[78px] h-8 mx-3 align-middle relative -top-1">
                <span className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
                  <img className="w-[11px] h-3 absolute top-2 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2601f245e_7c189b63a_220_96.svg" alt="" />
                  <img className="w-[11px] h-3 opacity-[0.5] absolute top-1 left-3 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a5bd5cd9_6a6ba95d9_220_97.svg" alt="" />
                </span>
              </span>
              to raise the standard of what honest home maintenance feels like. Backed by technical expertise, transparent pricing, and a neighbor-first mindset.
              <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-[#feedda] rounded-[46px] shadow-[inset_0_0_0_0px_#ffe4c5] w-[78px] h-8 mx-3 align-middle relative -top-1">
                <span className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
                  <img className="w-[11px] h-3 absolute top-2 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2f9433937_11f1914a9_220_106.svg" alt="" />
                  <img className="w-[11px] h-3 opacity-[0.5] absolute top-1 left-3 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/4597d52bb_534abce25_220_107.svg" alt="" />
                </span>
              </span>
              Spoor’s has grown into the most trusted HVAC partner across Auburn, Meadow Vista, and beyond.
              <span className="inline-flex items-center justify-center gap-2.5 p-1 bg-figma-color-19-3 rounded-[46px] shadow-[inset_0_0_0_0px_#dcffdc] w-[78px] h-8 mx-3 align-middle relative -top-1">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1112px]"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUpVariant} className="bg-figma-highlight rounded-[17px] w-full h-[377px] overflow-clip relative flex flex-col justify-start pt-[clamp(58px,12vw,230px)] px-6">
              <div className="flex flex-col gap-[15px] w-full max-w-[256px] relative z-10">
                <p className="text-[clamp(22px,2.08vw,40px)] font-bold leading-[1.1] text-figma-accent">100%</p>
                <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-6">Family-owned and locally operated since day one.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUpVariant} className="bg-[linear-gradient(180deg,_rgba(5,13,56,1.00)_57%,_rgba(5,13,56,0.00)_57%)] rounded-[17px] w-full h-[377px] overflow-clip relative flex flex-col justify-start pt-[clamp(41px,8.6vw,165px)] px-[25px]">
              <div className="flex flex-col gap-[15px] w-full max-w-[305px] relative z-10">
                <p className="text-[clamp(22px,2.08vw,40px)] font-bold leading-[1.1] text-figma-accent">5K+</p>
                <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">Successful comfort tune-ups completed and counting across the region.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUpVariant} className="bg-[linear-gradient(180deg,_rgba(5,13,56,1.00)_21%,_rgba(5,13,56,0.00)_21%)] rounded-[17px] w-full h-[377px] overflow-clip relative flex flex-col justify-start pt-24 px-6">
              <div className="flex flex-col gap-[15px] w-full max-w-[305px] relative z-10">
                <p className="text-[clamp(22px,2.08vw,40px)] font-bold leading-[1.1] text-figma-text-1">0%</p>
                <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">Hidden fees or surprise costs. Transparent upfront pricing on every single visit.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:h-auto">
          <img className="absolute inset-0 w-full h-full object-cover object-center z-[3]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/e9171a60a_9c16e2d72_5dc4b6bfc1331a4867917336ef843b5bc9652cbe.png" alt="Worker" />

          {/* Decorative Off-screen Vectors */}
          <div className="hidden lg:block absolute top-[375px] left-[calc(100%+8px)] w-full max-w-[257px] min-h-[257px] overflow-clip z-[1]">
            <img className="w-[159px] h-[168px] opacity-[0.5] absolute top-[11px] left-[69px] z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/3951cfe17_5a0a743fb_157_47.svg" alt="" />
            <img className="w-[159px] h-[168px] absolute top-[115px] left-[82px] z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/1882d27d7_41c0c70ef_157_46.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative w-full bg-figma-primary py-16 lg:pt-[clamp(30px,6.2vw,120px)] lg:pb-[clamp(40px,8.3vw,160px)] px-6 lg:px-[clamp(18px,6.2vw,120px)]">

        {/* Background Decorative Shapes */}
        <div className="absolute top-[149px] left-[-256px] w-full max-w-[632px] min-h-[1132px] bg-figma-surface rounded-[56px_120px_56px_120px] shadow-[inset_0_0_0_1px_#ffd6d6] opacity-[0.5] z-[0] pointer-events-none" />
        <div className="absolute top-[513px] right-[-73px] w-full max-w-[640px] min-h-[910px] bg-figma-surface rounded-[56px_120px_56px_120px] shadow-[inset_0_0_0_1px_#ffd6d6] opacity-[0.5] z-[1] pointer-events-none" />

        {/* Decorative Off-screen Vectors */}
        <div className="hidden lg:block absolute top-[375px] left-[calc(100%+8px)] w-full max-w-[257px] min-h-[257px] overflow-clip z-[3] pointer-events-none">
          <img className="w-[159px] h-[168px] opacity-[0.5] absolute top-[11px] left-[69px] z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/014a3fa65_cdb4d4b50_157_116.svg" alt="" />
          <img className="w-[159px] h-[168px] absolute top-[115px] left-[82px] z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/9245966ca_1df74ff8d_157_115.svg" alt="" />
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[402fr_1278fr] gap-y-12 lg:gap-y-0 w-full max-w-[1680px] mx-auto">

          {/* Left Column: Section Header */}
          <div className="flex flex-row justify-start items-start gap-[11px] pt-2">
            <div className="shrink-0 grow-0 w-6 h-6 overflow-clip relative">
              <img className="w-[13px] h-2.5 absolute top-px left-1.5 z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/17bba9e51_479ee2ba4_160_146.svg" alt="" />
              <img className="w-[13px] h-2.5 opacity-[0.5] absolute top-[11px] left-2 z-[2]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5407872db_54102c5eb_160_147.svg" alt="" />
            </div>
            <p className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">OUR COMMITMENT</p>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start w-full">

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="text-[clamp(31px,2.92vw,56px)] font-bold leading-[1.1964] tracking-[-0.0179em] text-figma-text-1 w-full max-w-[1278px]"
            >
              A dedicated HVAC team based in Auburn, passionate about delivering precision comfort. From emergency repairs to high-efficiency system designs and maintenance.®
            </motion.p>

            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 lg:mt-[clamp(16px,3.3vw,64px)] bg-figma-accent rounded-[5px] w-full max-w-[217px] h-[58px] flex flex-row items-center justify-between pl-4 pr-1 group"
            >
              <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary">Explore More</span>
              <div className="flex flex-row justify-center items-center p-2 min-h-[50px] bg-figma-secondary rounded-[2px] w-[33px] transition-transform duration-300 group-hover:translate-x-[-2px]">
                <div className="shrink-0 grow-0 w-[18px] min-h-[18px] overflow-clip relative">
                  <img className="w-[13px] h-[13px] absolute top-[3px] left-[3px] z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5761f5b5b_bad30aa69_160_160.svg" alt="Arrow Right" />
                </div>
              </div>
            </motion.button>

            {/* Text Columns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-11 w-full mt-16 lg:mt-[clamp(30px,6.2vw,119px)]"
            >
              <motion.div variants={fadeUpVariant} className="flex flex-col justify-start items-start gap-4 py-8 border-y border-[#f0f0f0] flex-1">
                <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-2 w-full">Bringing Quality to Life</p>
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-3 w-full">We specialize in transforming unstable home climates into perfectly regulated environments. Whether it’s a complex furnace installation or routine AC optimization.</p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex flex-col justify-start items-start gap-4 py-8 border-y border-[#f0f0f0] flex-1">
                <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-2 w-full">Collaborate with Us</p>
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-3 w-full">Let’s build a more comfortable home together! Whether you’re looking to upgrade to energy-efficient tech, purify your indoor air, or join our Home Comfort Club, we are here to provide local, expert guidance.</p>
              </motion.div>
            </motion.div>

          </div>

          {/* Bottom Images Row (Spans full width of container) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 lg:mt-[clamp(18px,3.6vw,70px)]"
          >
            <motion.div variants={fadeUpVariant} className="w-full aspect-[541/285] rounded-[14px] overflow-clip">
              <img className="w-full h-full object-cover object-center" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2e322b52c_c1be60617_ffcef329a28372d3e0934b2b726b2b3c71c471ba.png" alt="HVAC Maintenance" />
            </motion.div>
            <motion.div variants={fadeUpVariant} className="w-full aspect-[541/285] rounded-[14px] overflow-clip">
              <img className="w-full h-full object-cover object-center" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/b47d9de3d_6d433d983_c8d11d908e89a4fc1c9f971a7cbd78292fefca3d.png" alt="Team Collaboration" />
            </motion.div>
            <motion.div variants={fadeUpVariant} className="w-full aspect-[541/285] rounded-[14px] overflow-clip">
              <img className="w-full h-full object-cover object-center" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/8ecda9ce8_91584c04e_ed8b98a6ae07195024cb010ee69433d2eb4f6278.png" alt="Electrical Work" />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
