import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const _I = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/";
const SERVICES = [
  {
    title: "HEATING REPAIR",
    img: _I + "36a13156d_AdobeStock_150249395.jpeg",
  },
  {
    title: "AC REPAIR",
    img: _I + "8ecf7e092_AdobeStock_289084367.jpeg",
  },
  {
    title: "EMERGENCY REPAIR",
    img: _I + "25c356f1d_AdobeStock_319218928.jpeg",
  },
  {
    title: "MAINTANANCE",
    img: _I + "7dc8f7015_AdobeStock_482908998.jpeg",
  },
];

const COPY =
  "Keep your cool at home or work by calling Spoor's Heating & Air Conditioning for quality air conditioner service any time of day!";

export default function ResidentialServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-heading text-[clamp(28px,3.6vw,46px)] font-bold text-ink-950">
            Residential Services.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Link
                to="/services/"
                className="group block h-full overflow-hidden rounded-xl border border-border-light bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold tracking-wide text-ink-950">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{COPY}</p>
                  <span className="mt-4 inline-flex items-center font-semibold text-red-600">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Repeated solutions strip (mirrors live site) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-xl bg-navy-600 p-7 text-white">
                <p className="font-heading text-lg font-semibold leading-snug">
                  Expert HVAC Solutions Designed for Year-Round Home Comfort
                </p>
                <Link to="/services/" className="mt-4 inline-flex items-center font-semibold text-red-300 hover:text-red-200">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}