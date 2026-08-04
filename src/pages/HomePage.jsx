import { lazy, Suspense, useState } from "react";
import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import Hero from "@/pages/home/Hero";
import NewHeader from "@/pages/home/new/NewHeader";
import LazySection from "@/components/ui/LazySection";

// Everything below the fold loads on approach, keeping the first paint's
// JavaScript to just the header and hero.
const AllServicesGrid = lazy(() => import("@/components/test/AllServicesGrid"));
const TestimonialsNew = lazy(() => import("@/pages/home/new/TestimonialsNew"));
const LargeQuote = lazy(() => import("@/pages/home/new/LargeQuote"));
const FooterCTANew = lazy(() => import("@/pages/home/new/FooterCTANew"));
const NewFooter = lazy(() => import("@/pages/home/new/NewFooter"));
const ServiceQuoteModal = lazy(() => import("@/components/ui/ServiceQuoteModal"));

// --- Animation Variants ---
import { cardEntrance, cardStagger, EASE_SMOOTH } from "@/lib/motionVariants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE_SMOOTH } }
};

const staggerContainer = cardStagger;

// --- Data for Interactive Elements ---
const residentialServices = [
{
  title: "HEATING REPAIR",
  description: "Keep your cool at home or work by calling Spoor’s Heating & Air Conditioning for quality air conditioner service any time of day!",
  activeColor: "bg-figma-accent",
  inactiveColor: "bg-figma-color-11"
},
{
  title: "AC REPAIR",
  description: "Keep your cool at home or work by calling Spoor’s Heating & Air Conditioning for quality air conditioner service any time of day!",
  activeColor: "bg-figma-accent",
  inactiveColor: "bg-figma-color-11"
},
{
  title: "EMERGENCY REPAIR",
  description: "Keep your cool at home or work by calling Spoor’s Heating & Air Conditioning for quality air conditioner service any time of day!",
  activeColor: "bg-figma-accent",
  inactiveColor: "bg-figma-color-11"
},
{
  title: "MAINTENANCE",
  description: "Keep your cool at home or work by calling Spoor’s Heating & Air Conditioning for quality air conditioner service any time of day!",
  activeColor: "bg-figma-accent",
  inactiveColor: "bg-figma-color-11"
}];


export default function HomePage() {
  const [quote, setQuote] = useState({ open: false });

  useSeo({
    title: "Spoor's Heating & Air",
    description:
    "Spoor's Heating & Air — family-owned HVAC service in Auburn, CA since 1925. The best techs, the best service, 100% guaranteed.",
    path: "/",
    image: images.hero
  });

  return (
    <div className="min-h-screen w-full bg-figma-primary font-display overflow-x-clip">

      <NewHeader />

      <Hero onSchedule={() => setQuote({ open: true })} />

      {/* --- VALUE PROP SECTION --- */}
      <section className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF6F6_40%,#FFF6F6_86%,#F9F6F6_100%)] relative py-[clamp(25px,5.2vw,100px)] overflow-clip px-4 md:px-[clamp(18px,6.2vw,120px)] lg:px-[max(115px,calc((100vw_-_1440px)/2))]">
        <div className="w-full max-w-[1440px] mx-auto relative z-10 flex flex-col md:block">

          {/* Header */}
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="order-1 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-[clamp(43px,11.1vw,213px)] mb-[clamp(16px,3.1vw,60px)] lg:mb-[clamp(25px,5.2vw,100px)]">
            
            <h2 className="text-[clamp(26px,2.5vw,48px)] font-bold leading-[1.0] tracking-[-0.0187em] text-[#4A4A4A] max-w-[791px]">
              Big-city technology. <span className="text-figma-accent">Small-town values</span>.
            </h2>
            <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-2 max-w-[620px]">
              Experience big-name tech with small-town integrity. Based in Auburn, we treat your home with the respect and care it deserves.
            </p>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="order-2 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-16">
            
            <motion.div variants={fadeInUp} className="w-full aspect-[544/364] relative">
              <Image className="w-full h-full overflow-hidden rounded-[10px_10px_24px_187px] bg-figma-border-2" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/7f7a07ace_Spoor_s-Home-AC-Service-21.webp" alt="Tech working" fittingType="fill" quality={80} loading="lazy" />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full aspect-[544/364] relative">
              <Image className="w-full h-full overflow-hidden rounded-[10px_10px_24px_24px] bg-figma-border-2" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/80f8c024c_Spoor_s-Home-AC-Service-2.webp" alt="Tech inspecting" fittingType="fill" quality={80} loading="lazy" />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full aspect-[544/364] relative">
              <Image className="w-full h-full overflow-hidden rounded-[10px_10px_187px_24px] bg-figma-border-2" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/48c784c4b_Spoor_s-Home-AC-Service-4.webp" alt="Tech smiling" fittingType="fill" quality={80} loading="lazy" />
            </motion.div>
          </motion.div>

          {/* Background Decorative Vector */}
          <div className="absolute top-[40%] left-0 w-full pointer-events-none z-[-1] opacity-40">
            <img className="w-full h-auto" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/6402f1d7b_f2252d069_202_340.svg" alt="Decorative Wave" />
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            className="order-4 md:order-none mt-10 md:mt-0 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            
            {/* Card 1 */}
            <motion.div variants={cardEntrance} className="flex flex-col gap-7 p-7 md:gap-10 md:p-6 lg:pt-[clamp(16px,1.7vw,32px)] lg:pr-[18px] lg:pb-[16px] lg:pl-[18px] bg-[linear-gradient(180deg,_rgba(252,238,238,1.00)_0%,_rgba(255,255,255,1.00)_100%)] shadow-[0px_0px_0px_1px_rgba(255,41,41,0.12)] border-t-[4px] border-figma-accent rounded-[10px] h-full">
              <div className="flex items-center justify-center w-11 h-11 bg-figma-primary rounded-[5px] shadow-[inset_0_0_0_1px_#fbdada]">
                <div className="w-6 h-6 relative">
                  <img className="w-5 h-5 opacity-[0.5] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/c3ab51f2f_d287cd844_96_349.svg" alt="Icon" />
                  <img className="w-1.5 h-1.5 absolute top-3 left-[9px]" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/d27309bfb_bf1f28494_96_350.svg" alt="Icon detail" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-figma-text-2 md:text-[clamp(14px,1.25vw,24px)] md:font-semibold md:leading-[1.0]">Professional Expertise</h3>
                <p className="text-[15px] font-normal leading-[1.6] tracking-[-0.2px] text-figma-text-1-2 opacity-[0.8] md:text-figma-20 md:leading-figma-32 md:opacity-[0.6]">Every technician on our team trains year-round on the latest equipment, systems, and code requirements — so the job gets done right the first time.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={cardEntrance} className="flex flex-col gap-7 p-7 md:gap-10 md:p-6 lg:pt-[clamp(16px,1.7vw,32px)] lg:pr-[18px] lg:pb-[16px] lg:pl-[18px] bg-[linear-gradient(180deg,_rgba(228,230,241,1.00)_0%,_rgba(255,255,255,1.00)_100%)] shadow-[0px_0px_0px_1px_rgba(11,30,127,0.14)] border-t-[4px] border-figma-color-9-3 rounded-[10px] h-full">
              <div className="flex items-center justify-center w-11 h-11 bg-figma-primary rounded-[5px] shadow-[inset_0_0_0_1px_#e1e5f9]">
                <div className="w-6 h-6 relative">
                  <div className="bg-figma-color-9-3 w-2 h-2 absolute top-0.5 left-[7px] rounded-[50%]" />
                  <img className="w-[15px] h-[9px] opacity-[0.5] absolute top-[13px] left-[3px]" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/f9ee93635_9007c29f8_96_369.svg" alt="Icon" />
                  <img className="w-[7px] h-[7px] absolute top-[15px] left-3.5" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/e53a099e5_44ea90d25_96_368.svg" alt="Icon detail" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-figma-text-2 md:text-[clamp(14px,1.25vw,24px)] md:font-semibold md:leading-[1.0]">Customer-First Philosophy</h3>
                <p className="text-[15px] font-normal leading-[1.6] tracking-[-0.2px] text-figma-text-1-2 opacity-[0.8] md:text-figma-20 md:leading-figma-32 md:opacity-[0.6]">Your satisfaction comes first — whether that means affordable routine maintenance or straight advice that helps you avoid a bigger repair down the road.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={cardEntrance} className="flex flex-col gap-7 p-7 md:gap-10 md:p-6 lg:pt-[clamp(16px,1.7vw,32px)] lg:pr-[18px] lg:pb-[16px] lg:pl-[18px] bg-[linear-gradient(180deg,_rgba(216,216,216,1.00)_0%,_rgba(255,255,255,1.00)_100%)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.14)] border-t-[4px] border-figma-highlight rounded-[10px] h-full">
              <div className="flex items-center justify-center w-11 h-11 bg-figma-primary rounded-[5px] shadow-[inset_0_0_0_1px_#bfbfbf]">
                <div className="w-6 h-6 relative">
                  <img className="w-[9px] h-[18px] absolute top-px left-[11px] z-10" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/7b8fe5bca_544039b8f_96_386.svg" alt="Icon" />
                  <div className="bg-[#1c274c] w-5 min-h-[7px] opacity-[0.5] absolute top-[15px] left-0.5 rounded-[50%]" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-figma-text-2 md:text-[clamp(14px,1.25vw,24px)] md:font-semibold md:leading-[1.0]">Honest & Dependable Service</h3>
                <p className="text-[15px] font-normal leading-[1.6] tracking-[-0.2px] text-figma-text-1-2 opacity-[0.8] md:text-figma-20 md:leading-figma-32 md:opacity-[0.6]">You get an honest, upfront price before we start, and recommendations aimed at saving you money — not selling you equipment you don't need.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile-only: Services section sits between the tech images and the value-prop cards */}
          <div className="order-3 md:order-none">
            <LazySection minHeight={900}>
              <AllServicesGrid />
            </LazySection>
          </div>

        </div>
      </section>

      {/* --- TOTAL COMFORT MANAGEMENT (Bento Blocks) --- */}
      <section className="w-full bg-figma-primary py-[clamp(25px,5.2vw,100px)] px-4 md:px-[clamp(18px,6.2vw,120px)] flex flex-col gap-12 lg:gap-[clamp(16px,4.2vw,80px)]">

        {/* Block 1 */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="bg-figma-color-15-2 rounded-[14px] shadow-[inset_0_0_0_1px_#ffdbdb] w-full max-w-[1440px] mx-auto px-4 py-5 md:p-6 flex flex-col gap-6">
          
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-14 w-full">

            {/* Left Image Area */}
            <div className="w-full lg:max-w-[614px] min-h-[400px] lg:h-[709px] relative rounded-[13px] overflow-clip shrink-0">
              <Image className="absolute inset-0 w-full h-full" src={spoorsImageLibrary.hvacSystemRepair} alt="Spoor's HVAC technician repairing a residential comfort system in Auburn" fittingType="fill" />

              {/* Floating Card 1 */}
              <div className="absolute bottom-[104px] left-5 h-[255px] w-[calc(100%-40px)] sm:w-[330px] bg-figma-primary rounded-[15px] p-5 flex flex-col justify-between gap-6 shadow-lg">
                <div className="flex justify-between items-center border-b-[1px] border-[#ececec] pb-[18px]">
                  <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-7 max-w-[230px]">Whole-Home System Care</p>
                  <div className="p-2.5 bg-[#eef7ea] rounded-[9px]">
                    <img className="w-10 h-10" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/0d247da0e_06910e57d_371_1408.svg" alt="Check" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-end gap-6">
                    <p className="text-[clamp(26px,2.5vw,48px)] font-bold leading-[1.0] tracking-[-0.0187em]">
                      <span className="text-figma-surface-2">24</span><span className="text-figma-color-9-3">/</span><span className="text-figma-color-9-3">7</span>
                    </p>
                    <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-3 mb-1">Monitoring</p>
                  </div>
                  <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-2">Total Home Profiles</p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <Link to="/contact-us/" className="group absolute bottom-5 left-5 flex min-h-[72px] w-[calc(100%-40px)] items-center justify-between gap-5 rounded-[14px] bg-figma-primary p-5 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-[330px]">
                <p className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1-2">Contact a Local HVAC Expert</p>
                <img className="w-[19px] h-[9px] group-hover:translate-x-1 transition-transform" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/18b58645b_c0de74b00_371_1437.svg" alt="Arrow Right" />
              </Link>
            </div>

            {/* Right Content Area */}
            <div className="flex flex-col justify-between pt-1 pb-6 md:py-6 flex-1">
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.0187em] text-figma-text-2 md:text-[clamp(18px,1.67vw,32px)] md:leading-[1.0938]">
                  Total comfort, handled by <span className="text-figma-accent">Auburn's most trusted team</span>.
                </h2>
                <p className="text-[17px] font-[440] leading-[1.65] text-figma-text-4-2 md:text-figma-20 md:leading-figma-32">
                  From urgent repairs to long-term efficiency, we pair big-name technology with hometown integrity to keep your home comfortable all year. No guesswork, no runaround — just clear options and honest pricing.
                </p>
              </div>

              <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                      <div className="flex items-center gap-4 py-3 px-4 min-h-[60px] bg-figma-primary rounded-[15px] shadow-[inset_0_0_0_1px_#eaeaea] w-full">
                        <img className="w-6 h-6 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/ca254f5b4_Bolt.svg" alt="Icon" />
                        <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Furnace & Heating Repair</span>
                      </div>
                      <div className="flex items-center gap-4 py-3 px-4 min-h-[60px] bg-figma-primary rounded-[15px] shadow-[inset_0_0_0_1px_#eaeaea] w-full">
                        <img className="w-6 h-6 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/06fc054f4_Bolt-Blue.svg" alt="Icon" />
                        <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">AC Repair & Emergency Service</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 py-3 px-4 min-h-[60px] bg-figma-primary rounded-[15px] shadow-[inset_0_0_0_1px_#eaeaea] w-full">
                      <img className="w-6 h-6 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/c68e38fec_Green-Bolt.svg" alt="Icon" />
                      <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Planned Maintenance (Home Comfort Club)</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
                      <div className="flex items-center gap-4 py-3 px-4 min-h-[60px] bg-figma-primary rounded-[15px] shadow-[inset_0_0_0_1px_#eaeaea] w-full">
                        <img className="w-6 h-6 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/8b8b5f621_Bolt-Light-Green.svg" alt="Icon" />
                        <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Air Quality Testing</span>
                      </div>
                      <div className="flex items-center gap-4 py-3 px-4 min-h-[60px] bg-figma-primary rounded-[15px] shadow-[inset_0_0_0_1px_#eaeaea] w-full">
                        <img className="w-6 h-6 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a112d3954_OJ-Bolt.svg" alt="Icon" />
                        <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Smart Thermostat Installation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/services/" className="flex items-center gap-2.5 w-fit transition-colors group">
                  <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Explore More</span>
                  <ArrowRight className="w-4 h-4 text-figma-accent transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <div className="p-2 bg-figma-surface rounded-[27px]">
                  <img className="w-5 h-5 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/100440ef0_CalendarMark.png" alt="Calendar" />
                </div>
                <span className="text-[clamp(18px,1.67vw,32px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">30 Day Guarantee</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Customer-First Philosophy</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">If you're not satisfied, we'll come back and make it right at no extra cost.</p>
              </div>
            </div>
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <div className="p-2 bg-figma-surface rounded-[27px]">
                  <img className="w-5 h-5 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/700edc8f1_Crown.png" alt="Star" />
                </div>
                <span className="text-[clamp(18px,1.67vw,32px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">#1 Rated</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Top HVAC Team in Auburn</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">Based on 900+ verified customer reviews on Google, Yelp, and Angi.</p>
              </div>
            </div>
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <div className="p-2 bg-figma-surface rounded-[27px]">
                  <img className="w-5 h-5 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/7e66262be_History2.png" alt="Clock" />
                </div>
                <span className="text-[clamp(18px,1.67vw,32px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">24/7 Service</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Emergency Support</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">Always on-call for your urgent heating & air needs.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="bg-figma-color-15-2 rounded-[14px] shadow-[inset_0_0_0_1px_#ffdbdb] w-full max-w-[1440px] mx-auto px-4 py-5 md:p-6 flex flex-col gap-6">
          
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-14 w-full">

            {/* Left Content Area */}
            <div className="flex flex-col justify-between pt-1 pb-6 md:py-6 flex-1 order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                <h2 className="text-[28px] font-bold leading-[1.12] tracking-[-0.0187em] text-figma-text-2 md:text-[clamp(18px,1.67vw,32px)] md:leading-[1.0938]">
                  Heating, cooling, and maintenance all in one place.
                </h2>
                <p className="text-[17px] font-[440] leading-[1.65] text-figma-text-4-2 md:text-figma-20 md:leading-figma-32">
                  From furnace and heating repairs to AC tune-ups and our Home Comfort Club maintenance plans, Spoor's keeps every system in your Auburn home running smoothly, season after season.
                </p>
              </div>

              <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                <Link to="/services/planned-maintenance" className="flex items-center gap-2.5 border-b-[2px] border-[#ffa8a8] pb-2 w-fit hover:border-red-600 transition-colors group">
                  <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1">Explore Maintenance Plans</span>
                  <ArrowRight className="w-4 h-4 text-figma-accent transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="w-full lg:max-w-[766px] min-h-[400px] lg:h-[717px] relative rounded-[13px] overflow-clip shrink-0 order-1 lg:order-2">
              <Image
                src={spoorsImageLibrary.heatPumpService}
                alt="Spoor's technician servicing a residential heat pump in Auburn, California"
                fittingType="fill"
                quality={95}
                className="absolute inset-0 w-full h-full" />
              
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <img className="h-10 w-10 object-contain" src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/8bec328f4_Frame124.svg" alt="Reduced energy costs" />
                <span className="text-[clamp(18px,1.67vw,32px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">15% Lower Bills</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Reduced Energy Costs</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">Our Home Comfort Club members save more on average every month.</p>
              </div>
            </div>
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <img className="h-10 w-10 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/c88460282_Frame122.svg" alt="No hidden fees" />
                <span className="text-[clamp(18px,1.4vw,26px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">No Hidden Fees</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Upfront, Honest Estimates</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">Flat-rate quotes with no surprises. We agree on the price before any work begins. </p>
              </div>
            </div>
            <div className="flex min-h-[220px] flex-col justify-between gap-7 rounded-[11px] bg-figma-primary p-7 shadow-[inset_0_0_0_1px_#eaeaea] md:gap-8 md:p-6 md:min-h-[230px]">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-[18px]">
                <img className="h-10 w-10 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/e3246ca2c_Frame121.svg" alt="5-star reputation" />
                <span className="text-[clamp(18px,1.67vw,32px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-accent">5-Star Reputation</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-figma-text-2 md:text-figma-20 md:leading-figma-22 md:tracking-normal">Trusted for a Reason</p>
                <p className="text-[15px] leading-[1.6] font-[440] tracking-[-0.2px] text-figma-text-3 md:text-figma-18 md:leading-figma-29">We're the top-rated HVAC service across Auburn & Meadow Vista.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      <LazySection minHeight={700}>
        <TestimonialsNew />
      </LazySection>

      <LazySection minHeight={500}>
        <LargeQuote />
      </LazySection>

      <LazySection minHeight={500}>
        <FooterCTANew />
      </LazySection>

      <LazySection minHeight={900}>
        <NewFooter />
      </LazySection>

      {quote.open && (
        <Suspense fallback={null}>
          <ServiceQuoteModal
            open={quote.open}
            onClose={() => setQuote({ open: false })}
            service="HVAC"
            eyebrow="FREE HVAC QUOTE"
            headline="Let’s Restore Your Comfort"
            support="Tell us what's going on with your heating or cooling and choose a time that works for you. Spoor's will review your request and follow up with clear next steps."
          />
        </Suspense>
      )}
    </div>);

}