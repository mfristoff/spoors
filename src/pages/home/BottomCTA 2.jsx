import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  function onSubmit(e) {
    e.preventDefault();
    window.location.href = "/contact-us/";
  }

  return (
    <section className="bg-navy-600 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[clamp(28px,3.6vw,46px)] font-bold leading-tight text-white">
            Comfort that works around you,
          </h2>
          <p className="mt-3 max-w-xl text-white/70">
            Get a fair, transparent quote from Auburn's trusted HVAC experts.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-14 w-full flex-1 rounded-md border border-white/15 bg-white/5 px-5 text-white placeholder-white/50 outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-red-600 px-8 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Get a Quote <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}