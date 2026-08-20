import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";

const TEAM_IMG = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/25c356f1d_AdobeStock_319218928.jpeg";

export default function TeamCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={TEAM_IMG} alt="Spoor's HVAC technicians at work" className="h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-600/90 via-navy-600/75 to-navy-600/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl py-20 md:py-28">
              <p className="font-heading text-[clamp(24px,2.6vw,38px)] font-bold leading-snug text-white">
                Spoor's brings together expert technicians, advanced HVAC technology, and a
                customer-first philosophy to help Auburn families simplify their home comfort and
                live every season with absolute confidence.
              </p>
              <Link
                to="/about-us/"
                className="mt-8 inline-flex h-12 items-center rounded-md bg-red-600 px-7 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Learn About Spoor's
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}