import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/siteConfig";

const HOT = { accent: "#e31e24", soft: "#fbf8f8", rgb: "227,30,36" };
const COLD = { accent: "#304fee", soft: "#f8f9fc", rgb: "48,79,238" };

const SERVICES = [
  {
    title: "AC REPAIR",
    slug: "air-conditioning",
    image: images.acHero,
    cold: true,
    description:
      "Fast, reliable air conditioning repair across Auburn and the Sierra foothills. Our licensed techs diagnose cooling issues quickly and restore comfort to your home with honest, upfront pricing — no hidden fees, ever. From refrigerant leaks and capacitor failures to full system diagnostics, we service every major brand and get your cooling back online fast.",
    learn: "Learn more about AC repair",
    cta: "Explore Auburn AC Repair",
    barTitle: "Fast, Honest AC Repair",
    barSub: "Cooling restored across Auburn & the foothills",
  },
  {
    title: "EMERGENCY REPAIR",
    slug: "emergency-repairs",
    image: images.introTech,
    cold: true,
    description:
      "When heating or cooling fails at the worst moment, our 24/7 emergency line is answered around the clock. We dispatch fast to restore comfort to your Auburn-area home, day or night, weekends and holidays. A live local technician — not a call center — is ready to help whenever your system goes down.",
    learn: "Learn more about emergency repair",
    cta: "Explore 24/7 Emergency Repair",
    barTitle: "24/7 Emergency Response",
    barSub: "Live local techs, day or night",
  },
  {
    title: "HEATING REPAIR",
    slug: "heating",
    image: images.heatingFurnace,
    cold: false,
    description:
      "Dependable furnace and heat pump repairs to restore reliable heat through cold foothill nights. We service all major brands with honest recommendations and clean, skilled workmanship that protects your home. Whether it's a pilot issue, faulty igniter, or aging heat exchanger, we'll pinpoint the problem and fix it right the first time.",
    learn: "Learn more about heating repair",
    cta: "Explore Auburn Heating Repair",
    barTitle: "Dependable Heating Repair",
    barSub: "Furnace & heat pump fixes done right",
  },
  {
    title: "MAINTENANCE",
    slug: "maintenance-tune-ups",
    image: images.acService,
    cold: true,
    description:
      "Seasonal tune-ups that keep your system efficient, catch problems early, and help avoid costly breakdowns. Planned maintenance protects your equipment warranty and extends the life of your HVAC system. Members of our Home Comfort Club enjoy priority scheduling, discounted repairs, and peace of mind all year long.",
    learn: "Learn more about HVAC maintenance",
    cta: "Explore HVAC Tune-Up Plans",
    barTitle: "Home Comfort Club",
    barSub: "Tune-ups that prevent costly breakdowns",
  },
];

function BlobIcon({ active }) {
  return (
    <img
      src={
        active
          ? "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/bdcbc65ab_Opentabbullet-v2.png"
          : "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/9bb8bc109_closedtabbullet-2.png"
      }
      alt=""
      className="w-[14px] h-[18px] object-contain"
    />
  );
}

export default function ResidentialServicesNew() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  const theme = s.cold ? COLD : HOT;

  return (
    <section className="relative w-full px-4 py-[clamp(16px,2.6vw,50px)] md:px-[clamp(16px,3.7vw,71px)] lg:py-[clamp(25px,5.2vw,100px)]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 22%, #243a7d 0%, #131e4a 45%, #0c1228 82%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(58% 46% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1778px] rounded-[16px] bg-white shadow-xl">
        <div className="flex flex-col gap-12 p-6 lg:gap-20 lg:p-[clamp(16px,3.9vw,75px)]">
          <div className="flex justify-center">
          <h2 className="text-center text-[clamp(28px,2.8vw,48px)] font-bold leading-[1.1] text-[#4A4A4A]">
            Residential HVAC <span className="text-red-600">Services</span><br />in Auburn, CA
          </h2>
          </div>

          <div className="flex flex-col gap-8 rounded-[20px] lg:flex-row lg:gap-0">
            {/* Left: list */}
            <div className="flex w-full flex-col gap-3 lg:max-w-[829px]">
              {SERVICES.map((svc, i) => {
                const isActive = i === active;
                const t = svc.cold ? COLD : HOT;
                return (
                  <div
                    key={svc.title}
                    onClick={() => setActive(i)}
                    style={{ backgroundColor: isActive ? t.soft : "#ffffff" }}
                    className="flex cursor-pointer flex-col gap-5 rounded-[16px] border border-[#ececf1] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors duration-150 hover:border-[#d8d8df] hover:bg-[#fafafa] lg:p-8"
                  >
                    <div className="flex items-start gap-6">
                      {/* Soft brand blob — pale when closed, vibrant when open */}
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                        <BlobIcon active={isActive} />
                      </div>
                      <div className={`flex flex-1 flex-col gap-[19px] transition-opacity duration-150 ${isActive ? "opacity-100" : "opacity-60"}`}>
                        <h3 className={`text-[clamp(14px,1.35vw,26px)] font-bold ${isActive ? "text-[#252525]" : "text-[#242424]"}`}>
                          {svc.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-clip text-[16px] leading-relaxed text-[#515151]"
                            >
                              {svc.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Learn more — left-aligned with the text above, fast fade */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
                            >
                              <Link
                                to={`/services/${svc.slug}/`}
                                className="group relative inline-flex items-center gap-2 pb-1"
                              >
                                <span className="text-[15px] font-semibold text-[#242424]">{svc.learn}</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: t.accent }} />
                                <motion.span
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                                  style={{ backgroundColor: t.accent }}
                                />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: image (changes per active service) */}
            <div className="relative min-h-[400px] w-full lg:max-w-[851px] lg:min-h-[830px]">
              <div className="absolute inset-0 overflow-clip rounded-b-[20px] bg-black/10 lg:rounded-r-[20px] lg:rounded-b-none">
                <AnimatePresence>
                  <motion.img
                    key={active}
                    src={s.image}
                    alt={s.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Sticky liquid-glass bar — stays in view while scrolling the section */}
              <div className="sticky top-[calc(var(--expanded-header-height,220px)_+_8px)] z-10 mx-6 mt-6 flex flex-col items-center justify-between gap-4 rounded-[14px] border border-white/25 bg-black/25 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:flex-row lg:max-w-[803px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="sm:flex-1 text-center sm:text-left"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.12)" }}
                  >
                    <p className="text-[clamp(13px,1.05vw,20px)] font-bold leading-[1.2] text-white">
                      {s.barTitle}
                    </p>
                    <p className="text-[clamp(11px,0.8vw,14px)] font-medium leading-[1.3] text-white/80">
                      {s.barSub}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <Link
                  to={`/services/${s.slug}/`}
                  className="whitespace-nowrap rounded-[10px] border border-white/25 px-6 py-3.5 text-center font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all hover:opacity-90"
                  style={{ backgroundColor: theme.accent }}
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}