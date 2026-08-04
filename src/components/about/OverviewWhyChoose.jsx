import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { images } from "@/lib/siteConfig";

const BOLT = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/04dc9d564_Bolt.svg";

const otherItems = [
"Inconsistent service quality",
"Hidden fees and surprise costs",
'Reactive "break-fix" approach',
"Outdated diagnostic tools"];


const spoorsItems = [
"Precision-certified technicians",
"Transparent, upfront pricing",
"Proactive Home Comfort Club care",
"Advanced digital system health checks"];


export default function OverviewWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decorative Shapes — soft blush diagonal framing */}
      <div className="pointer-events-none absolute top-[-25%] left-[-18%] z-0 h-[90%] w-[44%] rotate-[14deg] rounded-[120px]" style={{ background: "#FDF5F5" }} />
      <div className="pointer-events-none absolute bottom-[-25%] right-[-18%] z-0 h-[90%] w-[44%] rotate-[-14deg] rounded-[120px]" style={{ background: "#FDF5F5" }} />
      <div className="site-shell relative z-10">
        <div className="mb-8 md:mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Why Choose Us</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-[-0.025em] text-ink-900">Why Choose Spoor's</h2>
          <p className="mx-auto mt-4 max-w-[680px] leading-relaxed text-ink-600">
            Stop settling for temporary fixes and unpredictable service. Let our expert team provide the precision care and advanced technology your home deserves.
          </p>
        </div>

        <div className="relative grid items-center gap-4 md:gap-8 rounded-2xl border border-border-light bg-white p-4 md:p-8 shadow-lg lg:grid-cols-2">
          <img src={BOLT} alt="" className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 object-contain" style={{ opacity: 0.05 }} />
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border-light bg-neutral-bg p-5 md:p-8">
            <h3 className="mb-6 text-lg font-bold text-ink-400">Other Businesses</h3>
            <ul className="space-y-2">
              {otherItems.map((item) =>
              <li key={item} className="flex items-center gap-3 text-ink-500">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-red-600/20 bg-red-50/50 p-5 md:p-8">
            <img src={images.logo} alt="Spoor's Heating & Air" className="mb-6 h-12 w-auto object-contain lg:h-16" />
            <ul className="space-y-2">
              {spoorsItems.map((item) =>
              <li key={item} className="flex items-center gap-3 font-medium text-ink-900">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--figma-subtle))]">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}