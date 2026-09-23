import { motion } from "framer-motion";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";

const STORY_PILLS = {
  red: "/assets/ui/story-pill-red.svg",
  amber: "/assets/ui/story-pill-amber.svg",
  green: "/assets/ui/story-pill-green.svg",
};

const BOLT_MARK = "/assets/ui/spoors-bolt-mark.svg";

const stats = [
  {
    value: "100%",
    description: "Family-owned and locally operated since day one.",
    cardClass: "border-[#dfd0c9] bg-[#f2e5e1] shadow-[0_18px_45px_rgba(74,45,41,0.08)]",
    ghostTone: "opacity-[0.075]",
  },
  {
    value: "5K+",
    description: "Successful comfort tune-ups completed across the region.",
    cardClass: "border-[#ded8cf] bg-[#f6f2ec] shadow-[0_18px_45px_rgba(74,45,41,0.07)]",
    ghostTone: "opacity-[0.068]",
  },
  {
    value: "Zero Hidden Fees",
    valueLines: ["Zero Hidden", "Fees"],
    description: "No surprise costs. Upfront pricing on every visit.",
    cardClass: "border-[#ded8cf] bg-[#fffdf9] shadow-[0_18px_45px_rgba(74,45,41,0.06)]",
    ghostTone: "opacity-[0.06]",
  },
];

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
    <section className="about-story-grid relative w-full bg-figma-color-16-3 grid grid-cols-1">
      <div className="header-aligned-left flex flex-col justify-center px-6 py-10 md:py-16 lg:pr-[clamp(16px,4.7vw,90px)] lg:py-[clamp(26px,5.5vw,106px)] gap-8 md:gap-12 lg:gap-9 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="w-full max-w-[1112px]"
        >
          <p className="text-[clamp(16px,1.56vw,30px)] font-medium leading-[1.8] tracking-[-0.0133em] text-figma-text-1-2 inline-block">
            We started with a simple goal
            <img src={STORY_PILLS.red} alt="" aria-hidden="true" className="mx-3 my-1 inline-block h-8 w-[78px] align-middle" />
            to raise the standard of what honest home maintenance feels like. Backed by technical expertise, transparent pricing, and a neighbor-first mindset.
            <img src={STORY_PILLS.amber} alt="" aria-hidden="true" className="mx-3 my-1 inline-block h-8 w-[78px] align-middle" />
            Spoor&rsquo;s has grown into the most trusted HVAC partner across Auburn, Meadow Vista, and beyond.
            <img src={STORY_PILLS.green} alt="" aria-hidden="true" className="mx-3 my-1 inline-block h-8 w-[78px] align-middle" />
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-[1112px]"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUpVariant}
              className={`relative flex w-full min-h-[320px] flex-col overflow-hidden rounded-[22px] border px-6 py-7 md:px-7 md:py-8 ${stat.cardClass}`}
            >
              <img
                src={BOLT_MARK}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute -right-12 -top-12 h-[168px] w-[168px] select-none ${stat.ghostTone}`}
              />

              <div className="relative z-10 flex h-10 items-center pt-1" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c84d4b]" />
              </div>

              <div className="relative z-10 mt-8 flex min-h-[112px] items-start">
                <p className="max-w-[285px] text-[clamp(40px,2.45vw,48px)] font-bold leading-[0.96] tracking-[-0.04em] text-[#24201f]">
                  {stat.valueLines ? (
                    <>
                      <span className="block whitespace-nowrap">{stat.valueLines[0]}</span>
                      <span className="block">{stat.valueLines[1]}</span>
                    </>
                  ) : stat.value}
                </p>
              </div>

              <p className="relative z-10 mt-auto max-w-[250px] text-[15px] leading-[1.55] text-[#625a57] md:text-[16px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative min-h-[420px] w-full overflow-hidden lg:my-4 lg:min-h-0 lg:rounded-l-[18px]">
        <img className="absolute inset-0 z-[3] h-full w-full object-cover object-center lg:object-[72%_center]" src={spoorsImageLibrary.acRepairTechnician} alt="Spoor's HVAC technician working on equipment" />
      </div>
    </section>
  );
}
