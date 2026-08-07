import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Image } from "@/components/ui/image";
import { heroFadeDown, heroFadeUp, heroStagger } from "@/lib/motionVariants";

export default function InteriorHero({ eyebrow, title, highlight, intro, image, imageAlt, crumbs }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-600">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={imageAlt || ""} fittingType="fill" quality={90} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-600/75" />
      </div>
      <Container className="py-14 md:py-20">
        <motion.div initial="hidden" animate="visible" variants={heroStagger} className="max-w-3xl">
          {crumbs && (
            <motion.div variants={heroFadeDown} className="mb-5">
              <Breadcrumbs items={crumbs} />
            </motion.div>
          )}
          {eyebrow && (
            <motion.span variants={heroFadeDown} className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-red-300">
              {eyebrow}
            </motion.span>
          )}
          <motion.h1 variants={heroFadeUp} className="t-h1 max-w-3xl text-white">
            {title} {highlight && <span className="text-red-highlight">{highlight}</span>}
          </motion.h1>
          {intro && (
            <motion.p variants={heroFadeUp} className="mt-5 max-w-2xl t-body-lg text-white/85">
              {intro}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
