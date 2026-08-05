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
    address: "908 Evergreen Lane\nMeadow Vista, CA 95722",
    phone: "(530) 878-4812",
    icon: MapPin,
  },
  {
    label: "Auburn Location",
    address: "345 Sacramento St., #5\nAuburn, CA 95603",
    phone: "(530) 823-1843",
    icon: MapPin,
  },
  {
    label: "Send a Fax",
    address: "(530) 878-3862",
    phone: null,
    icon: Printer,
  },
  {
    label: "Email Us",
    address: business.email,
    phone: null,
    icon: Mail,
  },
  {
    label: "Standard Hours",
    address: "Mon – Fri:\n7:30am – 5:30pm",
    phone: null,
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
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {LOCATIONS.map(({ label, address, phone, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: EASE }}
                className="rounded-xl border border-border-light bg-neutral-bg p-4"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-soft-red">
                  <Icon className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-[13px] font-bold uppercase tracking-wide text-ink-900">{label}</p>
                <p className="mt-1 whitespace-pre-line text-[13px] text-ink-700">{address}</p>
                {phone && <p className="mt-0.5 text-[13px] font-semibold text-red-600">{phone}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
