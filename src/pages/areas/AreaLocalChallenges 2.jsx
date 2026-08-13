import Reveal from "@/components/ui/Reveal";
import { Image } from "@/components/ui/image";
import { Check, ArrowRight } from "lucide-react";
import { localChallenges } from "@/lib/areaContent";

/**
 * Local challenges: two-column card — location image left, eyebrow + heading +
 * short local-context paragraphs + useful internal links right.
 * Light neutral card, rounded, image ~44%, copy ~56%.
 */
export default function AreaLocalChallenges({ area, image, onQuote }) {
  const c = localChallenges(area.name);
  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        <Reveal>
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-border-light bg-neutral-bg p-6 md:grid-cols-2 md:gap-12 md:p-10">
          <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 3" }}>
            <Image src={image} alt={`Spoor's HVAC technician on a service call for a ${area.name}, California home`} className="h-full w-full" fittingType="fill" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">{c.eyebrow}</p>
            <h2
              className="mt-5 font-heading text-ink-950"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              {c.heading}
            </h2>
            {c.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-ink-600 t-body">{p}</p>
            ))}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {c.links.map((l) => (
                <button key={l.label} type="button" onClick={() => onQuote(l.label)} className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-red-600 underline underline-offset-4 hover:text-red-700">
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}