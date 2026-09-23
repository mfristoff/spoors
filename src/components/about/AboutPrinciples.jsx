import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutPrinciples({ page }) {
  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <div className="site-shell">
        <div className="mb-10 max-w-[760px]">
          <div className="mb-5 flex items-center gap-2">
            <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">How we put it into practice</span>
          </div>
          <h2 className="text-[clamp(34px,4vw,56px)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">Promises you can see in the work.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {page.pillars.map(([title, text], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-border-light bg-background p-8 lg:min-h-[290px]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600"><Check className="h-5 w-5" /></span>
              <h3 className="mt-12 text-2xl font-bold text-ink-900">{title}</h3>
              <p className="mt-4 leading-relaxed text-ink-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}