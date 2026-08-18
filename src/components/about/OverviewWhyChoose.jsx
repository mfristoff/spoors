import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { images } from "@/lib/siteConfig";

const BOLT = "/assets/ui/spoors-bolt-mark.svg";

const otherItems = [
  "Inconsistent service quality",
  "Hidden fees and surprise costs",
  'Reactive "break-fix" approach',
  "Outdated diagnostic tools",
];

const spoorsItems = [
  "Precision-certified technicians",
  "Transparent, upfront pricing",
  "Proactive Home Comfort Club care",
  "Advanced digital system health checks",
];

export default function OverviewWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="site-shell relative z-10">
        <div className="mb-8 text-center md:mb-12">
          <div className="mb-5 flex items-center justify-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Why Choose Us</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-[-0.025em] text-ink-900">Why Choose Spoor's</h2>
          <p className="mx-auto mt-4 max-w-[680px] leading-relaxed text-ink-600">
            Stop settling for temporary fixes and unpredictable service. Let our expert team provide the precision care and advanced technology your home deserves.
          </p>
        </div>

        <div className="relative grid items-center gap-4 overflow-hidden rounded-2xl border border-border-light bg-white p-4 shadow-lg md:gap-8 md:p-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border-light bg-neutral-bg p-5 md:p-8"
          >
            <h3 className="mb-6 text-lg font-bold text-ink-400">Other Businesses</h3>
            <ul className="space-y-2">
              {otherItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                  className="flex items-center gap-3 text-ink-500"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-[#f0c3c3] bg-[#fcf8f7] p-5 md:p-8"
          >
            <img
              src={BOLT}
              alt=""
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 object-contain opacity-[0.07]"
            />
            <img src={images.logo} alt="Spoor's Heating & Air" className="relative z-10 mb-6 h-12 w-auto object-contain lg:h-16" />
            <ul className="relative z-10 space-y-2">
              {spoorsItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.08, ease: "easeOut" }}
                  className="flex items-center gap-3 font-medium text-ink-900"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.84 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.04, ease: "easeOut" }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c1228]"
                  >
                    <Check className="h-3.5 w-3.5 text-white" />
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
