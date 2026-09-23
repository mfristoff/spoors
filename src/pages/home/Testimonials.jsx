import Reveal from "@/components/ui/Reveal";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "Our heater died on the coldest night of the year. Spoor's had someone at our door in under two hours. Saved our family's weekend.",
    name: "David Miller",
    meta: "Home Comfort Club Member since 2022",
  },
  {
    quote:
      "Honest, fair pricing and technicians who actually took the time to explain everything. We've finally found our forever HVAC company.",
    name: "Sarah Jenkins",
    meta: "Auburn, CA",
  },
  {
    quote:
      "They installed our new AC in a day and cleaned up like they were never here. The house has never been this comfortable.",
    name: "Marcus Lee",
    meta: "Meadow Vista, CA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(28px,3.6vw,46px)] font-bold text-ink-950">
            The Voice of Our Community.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                <Quote className="h-9 w-9 text-red-600" />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-ink-700">"{r.quote}"</p>
                <div className="mt-6 border-t border-border-light pt-4">
                  <p className="font-heading font-semibold text-ink-950">{r.name}</p>
                  <p className="text-sm text-ink-500">{r.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}