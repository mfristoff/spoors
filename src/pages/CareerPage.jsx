import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import FooterCTANew from "@/pages/home/new/FooterCTANew";
import ApplyModal from "@/components/careers/ApplyModal";
import { cdnImage } from "@/lib/cdnImage";

const FALLBACK_HERO_1 =
  "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/e1559adab_f1a986a87_3f16c6344ba414c34ae77c61330882586df0dee0.png";
const FALLBACK_HERO_2 =
  "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/6e4a33d4e_0796176ea_edd887672ff22175c0a633325a42b6b8adfbe1c7.png";
const FALLBACK_CTA_BG =
  "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2ebdbe8e3_5a69e1b1a_54beac8fa7344215202cbe7ed5062271693ebcb9.png";

const JOBS = [
  {
    title: "Lead Heat Pump Installer / Technician",
    lines: [
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/c7679cf06_6932fb5c0_561_2013.svg",
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/fb5d21945_fa301caec_561_2015.svg",
    ],
    arrow: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/930db743a_c0c1229d8_561_2018.svg",
  },
  {
    title: "Residential Comfort Advisor (Sales / Auditor)",
    lines: [
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/bd31bec86_e3c0007bf_561_2028.svg",
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/78a7f5966_6560c2b93_561_2030.svg",
    ],
    arrow: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/f10097160_29841ac76_561_2035.svg",
  },
  {
    title: "Senior HVAC Service Technician",
    lines: [
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/b7c459692_f39e4f902_561_2041.svg",
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/42c9d273b_140d570a5_561_2043.svg",
    ],
    arrow: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2cf88c7dd_9db80dd07_561_2048.svg",
  },
  {
    title: "HVAC Maintenance Apprentice",
    lines: [
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/eba7bbd1b_f7d8f450a_561_2054.svg",
      "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/130d2d80c_caa3f2440_561_2056.svg",
    ],
    arrow: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/63cda30fb_e2260d072_561_2061.svg",
  },
];

const VALUE_PROPS = [
  {
    title: "Technical Mastery",
    desc: "We design residential climate systems with the highest level of mechanical precision. We calculate down to the exact thermal load of every home, ensuring peak system longevity and absolute structural efficiency.",
  },
  {
    title: "Absolute Honesty",
    desc: "The best installations are built on pure transparency. We utilize flat-rate pricing structures with zero hidden fees, empowering our technicians to diagnose exactly what a client needs, never what we want to sell.",
  },
  {
    title: "Clean Installations",
    desc: "Welcome the future of home energy, continuously expanding our technical expertise in high-efficiency heat pump loops and state rebate compliances to keep our team at the cutting edge.",
  },
];

const WORK_BENEFITS = [
  "Company vehicle, iPad, uniforms and gas card",
  "Year-round employment",
  "Medical and dental benefits after probation period",
  "Paid vacation (based on length of employment)",
  "Paid holidays after probation period",
  "On-going training",
  "Tool purchase program",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function CareerPage() {
  const [apply, setApply] = useState({ open: false, position: "Open Application" });
  const [imgs, setImgs] = useState([]);

  // Pull careers imagery from the "spoor pics" Drive folder.
  useEffect(() => {
    let alive = true;
    base44.functions
      .invoke("listDriveImages", { folderName: "spoor pics" })
      .then((res) => {
        const files = (res.data && res.data.files) || [];
        const urls = files
          .filter((f) => f.thumb)
          .map((f) => f.thumb.replace(/=s\d+.*$/, "=s1600"));
        if (alive) setImgs(urls);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const openApply = (position) => setApply({ open: true, position });

  const heroImg1 = images.introTech;
  const heroImg2 = spoorsImageLibrary.miniSplitInstallation;
  const ctaBg = imgs[2] || FALLBACK_CTA_BG;

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-figma-primary font-display">
      <NewHeader />

      {/* Hero Section — navy band keeps 2 rows: content + full-width images */}
      <section className="w-full bg-figma-highlight-4">
        <div className="site-shell pb-12 pt-12 lg:pb-14 lg:pt-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            {/* Hero Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative z-10 flex w-full flex-col items-start gap-5 lg:max-w-[760px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 rounded-sm bg-figma-primary p-2 shadow-[inset_0_0_0_1px_#dbdbdb]"
              >
                <div className="flex items-center gap-[11px]">
                  <div className="relative h-6 w-6">
                    <img
                      className="absolute left-1.5 top-px h-2.5 w-[13px]"
                      src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/e45c419f3_f5c05d3d3_550_1962.svg"
                      alt=""
                    />
                    <img
                      className="absolute left-2 top-[11px] h-2.5 w-[13px] opacity-50"
                      src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/e905763f3_b486829cb_550_1963.svg"
                      alt=""
                    />
                  </div>
                  <span className="text-figma-16 text-figma-text-1 font-semibold leading-figma-16 tracking-[-0.2px]">
                    AUBURN&rsquo;S HVAC LEGACY
                  </span>
                </div>
                <div className="flex h-6 items-center justify-center rounded-sm bg-figma-text-1 px-1.5 py-0">
                  <span className="text-figma-12 text-figma-primary font-semibold leading-figma-12 tracking-[-0.1px]">
                    Est. 1925
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-[20ch] text-[38px] leading-[1.02] tracking-[-0.022em] font-bold text-figma-primary lg:text-[clamp(40px,4.2vw,72px)] lg:leading-[1.06] lg:tracking-[-0.02em]"
              >
                Keep Your Community Comfortable:
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[620px] text-figma-18 text-figma-text-6 font-[440] leading-figma-29 tracking-[-0.2px]"
              >
                Join a team of certified Placer County technicians who treat HVAC
                engineering as a true craft.
              </motion.p>
            </motion.div>

            {/* Hero Card — rectangular, links to About page */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="relative flex w-full shrink-0 flex-col justify-center gap-4 overflow-hidden rounded-[14px] bg-figma-color-12-6 p-6 shadow-[inset_0_0_0_1px_#323232] lg:w-[360px] lg:min-h-[160px] lg:gap-5 lg:self-center lg:p-7"
            >
              <div className="pointer-events-none absolute -left-[67px] top-[41px] min-h-[494px] w-full max-w-[494px] opacity-20">
                <img
                  className="absolute left-[134px] top-[197px] h-[238px] w-[231px]"
                  src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/aa142f6b9_1f3c91791_551_1977.svg"
                  alt=""
                />
                <img
                  className="absolute left-[223px] top-[379px] h-[95px] w-[231px] opacity-50"
                  src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/62eff44e7_886d91cb1_551_1978.svg"
                  alt=""
                />
              </div>

              <h2 className="relative z-10 w-full max-w-[280px] text-[24px] font-bold leading-[1.15] tracking-[-0.0187em] text-figma-primary lg:max-w-[320px] lg:text-[28px] lg:leading-[1.12]">
                Not quite sure who we are yet?
              </h2>

              <Link
                to="/about-us/"
                className="relative z-10 flex w-fit items-center gap-2 rounded-[8px] border-2 border-[#9a9a9a] bg-figma-accent p-3.5 transition-colors hover:bg-red-700"
              >
                <span className="text-figma-18 text-figma-primary font-semibold leading-figma-18 tracking-[-0.2px]">
                  Learn More
                </span>
                <div className="relative h-4 w-4">
                  <img
                    className="absolute left-[3px] top-[3px] h-3 w-3"
                    src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/81d2a95ff_63cc7ba14_551_1974.svg"
                    alt=""
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero images — constrained to 1440 treatment */}
        <div className="grid w-full grid-cols-1 gap-[10px] px-5 md:px-8 lg:grid-cols-2 lg:gap-[30px] lg:px-0">
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[300px] w-full rounded-tr-[16px] object-cover object-center lg:h-[514px]"
            src={cdnImage(heroImg1, 1068, 514)}
            onError={(e) => { e.currentTarget.src = FALLBACK_HERO_1; }}
            alt="Spoor's technicians at work"
          />
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-[300px] w-full rounded-tl-[16px] object-cover object-center lg:h-[514px]"
            src={cdnImage(heroImg2, 1068, 514)}
            onError={(e) => { e.currentTarget.src = FALLBACK_HERO_2; }}
            alt="Spoor's technician inspecting equipment"
          />
        </div>
      </section>

      {/* Value Props & Open Positions */}
      <section className="relative w-full bg-figma-color-14 pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="site-shell">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 text-[clamp(26px,2.5vw,48px)] font-bold leading-none tracking-[-0.0187em] text-figma-text-2 lg:mb-[clamp(16px,2.2vw,43px)]"
          >
            At Spoor&rsquo;s, we focus on:
          </motion.h2>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mb-[clamp(28px,5.9vw,113px)]">
            {VALUE_PROPS.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 rounded-[10px] border-t-[4px] border-figma-accent bg-[linear-gradient(180deg,_rgba(252,238,238,1.00)_0%,_rgba(255,255,255,1.00)_100%)] px-[18px] pb-[26px] pt-[clamp(16px,2.8vw,54px)] shadow-[0px_0px_0px_1px_rgba(255,41,41,0.12)]"
              >
                <h3 className="text-[clamp(20px,1.8vw,32px)] font-bold leading-[1.1] tracking-[-0.0187em] text-figma-text-2">
                  {prop.title}
                </h3>
                <p className="text-[15px] leading-[1.6] tracking-[-0.1px] font-normal text-figma-text-1-2 opacity-70">
                  {prop.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Employee Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-16 overflow-hidden rounded-[22px] border border-[#e1e1e1] bg-white shadow-[0_14px_40px_rgba(5,13,56,0.06)] lg:mb-[clamp(44px,6.5vw,124px)]"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden bg-figma-highlight-4 px-6 py-10 md:px-10 lg:px-12 lg:py-14">
                <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 rounded-full border border-white/10" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                        <img
                          src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg"
                          alt=""
                          className="h-5 w-5"
                        />
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">
                        Working at Spoor&apos;s
                      </span>
                    </div>
                    <h2 className="max-w-[540px] text-[clamp(32px,3.2vw,56px)] font-bold leading-[1.04] tracking-[-0.025em] text-white">
                      Built for a Career, Not Just a Job.
                    </h2>
                    <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-white/72">
                      Steady work, real benefits, ongoing training, and the tools you need to do the job right.
                    </p>
                  </div>
                  <p className="max-w-[500px] border-t border-white/15 pt-6 text-[15px] leading-[1.65] text-white/65">
                    Compensation is based on skill level and performance.
                  </p>
                </div>
              </div>

              <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-14">
                <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
                  {WORK_BENEFITS.map((benefit, idx) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.045 }}
                      className={`flex min-h-[88px] items-center gap-4 border-b border-[#e8e8e8] py-5 ${
                        idx === WORK_BENEFITS.length - 1 ? "md:col-span-2" : ""
                      }`}
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fff0f0]">
                        <img
                          src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg"
                          alt=""
                          className="h-4 w-4"
                        />
                      </span>
                      <span className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-figma-text-2">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-clip rounded-[22px] bg-figma-primary p-6 shadow-[inset_0_0_0_1px_#cdcdcd] lg:p-20"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[653fr_601fr] lg:gap-[clamp(53px,13.9vw,266px)]">
              <div className="flex flex-col gap-8 lg:gap-[clamp(76px,19.9vw,382px)]">
                <div className="flex flex-col gap-[30px]">
                  <h2 className="text-[clamp(26px,2.5vw,48px)] font-bold leading-none tracking-[-0.0187em] text-figma-text-2">
                    Apply for Positions
                  </h2>
                  <p className="text-figma-20 leading-figma-32 text-figma-text-1-2 font-[440] opacity-60">
                    We&rsquo;re always looking for meticulous, certified technicians
                    and apprentices ready to uphold the highest standards of
                    structural HVAC engineering. Join Auburn&rsquo;s most trusted
                    team and manage residential climates with absolute technical
                    precision.
                  </p>
                </div>

                {/* Don't see your role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex min-h-[220px] flex-col justify-between overflow-clip rounded-[14px] bg-figma-color-14 p-6 shadow-[inset_0_0_0_1px_#e0e0e0] lg:h-[340px]"
                >
                  <div className="pointer-events-none absolute -left-[98px] top-[21px] min-h-[494px] w-full max-w-[494px] opacity-[0.08]">
                    <img
                      className="absolute left-[220px] top-[40px] h-[280px] w-[280px]"
                      src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg"
                      alt=""
                    />
                  </div>
                  <h3 className="relative z-10 max-w-[486px] text-[clamp(22px,2vw,38px)] font-bold leading-[1.0938] tracking-[-0.0187em] text-figma-text-2">
                    Don&rsquo;t see your role? Send us your open application anyway.
                  </h3>
                  <button type="button"
                    onClick={() => openApply("Open Application")}
                    className="relative z-10 mt-8 flex items-center gap-2 self-start rounded-[8px] border-2 border-[#9a9a9a] bg-figma-accent p-3.5 transition-colors hover:bg-red-700 lg:mt-0 lg:absolute lg:bottom-6 lg:right-6 lg:self-end"
                  >
                    <span className="text-figma-18 text-figma-primary font-semibold leading-figma-18 tracking-[-0.2px]">
                      Pitch us your profile
                    </span>
                    <div className="relative h-4 w-4">
                      <img
                        className="absolute left-[3px] top-[3px] h-3 w-3"
                        src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/dad316c92_826b97ef0_561_2080.svg"
                        alt=""
                      />
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Job List */}
              <div className="flex flex-col gap-6">
                {JOBS.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex cursor-pointer flex-col gap-5 lg:gap-[clamp(16px,2.3vw,45px)] rounded-[10px] bg-figma-color-14 p-6 shadow-[inset_0_0_0_1px_#e0e0e0] transition-shadow hover:shadow-md"
                  >
                    <div className="flex flex-col gap-[19px]">
                      <h3 className="text-[clamp(20px,1.8vw,34px)] font-bold leading-[1.1] tracking-[-0.015em] text-figma-text-7 transition-colors group-hover:text-figma-accent">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-figma-16 text-figma-text-4-2 font-[440] leading-figma-26">
                          Permanent Contract
                        </span>
                        <img className="h-2 w-px" src={job.lines[0]} alt="" />
                        <span className="text-figma-16 text-figma-text-4-2 font-[440] leading-figma-26">
                          Auburn, CA
                        </span>
                        <img className="h-2 w-px" src={job.lines[1]} alt="" />
                        <span className="text-figma-16 text-figma-text-4-2 font-[440] leading-figma-26">
                          In-person
                        </span>
                      </div>
                    </div>
                    <button type="button"
                      onClick={() => openApply(job.title)}
                      className="flex items-center gap-3.5 text-left"
                    >
                      <span className="text-figma-18 text-figma-text-1-2 font-semibold leading-figma-18 tracking-[-0.2px] transition-colors group-hover:text-figma-accent">
                        Apply to position
                      </span>
                      <div className="relative h-4 w-4">
                        <img
                          className="absolute left-0.5 top-[3px] h-3 w-3.5 transition-transform group-hover:translate-x-1"
                          src={job.arrow}
                          alt=""
                        />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterCTANew />
      <NewFooter />

      <ApplyModal
        open={apply.open}
        onClose={() => setApply({ open: false, position: apply.position })}
        position={apply.position}
      />
    </div>
  );
}