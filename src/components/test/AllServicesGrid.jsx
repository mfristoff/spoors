import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { services } from "@/lib/siteConfig";

const SWAMP_COOLER_CARD_IMAGE =
  "/assets/images/update-1/spoors-auburn-ca-home-swamp-cooler-card.webp";

const cardImageFor = (s) =>
  s.slug === "swamp-coolers" ? SWAMP_COOLER_CARD_IMAGE : s.image;

import { cardEntrance, entranceViewport } from "@/lib/motionVariants";

const ROW_SIZE = 3;

const rows = [];
for (let i = 0; i < services.length; i += ROW_SIZE) rows.push(services.slice(i, i + ROW_SIZE));

export default function AllServicesGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-0 pt-16 pb-0">
      
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <img
          src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg"
          alt=""
          aria-hidden="true"
          className="mx-auto h-6 w-6" />
        
        <p className="mt-3 font-heading text-[13px] font-bold uppercase tracking-[0.22em] text-red-600">
          Spoor&apos;s Heating &amp; Air
        </p>
        <h2 className="mt-4 font-heading text-[clamp(36px,4.2vw,54px)] font-bold leading-[1.06] tracking-[-0.01em] text-[#1f2937]">
Residential HVAC <span className="text-red-600">Services</span> in Auburn &amp; Placer County
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-500">
          From cooling and heating to indoor air quality and water heaters, our family-owned team has kept Auburn homes comfortable since 1925.
        </p>
      </div>

      {/* Service grid */}
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-y-8">
        {rows.map((row, ri) =>
        <div key={ri} className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {row.map((s) =>
          <motion.div
            key={s.slug}
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={entranceViewport}
            className="h-full will-change-transform">
                <Link
              to={`/services/${s.slug}/`}
              className="group travel-border flex h-full flex-col rounded-[20px] border border-black/[0.07] bg-white transition-all duration-300 hover:border-black/15 hover:shadow-[0_10px_36px_rgba(5,13,56,0.10)]">
              
                  <div className="relative aspect-[5/3] overflow-hidden rounded-t-[20px]">
                    <Image src={cardImageFor(s)}
                alt={s.title}
                fittingType="fill"
                className="h-full w-full" />
                
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-6">
                    <h3 className="font-heading text-[25px] font-semibold leading-tight text-[#1f2937]">{s.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink-500">{s.short}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[16px] font-semibold text-red-600">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
          )}
          </div>
        )}
      </div>

      {/* Closing CTA strip */}
      <div className="mx-auto mt-10 flex max-w-[1440px] flex-col items-center justify-between gap-7 rounded-2xl bg-[#0a1226] px-6 py-9 text-center shadow-lg sm:flex-row sm:gap-5 sm:px-7 sm:py-7 sm:text-left">
        <div>
          <p className="font-heading text-[28px] font-bold leading-[1.08] text-white md:text-[20px]">Not sure which service you need?</p>
          <p className="mt-3 text-[16px] leading-[1.5] text-white/70 md:mt-1 md:text-[15px]">Get honest guidance and a free estimate from Auburn&apos;s trusted HVAC team.</p>
        </div>
        <Link
          to="/contact-us/"
          className="inline-flex shrink-0 items-center gap-2 rounded-[9px] bg-red-600 px-7 py-3.5 text-[16px] font-semibold text-white transition-colors hover:bg-red-700">
          
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>);

}