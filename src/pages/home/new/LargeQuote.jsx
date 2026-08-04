import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

const WORDS = [
  "Spoor's", "brings", "together", "expert", "technicians,", "advanced", "HVAC",
  "technology,", "and", "a", "customer-first", "philosophy", "to", "help", "Auburn",
  "families", "simplify", "their", "home", "comfort", "and", "live", "every", "season",
  "with", "absolute", "peace", "of", "mind."
];
// Indices highlighted in red: "HVAC" and "home comfort"
const HIGHLIGHT = new Set([6, 18, 19]);

function Word({ progress, index, highlight, text }) {
  // Faint → fully opaque as scroll progress passes this word's position.
  const opacity = useTransform(progress, [index - 0.8, index], [0.05, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? "text-[#E31D2B]" : "text-[#000000]"}>
      {text + " "}
    </motion.span>
  );
}

export default function LargeQuote() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Drive a 0 → word-count progress across the scroll range so words reveal
  // one at a time in reading order (left-to-right, top-to-bottom).
  const progress = useTransform(scrollYProgress, [0.08, 0.78], [0, WORDS.length]);

  return (
    <section
      ref={ref}
      className="relative flex w-full items-center justify-center overflow-clip bg-white py-[80px] sm:py-[clamp(80px,8vw,120px)] lg:h-[1003px] lg:py-0"
    >
      {/* Background: diagonal lines pattern */}
      <Image
        src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/309bfc2b7_TitleSection.png"
        alt=""
        aria-hidden="true"
        fittingType="fill"
        className="absolute inset-0 h-full w-full"
      />
      <div className="relative z-10 w-full max-w-[1396px] px-3 text-center md:px-4">
        <p
          style={{ fontSize: "clamp(22px,4vw,62px)", letterSpacing: "-0.019em", textWrap: "balance" }}
          className="font-bold leading-[1.3] text-center"
        >
          {WORDS.map((w, i) => (
            <Word key={i} progress={progress} index={i} highlight={HIGHLIGHT.has(i)} text={w} />
          ))}
        </p>
      </div>
    </section>
  );
}