import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { business } from "@/lib/siteConfig";
import { ArrowUpRight, Phone } from "lucide-react";

const SLIDES = [
  {
    left: <>Get a fair estimate from Auburn’s most trusted HVAC experts today.</>,
    cta: { label: "Get Free Estimate", to: business.estimateUrl },
  },
  {
    left: (
      <>
        <Phone className="h-4 w-4 shrink-0" /> 24/7 Emergency Support: {business.phone}
      </>
    ),
    cta: { label: "Call Now!", href: business.phoneLink },
  },
];

export default function AnnouncementBars({ collapsed = false }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Auto-rotate every 6s; pause on hover/focus; restart after manual select.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % 2), 6000);
    return () => clearInterval(id);
  }, [paused, restartKey]);

  const select = (i) => {
    setIndex(i);
    setRestartKey((k) => k + 1);
  };

  const transition = reduce
    ? "none"
    : "transform 450ms cubic-bezier(0.22,1,0.36,1)";

  return (
    <aside
      role="complementary"
      aria-label="Announcements"
      className="relative overflow-hidden bg-[#050D38]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative w-full overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(.22,1,.36,1)] h-[102px] md:h-[66px]"
        style={{ height: collapsed ? 0 : undefined }}
      >
        {SLIDES.map((slide, i) => {
          const active = index === i;
          const x = i === 0 ? (active ? 0 : -100) : active ? 0 : 100;
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{ transform: `translateX(${x}%)`, transition }}
              aria-hidden={!active}
            >
              <div className="site-shell h-full">
                <SlideContent slide={slide} active={active} />
              </div>
            </div>
          );
        })}

        {/* Dot controls — fixed on the right, never move with slides */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-[7px] md:right-8">
          <button
            type="button"
            aria-label="Show estimate announcement"
            onClick={() => select(0)}
            className="block cursor-pointer p-0"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              border: "none",
              background: index === 0 ? "#FFFFFF" : "rgba(255,255,255,0.20)",
            }}
          />
          <button
            type="button"
            aria-label="Show emergency support announcement"
            onClick={() => select(1)}
            className="block cursor-pointer p-0"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              border: "none",
              background: index === 1 ? "#FFFFFF" : "rgba(255,255,255,0.20)",
            }}
          />
        </div>
      </div>
    </aside>
  );
}

function SlideContent({ slide, active }) {
  const cta = slide.cta;
  const ctaClass =
    "inline-flex shrink-0 items-center gap-2 rounded-lg border text-[14px] font-medium text-white";
  const ctaStyle = {
    height: 44,
    padding: "0 18px",
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.5)",
  };
  return (
    <div className="flex h-full flex-col items-start justify-center gap-2 md:flex-row md:items-center md:justify-between md:pr-7">
      <div className="flex items-center gap-2 text-[14px] leading-[22px] text-white md:whitespace-nowrap md:leading-5">
        {slide.left}
      </div>
      {cta.to ? (
        <Link to={cta.to} tabIndex={active ? 0 : -1} className={ctaClass} style={ctaStyle}>
          {cta.label} <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <a href={cta.href} tabIndex={active ? 0 : -1} className={ctaClass} style={ctaStyle}>
          {cta.label} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}