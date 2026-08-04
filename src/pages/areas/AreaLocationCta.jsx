import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const BG = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a9965888b_BGfor22sectionaboveFAQthisishowitshouldlook22.png";

/**
 * "About Us" band that sits directly above the location FAQ. White background
 * with a subtle diagonal-line pattern, a red-bolt "ABOUT US" eyebrow aligned
 * to the left of the text block, an indented centered statement, and a red
 * "Explore More" button (no underline) linking to the About page.
 */
export default function AreaLocationCta({ area }) {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative site-shell mx-auto max-w-3xl">
        <Reveal>
        <div className="flex items-center gap-2">
          <img src={BOLT} alt="" className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wider text-ink-800">About Us</span>
        </div>
        <p
          className="mt-6 pl-6 font-heading text-ink-900"
          style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          A dedicated HVAC team based in Auburn, passionate about delivering precision comfort to{" "}
          {area.name}. From emergency repairs to high-efficiency system designs and maintenance.
        </p>
        <Link
          to="/about-us/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
        >
          Explore More <ArrowRight className="h-4 w-4" />
        </Link>
        </Reveal>
      </div>
    </section>
  );
}