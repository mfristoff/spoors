import { motion } from "framer-motion";

// Scroll-reveal wrapper matching the live site's Bricks fadeInUp / fadeIn-on-scroll effects.
export default function Reveal({ children, variant = "up", delay = 0, className = "" }) {
  const initial = variant === "up" ? { opacity: 0, y: 28 } : { opacity: 0 };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}