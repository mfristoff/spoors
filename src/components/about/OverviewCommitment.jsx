import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";

const MotionLink = motion(Link);

const galleryImages = [
  { src: spoorsImageLibrary.acServiceAppointment, alt: "Spoor's technician helping a customer" },
  { src: spoorsImageLibrary.heatPumpMaintenance, alt: "Spoor's technician maintaining a heat pump" },
  { src: spoorsImageLibrary.centralAirConditioningUnits, alt: "Residential central AC equipment serviced by Spoor's" },
];

export default function OverviewCommitment() {
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
    <section className="relative w-full bg-figma-primary py-10 md:py-16 lg:pt-[clamp(30px,6.2vw,120px)] lg:pb-[clamp(40px,8.3vw,160px)] px-6 lg:px-[clamp(18px,6.2vw,120px)]">
      {/* Background Decorative Shapes — soft blush diagonal framing */}
      <div className="pointer-events-none absolute top-[-25%] left-[-18%] z-0 h-[90%] w-[44%] rotate-[14deg] rounded-[120px]" style={{ background: "#FDF5F5" }} />
      <div className="pointer-events-none absolute bottom-[-25%] right-[-18%] z-0 h-[90%] w-[44%] rotate-[-14deg] rounded-[120px]" style={{ background: "#FDF5F5" }} />

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
            A dedicated HVAC team based in Auburn, passionate about delivering precision comfort. From emergency repairs to high-efficiency system designs and maintenance.
          </motion.p>

          <MotionLink
            to="/contact-us"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 lg:mt-[clamp(16px,3.3vw,64px)] bg-figma-accent rounded-[5px] w-full max-w-[217px] h-[58px] flex flex-row items-center justify-between pl-4 pr-1 group"
          >
            <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary">Contact Us</span>
            <div className="flex flex-row justify-center items-center p-2 min-h-[50px] bg-figma-secondary rounded-[2px] w-[33px] transition-transform duration-300 group-hover:translate-x-[-2px]">
              <div className="shrink-0 grow-0 w-[18px] min-h-[18px] overflow-clip relative">
                <img className="w-[13px] h-[13px] absolute top-[3px] left-[3px] z-[1]" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5761f5b5b_bad30aa69_160_160.svg" alt="Arrow Right" />
              </div>
            </div>
          </MotionLink>

          {/* Text Columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-6 md:gap-11 w-full mt-8 md:mt-16 lg:mt-[clamp(30px,6.2vw,119px)]"
          >
            <motion.div variants={fadeUpVariant} className="flex flex-col justify-start items-start gap-4 py-8 border-y border-[#f0f0f0] flex-1">
              <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-2 w-full">Bringing Quality to Life</p>
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-3 w-full">We specialize in transforming unstable home climates into perfectly regulated environments. Whether it&rsquo;s a complex furnace installation or routine AC optimization.</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col justify-start items-start gap-4 py-8 border-y border-[#f0f0f0] flex-1">
              <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-2 w-full">A Brand You Can Trust</p>
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-3 w-full">Let&rsquo;s build a more comfortable home together! Whether you&rsquo;re looking to upgrade to energy-efficient tech, purify your indoor air, or join our Home Comfort Club, we are here to provide local, expert guidance.</p>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Images Row (Spans full width of container) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 md:mt-16 lg:mt-[clamp(18px,3.6vw,70px)]"
        >
          {galleryImages.map((img, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="w-full aspect-[541/285] rounded-[14px] overflow-clip">
              <img className="w-full h-full object-cover object-center" src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}