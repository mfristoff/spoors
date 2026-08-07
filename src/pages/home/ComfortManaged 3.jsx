import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IMG = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/6f3579a4f_AdobeStock_318148618.jpeg";

const STATS = [
  { stat: "15%", title: "Lower Energy Bills", body: "Average savings for our Home Comfort Club members." },
  { stat: "$0", title: "Hidden Fees Guarantee", body: "Honest, upfront pricing on every single estimate." },
  { stat: "5-Star", title: "Local Reputation", body: "Top-rated HVAC service across Auburn & Meadow Vista." },
];

export default function ComfortManaged() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-[clamp(26px,3vw,40px)] font-bold leading-tight text-ink-950">
              Your Home's Comfort, Managed in One Place.
            </h2>
            <p className="mt-5 text-ink-600">
              Simplify your life with a single source for all heating, cooling, and air quality
              needs. From scheduled tune-ups to emergency fixes, we keep your systems organized and
              your home consistently comfortable.
            </p>
            <Link
              to="/contact-us/"
              className="mt-8 inline-flex h-11 items-center rounded-md bg-red-600 px-6 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Explore Maintenance Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="overflow-hidden rounded-xl bg-neutral-bg">
            <img src={IMG} alt="Home comfort management" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="h-full rounded-xl bg-navy-600 p-7 text-white">
                <p className="font-heading text-3xl font-bold text-red-300">{s.stat}</p>
                <p className="mt-3 font-heading text-lg font-semibold">{s.title}</p>
                <p className="mt-2 text-sm text-white/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}