import { Link } from "react-router-dom";
import { Zap, ArrowUpRight } from "lucide-react";
import { withServiceGap } from "@/components/ui/ServiceGap";
import { cdnImage } from "@/lib/cdnImage";

const STRIP_COPY =
  "Built on a foundation of professional expertise and a customer-first philosophy, we take pride in delivering honest HVAC solutions.";

function Eyebrow({ label }) {
  return (
    <div className="flex items-center gap-[10px]">
      <Zap className="h-4 w-4 fill-[#FF2929] text-[#FF2929]" />
      <span className="text-[14px] font-semibold uppercase leading-[18px] tracking-[0.02em] text-[#E5E5E5]">
        {label}
      </span>
    </div>
  );
}

// Force the intended two-line break (split after the first sentence).
function Headline({ text, className = "", style }) {
  const parts = text.split(". ");
  const first = parts[0] + ".";
  const rest = parts.slice(1).join(". ").trim();
  return (
    <h1 className={className} style={{ margin: 0, ...style }}>
      {withServiceGap(first)}
      {rest && (
        <>
          <br />
          {withServiceGap(rest)}
        </>
      )}
    </h1>
  );
}

function ScrollGlyph() {
  return (
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" stroke="white" strokeWidth="2" style={{ opacity: 0.9 }} aria-hidden="true">
      <rect x="1" y="1" width="18" height="30" rx="9" />
      <line x1="10" y1="6" x2="10" y2="12" strokeLinecap="round" />
    </svg>
  );
}

function ScheduleButton() {
  return (
    <Link
      to="/contact-us/"
      className="inline-flex shrink-0 items-stretch overflow-hidden"
      style={{ height: 60, borderRadius: 6 }}
    >
      <span
        className="flex items-center justify-center text-white"
        style={{ width: 184, background: "#FF2929", fontSize: 16, fontWeight: 600 }}
      >
        Schedule Online
      </span>
      <span
        className="grid place-items-center text-white"
        style={{ width: 60, background: "#C81E1E" }}
      >
        <ArrowUpRight className="h-[20px] w-[20px]" />
      </span>
    </Link>
  );
}

export default function ServiceHero({ image, eyebrow, headline }) {
  return (
    <section
      className="relative grid w-full"
      style={{ gridTemplateRows: "minmax(0,1fr) auto", minHeight: "calc(100svh - var(--expanded-header-height, 220px))" }}
    >
      {/* ── Image + headline ── */}
      <div className="relative overflow-hidden" style={{ background: "#000000" }}>
        <img
          src={cdnImage(image, 1920, 1280)}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
          style={{ objectPosition: "50% 45%" }}
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 58% 62% at 50% 38%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.16) 38%, rgba(0,0,0,0.52) 70%, rgba(0,0,0,0.88) 92%, #000000 100%), linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.30) 48%, rgba(0,0,0,0.78) 84%, #000000 100%)",
          }}
        />
        <div className="relative z-10 site-shell flex h-full flex-col justify-center" style={{ paddingTop: "7vh", paddingBottom: "7vh" }}>
          <Eyebrow label={eyebrow} />
          <Headline
            text={headline}
            className="mt-5 max-w-[880px] text-left text-white"
            style={{ fontSize: "clamp(34px, 4vw, 64px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.025em" }}
          />
        </div>
      </div>

      {/* ── Black lower information bar ── */}
      <div
        className="relative z-10"
        style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.16)" }}
      >
        <div
          className="site-shell flex items-center justify-between gap-6"
          style={{ height: 136, paddingTop: 28, paddingBottom: 28 }}
        >
          <p className="max-w-[520px] text-left" style={{ fontSize: 16, lineHeight: "24px", color: "#B9B9B9" }}>
            {STRIP_COPY}
          </p>
          <div className="hidden items-center justify-center md:flex" style={{ width: 80 }}>
            <ScrollGlyph />
          </div>
          <ScheduleButton />
        </div>
      </div>
    </section>
  );
}