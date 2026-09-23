import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowDownRight, ChevronDown, Calendar, User } from "lucide-react";

import { blogArticles, business } from "@/lib/siteConfig";
import { useSeo } from "@/lib/useSeo";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import ScheduleOnlineButton from "@/components/ui/ScheduleOnlineButton";

const PAGE_SIZE = 9;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function Blog() {
  const { pageNumber } = useParams();
  const page = Number.parseInt(pageNumber || "1", 10);
  const [heroIndex, setHeroIndex] = useState(0);
  const gridRef = useRef(null);

  useSeo({
    title: "Resources & Blog | Spoor's Heating & Air",
    description:
      "Helpful heating and cooling articles from Spoor's Heating & Air — serving Auburn, California since 1925.",
    path: page > 1 ? `/resources/blog/page/${page}/` : "/resources/blog/",
  });

  // Blog grid — sorted newest first (stable across renders)
  const sorted = useMemo(
    () =>
      [...blogArticles].sort(
        (a, b) => new Date(b.isoDate) - new Date(a.isoDate)
      ),
    []
  );

  // Featured carousel = 3 most recent articles
  const featured = sorted.slice(0, 3);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageArticles = sorted.slice(start, start + PAGE_SIZE);

  const scrollToGrid = () => {
    if (gridRef.current) {
      const top =
        gridRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };
  const pagePath = (number) => number === 1 ? "/resources/blog/" : `/resources/blog/page/${number}/`;

  const hero = featured[heroIndex] || featured[0];

  return (
    <div className="w-full min-h-screen bg-white font-display overflow-x-clip">
      <NewHeader />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[600px] overflow-clip bg-[#050d38] lg:h-[calc(100svh-var(--expanded-header-height,220px))]">
        <AnimatePresence mode="wait">
          <motion.div
            key={hero.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={hero.image}
              alt={hero.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.8) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="header-aligned-shell absolute inset-0 z-10 flex flex-col justify-end gap-6 pb-[clamp(20px,4vw,56px)] pt-[120px] lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pt-0">
          {/* Left: title + description + dots */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex w-full flex-col gap-6 lg:max-w-[860px]"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-white">
                <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-5 w-5" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.12em]">Read Our Top Articles</span>
              </div>
              <h1 className="font-heading text-[clamp(32px,4vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-lg">
                {hero.title}
              </h1>
              <p className="max-w-[760px] text-[clamp(16px,1.3vw,20px)] font-[440] leading-[1.6] tracking-[-0.2px] text-white/90 drop-shadow-md">
                {hero.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-compact-tap
                  onClick={() => setHeroIndex(i)}
                  aria-label={`Featured article ${i + 1}`}
                  className={
                    i === heroIndex
                      ? "h-3 w-3 rounded-full bg-white transition-transform hover:scale-110"
                      : "h-3 w-3 rounded-full border border-white/60 bg-transparent transition-transform hover:scale-110 hover:bg-white/20"
                  }
                />
              ))}
              <button
                type="button"
                onClick={() => setHeroIndex((heroIndex + 1) % featured.length)}
                aria-label="Next featured article"
                className="ml-1 flex items-center justify-center text-white transition-transform hover:scale-110 hover:text-white/80"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </motion.div>

          {/* Right: red author card — 220px, 8px radius, 24/20 padding, #FF2929 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-[280px] shrink-0 rounded-lg bg-[#FF2929] px-6 py-5 shadow-2xl"
          >
            <div className="flex items-center gap-2.5">
              {/* Generic author avatar */}
              <span
                aria-hidden="true"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-white bg-white/15 text-white"
              >
                <User className="h-5 w-5" />
              </span>
              <p className="flex-1 truncate text-[13px] font-semibold leading-tight text-white">
                {business.shortName}
              </p>
              <Link
                to={`/resources/blog/${hero.slug}/`}
                aria-label="Read more"
                className="group flex shrink-0 items-center gap-1 rounded-md bg-white px-2.5 py-1.5 transition-colors hover:bg-white/90"
              >
                <span className="text-[11px] font-bold leading-none text-[#FF2929]">
                  Read More
                </span>
                <ArrowDownRight
                  size={12}
                  className="text-[#FF2929] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-[11px] font-[440] leading-none text-white/90">
              <span>{hero.date}</span>
              <span className="block h-1 w-1 rounded-full bg-white/70" />
              <span>Read Time: {parseInt(hero.readTime, 10) || 0} Mins</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="w-full bg-white py-16 lg:py-[clamp(30px,6.2vw,120px)]">
        <div className="header-aligned-shell">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-[clamp(25px,5.2vw,100px)]"
          >
            <div className="flex max-w-[800px] flex-col gap-5">
              <h2 className="font-heading text-[clamp(32px,3vw,48px)] font-bold leading-[1.0] tracking-[-0.02em] text-ink-950">
                Spoor&rsquo;s Blog
              </h2>
              <p className="text-[clamp(16px,1.3vw,20px)] font-[440] leading-relaxed text-ink-500">
                Practical, honest HVAC guidance for Auburn-area homeowners — from
                cooling and heating to indoor air quality and maintenance.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <p className="text-[clamp(16px,1.3vw,20px)] font-[440] text-ink-700">
                Sort by:
              </p>
              <div className="flex w-[150px] items-center justify-between gap-4 rounded-[8px] border border-border-light px-4 py-3 lg:w-[174px]">
                <span className="text-[clamp(16px,1.3vw,20px)] font-bold text-ink-950">
                  Newest
                </span>
                <ChevronDown size={16} className="text-ink-700" />
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            ref={gridRef}
            key={currentPage}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8"
          >
            {pageArticles.map((a) => (
              <motion.div
                key={a.slug}
                variants={fadeUp}
                className="flex flex-col overflow-clip rounded-[12px] border border-[#ededed] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <Link
                  to={`/resources/blog/${a.slug}/`}
                  className="relative block min-h-[250px] overflow-clip rounded-[12px] m-4 mb-0 bg-neutral-bg lg:m-5 lg:mb-0 lg:h-[316px]"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0)_55%)]" />
                  <div className="absolute bottom-5 left-5 z-20 flex flex-col gap-3">
                    <div className="flex w-fit items-center gap-2.5 rounded-[12px] bg-white px-3 py-2 shadow-sm">
                      <Calendar size={16} className="text-ink-700" />
                      <p className="text-[13px] font-semibold tracking-[-0.2px] text-ink-900 lg:text-[15px]">
                        {a.date}
                      </p>
                    </div>
                    <h3 className="max-w-[90%] font-heading text-[clamp(18px,1.5vw,24px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
                      {a.title}
                    </h3>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between gap-6 px-4 pb-5 pt-5 lg:px-5">
                  <p className="line-clamp-2 text-[15px] font-[440] leading-[1.6] text-ink-600 opacity-80">
                    {a.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink-300 text-ink-500">
                        <User className="h-4 w-4" />
                      </span>
                      <p className="text-[15px] font-[440] tracking-[-0.2px] text-ink-900 lg:text-[17px]">
                        {a.author}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-[13px] font-[440] text-ink-500 lg:text-[15px]">
                        {a.readTime}
                      </p>
                      <Link
                        to={`/resources/blog/${a.slug}/`}
                        className="flex items-center gap-2 rounded-[8px] bg-[#FF2929] px-3 py-2.5 transition-colors hover:bg-[#d11f1f] lg:px-3.5"
                      >
                        <span className="text-[13px] font-semibold text-white lg:text-[17px]">
                          Read More
                        </span>
                        <ArrowRight size={14} className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4 lg:mt-[clamp(25px,5.2vw,100px)] lg:gap-8">
              {currentPage === 1 ? (
                <span className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-[7px] border border-border-light opacity-40 lg:h-[49px] lg:w-[47px]" aria-label="Previous page">
                  <ArrowLeft size={18} className="text-ink-700" />
                </span>
              ) : (
                <Link to={pagePath(currentPage - 1)} onClick={scrollToGrid} className="flex h-10 w-10 items-center justify-center rounded-[7px] border border-border-light transition-colors hover:bg-neutral-bg lg:h-[49px] lg:w-[47px]" aria-label="Previous page">
                  <ArrowLeft size={18} className="text-ink-700" />
                </Link>
              )}
              <div className="flex items-center gap-2 lg:gap-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <Link
                    key={num}
                    to={pagePath(num)}
                    onClick={scrollToGrid}
                    aria-current={num === currentPage ? "page" : undefined}
                    className={
                      "flex h-10 w-10 items-center justify-center rounded-[7px] transition-colors lg:h-[49px] lg:w-[47px] " +
                      (num === currentPage ? "bg-soft-red" : "hover:bg-neutral-bg")
                    }
                  >
                    <span className="text-[clamp(16px,1.35vw,24px)] font-bold tracking-[-0.01em] text-ink-950">{num}</span>
                  </Link>
                ))}
              </div>
              {currentPage === totalPages ? (
                <span className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-[7px] border border-border-light opacity-40 lg:h-[49px] lg:w-[47px]" aria-label="Next page">
                  <ArrowRight size={18} className="text-ink-700" />
                </span>
              ) : (
                <Link to={pagePath(currentPage + 1)} onClick={scrollToGrid} className="flex h-10 w-10 items-center justify-center rounded-[7px] border border-border-light transition-colors hover:bg-neutral-bg lg:h-[49px] lg:w-[47px]" aria-label="Next page">
                  <ArrowRight size={18} className="text-ink-700" />
                </Link>
              )}
            </div>
          )}

          <p className="mt-8 text-center text-sm text-ink-500">
            Showing {start + 1}–{Math.min(start + PAGE_SIZE, sorted.length)} of{" "}
            {sorted.length} articles
          </p>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative w-full overflow-clip bg-[#050d38] py-16 lg:py-[clamp(25px,5.2vw,100px)]">
        <div className="header-aligned-shell relative z-10 flex flex-col gap-16 lg:gap-[clamp(60px,15.6vw,300px)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end"
          >
            <div className="flex max-w-[723px] flex-col gap-6 lg:gap-8">
              <h2 className="font-heading text-[clamp(38px,4vw,72px)] font-bold leading-[1.0] tracking-[-0.02em] text-white">
                Comfort that works around you.
              </h2>
              <p className="max-w-[686px] text-[clamp(16px,1.5vw,22px)] font-medium leading-[1.5] text-white/80">
                Our expert technicians handle the technicalities so you can focus on
                enjoying your home.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:gap-[11px]">
              {[
                "AC Repair & Install",
                "Heating Solutions",
                "Air Quality Systems",
                "Annual Maintenance",
              ].map((service) => (
                <p
                  key={service}
                  className="cursor-pointer text-[clamp(16px,1.5vw,22px)] font-medium leading-[1.5] text-white transition-colors hover:text-[#FF2929]"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-between gap-8 rounded-[14px] bg-[#FF2929] p-6 shadow-2xl md:flex-row lg:p-8"
          >
            <h3 className="max-w-[321px] text-center font-heading text-[clamp(20px,2vw,26px)] font-bold leading-[1.15] tracking-[-0.01em] text-white md:text-left">
              Got a system in need of a refresh?
            </h3>
            <ScheduleOnlineButton />
          </motion.div>
        </div>
      </section>

      <NewFooter />
    </div>
  );
}