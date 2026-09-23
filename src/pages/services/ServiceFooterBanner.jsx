import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const bannerServices = [
  "AC REPAIR & INSTALL",
  "HEATING SOLUTIONS",
  "AIR QUALITY SYSTEMS",
  "ANNUAL MAINTENANCE",
];

export default function ServiceFooterBanner() {
  return (
    <>
      {/* Navy banner */}
      <section className="bg-navy-600">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <h2 className="t-h2 text-white">Comfort that works around you.</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bannerServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <span className="h-2 w-2 rounded-full bg-red-600" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Red CTA bar */}
      <section className="bg-red-600">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row md:px-8">
          <p className="t-h5 text-center font-bold uppercase tracking-wide text-white">
            Got a safety concern? Or a repair need?
          </p>
          <Link
            to="/contact-us/"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 font-semibold text-red-600 transition-colors hover:bg-red-50"
          >
            Schedule online <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}