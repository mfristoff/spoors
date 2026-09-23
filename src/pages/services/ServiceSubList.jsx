import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import { Zap, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getService } from "@/lib/siteConfig";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const cardId = (title) => `svc-${slugify(title)}`;
const SCROLL_MARGIN = "calc(var(--collapsed-header-height, 116px) + 40px)";

/**
 * Native-scroll service navigator.
 * - Left: sticky vertical tab rail (all tabs visible).
 * - Right: every service card stacked in normal document flow (rendered once).
 * - IntersectionObserver ONLY updates the active tab. It never moves the page.
 * - Tab clicks smooth-scroll to a card and can be interrupted by the wheel/trackpad/keyboard.
 * - No wheel/touch preventDefault, no scroll-lock, no height swapping.
 */
export default function ServiceSubList({ label, header, items, image, quoteService, related = [], overview }) {
  const firstId = items[0] ? cardId(items[0].title) : "";
  const [activeId, setActiveId] = useState(firstId);
  const [modalOpen, setModalOpen] = useState(false);
  const cardRefs = useRef([]);
  const autoScrolling = useRef(false);
  const relatedService = related.map(getService).filter(Boolean)[0];

  // ── Scrollspy: observe only, never move the page ──
  useEffect(() => {
    if (!items.length) return;
    const headerH = () =>
      parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--collapsed-header-height")) || 116;
    let obs;
    const build = () => {
      obs?.disconnect?.();
      const top = headerH() + 40;
      obs = new IntersectionObserver(
        (entries) => {
          if (autoScrolling.current) return;
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (!visible.length) return;
          setActiveId(visible[0].target.id);
        },
        { root: null, rootMargin: `-${top}px 0px -45% 0px`, threshold: [0.15, 0.3, 0.5, 0.7] }
      );
      cardRefs.current.forEach((el) => el && obs.observe(el));
    };
    build();
    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      obs?.disconnect?.();
    };
  }, [items]);

  // ── Tab click: smooth scroll, interruptible ──
  const scrollToCard = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    autoScrolling.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.scrollIntoView({ block: "start" });
      autoScrolling.current = false;
      history.replaceState(null, "", `#${id}`);
      return;
    }

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Halt the native smooth scroll the moment the visitor takes manual control.
    let timer;
    const halt = () => {
      if (!autoScrolling.current) return;
      autoScrolling.current = false;
      window.scrollTo(0, window.scrollY); // stops the native smooth animation
      cleanup();
    };
    const onKey = (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) halt();
    };
    const cleanup = () => {
      window.removeEventListener("wheel", halt, { passive: true });
      window.removeEventListener("touchmove", halt, { passive: true });
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
    timer = setTimeout(() => {
      autoScrolling.current = false;
      cleanup();
      history.replaceState(null, "", `#${id}`);
    }, 820);
    window.addEventListener("wheel", halt, { passive: true });
    window.addEventListener("touchmove", halt, { passive: true });
    window.addEventListener("keydown", onKey);
  }, []);

  const openQuote = () => setModalOpen(true);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-shell">
        {/* Section header */}
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-2 text-red-600">
            <Zap className="h-4 w-4 fill-red-600" />
            <span className="text-sm font-semibold uppercase tracking-wider">{label}</span>
          </div>
          <h2 className="t-h2 mx-auto mt-4 max-w-4xl text-ink-950">{header}</h2>
          {overview && (
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-ink-600">{overview}</p>
          )}
        </Reveal>

        {/* Mobile: horizontally scrollable tab strip */}
        <nav
          aria-label="Services on this page"
          className="mt-10 flex gap-3 overflow-x-auto pb-2 lg:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((it, i) => {
            const id = cardId(it.title);
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToCard(id);
                }}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-border-light bg-white text-ink-700 hover:border-red-300 hover:text-red-600"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {it.title}
              </a>
            );
          })}
        </nav>

        {/* Explorer: sticky rail (lg) + single responsive card list */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(260px,0.32fr)_minmax(0,0.68fr)] lg:items-start lg:gap-[clamp(48px,6vw,112px)]">
          {/* Sticky tab rail (desktop) */}
          <nav
            aria-label="Services on this page"
            className="sticky hidden lg:block"
            style={{ top: "calc(var(--collapsed-header-height, 116px) + 32px)", alignSelf: "start" }}
          >
            {items.map((it, i) => {
              const id = cardId(it.title);
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToCard(id);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative block border-b border-[#ECECEC] px-4 transition-colors duration-200",
                    isActive ? "bg-[#fff1f3]" : "bg-white hover:bg-[#fff7f8]"
                  )}
                  style={{ minHeight: 64 }}
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
                      {it.title}
                    </span>
                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        isActive ? "text-red-600" : "text-ink-300 group-hover:text-red-500"
                      )}
                    />
                  </div>
                </a>
              );
            })}
          </nav>

          {/* All cards in normal flow (rendered once, responsive) */}
          <div className="flex flex-col" style={{ gap: "clamp(56px, 7vw, 80px)" }}>
            {items.map((it, i) => {
              const id = cardId(it.title);
              const flip = i % 2 === 1;
              return (
                <Reveal key={id} delay={0}>
                  <article
                    id={id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    style={{ scrollMarginTop: SCROLL_MARGIN }}
                  >
                    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10" style={{ minHeight: 460 }}>
                      {/* Text side */}
                      <div className={cn("flex flex-col justify-center", flip ? "md:order-2" : "md:order-1")}>
                        <span className="font-heading text-sm font-bold tabular-nums text-ink-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-2 font-heading text-[26px] font-bold leading-tight text-ink-950 md:text-[30px]">
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

                      {/* Image side */}
                      <div className={cn("overflow-hidden rounded-xl bg-[#E5E5E5]", flip ? "md:order-1" : "md:order-2")}>
                        <button
                          type="button"
                          onClick={openQuote}
                          aria-label={`Get a free quote for ${it.title}`}
                          className="quote-image-btn relative block h-full w-full"
                        >
                          <Image
                            src={image}
                            alt={it.title}
                            fittingType="fill"
                            className="h-full min-h-[220px] w-full object-cover md:min-h-[460px]"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <ServiceQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} service={quoteService} />
    </section>
  );
}