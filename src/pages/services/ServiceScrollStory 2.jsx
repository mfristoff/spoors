import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import { getService } from "@/lib/siteConfig";
import { Zap, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Service tab + panel composition. Normal document flow — clicking a tab
 * swaps the active panel. No pinned/sticky stage, no scroll-driven sequencing,
 * no scroll gating. The browser always controls scrolling.
 */
export default function ServiceScrollStory({
  label,
  header,
  items,
  image,
  images,
  quoteService,
  related = [],
  overview,
}) {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const relatedService = related.map(getService).filter(Boolean)[0];
  const openQuote = () => setModalOpen(true);
  const it = items[active];

  return (
    <>
      {/* Section header (normal flow) */}
      <section className="bg-white pt-16 md:pt-24">
        <div className="site-shell text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-red-600">
              <Zap className="h-4 w-4 fill-red-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
            </div>
            <h2 className="t-h2 mx-auto mt-4 max-w-4xl text-ink-950">{header}</h2>
            {overview && (
              <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-ink-600">{overview}</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Tab + panel — manual switching, no scroll gating */}
      <section className="bg-white pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="site-shell">
          {/* Mobile: horizontal tab strip */}
          <nav
            aria-label="Services on this page"
            className="flex gap-3 overflow-x-auto pb-2 md:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                    isActive ? "border-red-600 bg-red-600 text-white" : "border-border-light bg-white text-ink-700"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {t.title}
                </button>
              );
            })}
          </nav>

          {/* Desktop: 3-column (vertical tabs | text | image) */}
          <div className="flex flex-col gap-8 md:grid md:items-start md:gap-12 md:grid-cols-[0.34fr_0.36fr_0.5fr]">
            {/* Left: vertical tabs (desktop only) */}
            <nav aria-label="Services on this page" className="hidden md:block">
              {items.map((t, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={t.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative block w-full border-b border-[#ECECEC] px-4 text-left transition-colors duration-200",
                      isActive ? "bg-[#fff1f3]" : "bg-white hover:bg-[#fff7f8]"
                    )}
                    style={{ minHeight: 68 }}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-[3px]" style={{ background: "#FF2929" }} />
                    )}
                    <div className="flex items-center gap-3 py-3">
                      <span
                        className={cn(
                          "font-heading text-sm font-bold tabular-nums",
                          isActive ? "text-red-600" : "text-ink-400"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-heading text-[15px] leading-snug",
                          isActive ? "font-bold text-ink-950" : "font-medium text-ink-800 group-hover:text-red-600"
                        )}
                      >
                        {t.title}
                      </span>
                      <Plus
                        className={cn(
                          "h-4 w-4 shrink-0 transition-colors",
                          isActive ? "text-red-600" : "text-ink-300 group-hover:text-red-500"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Center: active text */}
            <div key={active} className="md:pt-2">
              <span className="font-heading text-2xl font-bold tabular-nums text-red-600">
                {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-heading text-[24px] font-bold leading-tight text-ink-950 md:text-[34px]">
                {it.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink-600">{it.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button
                  type="button"
                  onClick={openQuote}
                  className="inline-flex items-stretch overflow-hidden rounded-md text-white"
                  style={{ height: 52 }}
                >
                  <span className="flex items-center px-6 text-[15px] font-semibold" style={{ background: "#FF2929" }}>
                    Get Free Quote
                  </span>
                  <span className="flex items-center justify-center" style={{ width: 40, background: "#c81e1e" }}>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
                {relatedService && (
                  <Link
                    to={`/services/${relatedService.slug}/`}
                    className="text-[15px] font-semibold text-red-600 underline underline-offset-4 hover:text-red-700"
                  >
                    Explore {relatedService.title}
                  </Link>
                )}
              </div>
            </div>

            {/* Right: active image */}
            <div className="overflow-hidden rounded-xl bg-[#E5E5E5]" style={{ minHeight: 240 }}>
              <button
                type="button"
                onClick={openQuote}
                aria-label={`Get a free quote for ${it.title}`}
                className="quote-image-btn relative block h-full w-full"
              >
                <Image src={images?.[active] ?? image} alt={it.title} fittingType="fill" className="h-full min-h-[240px] w-full object-cover" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ServiceQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} service={quoteService} />
    </>
  );
}