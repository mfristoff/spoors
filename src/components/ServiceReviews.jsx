import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronRight, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import GoogleReviewsModal from "@/components/GoogleReviewsModal";
import { allReviews } from "@/lib/serviceReviews";

function GoogleG({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

const SOURCE_LABELS = {
  google: "Verified Google review",
  yelp: "Verified Yelp review",
  angi: "Verified Angi review",
  homeadvisor: "Verified HomeAdvisor review",
};

const SOURCE_COLORS = { google: null, yelp: "#d32323", angi: "#0a8a5f", homeadvisor: "#1a73e8" };

export function SourceLogo({ source }) {
  const s = source || "google";
  if (s === "google") return <GoogleG size={16} />;
  const label = s === "homeadvisor" ? "HomeAdvisor" : s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <span className="font-extrabold text-[11px] leading-none tracking-tight" style={{ color: SOURCE_COLORS[s] }}>
      {label}
    </span>
  );
}

export function sourceLabel(source) {
  return SOURCE_LABELS[source || "google"] || "Verified review";
}

export function Stars({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-amber-400 text-amber-400" : "fill-transparent text-amber-400/30"}
        />
      ))}
    </div>
  );
}

export function renderHighlighted(text, highlights, alpha = 0.42) {
  if (!highlights || highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(re);
  const lower = highlights.map((h) => h.toLowerCase());
  return parts.map((part, i) =>
    lower.includes(part.toLowerCase()) ? (
      <mark key={i} style={{ background: `linear-gradient(to bottom, transparent 28%, rgba(255,150,150,${alpha}) 28%)`, borderRadius: "2px", padding: "0 2px", fontStyle: "italic" }}>{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ServiceReviews({
  reviews = [],
  heading = "What local homeowners say about Spoor's HVAC Services",
  onBook,
}) {
  const trackRef = useRef(null);
  const [open, setOpen] = useState(false);

  const stepWidth = () => {
    const el = trackRef.current;
    if (!el) return 360;
    const card = el.querySelector("[data-review-card]");
    return card ? card.offsetWidth + 24 : 360;
  };

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * stepWidth(), behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el || reviews.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const id = setInterval(() => {
      if (paused || document.hidden) return;
      el.scrollBy({ left: stepWidth(), behavior: "smooth" });
    }, 4500);

    let scrollTimer;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const setWidth = reviews.length * stepWidth();
        if (el.scrollLeft >= setWidth - 1) {
          el.scrollLeft -= setWidth; // seamless reset into the first copy
        }
      }, 150);
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(id);
      clearTimeout(scrollTimer);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("scroll", onScroll);
    };
  }, [reviews.length]);

  if (!reviews || reviews.length === 0) return null;

  const looped = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#f7f7f7] py-[clamp(40px,7vw,110px)]">
      <div className="max-w-[1440px] mx-auto px-[5%]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-9">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/936c19043_Bolt.svg" alt="" className="h-4 w-4" />
              <span className="text-[13px] font-semibold tracking-[0.08em] text-[#3d3d3d] uppercase">Customer Reviews</span>
            </div>
            <h2 className="text-[clamp(30px,3vw,48px)] font-bold leading-[1.12] tracking-[-0.018em] text-[#1a1a1a] max-w-[760px]">
              {heading}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.02em] text-[#616161] opacity-70">
              Reviews on Google · Yelp · Angi
            </span>
            <button type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Next reviews"
              className="w-11 h-11 rounded-full border border-[#e0e0e0] bg-white hover:bg-[#f3f3f3] flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} className="text-[#1a1a1a]" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 md:pb-4 snap-x snap-mandatory no-scrollbar px-1 pr-[5%]"
        >
          {looped.map((r, i) => (
            <article
              key={i}
              data-review-card
              className="snap-start shrink-0 w-[300px] sm:w-[420px] bg-white rounded-[16px] border border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5 sm:p-6 flex flex-col gap-3.5 sm:gap-4"
            >
              <div className="flex items-center justify-between">
                <Stars rating={r.rating} />
                <SourceLogo source={r.source} />
              </div>
              <p className="text-[15px] font-[440] leading-[1.6] text-[#3d3d3d] md:flex-1 line-clamp-[7]">
                “{renderHighlighted(r.text, r.highlights, 0.16)}”
              </p>
              <div className="flex items-center gap-3 pt-3 mt-1 border-t border-[#f0f0f0]">
                {r.avatar ? (
                  <Image src={r.avatar} fittingType="fill" className="w-9 h-9 rounded-full object-cover" alt={r.name} />
                ) : (
                  <div className="w-9 h-9 rounded-full border border-[#dcdcdc] bg-[#e8e8e8] text-[#6b6b6b] flex items-center justify-center text-[14px] font-semibold">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#1a1a1a] leading-tight">{r.name}</span>
                  <span className="text-[12px] text-[#9a9a9a]">{sourceLabel(r.source)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4">
          <button type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#616161] hover:text-[#e31e24] transition-colors"
          >
            See all reviews on Google <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      <GoogleReviewsModal open={open} onOpenChange={setOpen} reviews={allReviews} onBook={onBook} />
    </section>
  );
}