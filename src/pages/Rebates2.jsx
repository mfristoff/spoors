import React from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent } from
"@/components/ui/accordion";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import FooterCTANew from "@/pages/home/new/FooterCTANew";
import CurrentRebatesCards from "@/components/rebates/CurrentRebatesCards";
import DeferredHeroVideo from "@/pages/home/DeferredHeroVideo";
import { Link } from "react-router-dom";
import { cdnImage } from "@/lib/cdnImage";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";

const REBATES_HERO_VIDEO = "https://media.base44.com/videos/public/6a67dcda4fda68f69980f519/bb41fa3fb_Spoors-HVAC-Hero-Optimized.mp4";
const REBATES_HERO_POSTER = cdnImage(images.hero, 1920, 1080);

const SIERRA_NEVADA = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/ac4820687_rebates-sierra-nevada.jpg";
const NEIGHBORHOOD = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/48e0dbf36_rebates-suburban-neighborhood.jpg";

const ICON_LEAF = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5f8f1780d_.png";
const ICON_BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/3c668c872_.png";
const ICON_EARTH = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/822e7128a_.png";

export default function RebatesPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col font-display overflow-x-clip bg-figma-primary">
      <NewHeader />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[calc(100svh-220px)] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={REBATES_HERO_POSTER}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
          />
          <DeferredHeroVideo src={REBATES_HERO_VIDEO} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.70)_62%,rgba(0,0,0,0.90)_100%)]" />
        </div>

        {/* Hero Content — wrapper mirrors the header padding so the right column
             right edge aligns with the header's dark-red CTA column right edge */}
        <div className="relative z-10 flex-1 flex items-end w-full max-w-[1920px] mx-auto px-4 pt-24 lg:pt-10 pb-12 lg:px-0 lg:pl-[max(115px,calc((100vw-1440px)/2))] lg:pr-[max(115px,calc((100vw-1440px)/2))]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-12">
            
            <motion.div variants={fadeUpVariant} className="flex flex-col gap-12 w-full lg:max-w-[760px] shrink-0">
              <h1 className="text-[clamp(34px,3vw,52px)] font-bold leading-[1.05] tracking-[-0.0197em] text-figma-primary">Explore California HVAC Rebates, Incentives and Special Offers.</h1>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-5 shrink-0 w-full lg:max-w-[540px] items-start">
              <p className="text-[15px] leading-[1.55] md:text-figma-18 md:leading-figma-29 font-[440] tracking-[-0.2px] text-figma-text-4 lg:max-w-[520px]">
                Don’t let high energy bills control your home comfort. Explore how California’s latest energy-efficient rebates can drastically lower your upfront installation costs today.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:max-w-[520px] lg:justify-start">
                <Link to="/contact-us/" className="group inline-flex items-stretch bg-figma-accent rounded-[5px] h-[58px] w-full max-w-[270px] overflow-hidden">
                  <span className="flex-1 flex items-center whitespace-nowrap px-5 text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary">
                    Schedule Online
                  </span>
                  <span className="flex items-center justify-center w-[50px] bg-figma-secondary">
                    <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/8b5e5c4e7_52bfba80c_314_684.svg" alt="" className="w-[13px] h-[13px] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a href="#why-invest" className="group inline-flex items-center gap-2 whitespace-nowrap text-figma-14 font-medium leading-figma-14 tracking-[-0.1px] text-figma-primary hover:underline underline-offset-4">
                  Explore More
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROP GRID */}
      <section id="why-invest" className="w-full bg-figma-color-11-2 py-20 lg:py-[clamp(32px,6.8vw,130px)] px-4 lg:px-[clamp(18px,6.2vw,120px)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1680px] mx-auto flex flex-col items-center gap-16 lg:gap-[clamp(20px,5.2vw,100px)]">
          
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-6 lg:gap-[clamp(16px,2.6vw,50px)] max-w-[853px] text-center">
            <h2 className="text-[clamp(34px,3.23vw,62px)] font-bold leading-[1.0968] tracking-[-0.0194em] text-figma-text-1-2">
              Invest In A Heat Pump Your Home and <span className="text-red-600">Save Big</span>
            </h2>
            <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">
              Switching to a high-efficiency climate system shouldn&rsquo;t be a financial burden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <motion.div variants={fadeUpVariant} className="bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#ededed] p-5 flex flex-col gap-6 h-full">
              <div className="relative w-full aspect-[504/316] rounded-[12px] overflow-clip shrink-0">
                <img src={cdnImage(images.heatingInstall, 504, 316)} alt="Heat pump unit installed outdoors beside a home" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2.5 z-10">
                  <div className="flex items-center gap-2.5 px-2.5 py-2 bg-white rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.18)] w-fit">
                    <img src={ICON_LEAF} alt="Smart Engineering" className="w-6 h-6 shrink-0 object-contain" />
                    <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Smart Engineering</span>
                  </div>
                  <h3 className="text-[clamp(18px,1.6vw,28px)] font-bold leading-tight tracking-[-0.0115em] text-white">
                    All-in-One Climate System
                  </h3>
                </div>
              </div>
              <p className="text-figma-16 font-[440] leading-figma-26 text-figma-text-1-2 opacity-60 flex-1">
                Heat pumps are highly efficient systems that both heat and cool your home from a single unit — replacing the need for separate furnace and AC equipment while keeping your indoor climate balanced through every California season.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUpVariant} className="bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#ededed] p-5 flex flex-col gap-6 h-full">
              <div className="relative w-full aspect-[504/316] rounded-[12px] overflow-clip shrink-0">
                <img src={cdnImage(images.introTech, 504, 316)} alt="HVAC technician working on air conditioner controls" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2.5 z-10">
                  <div className="flex items-center gap-2.5 px-2.5 py-2 bg-white rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.18)] w-fit">
                    <img src={ICON_BOLT} alt="Energy Saver" className="w-6 h-6 shrink-0 object-contain" />
                    <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Energy Saver</span>
                  </div>
                  <h3 className="text-[clamp(18px,1.6vw,28px)] font-bold leading-tight tracking-[-0.0115em] text-white">
                    Transfer Heat, Don&rsquo;t Create It
                  </h3>
                </div>
              </div>
              <p className="text-figma-16 font-[440] leading-figma-26 text-figma-text-1-2 opacity-60 flex-1">
                Rather than burning fuel to create heat, heat pumps transfer existing heat in and out of your home — using a fraction of the electricity of traditional HVAC equipment and considerably lowering your monthly utility bills.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUpVariant} className="bg-figma-primary rounded-[12px] shadow-[inset_0_0_0_1px_#ededed] p-5 flex flex-col gap-6 h-full">
              <div className="relative w-full aspect-[504/316] rounded-[12px] overflow-clip shrink-0">
                <img src={cdnImage(SIERRA_NEVADA, 504, 316)} alt="Sierra Nevada California landscape" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2.5 z-10">
                  <div className="flex items-center gap-2.5 px-2.5 py-2 bg-white rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.18)] w-fit">
                    <img src={ICON_EARTH} alt="Eco-Friendly Choice" className="w-6 h-6 shrink-0 object-contain" />
                    <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1">Eco-Friendly Choice</span>
                  </div>
                  <h3 className="text-[clamp(18px,1.6vw,28px)] font-bold leading-tight tracking-[-0.0115em] text-white">
                    Lower Your Carbon Footprint
                  </h3>
                </div>
              </div>
              <p className="text-figma-16 font-[440] leading-figma-26 text-figma-text-1-2 opacity-60 flex-1">
                An excellent choice for homeowners who care about the environment. By cutting energy waste and minimizing reliance on fossil fuels, a heat pump shrinks your household&rsquo;s carbon footprint without sacrificing comfort.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* INCENTIVES SECTION */}
      <section className="w-full bg-figma-primary py-16 lg:py-[clamp(40px,8vw,160px)] relative overflow-clip">
        <div className="max-w-[1680px] mx-auto px-4 lg:pl-[clamp(18px,6.2vw,120px)] lg:pr-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[clamp(40px,7vw,140px)] items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12 lg:gap-[clamp(32px,5vw,96px)]">
            
            <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
              <div className="flex items-center gap-[11px]">
                <div className="w-6 h-6 relative">
                  <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/f702d5b30_29d3e56c4_322_821.svg" alt="Icon" className="absolute top-px left-1.5 w-[13px] h-2.5" />
                  <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/708a1865c_4a94b4783_322_822.svg" alt="Icon shadow" className="absolute top-[11px] left-2 w-[13px] h-2.5 opacity-50" />
                </div>
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">
                  HEEHRA PROGRAM INCENTIVES
                </span>
              </div>
              <h2 className="text-[clamp(34px,3.4vw,64px)] font-bold leading-[1.05] tracking-[-0.0194em] text-black max-w-[720px]">
                Significant state rebates designed to make electrification affordable for every household.
              </h2>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-10 lg:gap-12">
              <div className="flex flex-col gap-3 max-w-[597px]">
                <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-1-2">
                  Income-Eligible Relief
                </h3>
                <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">
                  Specifically structured to support low- to middle-income single-family households, ensuring those who need energy savings the most get the highest upfront financial assistance.
                </p>
              </div>
              <div className="flex flex-col gap-3 max-w-[597px]">
                <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-1-2">
                  Multi-Family Coverage
                </h3>
                <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">
                  The program extends its reach beyond individual homes, offering substantial incentives for multi-family property owners committed to upgrading their tenants' comfort systems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image — bleeds to the far right edge of the page */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full aspect-square lg:aspect-auto lg:h-full lg:min-h-[560px] relative">
            
            <img
              src={cdnImage(NEIGHBORHOOD, 800, 800)}
              alt="Suburban California neighborhood"
              className="w-full h-full object-cover rounded-[20px] lg:rounded-[20px_0_0_20px]"
              loading="lazy" />
            
          </motion.div>

        </div>
      </section>

      {/* FUNDING TIERS */}
      <section className="w-full bg-figma-surface py-20 lg:py-[clamp(25px,5.2vw,100px)] px-4 lg:px-[clamp(18px,6.2vw,120px)] flex flex-col items-center relative overflow-clip">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center gap-6 max-w-[920px] text-center mb-16 lg:mb-[clamp(25px,5.2vw,100px)] relative z-10">
          
          <motion.div variants={fadeUpVariant} className="flex items-center gap-[11px]">
            <div className="w-6 h-6 relative">
              <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a964df9d3_be78b6140_331_171.svg" alt="Icon" className="absolute top-px left-1.5 w-[13px] h-2.5" />
              <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/28c5af077_59fbd3766_331_172.svg" alt="Icon shadow" className="absolute top-[11px] left-2 w-[13px] h-2.5 opacity-50" />
            </div>
            <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">
              Current Rebates
            </span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-[clamp(34px,3.23vw,62px)] font-bold leading-[1.0968] tracking-[-0.0194em] text-figma-text-1-2">
            Know your numbers. See how much you can save.
          </motion.h2>
        </motion.div>

        {/* Interactive Rebate Cards */}
        <CurrentRebatesCards />
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-figma-primary py-20 lg:py-[clamp(33px,6.9vw,133px)] px-6 lg:px-[clamp(24px,6.2vw,120px)] relative overflow-clip">
        {/* Decorative Gears Background */}
        <div className="absolute top-[375px] right-[-100px] lg:right-[calc(50%-960px)] w-full max-w-[257px] min-h-[257px] z-0 pointer-events-none">
          <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/22c12150e_6d225b941_331_191.svg" alt="Gear shadow" className="absolute top-[11px] left-[69px] w-[159px] h-[168px] opacity-50" />
          <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/bde2bcc26_9296d9c9a_331_190.svg" alt="Gear" className="absolute top-[115px] left-[82px] w-[159px] h-[168px] opacity-40" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[970px] mx-auto flex flex-col items-center gap-16 lg:gap-18 relative z-10">
          
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-6 max-w-[816px] text-center">
            <div className="flex items-center gap-[11px]">
              <div className="w-6 h-6 relative">
                <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/25a559bb6_f7a9a460c_331_197.svg" alt="Icon" className="absolute top-px left-1.5 w-[13px] h-2.5" />
                <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/c46f05ffd_31d78fd98_331_198.svg" alt="Icon shadow" className="absolute top-[11px] left-2 w-[13px] h-2.5 opacity-50" />
              </div>
              <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[clamp(31px,2.92vw,56px)] font-bold leading-[1.1964] tracking-[-0.0179em] text-figma-text-1">
              Frequently Asked Questions About our Alta services.
            </h2>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="w-full">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
              <AccordionItem value="item-1" className="border-b border-figma-text-6 pb-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
                  <div className="flex justify-between items-center w-full text-left gap-4">
                    <span className="text-[clamp(18px,1.7vw,32px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-2 max-w-[804px]">
                      What sets Spoor’s apart from other HVAC providers in Auburn?
                    </span>
                    <div className="w-6 h-6 relative shrink-0">
                      {/* Using the 'x' icon for open state, assuming it's open by default in design or just showing the icon */}
                      <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/95a86ec13_8f566051b_331_206.svg" alt="Toggle" className="absolute top-[5px] left-[5px] w-3.5 h-3.5" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-0">
                  <p className="text-[16px] font-[440] leading-[1.6] text-figma-text-3 max-w-[886px]">
                    We blend hometown integrity with state-of-the-art digital diagnostic technology. Our focus goes beyond quick fixes; we prioritize long-term system efficiency and proactive care through our signature Home Comfort Club.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-figma-text-6 pb-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
                  <div className="flex justify-between items-center w-full text-left gap-4">
                    <span className="text-[clamp(18px,1.7vw,32px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-3 max-w-[887px]">
                      Does Spoor’s provide emergency services outside of regular business hours?
                    </span>
                    <div className="w-6 h-6 relative shrink-0">
                      <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/439e43921_e7c8f74fd_331_212.svg" alt="Toggle" className="absolute top-1 left-1 w-4 h-4" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-0">
                  <p className="text-[16px] font-[440] leading-[1.6] text-figma-text-3">
                    Yes, we offer 24/7 emergency repair services to ensure your home remains comfortable and safe, no matter the time of day.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-figma-text-6 pb-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
                  <div className="flex justify-between items-center w-full text-left gap-4">
                    <span className="text-[clamp(18px,1.7vw,32px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-3 max-w-[804px]">
                      How does the Home Comfort Club program work?
                    </span>
                    <div className="w-6 h-6 relative shrink-0">
                      <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/353d41abd_49b880858_331_217.svg" alt="Toggle" className="absolute top-1 left-1 w-4 h-4" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-0">
                  <p className="text-[16px] font-[440] leading-[1.6] text-figma-text-3">
                    Our Home Comfort Club provides regular maintenance visits, priority scheduling, and discounts on repairs to keep your system running efficiently year-round.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-figma-text-6 pb-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
                  <div className="flex justify-between items-center w-full text-left gap-4">
                    <span className="text-[clamp(18px,1.7vw,32px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-3 max-w-[804px]">
                      Are price estimates provided transparently upfront?
                    </span>
                    <div className="w-6 h-6 relative shrink-0">
                      <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a7f97d280_efa140fd5_331_222.svg" alt="Toggle" className="absolute top-1 left-1 w-4 h-4" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-0">
                  <p className="text-[16px] font-[440] leading-[1.6] text-figma-text-3">
                    Absolutely. We believe in complete transparency and will always provide a detailed, upfront estimate before any work begins.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <span className="text-[clamp(16px,1.4vw,22px)] font-bold leading-[1.3] tracking-[-0.01em] text-figma-text-2 text-center whitespace-nowrap">
              Didn&rsquo;t find what you were looking for?
            </span>
            <Link
              to="/contact-us/"
              className="flex w-full max-w-[250px] items-center justify-center whitespace-nowrap rounded-[9px] border-[2.5px] border-ink-100 bg-figma-accent px-6 py-3 text-figma-18 font-semibold leading-figma-29 text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <FooterCTANew />
      <NewFooter />
    </main>);

}