import { motion } from "framer-motion";

export default function AboutStory({ page }) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
          <img src={page.storyImage} alt={`Spoor's team supporting ${page.title.toLowerCase()}`} loading="lazy" decoding="async" className="h-[420px] w-full rounded-2xl object-cover object-center lg:h-[620px]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="mb-5 flex items-center gap-2">
            <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">OUR PRIORITY</span>
          </div>
          <h2 className="max-w-[720px] text-[clamp(34px,4vw,58px)] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">{page.storyTitle}</h2>
          <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink-600">
            {page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </motion.div>
      </div>
    </section>);

}