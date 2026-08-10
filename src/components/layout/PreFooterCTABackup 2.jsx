import { Link } from "react-router-dom";
import { business, images } from "@/lib/siteConfig";

const SERVICES = [
  "AC REPAIR & INSTALL",
  "HEATING SOLUTIONS",
  "AIR QUALITY SYSTEMS",
  "ANNUAL MAINTANANCES",
];

// Backup copy of the original PreFooterCTA — kept in case we need it later.
export default function PreFooterCTABackup() {
  return (
    <section className="relative overflow-hidden bg-[#0c1228]">
      {/* Background: gauges image */}
      <div className="absolute inset-0">
        <img
          src={images.acService}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Overlay: dark on left+right, solid at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,18,40,0.65) 0%, rgba(12,18,40,0.85) 30%, rgba(12,18,40,0.95) 55%, #0c1228 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(12,18,40,0.65) 0%, rgba(12,18,40,0.08) 30%, rgba(12,18,40,0.08) 70%, rgba(12,18,40,0.65) 100%)",
        }}
      />

      <div className="site-shell relative z-10 py-20 md:py-28">
        {/* Headline + service list */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-xl">
            <h2
              className="font-heading font-bold leading-tight text-white"
              style={{ fontSize: "clamp(30px, 3.6vw, 50px)" }}
            >
              Comfort that works<br />around you.
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/80">
              Our expert technicians handle the technicalities so you can focus on enjoying your home.
            </p>
          </div>

          <ul className="space-y-3 md:text-right">
            {SERVICES.map((s) => (
              <li key={s} className="text-[15px] font-bold tracking-wide text-white">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Red CTA bar — inside the dark section, near the bottom */}
        <div className="mt-16 md:mt-20">
          <div
            className="flex flex-col items-start justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center sm:px-8 sm:py-6"
            style={{ background: "#ff2e2e", borderRadius: 14 }}
          >
            <p className="font-heading text-[15px] font-bold uppercase tracking-wide text-white sm:text-[17px]">
              GOT A SYSTEM IN NEED<br />OF A REFRESH?
            </p>
            <Link
              to={business.schedulingUrl}
              className="inline-flex shrink-0 items-center gap-3 rounded-md border-2 border-white px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-[#ff2e2e]"
            >
              Schedule Online
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#ff2e2e] text-xs">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}