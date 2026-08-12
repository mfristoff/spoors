import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const values = [
  {
    letter: "S",
    number: "01",
    title: "Serve People First",
    kicker: "Caring for people is the work.",
    lines: [
      "We’re in the business of caring for people.",
      "Put customers and teammates first.",
      "Listen, educate, and solve the problem, not just make the sale.",
    ],
  },
  {
    letter: "P",
    number: "02",
    title: "Practice Integrity",
    kicker: "Do what is right. Every time.",
    lines: [
      "Do what is right, even when no one is watching.",
      "Be honest, transparent, and fair.",
      "Never compromise our reputation for a quick dollar.",
    ],
  },
  {
    letter: "O",
    number: "03",
    title: "Own the Outcome",
    kicker: "Take responsibility from start to finish.",
    lines: [
      "Communicate clearly, keep your promises, and help make things right when something goes wrong.",
      "Never say, “That’s not my job.”",
    ],
  },
  {
    letter: "O",
    number: "04",
    title: "Operate With Excellence",
    kicker: "Take pride in your craft.",
    lines: [
      "Do it right, not just good enough.",
      "Keep learning, improving, and raising the standard for professional HVAC service.",
    ],
  },
  {
    letter: "R",
    number: "05",
    title: "Respect Like Family",
    kicker: "Care for the home and the people in it.",
    lines: [
      "Treat our customers, their homes, and each other with care and respect.",
      "Leave things better than you found them.",
      "Remember that every interaction represents the Spoor’s name.",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

function ValueStatement({ value }) {
  const rowRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 88%", "end 28%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 26,
    mass: 0.65,
  });
  const letterY = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [30, -10]);
  const copyY = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [20, 0]);
  const opacity = useTransform(progress, [0, 0.28, 1], [0.2, 1, 1]);
  const lineScale = useTransform(progress, [0, 0.7], [0, 1]);

  return (
    <motion.article
      ref={rowRef}
      style={{ opacity }}
      className="group relative isolate overflow-hidden border-t border-[#171717]/15 last:border-b"
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: lineScale }}
        className="absolute left-0 top-0 h-[2px] w-full origin-left bg-[#c84d4b]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-white/75 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      <div className="grid min-h-[270px] grid-cols-[82px_minmax(0,1fr)] gap-5 py-9 sm:grid-cols-[104px_minmax(0,1fr)] sm:gap-8 sm:py-12 lg:min-h-[320px] lg:grid-cols-[136px_minmax(0,1fr)] lg:gap-12 lg:py-16">
        <motion.div
          style={{ y: letterY }}
          className="relative flex min-h-[190px] items-start justify-start border-r border-[#171717]/15 pr-5 pt-6 sm:min-h-[220px] sm:pr-8 sm:pt-8 lg:min-h-[248px] lg:pr-10 lg:pt-10"
        >
          <div className="relative inline-flex flex-col items-start">
            <span className="mb-3 font-mono text-[10px] font-semibold tracking-[0.2em] text-[rgba(23,23,23,0.09)] sm:mb-4 sm:text-[11px]">
              {value.number}
            </span>
            <span
              aria-hidden="true"
              className="select-none text-[clamp(74px,9vw,150px)] font-bold leading-[0.72] tracking-[-0.09em] text-[#c84d4b]"
            >
              {value.letter}
            </span>
          </div>
        </motion.div>
        <motion.div style={{ y: copyY }} className="flex flex-col justify-center pr-1 sm:pr-6">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#c84d4b] sm:text-[13px]">
            {value.kicker}
          </p>
          <h3 className="max-w-[820px] text-[clamp(31px,4.25vw,68px)] font-bold leading-[0.98] tracking-[-0.045em] text-[#171717]">
            {value.title}
          </h3>
          <div
            className={`mt-6 grid max-w-[980px] gap-4 text-[15px] leading-[1.62] text-[#4e4e4e] sm:mt-8 sm:text-[17px] lg:items-start lg:gap-x-9 ${
              value.lines.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            }`}
          >
            {value.lines.map((line, lineIndex) => (
              <motion.p
                key={line}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.08 * lineIndex, ease }}
                className="max-w-[310px] text-balance"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

function PromisePanel() {
  const panelRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 28,
    mass: 0.8,
  });
  const ghostY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [70, -80]);
  const titleX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [-30, 30]);

  return (
    <motion.div
      ref={panelRef}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease }}
      className="relative mt-[clamp(70px,10vw,150px)] overflow-hidden rounded-[26px] bg-[#efe7e3] text-[#221f1e] shadow-[0_30px_80px_rgba(74,45,41,0.14)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(120,73,67,.18) 0 1px, transparent 1.2px), radial-gradient(circle at 78% 70%, rgba(120,73,67,.12) 0 1px, transparent 1.2px)",
          backgroundSize: "19px 19px, 27px 27px",
        }}
      />
      <motion.span
        aria-hidden="true"
        style={{ y: ghostY }}
        className="pointer-events-none absolute -right-[0.06em] -top-[0.2em] select-none text-[clamp(160px,28vw,520px)] font-bold leading-none tracking-[-0.1em] text-[#a55d56]/[0.06]"
      >
        1925
      </motion.span>

      <div className="relative z-10 grid gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-[clamp(48px,6vw,100px)] lg:py-[clamp(70px,8vw,126px)]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.19em] text-[#6e4a45]/75 sm:text-[13px]">
            Four generations strong
          </p>
          <motion.h3
            style={{ x: titleX }}
            className="mt-5 max-w-[880px] text-[clamp(48px,7vw,112px)] font-bold leading-[0.88] tracking-[-0.05em]"
          >
            <span>The Spoor na</span><span className="tracking-[-0.035em]">me</span><span> is our promise.</span>
          </motion.h3>
        </div>

        <div className="flex flex-col justify-end">
          <p className="max-w-[580px] text-[17px] leading-[1.7] text-[#3f3431]/88 sm:text-[19px]">
            For four generations, our family name has stood behind the work we do. Every employee who wears the Spoor’s name carries that reputation forward.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid border-t border-[#5f4742]/20 md:grid-cols-3">
        {[
          ["Our business", "Caring for people"],
          ["Our community", "Serving families like yours"],
          ["Our history", "Since 1925"],
        ].map(([label, statement], index) => (
          <motion.div
            key={label}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08, ease }}
            className="border-b border-[#5f4742]/20 px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:px-9 md:py-9 md:last:border-r-0 lg:px-12"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#6e4a45]/70">
              {label}
            </p>
            <p className="mt-2 text-[20px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[24px]">
              {statement}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function OverviewValues() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 26,
    mass: 0.85,
  });
  const wordX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [80, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf8f5] py-[clamp(78px,10vw,160px)] text-[#171717]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,.025) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      <motion.div
        aria-hidden="true"
        style={{ x: wordX }}
        className="pointer-events-none absolute left-[-0.08em] top-[0.04em] whitespace-nowrap text-[clamp(120px,21vw,390px)] font-bold leading-none tracking-[-0.085em] text-[#171717]/[0.028]"
      >
        THE SPOOR STANDARD
      </motion.div>

      <div className="site-shell relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.55fr)] lg:gap-[clamp(60px,7vw,120px)]">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
            className="lg:sticky lg:top-[150px]"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c84d4b]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.19em] text-[#171717]/58 sm:text-[13px]">
                Our core. Our culture. Our commitment.
              </p>
            </div>
            <h2 className="mt-6 max-w-[620px] text-[clamp(50px,7vw,104px)] font-bold leading-[0.9] tracking-[-0.055em]">
              <span aria-label="Five values.">
                <span className="inline-block">F</span><span className="ml-[0.018em] inline-block">i</span><span className="ml-[0.018em] inline-block">v</span><span>e val</span><span className="tracking-[-0.032em]">ues.</span>
              </span>
              <span className="block text-[#c84d4b]" aria-label="One name.">
                <span>O</span><span className="tracking-[-0.03em]">ne</span><span> na</span><span className="tracking-[-0.03em]">me.</span>
              </span>
            </h2>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.7] text-[#55524c] sm:text-[18px]">
              These values guide how we serve customers, support our team, and make decisions on every job.
            </p>

            <div className="mt-10 flex max-w-[420px] items-center border-y border-[#171717]/15 py-5">
              {values.map((value, index) => (
                <motion.span
                  key={`${value.letter}-${index}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease }}
                  className="flex-1 text-center text-[28px] font-bold tracking-[-0.06em] text-[#171717] first:text-[#c84d4b]"
                >
                  {value.letter}
                </motion.span>
              ))}
            </div>
          </motion.aside>

          <div>
            {values.map((value) => (
              <ValueStatement key={value.title} value={value} />
            ))}
          </div>
        </div>

        <PromisePanel />
      </div>
    </section>
  );
}
