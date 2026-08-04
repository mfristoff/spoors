import { motion } from "framer-motion";
import { allReviews } from "@/lib/serviceReviews";
import { Stars, SourceLogo, sourceLabel, renderHighlighted } from "@/components/ServiceReviews";
import QuoteFeature from "@/components/testimonial/QuoteFeature";
import { cdnImage } from "@/lib/cdnImage";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/48c784c4b_Spoor_s-Home-AC-Service-4.webp";

/**
 * Testimonials page — replaces the About > Testimonials page. Uses the shared
 * site header/footer (via SiteLayout). Compact hero sits above the fold, with a
 * gradient that fades smoothly into the reviews section. Reviews are real,
 * multi-source (Google, Yelp, Angi, HomeAdvisor) in a masonry layout, each with
 * a 2–4 word summary up top, larger stars, and the subtle red highlight treatment.
 */
export default function Testimonial() {
  return (
    <div className="w-full bg-white">
      {/* HERO — compact, above the fold; gradient bleeds into the reviews bg */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={cdnImage(HERO_IMAGE, 1920, 1080)}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/97 to-[#f7f7f7]" />
        </div>
        <motion.div
          className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center gap-5 px-5 pb-4 pt-14 text-center md:gap-6 md:px-6 md:pb-10 lg:pt-20"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        >
          <motion.h1
            className="mx-auto max-w-[360px] font-heading text-[44px] leading-[1.02] tracking-[-0.022em] font-bold text-ink-900 md:max-w-none md:text-[clamp(36px,4.8vw,68px)] md:leading-[1.05] md:tracking-[-0.02em]"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Quotes from Hundreds of Our <span className="text-red-600 whitespace-nowrap">Home Comfort</span> Customers
          </motion.h1>
          <motion.p
            className="mt-2 max-w-[760px] text-[16px] leading-[1.55] text-ink-600 md:mt-0 md:text-[clamp(16px,1.3vw,20px)] md:leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Real reviews from Auburn-area homeowners — collected from Google, Yelp, Angi, and HomeAdvisor. See why
            families have trusted Spoor&rsquo;s Heating &amp; Air for heating, cooling, and honest service since 1925.
          </motion.p>
        </motion.div>
      </section>

      {/* REVIEWS — real, multi-source, masonry, subtle highlights */}
      <section className="w-full bg-[#f7f7f7] px-5 pt-2 pb-14 md:px-8 md:pt-6 lg:px-[clamp(18px,6.2vw,120px)] lg:pt-10 lg:pb-20">
        <div className="mx-auto flex max-w-[1440px] flex-col md:block md:columns-2 md:gap-6 lg:columns-3">
          {(() => {
            // Keep only one 4-star review and place it in the middle of the list.
            const fourStar = allReviews.filter((r) => r.rating === 4);
            const fiveStar = allReviews.filter((r) => r.rating !== 4);
            const chosenFour = fourStar.length ? [fourStar[0]] : [];
            const mid = Math.floor(fiveStar.length / 2);
            return [...fiveStar.slice(0, mid), ...chosenFour, ...fiveStar.slice(mid)];
          })().map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="mb-4 flex flex-col gap-4 break-inside-avoid rounded-[16px] md:mb-6 border border-[#e8e8e8] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[16px] font-bold leading-tight text-ink-900">{r.summary}</h3>
                <SourceLogo source={r.source} />
              </div>
              <Stars rating={r.rating} size={20} />
              <p className="text-[15px] leading-[1.6] text-[#3d3d3d]">
                &ldquo;{renderHighlighted(r.text, r.highlights, 0.16)}&rdquo;
              </p>
              <div className="mt-1 flex items-center gap-3 border-t border-[#f0f0f0] pt-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-[#e8e8e8] text-[14px] font-semibold text-[#6b6b6b]">
                  {r.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold leading-tight text-[#1a1a1a]">{r.name}</span>
                  <span className="text-[12px] text-[#9a9a9a]">{sourceLabel(r.source)}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FEATURE QUOTE — "About Us" band with a standout customer quote */}
      <QuoteFeature />
    </div>
  );
}