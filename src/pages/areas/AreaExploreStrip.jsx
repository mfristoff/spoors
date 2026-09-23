import { Link } from "react-router-dom";
import Reveal from "@/components/ui/Reveal";

const PIN = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5a354e235_explorespoorssectionlocationiconstouse.svg";

// Curated set of service areas shown on every location page (Figma selection,
// spellings corrected: Colfax, Folsom, Granite Bay).
const LOCATIONS = [
  { name: "Applegate", slug: "applegate", desc: "Foothills comfort — AC, heating, and maintenance for Applegate homes." },
  { name: "Lincoln", slug: "lincoln", desc: "Fast, honest HVAC repair and installation across Lincoln." },
  { name: "Colfax", slug: "colfax", desc: "Reliable heating and cooling service tailored to Colfax homes." },
  { name: "Folsom", slug: "folsom", desc: "Cooling and heating experts keeping Folsom comfortable year-round." },
  { name: "Granite Bay", slug: "granite-bay", desc: "Premium HVAC care and tune-ups for Granite Bay neighborhoods." },
  { name: "Auburn", slug: "auburn", desc: "Our hometown — trusted HVAC service in Auburn since 1925." },
];

/**
 * Explore Spoor's HVAC Service Areas — full-width dark-navy section, 3-col grid
 * of location cards. Each card: icon tile + "HVAC Services in [City], CA" h3 +
 * one-line description, fully clickable to the area page.
 */
export default function AreaExploreStrip() {
  return (
    <section className="bg-[#061044] px-5 py-14 md:px-0 md:py-[72px]">
      <div className="mx-auto w-full" style={{ maxWidth: "min(1440px, calc(100% - 48px))" }}>
        <Reveal>
        <h2
          className="font-heading font-bold text-white text-[36px] md:text-[48px] leading-[1.18] tracking-[-0.01em]"
          style={{ marginBottom: "48px" }}
        >
          Explore <span className="text-[#FF2B2F]">Spoor&apos;s</span> HVAC Service Areas
        </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.05}>
            <Link
              to={`/service-areas/${l.slug}/`}
              aria-label={`View HVAC services in ${l.name}, California`}
              className="group relative flex h-full items-center overflow-hidden rounded-xl bg-[#182252] transition-colors duration-200 hover:bg-[#1e2a60] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2B2F]"
              style={{ minHeight: "140px" }}
            >
              <div
                className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-xl bg-[#071247] md:h-[72px] md:w-[72px]"
                style={{ marginLeft: "16px" }}
              >
                <img src={PIN} alt="" aria-hidden="true" className="h-9 w-9 md:h-10 md:w-10" />
              </div>
              <div className="flex flex-1 flex-col justify-center pl-6 pr-12 py-7">
                <h3
                  className="font-heading text-[20px] font-bold leading-[1.2] text-white"
                  style={{ marginBottom: "12px", minHeight: "48px" }}
                >
                  <span className="block">HVAC Services</span>
                  <span className="block">in {l.name}, CA</span>
                </h3>
                <p className="text-[16px] leading-[1.4] text-[#8D93AA]" style={{ minHeight: "45px" }}>
                  {l.desc}
                </p>
              </div>
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-[#8D93AA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}