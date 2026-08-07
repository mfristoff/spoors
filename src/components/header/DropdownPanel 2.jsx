import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown, Snowflake, Flame, Wind, AlertTriangle, Wrench,
  AirVent, Droplets, Thermometer, CalendarCheck, Target,
  Star, ShieldCheck, LifeBuoy, Briefcase, Users, BookOpen, ExternalLink,
} from "lucide-react";

// Location icon artwork by Arief Mochjiyat.
const SERVICE_AREA_ICON = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/d48d150a1_location.svg";

const ICON_MAP = {
  "/services/air-conditioning": Snowflake,
  "/services/heating": Flame,
  "/services/indoor-air-quality": Wind,
  "/services/emergency-repairs": AlertTriangle,
  "/services/maintenance-tune-ups": Wrench,
  "/services/ductless-mini-splits": AirVent,
  "/services/swamp-coolers": Droplets,
  "/services/water-heater-services": Thermometer,
  "/services/planned-maintenance": CalendarCheck,
  "/about-us/our-mission/": Target,
  "/testimonials": Star,
  "/about-us/our-commitment/": ShieldCheck,
  "/about-us/customer-service/": LifeBuoy,
  "/careers": Briefcase,
  "/about-us/community-involvement/": Users,
  "/resources/blog/": BookOpen,
};

const itemVariants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.008 } },
};

export default function DropdownPanel({ item }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => { clearTimeout(timeoutRef.current); setOpen(true); };
  const hide = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

  const children = item.children || [];
  const cols = children.length >= 12 ? 3 : children.length >= 5 ? 2 : 1;
  const panelWidth = cols === 3 ? "w-[600px]" : cols === 2 ? "w-[520px]" : "w-64";
  const isAreas = item.path === "/service-areas";

  const getIcon = (c) => {
    if (c.external) return ExternalLink;
    return ICON_MAP[c.path] || null;
  };

  const renderItem = (c) => {
    const Icon = getIcon(c);
    const content = isAreas ? (
      <span className="group/item flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 ease-out hover:-translate-y-px hover:border-ink-100/70 hover:bg-ink-50/80 hover:shadow-sm">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[1.5px] border-white/70 bg-gradient-to-br from-white/70 to-white/30 transition-all duration-200 group-hover/item:border-white group-hover/item:from-white group-hover/item:to-white/70">
          <img src={SERVICE_AREA_ICON} alt="" aria-hidden="true" className="h-[22px] w-[22px] shrink-0 object-contain opacity-80 transition-opacity duration-200 group-hover/item:opacity-100" />
        </span>
        <span className="text-sm font-medium leading-tight text-ink-700 transition-colors duration-200 group-hover/item:text-ink-900">{c.label}</span>
      </span>
    ) : (
      <span className="group/item flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 ease-out hover:-translate-y-px hover:border-ink-100/70 hover:bg-ink-50/80 hover:shadow-sm">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[1.5px] border-white/70 bg-gradient-to-br from-white/70 to-white/30 text-ink-600 transition-all duration-200 group-hover/item:border-white group-hover/item:from-white group-hover/item:to-white/70 group-hover/item:text-ink-700">
          {Icon && <Icon className="h-[18px] w-[18px] fill-neutral-200 opacity-80 transition-opacity duration-200 group-hover/item:opacity-100" />}
        </span>
        <span className="text-sm font-medium leading-tight text-ink-700 transition-colors duration-200 group-hover/item:text-ink-900">{c.label}</span>
      </span>
    );
    return (
      <motion.div variants={itemVariants} key={c.path}>
        {c.external ? (
          <a href={c.path} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block">{content}</a>
        ) : (
          <Link to={c.path} onClick={() => setOpen(false)} className="block">{content}</Link>
        )}
      </motion.div>
    );
  };

  return (
    <div onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) hide(); }}>
      <Link
        to={item.path}
        className="inline-flex items-center gap-1.5 text-[16px] font-medium text-[#242424] hover:text-red-600"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-flex">
          <ChevronDown className="h-3 w-3" />
        </motion.span>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2"
          >
            <div
              className={`rounded-2xl p-3 ${panelWidth}`}
              style={{
                background: "#ffffff",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                border: "1px solid rgba(10, 18, 38, 0.16)",
                boxShadow: "0 24px 70px rgba(10, 18, 38, 0.22), 0 4px 14px rgba(10, 18, 38, 0.08)",
              }}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className={cols > 1 ? `grid gap-1 ${cols === 3 ? "grid-cols-3" : "grid-cols-2"}` : "flex flex-col gap-0.5"}
              >
                {children.map(renderItem)}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}