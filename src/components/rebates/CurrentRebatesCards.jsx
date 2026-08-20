import React, { useState } from "react";
import { motion } from "framer-motion";
import { cdnImage } from "@/lib/cdnImage";
import { images } from "@/lib/siteConfig";
const GREEN_BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/d411193d2_Green-Bolt.svg";

const rebates = [
  {
    key: "programs",
    amount: "Various Incentives",
    badge: "Statewide Program",
    title: "California Heat Pump Rebate Programs",
    desc: "Various rebate programs and incentives are available to help California homeowners make the environmentally conscious switch to energy-efficient heat pumps, significantly reducing upfront installation costs.",
    bullets: [
      "Statewide and local programs for heat pump installation.",
      "Significant reductions on upfront installation costs.",
      "Options for both single-family and multi-family properties.",
    ],
    image: images.heatingHero,
  },
  {
    key: "heehra",
    amount: "Up to $8,000",
    badge: "Maximum Funding",
    title: "Low-Income Single Family",
    desc: "Specifically for single-family households earning below 80% of the Area Median Income (AMI).",
    bullets: [
      "Covers up to 100% of the electrification project costs for qualified applicants.",
      "Up to $4,000 for households earning between 80% and 150% AMI.",
      "Multi-family properties: $700–$8,000, max $14,000 per residential unit.",
    ],
    image: images.heatingInstall,
  },
  {
    key: "utility",
    amount: "Up to $3,000",
    badge: "Utility Savings",
    title: "Local Utility Rebates",
    desc: "Many California utility companies offer rebate programs for residential customers who install energy-efficient heat pumps, with savings ranging from $100 to $3,000 depending on the provider and system size.",
    bullets: [
      "Rebates from $100 to $3,000 depending on utility company and system size.",
      "Requires a qualified HVAC contractor and a qualifying heat pump system.",
      "Find programs via your provider or The Switch Is On incentive finder.",
    ],
    image: images.heatingTuneup,
  },
];

export default function CurrentRebatesCards() {
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % rebates.length);
  const current = rebates[active];

  return (
    <div className="w-full max-w-[1680px] mx-auto flex flex-col items-center">
      <div className="relative w-full lg:h-[540px] mt-12 lg:mt-0">
        {/* Back card — clickable white space */}
        <button
          type="button"
          onClick={next}
          aria-label="Show next rebate"
          className="hidden lg:block absolute top-[-48px] left-[68px] right-[68px] h-[300px] bg-white rounded-[19px] shadow-[inset_0_0_0_1px_#e5e5e5] z-0 cursor-pointer hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow"
        />
        {/* Middle card — clickable white space */}
        <button
          type="button"
          onClick={next}
          aria-label="Show next rebate"
          className="hidden lg:block absolute top-[-24px] left-[24px] right-[24px] h-[300px] bg-white rounded-[19px] shadow-[inset_0_0_0_1px_#e5e5e5] z-10 cursor-pointer hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow"
        />

        {/* Front (active) card — clickable */}
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={next}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              next();
            }
          }}
          className="relative w-full bg-white rounded-[19px] shadow-[inset_0_0_0_1px_#e5e5e5] z-20 cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col lg:flex-row overflow-hidden lg:h-[540px]"
        >
          {/* Left content (~60%) */}
          <div className="lg:w-[60%] p-6 lg:p-10 flex flex-col gap-8 lg:gap-10 overflow-y-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <span className="text-[30px] font-bold leading-none text-black">&rsaquo;</span>
              <span className="text-[clamp(22px,2vw,34px)] font-bold leading-none text-[#E6332A]">
                {current.amount}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#E6F7F0] rounded-full pl-2.5 pr-3.5 py-1.5 w-fit">
              <img src={GREEN_BOLT} alt="" className="h-4 w-4" />
              <span className="text-sm font-semibold text-[#0F5132]">{current.badge}</span>
            </div>

            <h3 className="text-[clamp(18px,1.6vw,28px)] font-bold leading-tight text-[#1F2937]">
              {current.title}
            </h3>

            <p className="text-base leading-relaxed text-[#4B5563]">{current.desc}</p>

            <ul className="flex flex-col gap-4 text-base leading-relaxed text-[#4B5563]">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img src={GREEN_BOLT} alt="" className="h-4 w-4 mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right image (~40%) */}
          <div className="lg:w-[40%] p-2.5 lg:p-3 flex">
            <div className="w-full h-[200px] lg:h-full rounded-[12px] overflow-hidden bg-[#D9D9D9]">
              <img
                src={cdnImage(current.image, 600, 540)}
                alt={current.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={next}
        className="mt-8 inline-flex items-center gap-2 text-figma-18 font-semibold text-figma-accent underline underline-offset-4 hover:opacity-80"
      >
        Show Next Rebate
      </button>
    </div>
  );
}