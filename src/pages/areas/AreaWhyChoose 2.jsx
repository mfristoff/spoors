import { Image } from "@/components/ui/image";
import { images } from "@/lib/siteConfig";
import { whyChooseItems } from "@/lib/areaContent";
import Reveal from "@/components/ui/Reveal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const BRYANT_LOGO = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/f57624435_bryant-logo.png";

/**
 * Why Homeowners Choose Spoor's — simple card grid (image + numbered title +
 * description). No scroll gating; each reason is visible at once.
 */
export default function AreaWhyChoose({ area }) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="site-shell">
        <div className="flex items-center justify-center gap-2">
          <img src={BOLT} alt="" className="h-4 w-4" />
          <span className="text-sm font-semibold uppercase tracking-wider text-red-600">{area.name} HVAC Experts</span>
        </div>
        <h2
          className="mt-6 text-center font-heading text-ink-950"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          Why Homeowners Choose Spoor&apos;s
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, i) => {
            const isBryant = item.n === "02";
            return (
            <Reveal key={item.n} delay={i * 0.08}>
            <article
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(20,30,60,0.06)]"
            >
              <div className="overflow-hidden" style={{ aspectRatio: "16 / 10", background: isBryant ? "#0a0a0a" : undefined }}>
                <Image
                  src={isBryant ? BRYANT_LOGO : images[item.image]}
                  alt={item.title}
                  className={isBryant ? "h-full w-full object-contain" : "h-full w-full object-cover"}
                  fittingType={isBryant ? "fit" : "fill"}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xl font-bold text-red-600">{item.n}</span>
                  <h3 className="font-heading text-lg font-bold text-ink-950">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.text}</p>
              </div>
            </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}