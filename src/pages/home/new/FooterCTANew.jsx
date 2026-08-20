import { motion } from "framer-motion";
import { images } from "@/lib/siteConfig";
import ScheduleOnlineButton from "@/components/ui/ScheduleOnlineButton";

const ease = [0.22, 1, 0.36, 1];

const contentStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const headingEntrance = {
  hidden: { opacity: 0, y: 46, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.78, ease } },
};

const copyEntrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease } },
};

const barEntrance = {
  hidden: { opacity: 0, y: 18, scale: 0.997 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.88, ease } },
};

export default function FooterCTANew() {
  return (
    <section className="header-aligned-section relative w-full overflow-visible bg-[#0c1228] pb-[220px] pt-24 md:pb-[clamp(120px,18vw,260px)] md:pt-[clamp(25px,5.2vw,100px)]">
      <img className="absolute inset-0 h-full w-full object-cover object-center" src={images.fanBg} alt="" aria-hidden="true" loading="eager" decoding="async" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,18,40,0.72) 0%, rgba(12,18,40,0.88) 55%, #0c1228 100%)" }} />

      <motion.div
        variants={contentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-end"
      >
        <div className="flex max-w-[723px] flex-col gap-6 md:gap-8">
          <motion.h2
            variants={headingEntrance}
            className="text-[30px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[clamp(42px,3.96vw,76px)] md:leading-[1.0]"
            style={{ textWrap: "balance" }}
          >
            Comfort that always works around you.
          </motion.h2>
          <motion.p variants={copyEntrance} className="max-w-[686px] text-[clamp(14px,1.25vw,24px)] font-medium leading-[1.58] text-white/70">
            Our expert technicians handle the technicalities so you can focus on enjoying your home.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={barEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-[-72px] left-4 right-4 z-20 mx-auto flex max-w-[1440px] flex-col items-stretch justify-between gap-6 rounded-[18px] border border-white/15 bg-red-600 p-7 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_-1px_0_0_rgba(0,0,0,0.12)] sm:flex-row sm:items-center lg:left-[120px] lg:right-[120px] lg:p-8"
      >
        <p className="text-center text-[20px] font-bold leading-[1.25] text-white sm:text-left md:text-[clamp(14px,1.35vw,26px)]">
          Book Auburn&apos;s Trusted HVAC Experts Today.
        </p>
        <ScheduleOnlineButton className="mx-auto w-full max-w-[260px] sm:mx-0 sm:w-[217px]" />
      </motion.div>
    </section>
  );
}
