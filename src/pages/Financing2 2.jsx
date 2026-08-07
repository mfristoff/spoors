import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "@/lib/siteConfig";
import HearthSimpleCard from "@/components/financing/HearthSimpleCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function Financing2() {
  const [hovered, setHovered] = useState(null);
  const FINANCING_DIAGRAM = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/53d73aae5_Frame296.svg";

  return (
    <div className="w-full mx-auto flex flex-col bg-figma-primary overflow-x-clip font-display">
      {/* --- HERO SECTION --- */}
      <section className="w-full relative pt-16 lg:pt-[clamp(64px,5.2vw,100px)] pb-20 lg:pb-[clamp(30px,6.2vw,120px)]">
        <div className="site-shell flex flex-col gap-12 lg:gap-[clamp(48px,4.2vw,80px)]">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-[clamp(30px,7.7vw,148px)] w-full"
        >
          <div className="flex flex-col gap-8 lg:gap-12 w-full lg:max-w-[852px] shrink-0">
            <h1 className="text-[clamp(42px,3.96vw,76px)] font-bold leading-[1.0] tracking-[-0.0197em] text-figma-text-1">
              Restore Comfort Today, Stress-Free.
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <Link to={business.schedulingUrl} className="bg-figma-accent rounded-[5px] w-full max-w-[217px] h-[58px] relative group overflow-clip block">
                <div className="absolute inset-0 bg-red-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <div className="flex flex-row justify-center items-center p-2 min-h-[50px] bg-[#d10000] rounded-[2px] w-[33px] absolute top-1 right-1 z-10">
                  <img className="w-[13px] h-[13px]" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/84e66863b_68bd996d5_295_408.svg" alt="Arrow" />
                </div>
                <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary absolute top-5 left-4 z-10">
                  Schedule Online
                </span>
              </Link>
              <Link to="/services/" className="hidden sm:flex text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1 hover:text-figma-accent transition-colors items-center gap-2 group">
                Explore More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-7 max-w-[680px]">
            <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-2">
              Don’t let the costs of HVAC repairs hold you back. With our flexible financing plans, you can fix or upgrade your system today without breaking the bank.
            </p>
          </div>
        </motion.div>

        {/* Mobile: clean Hearth card + collapsible diagram under Explore More */}
        <HearthSimpleCard />

        {/* Hero Diagram — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block w-full"
        >
          <div className="relative w-full aspect-[1680/496] rounded-[20px] bg-[#fff4f4]">
            <img
              src={FINANCING_DIAGRAM}
              alt="Hearth and Spoor's financing partnership"
              className="absolute inset-0 w-full h-full rounded-[20px] object-contain"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-[20px] bg-gradient-to-t from-white via-white/40 to-transparent" />

            {/* Hearth logo hover zone */}
            <div
              className="absolute cursor-pointer"
              style={{ left: "29.46%", top: "32.25%", width: "9.4%", height: "32.05%" }}
              onMouseEnter={() => setHovered("hearth")}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === "hearth" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 mb-3 w-[240px] -translate-x-1/2 rounded-[8px] bg-[#0a1226] p-3.5 text-white shadow-[0px_8px_24px_rgba(0,0,0,0.25)] z-30"
                  >
                    <p className="text-[14px] font-bold leading-tight">Hearth makes financing simple.</p>
                    <p className="mt-1.5 text-[12px] leading-[1.5] text-white/75">
                      Hearth lets you check personalized financing options from multiple lending partners through one secure application.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Spoor's logo hover zone */}
            <div
              className="absolute cursor-pointer"
              style={{ left: "52.97%", top: "32.25%", width: "18.8%", height: "32.05%" }}
              onMouseEnter={() => setHovered("spoors")}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === "spoors" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 mb-3 w-[260px] -translate-x-1/2 rounded-[8px] bg-[#0a1226] p-3.5 text-white shadow-[0px_8px_24px_rgba(0,0,0,0.25)] z-30"
                  >
                    <p className="text-[14px] font-bold leading-tight">Your trusted HVAC contractor.</p>
                    <p className="mt-1.5 text-[12px] leading-[1.5] text-white/75">
                      Spoor's handles your estimate, installation, and service. Hearth simply offers financing options if needed.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* --- SPLIT SECTION (Background + Value Props) --- */}
      <section className="w-full relative overflow-clip bg-figma-primary py-16 lg:min-h-[1150px] lg:flex lg:flex-col lg:justify-center lg:py-[clamp(30px,6.2vw,120px)]">
        {/* Background: grayscale technicians fading to white */}
        <img
          src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/bfeb5fd07_HeroSection8.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-white" />

        {/* Content */}
        <div className="relative z-10 site-shell">
          <div className="flex flex-col gap-10 w-full lg:max-w-[1090px] lg:ml-auto lg:pl-[clamp(16px,4.2vw,80px)] lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(34px,3.23vw,62px)] font-bold leading-[1.0968] tracking-[-0.0194em] text-figma-text-7 max-w-[920px]"
          >
            Get premium HVAC care today. Pay comfortably over time.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between gap-8 p-6 bg-figma-color-11-2 rounded-[10px] shadow-[inset_0_0_0_1px_#ebebeb] min-h-[227px]"
            >
              <div className="w-8 h-8">
                <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fa10ac84d_Stopwatch.svg" alt="Fast Approvals" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-2">Fast Approvals</h3>
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-1-2 opacity-60">
                  Check your eligibility online through Hearth’s secure portal without affecting your score.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-between gap-8 p-6 bg-figma-color-11-2 rounded-[10px] shadow-[inset_0_0_0_1px_#ebebeb] min-h-[227px]"
            >
              <div className="w-8 h-8">
                <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/23c2dfdf1_ArchiveMinimalistic.svg" alt="Flexible Terms" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-2">Flexible Terms</h3>
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-1-2 opacity-60">
                  Choose from multiple loan options with fixed monthly payments.
                </p>
              </div>
            </motion.div>

            {/* Card 3 (Spans 2 cols on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between gap-8 p-6 bg-figma-color-11-2 rounded-[10px] shadow-[inset_0_0_0_1px_#ebebeb] min-h-[198px] md:col-span-2"
            >
              <div className="w-8 h-8">
                <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/6df53003f_ShieldStar.svg" alt="No Penalties" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-2">No Penalties</h3>
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-1-2 opacity-60">
                  Maintain absolute control over your loan. Pay off your remaining financing balance early at any time without facing a single penalty fee.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[16px] md:text-[clamp(14px,1.25vw,24px)] font-medium leading-[1.5833] text-figma-text-7 max-w-[781px]"
          >
            At Spoor’s Heating & Air Conditioning, we’ve partnered with Hearth to provide flexible HVAC financing to all our customers who qualify. Don’t let upfront repair or replacement costs keep you from restoring safety and absolute comfort to your home or business.
          </motion.p>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID SECTION --- */}
      <section className="site-shell w-full bg-figma-primary py-20 lg:py-[clamp(30px,6.2vw,120px)] flex flex-col items-center gap-16 lg:gap-[clamp(24px,6.2vw,120px)]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-[clamp(34px,4.2vw,72px)] font-bold leading-[1.05] tracking-[-0.018em] text-center text-figma-text-7 max-w-[1100px]"
        >
          Your comfort shouldn’t wait for a better budget.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1440px]">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-figma-muted rounded-[23px] p-8 flex flex-col justify-between min-h-[376px] group hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/1ff490bdf_Plain2.svg" alt="Fast Funding" />
                </div>
                <h3 className="text-[clamp(14px,1.35vw,26px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-7">Fast Funding</h3>
              </div>
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-4-2">
                Get loan amounts up to $100,000 to cover everything from minor repairs to full multi-zone system installations.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/091b7ecde_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Funding within 1–3 days</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/d612b1f6a_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Loan amounts up to $100,000</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-figma-muted rounded-[23px] p-8 flex flex-col justify-between min-h-[376px] group hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/7f4608f7d_GraphDown.svg" alt="Affordable Monthly Payment" />
                </div>
                <h3 className="text-[clamp(14px,1.35vw,26px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-7">Affordable Monthly Payment</h3>
              </div>
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-4-2">
                Keep your household finances balanced. Hearth matches you with manageable, fixed-rate payment options.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/a6b447721_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Affordable monthly payment options</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/1ae957d15_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Tailored rates for qualified buyers</span>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-figma-muted rounded-[23px] p-8 flex flex-col justify-between min-h-[376px] group hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img className="w-8 h-8" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/d1f6d9c44_ShieldMinimalistic.svg" alt="0 Penalties, 0 Collateral" />
                </div>
                <h3 className="text-[clamp(14px,1.35vw,26px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-7">0 Penalties, 0 Collateral</h3>
              </div>
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-4-2">
                Protect your assets and maintain absolute freedom over your account. Borrow safely without tying up your property, and pay off your balance early.
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/091b7ecde_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">No prepayment penalties</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#eaeaea]">
                <img className="w-6 h-6" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/d612b1f6a_Bolt.svg" alt="Check" />
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">No home equity required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}