import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const IMG = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/d877a2d9b_AdobeStock_419922957.jpeg";

const CAPABILITIES = [
  "Furnace & Heating Solution",
  "AC Repair & Emergency Service",
  "Planned Maintenance (Home Comfort Club)",
  "Air Quality Testing",
  "Smart Thermostat Installation",
];

const BADGES = [
  { stat: "30 Days", title: "Customer-First Philosophy", body: "Guaranteed cooling or we'll make it right at no cost." },
  { stat: "#1 Rated", title: "HVAC Team in Auburn", body: "Based on 500+ verified customer reviews." },
  { stat: "24/7", title: "Emergency Support", body: "Always on-call for your urgent heating & air needs." },
];

export default function ComfortManagement() {
  return (
    <section className="bg-neutral-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-[clamp(26px,3vw,40px)] font-bold leading-tight text-ink-950">
              Total Comfort Management by Auburn's Most Trusted Experts.
            </h2>
            <p className="mt-5 text-ink-600">
              From urgent repairs to long term efficiency, we combine big name technology with
              hometown integrity to keep your home running perfectly all year round. We take the
              guesswork out of HVAC maintenance, providing you with transparent solutions.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink-500">
              All our professional capabilities:
            </p>
            <ul className="mt-4 space-y-3">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="font-medium text-ink-800">{c}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact-us/"
              className="mt-8 inline-flex h-11 items-center rounded-md bg-red-600 px-6 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Explore More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="overflow-hidden rounded-xl">
            <img src={IMG} alt="HVAC comfort management" loading="eager" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BADGES.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.12}>
              <div className="h-full rounded-xl bg-white p-7 text-center shadow-sm">
                <p className="font-heading text-3xl font-bold text-red-600">{b.stat}</p>
                <p className="mt-3 font-heading text-lg font-semibold text-ink-950">{b.title}</p>
                <p className="mt-2 text-sm text-ink-600">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}