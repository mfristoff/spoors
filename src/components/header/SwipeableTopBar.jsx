import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const SLIDES = [
  {
    text: "Get a fair estimate from Auburn's most trusted HVAC experts today.",
    cta: { label: "Get Free Estimate", to: "/contact-us/" },
  },
  {
    text: "No overtime rates. Honest recommendations, fair estimates — every visit.",
    cta: { label: "Schedule Online", to: "/contact-us/" },
  },
];

export default function SwipeableTopBar() {
  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

  return (
    <div className="w-full bg-[#050d38]">
      {/* Mobile: concise estimate prompt and direct call action */}
      <div className="flex h-[54px] items-center justify-between gap-3 px-5 md:hidden">
        <p className="min-w-0 truncate text-[15px] text-white/90">Get a fair estimate fast:</p>
        <a
          href="tel:5308231843"
          data-compact-tap
          className="inline-flex h-[40px] shrink-0 items-center gap-1.5 rounded-[6px] border border-white/[0.04] bg-[#151d47] px-3.5 font-normal text-white transition-colors hover:bg-[#1a2459]"
        >
          <span className="whitespace-nowrap text-[15px] leading-none">Call Now!</span>
          <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={1.8} />
        </a>
      </div>

      {/* Desktop: carousel controls beside the CTA */}
      <div className="announcement-row-aligned mx-auto hidden min-h-[66px] max-w-[1920px] items-center justify-between gap-6 py-3 pr-[195.5px] md:flex">
        <p className="whitespace-nowrap text-[15px] text-white/90">{SLIDES[index].text}</p>
        <div className="flex items-center gap-3">
          <Link
            to={SLIDES[index].cta.to}
            className="inline-flex items-center gap-2 rounded-[5px] border border-white/[0.04] bg-[#151d47] px-3 py-2 font-normal text-white transition-colors hover:bg-[#1a2459]"
          >
            <span className="whitespace-nowrap text-[16px] leading-[1.6]">{SLIDES[index].cta.label}</span>
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
          <div className="flex flex-col items-center gap-1" aria-label="Choose announcement">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Announcement ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
                className="border-0 bg-transparent p-1 shadow-none"
              >
                <span className={`block h-1.5 w-1.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/20"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}