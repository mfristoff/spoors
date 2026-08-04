import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import FooterCTANew from "@/pages/home/new/FooterCTANew";
import { cdnImage } from "@/lib/cdnImage";

// --- City images re-hosted from Google Drive to optimized media.base44.com CDN ---
const AREA_IMG = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519";

// Initial 12 grid cities
const initialAreas = [
  { slug: "alta", city: "Alta", img: `${AREA_IMG}/f8e674017_area-alta.jpg` },
  { slug: "applegate", city: "Applegate", img: `${AREA_IMG}/e17ebc6a5_generated_image.png` },
  { slug: "auburn", city: "Auburn", img: `${AREA_IMG}/9674ecb50_area-auburn.jpg` },
  { slug: "citrus-heights", city: "Citrus Heights", img: `${AREA_IMG}/7c15f559c_area-citrus-heights.jpg` },
  { slug: "colfax", city: "Colfax", img: `${AREA_IMG}/a65ed09a4_area-colfax.jpg` },
  { slug: "folsom", city: "Folsom", img: `${AREA_IMG}/4557e8c04_area-folsom.jpg` },
  { slug: "granite-bay", city: "Granite Bay", img: `${AREA_IMG}/c5d543acf_area-granite-bay.jpg` },
  { slug: "lincoln", city: "Lincoln", img: `${AREA_IMG}/00e80bb86_area-lincoln.jpg` },
  { slug: "loomis", city: "Loomis", img: `${AREA_IMG}/2659ea194_area-loomis.jpg` },
  { slug: "meadow-vista", city: "Meadow Vista", img: `${AREA_IMG}/b4b7bb6b9_area-meadow-vista.jpg` },
  { slug: "nevada-city", city: "Nevada City", img: `${AREA_IMG}/3a2a26d19_area-nevada-city.jpg` },
  { slug: "newcastle", city: "Newcastle", img: `${AREA_IMG}/6b2a1a9a9_area-newcastle.jpg` },
];

// Additional 7 cities revealed by "See More"
const moreAreas = [
  { slug: "orangevale", city: "Orangevale", img: `${AREA_IMG}/f6d895de9_area-orangevale.jpg` },
  { slug: "penryn", city: "Penryn", img: `${AREA_IMG}/38d95f551_area-penryn.jpg` },
  { slug: "rocklin", city: "Rocklin", img: `${AREA_IMG}/f2fca2f5b_area-rocklin.webp` },
  { slug: "roseville", city: "Roseville", img: `${AREA_IMG}/cbed1dd2d_area-roseville.jpg` },
  { slug: "sacramento", city: "Sacramento", img: `${AREA_IMG}/f53db833d_area-sacramento.jpg` },
  { slug: "weimar", city: "Weimar", img: `${AREA_IMG}/23a6467c2_area-weimar.jpg` },
  { slug: "west-sacramento", city: "West Sacramento", img: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/586893ddb_west-sacramento.png" },
];

// Two complementary downtown photos for the quote section
const QUOTE_IMG_1 = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/ce59416d0_CitrusHeights.jpg";
const QUOTE_IMG_2 = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/c1da928d2_01_Penryn_CA_045_panoramio.jpg";

const processSteps = [
  {
    num: "01",
    title: "Locate Your Neighborhood",
    desc: "Input your ZIP code in our interactive finder above or call our office to instantly confirm service availability.",
  },
  {
    num: "02",
    title: "Schedule Your Visit",
    desc: "Book an appointment online or by phone at a time that fits your day, with same-day and emergency slots available across our Northern California service area.",
  },
  {
    num: "03",
    title: "Restore Your Comfort",
    desc: "Our technicians complete the repair or installation with honest, upfront pricing, returning your home to perfect, reliable comfort all year round.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicesAreaPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [glow, setGlow] = useState(false);
  const allAreas = showMore ? [...initialAreas, ...moreAreas] : initialAreas;
  const filtered = query.trim()
    ? [...initialAreas, ...moreAreas].filter((a) =>
        a.city.toLowerCase().includes(query.trim().toLowerCase())
      )
    : allAreas;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setGlow(true);
      setSubmitted("");
      setTimeout(() => setGlow(false), 2000);
      return;
    }
    setGlow(false);
    setSubmitted(query);
    setShowMore(true);
  };

  const handleSeeMore = () => {
    setShowMore(true);
    setSubmitted("");
    setQuery("");
  };

  return (
    <div className="w-full min-h-screen bg-white font-display overflow-x-clip">
      <NewHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[linear-gradient(0deg,_#FFFFFF_0%,_#FFF4F3_100%)] pt-10 md:pt-[120px] pb-8 lg:pb-12 px-4 md:px-[clamp(18px,6.2vw,120px)] flex flex-col items-center overflow-clip">
        <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center relative z-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center gap-8 max-w-[970px] text-center"
          >
            <div className="flex flex-col md:flex-row items-center gap-[11px]">
              <div className="w-6 h-6 relative">
                <img className="w-[13px] h-2.5 absolute top-px left-1.5" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/c2a24918d_90adfacc6_254_112.svg" alt="Icon" />
                <img className="w-[13px] h-2.5 opacity-50 absolute top-[11px] left-2" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/f7888b00a_3f22f04bb_254_113.svg" alt="Icon shadow" />
              </div>
              <p className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">
                AUBURN &amp; MEADOW VISTA&rsquo;S<br className="md:hidden" /> TRUSTED HVAC TEAM
              </p>
            </div>
            <h1 className="text-[clamp(34px,3.23vw,62px)] font-bold leading-[1.0968] tracking-[-0.0194em] text-figma-text-1">
              Local Care for Every Corner of <span className="text-figma-surface-2">Northern California</span><span className="text-figma-text-2">.</span>
            </h1>
          </motion.div>

          {/* Find Your Area Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 lg:mt-14 w-full max-w-[1396px] bg-figma-color-14 rounded-[17px] shadow-[inset_0_0_0_1px_#dfdfdf] p-6 lg:p-8 relative overflow-clip"
          >
            {/* Header */}
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-[clamp(17px,4.5vw,87px)] mb-12 relative z-10">
              <h2 className="text-[clamp(22px,2.08vw,40px)] font-bold leading-[1.1] text-figma-text-2">Find Your Area</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div
                  className={`flex items-center gap-2.5 p-4 bg-figma-primary rounded-[5px] shadow-[inset_0_0_0_1px_#eaeaea] w-full sm:w-[330px] transition-all duration-300 ${glow ? "ring-2 ring-figma-accent shadow-[0_0_0_5px_rgba(255,41,41,0.18),0_0_24px_rgba(255,41,41,0.35)]" : ""}`}
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setGlow(false); }}
                    placeholder="Search Location"
                    className="bg-transparent border-none outline-none w-full text-figma-16 font-[440] leading-figma-26 text-figma-text-4-2 placeholder:text-figma-text-4-2"
                  />
                </div>
                <button type="submit" className="bg-figma-accent rounded-[5px] w-full sm:w-[217px] h-[58px] relative group hover:bg-red-600 transition-colors shrink-0">
                  <div className="flex items-center justify-center p-2 min-h-[50px] bg-figma-secondary rounded-[2px] w-[33px] absolute top-1 right-1 transition-transform group-hover:translate-x-[-4px]">
                    <img className="w-3.5 h-3.5" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/f898fcfd0_fd4eb8170_277_608.svg" alt="Search" />
                  </div>
                  <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary absolute top-5 left-4">Search Areas</span>
                </button>
              </div>
            </form>

            {/* Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 ${showMore ? "pb-12" : "pb-[clamp(28px,5vw,90px)]"}`}>
              {filtered.map((area, i) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                >
                  <Link to={`/service-areas/${area.slug}`} className="block bg-figma-primary rounded-[13px] shadow-[inset_0_0_0_1px_#e8e8e8] overflow-clip flex flex-col group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                    <div className="bg-figma-color-10 w-full aspect-[321/227] relative overflow-clip">
                      <img
                        src={cdnImage(area.img, 321, 227)}
                        alt={area.city}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:brightness-105 group-hover:saturate-110"
                      />
                      {/* Subtle cohesive overlay — unifies varied lighting across all area images */}
                      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(10,18,38,0.10)_0%,rgba(10,18,38,0.04)_40%,rgba(10,18,38,0.14)_100%)] group-hover:bg-[linear-gradient(to_bottom,rgba(10,18,38,0.06)_0%,rgba(10,18,38,0.02)_40%,rgba(10,18,38,0.10)_100%)] transition-all duration-700" />
                    </div>
                    <div className="p-5 flex flex-col gap-6 flex-1 justify-between">
                      <h3 className="text-[clamp(14px,1.35vw,26px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-2">{area.city}</h3>
                      <div className="flex justify-center items-center py-3 px-4 rounded-[9px] w-full border border-red-200/70 bg-red-50/50 backdrop-blur-md transition-all duration-300 hover:bg-red-100/70 hover:border-red-400/80 hover:shadow-[0_4px_16px_rgba(255,41,41,0.15)]">
                        <span className="text-figma-18 font-semibold text-figma-secondary">Explore Now</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full text-center text-figma-18 text-figma-text-4-2 py-12">
                  No areas found for &ldquo;{query}&rdquo;. Try another city name.
                </p>
              )}
            </div>

            {/* Bottom Fade Overlay (hidden once expanded) */}
            {!showMore && (
              <div className="absolute bottom-0 left-0 w-full h-[clamp(210px,28vw,360px)] z-20 pointer-events-none flex items-end justify-center pb-6 lg:pb-8" style={{ background: "linear-gradient(to top, #FAFAFA 0%, #FAFAFA 42%, rgba(250,250,250,0.85) 60%, rgba(250,250,250,0) 100%)" }}>
                <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
                  <p className="text-[clamp(14px,1.35vw,26px)] font-bold leading-[1.1154] tracking-[-0.0115em] text-figma-text-1-2 text-center">Looking for a different area?</p>
                  <button onClick={handleSeeMore} className="py-3 px-7 bg-figma-accent rounded-[9px] border-2 border-gray-300 hover:bg-red-600 transition-colors">
                    <span className="text-figma-18 font-semibold leading-figma-29 text-figma-primary">See More</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full bg-figma-primary pt-8 lg:pt-12 pb-16 lg:pb-[clamp(40px,8.3vw,160px)] px-4 md:px-[clamp(18px,6.2vw,120px)] overflow-clip"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-[clamp(34px,8.9vw,170px)]">

          {/* Two complementary downtown photos */}
          <div className="relative w-full max-w-[686px] aspect-square lg:h-[846px] shrink-0">
            <motion.img
              variants={fadeUp}
              src={QUOTE_IMG_1}
              alt="Citrus Heights, CA neighborhood at golden hour"
              loading="lazy"
              className="rounded-[19px] w-[80%] lg:max-w-[686px] aspect-[686/366] lg:h-[366px] absolute top-0 left-0 z-10 object-cover border-2 border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_0_0_1px_rgba(255,255,255,0.18),0_0_24px_rgba(255,255,255,0.16)]"
            />
            <motion.img
              variants={fadeUp}
              src={QUOTE_IMG_2}
              alt="Historic G. Griffith building, Penryn, CA"
              loading="lazy"
              className="rounded-[19px] w-[60%] lg:max-w-[502px] aspect-[502/448] lg:h-[448px] absolute top-[40%] lg:top-[398px] left-[20%] lg:left-[184px] z-20 object-cover border-2 border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_0_0_1px_rgba(255,255,255,0.18),0_0_24px_rgba(255,255,255,0.16)]"
            />
          </div>

          {/* Quote Text — each paragraph reveals on scroll */}
          <div className="flex-1 max-w-[693px]">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[clamp(26px,2.5vw,48px)] font-bold leading-[1.1] tracking-[-0.0187em] text-figma-text-1-2 mb-[2.2em]"
            >
              No matter where you are located across Northern California,
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[clamp(26px,2.5vw,48px)] font-bold leading-[1.1] tracking-[-0.0187em] text-figma-text-1-2 mb-[2.2em]"
            >
              you can expect the same fast response times, transparent flat-rate pricing, and expert HVAC service straight to your doorstep.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[clamp(26px,2.5vw,48px)] font-bold leading-[1.1] tracking-[-0.0187em] text-figma-text-1-2"
            >
              Distance never compromises our quality, keeping your home a sanctuary of absolute comfort all year round.
            </motion.p>
          </div>

        </div>
      </motion.section>

      {/* --- PROCESS SECTION (triple overlay) --- */}
      <section className="relative w-full overflow-hidden bg-black py-20 lg:py-[clamp(22px,4.6vw,88px)] px-4 md:px-[clamp(18px,6.2vw,120px)] min-h-[820px] flex flex-col justify-between">
        <img className="absolute inset-0 w-full h-full object-cover object-left scale-110 z-0" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/fc462779e_53daeb7c3_db34ea7aae804a5a67fcf8501c7ac48b93f3e078.png" alt="HVAC Unit Background" />

        {/* Triple overlay — solid base + directional gradient (dark LEFT, clear right) + radial vignette */}
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.50) 16%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.50) 100%)" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.04) 100%)" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 90% 75% at 26% 42%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%)" }} />

        <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col h-full justify-between gap-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-[29px] max-w-[672px]"
          >
            <h2 className="text-[clamp(38px,3.6vw,68px)] font-bold leading-[1.06] tracking-[-0.0194em] text-figma-primary">
              A Straightforward<br/>Approach to Total<br/><span className="text-figma-surface-2">Home Comfort.</span>
            </h2>
            <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4 mb-[35px]">
              We believe that restoring your indoor climate should never be a stressful or confusing experience. From the very moment you reach out to our team to the final technical verification at your doorstep.<br/><br/>
              Spoor&rsquo;s relies on a transparent, meticulously planned process that eliminates hidden guesswork and prioritizes your long-term peace of mind.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-10 lg:gap-[clamp(16px,3.1vw,60px)] mt-auto pt-8 lg:pt-12 pb-10 lg:pb-0"
          >
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4 w-full lg:max-w-[508px]">
                <h3 className="text-[clamp(14px,1.25vw,24px)] font-semibold leading-[1.0] tracking-[-0.0208em] text-figma-primary">
                  {step.num}/ {step.title}
                </h3>
                <p className="text-[16px] font-normal leading-[26px] line-clamp-3 min-h-[78px] tracking-[-0.2px] text-figma-color-20 opacity-60">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <FooterCTANew />
      <NewFooter />
    </div>
  );
}