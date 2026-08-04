import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/areaContent";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";

/**
 * A predictable, precision process — same native-scroll/reveal system,
 * Figma's stacked layout. Left intro is sticky on desktop; right cards stay
 * in normal document flow and reveal once via IntersectionObserver. Prior
 * cards remain visible. A subtle "Step X of Y" indicator tracks the card
 * nearest the viewport center. Nothing moves the page.
 */
export default function AreaProcessScroll({ area }) {
  const [current, setCurrent] = useState(1);
  const cardRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!vis.length) return;
        const idx = cardRefs.current.indexOf(vis[0].target);
        if (idx >= 0) setCurrent(idx + 1);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.2, 0.5, 1] }
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-pad bg-neutral-bg">
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        {/* Sticky intro (desktop) */}
        <div
          className="lg:sticky lg:self-start"
          style={{ top: "calc(var(--collapsed-header-height, 116px) + 48px)" }}
        >
          <div className="flex items-center gap-2">
            <img src={BOLT} alt="" className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">Our Process</span>
          </div>
          <h2
            className="mt-3 font-heading text-ink-950"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            A Predictable, Precision Process for {area.name} HVAC.
          </h2>
          <p className="mt-5 max-w-md text-ink-600 t-body-lg">
            From the first call to verified mechanical performance, Spoor's keeps every step clear, honest, and on your terms — no surprises, no pressure.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="whitespace-nowrap text-sm font-semibold text-red-600">
              Step {current} of {processSteps.length}
            </span>
            <span className="relative h-px flex-1 bg-[#ECECEC]">
              <span className="absolute left-0 top-0 h-full bg-red-600 transition-all duration-500" style={{ width: `${(current / processSteps.length) * 100}%` }} />
            </span>
          </div>
        </div>

        {/* Stacked cards in normal flow */}
        <div className="flex flex-col gap-6">
          {processSteps.map((s, i) => (
            <Reveal key={s.n}>
              <article
                ref={(el) => (cardRefs.current[i] = el)}
                className="rounded-2xl border border-border-light bg-white p-7 md:p-9"
              >
                <span className="font-heading text-3xl font-bold text-red-600">{s.n}</span>
                <h3 className="mt-3 font-heading text-xl font-bold text-ink-950">{s.title}</h3>
                <p className="mt-2 text-ink-600">{s.text} Serving {area.name}, CA.</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}