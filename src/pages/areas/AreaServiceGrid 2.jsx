import { Link } from "react-router-dom";
import { services, images } from "@/lib/siteConfig";
import { Image } from "@/components/ui/image";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const STATE = "CA";

const SEO_NAMES = {
  "air-conditioning": "AC Repair & Installation",
  heating: "Heating & Furnace Service",
  "indoor-air-quality": "Indoor Air Quality",
  "emergency-repairs": "Emergency HVAC Repair",
  "maintenance-tune-ups": "HVAC Maintenance & Tune-Ups",
  "ductless-mini-splits": "Ductless Mini-Split Service",
  "swamp-coolers": "Swamp Cooler Service",
  "water-heater-services": "Water Heater Service",
  "planned-maintenance": "Planned Maintenance",
};

// Natural two-line headlines per service. Each keeps the city + "CA" for local
// SEO but varies the phrasing so cards don't all end in "in {City}, CA".
const HEADLINES = {
  "air-conditioning":      { l1: (c) => `${c} AC Repair & Installation`, l2: (c, loc) => `Cooling service for ${loc} homes` },
  heating:                 { l1: () => `Heating & Furnace Service`,       l2: (c, loc) => `Dependable heat across ${loc}` },
  "indoor-air-quality":    { l1: () => `Indoor Air Quality Solutions`,    l2: (c, loc) => `Cleaner air for ${loc} homes` },
  "emergency-repairs":     { l1: () => `24/7 Emergency HVAC Repair`,       l2: (c, loc) => `Fast help in ${loc}` },
  "maintenance-tune-ups":  { l1: () => `HVAC Maintenance & Tune-Ups`,     l2: (c, loc) => `Tune-ups for ${loc} homes` },
  "ductless-mini-splits":  { l1: () => `Ductless Mini-Split Service`,     l2: (c, loc) => `For ${loc} homes & additions` },
  "swamp-coolers":         { l1: () => `Swamp Cooler Service`,            l2: (c, loc) => `Across ${loc}` },
  "water-heater-services": { l1: () => `Water Heater Service & Repair`,  l2: (c, loc) => `For ${loc} homeowners` },
  "planned-maintenance":   { l1: () => `Planned Maintenance Plans`,       l2: (c, loc) => `Year-round care in ${loc}` },
};

/**
 * HVAC Services We Provide in {area} — overlay-style cards with locally
 * optimized "[Service] in [City], CA" h3 headlines, a full-width Commercial
 * HVAC feature card, and a 24/7 emergency call bar.
 */
export default function AreaServiceGrid({ area }) {
  const city = area.name;
  const loc = `${city}, ${STATE}`;
  const standard = services.slice(0, 9);

  const Card = ({ s }) => {
    const seoName = SEO_NAMES[s.slug] || s.title;
    const hl = HEADLINES[s.slug] || { l1: () => seoName, l2: (c, loc) => `in ${loc}` };
    return (
      <Link
        to={`/services/${s.slug}/`}
        aria-label={`View ${seoName} services in ${city}, California`}
        className="group relative flex w-full flex-col overflow-hidden rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 10px 30px rgba(20,30,60,0.08), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(200,210,230,0.35)",
          transition: "box-shadow 200ms ease, transform 200ms ease",
        }}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
          <Image
            src={s.image}
            alt={`${seoName} technician servicing equipment in ${city}, California`}
            className="absolute inset-0 h-full w-full"
            fittingType="fill"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3
            className="line-clamp-2 font-heading text-lg font-bold leading-[1.25] text-ink-900"
            style={{ minHeight: "45px" }}
          >
            {hl.l1(city, loc)}
            <span className="block">{hl.l2(city, loc)}</span>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-600" style={{ minHeight: "40px" }}>
            {s.short}
          </p>
          <span
            className="mt-auto inline-flex h-[42px] w-full items-center justify-center rounded-[8px] bg-[#FF2D2D] text-sm font-semibold text-white"
            style={{ border: "2.5px solid #EAEAEA" }}
          >
            See More
          </span>
        </div>
      </Link>
    );
  };

  return (
    <section className="bg-neutral-bg py-14 lg:py-20">
      <div className="site-shell">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <img src={BOLT} alt="" className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">Professional HVAC Services</span>
          </div>
          <h2
            className="font-heading text-ink-950"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            HVAC Services We Provide in <span className="text-red-600">{city}</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standard.map((s) => (
            <Card key={s.slug} s={s} />
          ))}
        </div>

        {/* Full-width Commercial HVAC card */}
        <Link
          to="/contact-us/"
          aria-label={`Learn more about commercial HVAC services in ${city}, California`}
          className="group mt-6 block w-full overflow-hidden rounded-[20px] bg-navy-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <div className="relative w-full aspect-[16/10] md:aspect-[3.75/1]">
            <Image
              src={images.introTruck}
              alt={`Commercial HVAC technician servicing rooftop equipment in ${city}, California`}
              className="absolute inset-0 h-full w-full"
              fittingType="fill"
            />
            <div
              className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-8"
              style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(6px)" }}
            >
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-bold leading-tight text-white md:text-2xl">
                  Commercial HVAC Services in {loc}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
                  Commercial HVAC installation, repair, and maintenance for businesses in {loc}, with dependable
                  service for year-round system performance.
                </p>
              </div>
              <span className="inline-flex w-full items-center justify-center rounded-[9px] border border-[#D1D1D1] bg-[#FF2D2D] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-0.5 md:w-auto">
                See More
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}