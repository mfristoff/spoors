import { motion } from "framer-motion";
import { Handshake, HeartHandshake, ShieldCheck, Star, Target } from "lucide-react";

const values = [
  {
    letter: "S",
    title: "Serve People First",
    icon: HeartHandshake,
    lines: [
      "We’re in the business of caring for people.",
      "Put customers and teammates first.",
      "Listen, educate, and solve the problem, not just make the sale.",
    ],
  },
  {
    letter: "P",
    title: "Practice Integrity",
    icon: ShieldCheck,
    lines: [
      "Do what is right, even when no one is watching.",
      "Be honest, transparent, and fair.",
      "Never compromise our reputation for a quick dollar.",
    ],
  },
  {
    letter: "O",
    title: "Own the Outcome",
    icon: Target,
    lines: [
      "Take responsibility from start to finish.",
      "Communicate clearly, keep your promises, and help make things right when something goes wrong.",
      "Never say, “That’s not my job.”",
    ],
  },
  {
    letter: "O",
    title: "Operate With Excellence",
    icon: Star,
    lines: [
      "Take pride in your craft. Do it right, not just good enough.",
      "Keep learning, improving, and raising the standard for professional HVAC service.",
    ],
  },
  {
    letter: "R",
    title: "Respect Like Family",
    icon: Handshake,
    lines: [
      "Treat our customers, their homes, and each other with care and respect.",
      "Leave things better than you found them.",
      "Remember that every interaction represents the Spoor's name.",
    ],
  },
];

export default function OverviewValues() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f8] py-[clamp(64px,8vw,128px)]">
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full border border-red-600/10" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full border border-[#0b1131]/10" />

      <div className="site-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-[920px] text-center md:mb-14"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-red-600 md:text-[14px]">
            Our Core. Our Culture. Our Commitment.
          </p>
          <h2 className="mt-4 text-[clamp(38px,5vw,72px)] font-bold leading-[1] tracking-[-0.03em] text-[#0b1131]">
            The Spoor Values
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.7] text-[#5f6470] md:text-[18px]">
            These values guide how we care for customers, work with our teammates, and carry the Spoor's name into every home.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-[20px] border border-[#dfe1e6] bg-white shadow-[0_18px_50px_rgba(11,17,49,0.08)]">
          {values.map((value, index) => {
            const Icon = value.icon;
            const red = index % 2 === 0;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`grid grid-cols-[86px_1fr] border-b border-[#e5e7eb] last:border-b-0 md:grid-cols-[132px_150px_1fr] ${red ? "bg-white" : "bg-[#fbfbfc]"}`}
              >
                <div className={`flex min-h-[132px] items-center justify-center text-[64px] font-bold leading-none text-white md:min-h-[154px] md:text-[82px] ${red ? "bg-red-600" : "bg-[#0b1131]"}`}>
                  {value.letter}
                </div>

                <div className="hidden items-center justify-center md:flex">
                  <div className={`flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] ${red ? "border-red-600 text-red-600" : "border-[#0b1131] text-[#0b1131]"}`}>
                    <Icon className="h-11 w-11" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="flex flex-col justify-center px-5 py-6 md:px-8 md:py-7 lg:px-10">
                  <div className="flex items-center gap-3 md:block">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 md:hidden ${red ? "border-red-600 text-red-600" : "border-[#0b1131] text-[#0b1131]"}`}>
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className={`text-[22px] font-bold uppercase leading-[1.1] tracking-[-0.015em] md:text-[28px] ${red ? "text-red-600" : "text-[#0b1131]"}`}>
                      {value.title}
                    </h3>
                  </div>
                  <div className="mt-3 space-y-1 text-[15px] leading-[1.55] text-[#363b46] md:text-[16px]">
                    {value.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mt-8 overflow-hidden rounded-[20px] bg-[#0b1131] px-6 py-10 text-center md:px-12 md:py-12"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-red-600" />
          <p className="text-[clamp(26px,3.2vw,48px)] font-bold uppercase leading-[1.08] tracking-[-0.02em] text-white">
            The <span className="text-red-500">Spoor</span> Name Is Our Promise.
          </p>
          <p className="mx-auto mt-5 max-w-[900px] text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
            For four generations, our family name has stood behind the work we do. Every employee who wears the Spoor's name carries that reputation forward.
          </p>

          <div className="mx-auto mt-8 grid max-w-[980px] gap-4 border-t border-white/15 pt-8 text-white md:grid-cols-3">
            <div className="flex min-h-[96px] items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.04] px-5 text-[17px] font-semibold leading-[1.35]">
              We're in the Business of Caring for People!
            </div>
            <div className="flex min-h-[96px] items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.04] px-5 text-[17px] font-semibold leading-[1.35]">
              Serving Families Like Yours
            </div>
            <div className="flex min-h-[96px] flex-col items-center justify-center rounded-[12px] border border-white/15 bg-white/[0.04] px-5">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/65">Since</span>
              <span className="text-[34px] font-bold leading-none text-red-500">1925</span>
              <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">Four Generations Strong</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
