import { motion, useReducedMotion } from "framer-motion";
import { useSeo } from "@/lib/useSeo";
import { business } from "@/lib/siteConfig";
import { MapPin, Printer, Mail, Clock } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";

const BOLT_ICON = "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/9e8ba233e_Bolt.svg";
const EASE = [0.22, 1, 0.36, 1];

const LOCATIONS = [
  {
    label: "Meadow Vista Location",
    lines: ["908 Evergreen Lane", "Meadow Vista, CA 95722"],
    href: "https://www.google.com/maps/search/?api=1&query=908+Evergreen+Lane+Meadow+Vista+CA+95722",
    external: true,
    icon: MapPin,
  },
  {
    label: "Auburn Location",
    lines: ["345 Sacramento St., #5", "Auburn, CA 95603"],
    href: "https://www.google.com/maps/search/?api=1&query=345+Sacramento+St+Suite+5+Auburn+CA+95603",
    external: true,
    icon: MapPin,
  },
  {
    label: "Send a Fax",
    lines: ["Fax documents to our office", "(530) 878-3862"],
    href: "fax:+15308783862",
    external: false,
    icon: Printer,
  },
  {
    label: "Email Us",
    lines: ["Questions or scheduling", business.email],
    href: business.emailLink,
    external: false,
    icon: Mail,
  },
  {
    label: "Standard Hours",
    lines: ["Mon – Fri:", "7:30am – 5:30pm"],
    href: business.phoneLink,
    external: false,
    icon: Clock,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  useSeo({
    title: "Contact Us | Spoor's Heating & Air",
    description: "Contact Spoor's Heating & Air in Auburn, California. Call (530) 823-1843 or request a free estimate online.",
    path: "/contact-us/",
  });

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-neutral-bg">
      {/* ── Hero ── */}
      <section className="bg-neutral-bg px-5 pt-14 pb-0 text-center md:px-0 md:pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
          }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: EASE }} className="flex items-center justify-center gap-2">
            <img src={BOLT_ICON} alt="" aria-hidden="true" className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Contact Us</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: EASE }}
            className="mx-auto mt-5 max-w-[340px] font-heading text-[38px] font-bold leading-[1.02] tracking-[-0.022em] text-ink-950 md:mt-6 md:max-w-none md:text-[clamp(32px,4vw,52px)] md:leading-[1.15] md:tracking-[-0.01em]"
          >
            Get a Fair Estimate From Auburn&rsquo;s{" "}
            <span className="md:block">Trusted HVAC Experts.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: EASE }}
            className="mx-auto mt-5 max-w-[640px] text-[14px] font-medium leading-[1.6] text-ink-600/80 md:mt-6 md:text-[15px]"
          >
            Use the form below to ask a question, request more info, or schedule a service.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Scheduler form ── */}
      <section className="bg-neutral-bg pb-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.992 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.72, ease: EASE }}
          className="site-shell max-w-5xl"
        >
          <QuoteForm service="General Contact Request" />
        </motion.div>
      </section>

      {/* ── Get in Touch / Map ── */}
      <section className="py-16">
        <div className="site-shell max-w-5xl">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center font-heading text-[28px] font-bold text-ink-950 md:text-[36px]"
          >
            Get in Touch with <span className="text-red-600">Spoor's</span>
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.06, ease: EASE }}
            className="mt-8 overflow-hidden rounded-2xl border border-border-light"
            style={{ height: 380 }}
          >
            <iframe
              title="Spoor's Heating & Air locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24752.123456789!2d-121.0785!3d38.8966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b227a8c96f1e1%3A0x7ed2f54af4e87bc0!2sAuburn%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
            }}
            className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-5"
          >
            {LOCATIONS.map(({ label, lines, href, external, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: EASE }}
                className="group block h-full min-h-[250px] rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_28px_rgba(5,13,56,0.045)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#D8DCE3] hover:shadow-[0_18px_42px_rgba(5,13,56,0.085)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                aria-label={`${label}: ${lines.join(", ")}`}
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFD8D8] bg-[#FFF4F4] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                    <Icon className="h-[18px] w-[18px] text-red-600" />
                  </div>
                  <p className="mt-5 min-h-[48px] text-[15px] font-bold uppercase leading-[1.35] tracking-[0.03em] text-ink-950">
                    {label}
                  </p>
                  <div className="mt-3 flex min-h-[64px] flex-col justify-start gap-1.5 text-[14px] leading-[1.5] text-ink-700">
                    {lines.map((line, index) => {
                      const isAccent = index === lines.length - 1 && (label === "Send a Fax" || label === "Email Us");
                      const isEmailValue = label === "Email Us" && index === lines.length - 1;
                      return (
                        <span
                          key={`${label}-${index}`}
                          className={[
                            isAccent ? "font-semibold text-red-600" : "",
                            isEmailValue ? "text-[11px] leading-[1.35] tracking-[-0.01em]" : "",
                          ].join(" ")}
                        >
                          {line}
                        </span>
                      );
                    })}
                  </div>
                  <span className="mt-auto pt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400 transition-colors group-hover:text-red-600">
                    {label.includes("Location") ? "Open in Maps" : label === "Email Us" ? "Send Email" : label === "Send a Fax" ? "Fax Office" : "Call Office"}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
