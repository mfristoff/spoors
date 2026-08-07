import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const BG = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a9965888b_BGfor22sectionaboveFAQthisishowitshouldlook22.png";

export default function AboutStatement({ statement, eyebrow, bg, highlight }) {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${bg || BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {bg && <div className="pointer-events-none absolute inset-0 bg-white/85" />}
      <div className="relative site-shell mx-auto max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider text-ink-800">{eyebrow}</span>
          </div>
          <p
            className="mt-6 font-heading text-ink-900"
            style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.01em", textWrap: "balance" }}
          >
            &ldquo;{highlight
              ? statement.split(highlight).map((part, i, arr) => (
                  <span key={i}>{part}{i < arr.length - 1 && <span className="text-red-600">{highlight}</span>}</span>
                ))
              : statement}&rdquo;
          </p>
          <Link
            to="/about-us"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
          >
            Explore More <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}