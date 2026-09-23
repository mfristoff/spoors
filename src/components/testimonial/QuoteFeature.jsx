import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";

// A standout customer quote surfaced in the "About Us" feature-band style:
// white field with faint diagonal stripes, left-aligned bolt eyebrow, centered
// bold quote, attribution, and a red "Explore More" button.
const QUOTE = {
  text:
    "The unit has been heating like a dream, and the work comes with a warranty. We highly recommend this company — we didn’t know there were any trustworthy contractors left these days!",
  name: "Patricia F.",
  source: "Angi",
};

const HIGHLIGHT = "we didn’t know there were any trustworthy contractors left these days!";

export default function QuoteFeature() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Faint diagonal stripes (top-right → bottom-left) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 38px, #f0f0f0 38px 39px)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col px-5 py-14 md:px-6 md:py-20 lg:py-28">
        {/* Eyebrow — left-aligned, bolt + label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img src={BOLT} alt="" className="h-4 w-4" />
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#3b3b3b]">
            About Us
          </span>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-6 text-center font-heading text-[30px] leading-[1.08] tracking-[-0.015em] font-bold text-[#333333] md:mt-8 md:text-[clamp(26px,3.6vw,44px)] md:leading-[1.2] md:tracking-[-0.01em]"
          style={{ textWrap: "balance" }}
        >
          &ldquo;
          {QUOTE.text.split(HIGHLIGHT).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <mark className="rounded-[3px] bg-[rgba(227,30,36,0.08)] px-1 text-inherit">
                  {HIGHLIGHT}
                </mark>
              )}
            </span>
          ))}
          &rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center text-[14px] font-semibold uppercase tracking-[0.16em] text-[#9a9a9a]"
        >
          — {QUOTE.name}, {QUOTE.source}
        </motion.p>

        {/* Explore More button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/contact-us/"
            className="group inline-flex items-stretch overflow-hidden rounded-[10px] bg-red-600 text-white shadow-[0_10px_28px_rgba(227,30,36,0.22)] transition-colors hover:bg-red-700"
          >
            <span className="inline-flex items-center px-7 py-3.5 text-[16px] font-semibold">
              Contact Us
            </span>
            <span className="inline-flex items-center bg-red-800 px-3.5">
              <ArrowDownRight className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}