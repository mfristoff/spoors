import { Link } from "react-router-dom";
import { images } from "@/lib/siteConfig";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const STATE = "CA";

const PRODUCTS = [
  {
    title: "Bryant Heating and Cooling Systems",
    l1: "Bryant Heating & Cooling",
    l2: (c) => `Systems installed for ${c} homes`,
    img: images.acService,
    path: "/services/air-conditioning/",
    alt: "Bryant heating and cooling system",
    desc: (c) => `Bryant air conditioners, heat pumps, and furnaces installed for dependable comfort and efficient performance in ${c} homes.`,
  },
  {
    title: "Fujitsu Ductless Mini-Splits",
    l1: "Fujitsu Ductless Mini-Splits",
    l2: (c) => `Zoned comfort for ${c} homes`,
    img: images.ductlessImage,
    path: "/services/ductless-mini-splits/",
    alt: "Fujitsu ductless mini-split system",
    desc: (c) => `Fujitsu ductless mini-split installation for additions, garages, home offices, and rooms without existing ductwork in ${c}.`,
  },
  {
    title: "Heat Pumps and Furnaces",
    l1: "Heat Pumps & Furnaces",
    l2: (c) => `Reliable heating for ${c}`,
    img: images.heatingFurnace,
    path: "/services/heating/",
    alt: "Heat pump and furnace installation",
    desc: (c) => `Heat pump and furnace installation sized for reliable, efficient heating and cooling in ${c}, ${STATE}.`,
  },
  {
    title: "Indoor Air Quality Systems",
    l1: "Indoor Air Quality Systems",
    l2: (c) => `Cleaner air for ${c} homes`,
    img: images.introAir,
    path: "/services/indoor-air-quality/",
    alt: "Indoor air quality filtration system",
    desc: (c) => `Whole-home filtration, purification, humidity control, and ventilation options for cleaner, more comfortable indoor air in ${c} homes.`,
  },
  {
    title: "Smart Thermostats and HVAC Controls",
    l1: "Smart Thermostats & Controls",
    l2: (c) => `Smarter comfort in ${c}`,
    img: images.heatingTuneup,
    path: "/services/maintenance-tune-ups/",
    alt: "Smart thermostat and HVAC controls",
    desc: (c) => `Smart thermostats and HVAC controls that simplify scheduling and help manage comfort and energy use in ${c}.`,
  },
  {
    title: "Commercial HVAC Systems",
    l1: "Commercial HVAC Systems",
    l2: (c) => `For ${c} businesses`,
    img: images.introTruck,
    path: "/contact-us/",
    alt: "Commercial HVAC system installation",
    desc: (c) => `Commercial HVAC equipment selected and installed for offices, shops, and other commercial properties in ${c}, ${STATE}.`,
  },
];

/**
 * HVAC Products and Systems — white section, split header (eyebrow + h2 left,
 * intro paragraph right), 2-col grid of product cards. Card: image with 64px
 * side insets clipped 20px at the top (rounded 30px), heading + description
 * below. Locally optimized "[Product] in [City], CA" h3 headlines.
 */
export default function AreaProducts({ area }) {
  const city = area.name;

  return (
    <section className="bg-white px-5 py-16 md:px-0 md:py-[120px]">
      <div className="mx-auto w-full" style={{ maxWidth: "min(1440px, calc(100% - 48px))" }}>
        {/* Split header */}
        <Reveal>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-3">
              <img src={BOLT} alt="" className="h-5 w-5" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-[#3B3B3B]">HVAC Products</span>
            </div>
            <h2
              className="mt-7 font-heading font-bold text-[#333333] leading-[1.15] tracking-[-0.01em]"
              style={{ fontSize: "clamp(28px, 3.4vw, 48px)" }}
            >
              Heating and Cooling Systems We Install in {city}, {STATE}
            </h2>
          </div>
          <p className="max-w-[440px] text-[20px] leading-[1.5] text-[#8A8A8A]">
            Explore heating, cooling, indoor air quality, and HVAC control systems installed for homes and
            businesses in {city}, {STATE}.
          </p>
        </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
            <Link
              to={p.path}
              aria-label={`Learn more about ${p.title} in ${city}, California`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E8E8E8] bg-white transition-colors duration-200 hover:border-[#D5D5D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <div className="relative px-[7.5%]">
                <div className="relative w-full" style={{ aspectRatio: "700 / 286" }}>
                  <Image
                    src={p.img}
                    alt={`${p.alt} in ${city}, California`}
                    className="absolute left-0 w-full overflow-hidden"
                    style={{ top: "-20px", height: "calc(100% + 20px)", borderRadius: "30px" }}
                    fittingType="fill"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col px-8 pb-10 pt-10 md:px-10">
                <h3
                  className="font-heading font-bold leading-[1.22] text-[#353535]"
                  style={{ fontSize: "clamp(22px, 2vw, 30px)", marginBottom: "20px", minHeight: "2.5em" }}
                >
                  <span className="block">{p.l1}</span>
                  <span className="block">{p.l2(city)}</span>
                </h3>
                <p className="text-[clamp(15px,1.1vw,18px)] leading-[1.55] text-[#7C7C7C]">{p.desc(city)}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}