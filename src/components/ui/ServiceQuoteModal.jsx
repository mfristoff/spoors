import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";

const QUOTE_COPY = {
  "Air Conditioning Services": {
    eyebrow: "FREE AC SERVICE QUOTE",
    headline: "How Fast Do You Need Your AC Fixed?",
    support:
      "Tell us what your AC system is doing and choose the time that works best for you. Spoor's will review your request and follow up with clear next steps.",
  },
  "Heating Services": {
    eyebrow: "FREE HEATING SERVICE QUOTE",
    headline: "How Fast Do You Need Your Heat Back?",
    support:
      "Tell us what is happening with your heating system and pick a time. We'll review your needs and follow up with straightforward recommendations.",
  },
  "HVAC Indoor Air Quality Services": {
    eyebrow: "FREE INDOOR AIR QUALITY QUOTE",
    headline: "Ready to Breathe Easier at Home?",
    support:
      "Tell us what you have noticed inside your home. We'll help identify the right way to improve your air and follow up with a clear quote.",
  },
  "Mini-Split Services": {
    eyebrow: "FREE MINI-SPLIT QUOTE",
    headline: "Ready to Find the Right Mini-Split for Your Space?",
    support:
      "Tell us which rooms need better temperature control. We'll review your space and recommend the right mini-split solution.",
  },
  "HVAC Maintenance": {
    eyebrow: "HVAC MAINTENANCE QUOTE",
    headline: "Keep Your System Ready for the Season.",
    support:
      "Tell us about your equipment and maintenance needs. We'll follow up with the right service options and clear pricing.",
  },
};

function getCopy(service) {
  if (QUOTE_COPY[service]) return QUOTE_COPY[service];
  const short = service.replace(/Services?$/i, "").trim() || service;
  return {
    eyebrow: `FREE ${short.toUpperCase()} QUOTE`,
    headline: `Get a Clear Quote for Your ${service}.`,
    support: "Tell us what you need. Spoor's will review the details and follow up with clear recommendations and a free quote.",
  };
}

export default function ServiceQuoteModal({ open, onClose, service, eyebrow, headline, support, formService, keepMounted = false }) {
  const base = getCopy(service || "");
  const modalRef = useRef(null);
  const lastActiveRef = useRef(null);
  const scrollYRef = useRef(0);

  const copy = { ...base, ...(eyebrow && { eyebrow }), ...(headline && { headline }), ...(support && { support }) };

  // Open/close: lock scroll, trap focus, restore exact position + focus on close.
  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;
    scrollYRef.current = window.scrollY;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => modalRef.current?.focus({ preventScroll: true }), 30);

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const visible = Array.from(focusables).filter((el) => el.offsetParent !== null);
        if (!visible.length) return;
        const first = visible[0];
        const last = visible[visible.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      lastActiveRef.current?.focus?.();
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open, onClose]);

  if (!open && !keepMounted) return null;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ duration: open ? 0.08 : 0.1, ease: "easeOut" }}
      aria-hidden={!open}
      className="fixed inset-0 z-[1000] flex items-start justify-center md:items-center"
      style={{
        background: "rgba(5,13,56,0.72)",
        pointerEvents: open ? "auto" : "none",
        visibility: open ? "visible" : "hidden",
        willChange: "opacity",
      }}
      onMouseDown={(e) => {
        if (open && e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${copy.eyebrow} — ${copy.headline}`}
        tabIndex={-1}
        initial={false}
        animate={open ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.988, y: 8 }}
        transition={{ duration: open ? 0.14 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-2 w-full overflow-hidden bg-[#F7F7F8] focus:outline-none md:my-4"
        style={{
          width: "min(1840px, calc(100vw - 16px))",
          maxHeight: "calc(100dvh - 16px)",
          border: "1px solid rgba(5,13,56,0.16)",
          borderRadius: "9px",
          boxShadow: "0 24px 80px rgba(5,13,56,0.22)",
          willChange: "transform, opacity",
        }}
      >
        {/* Inner scroll layer keeps the scrollbar off the rounded corners */}
        <div className="quote-modal__scroll" style={{ maxHeight: "calc(100dvh - 16px)", overflowY: "auto", overscrollBehavior: "contain" }}>
          <div className="px-4 pb-6 sm:px-5 md:px-16 md:py-14">
            {/* Close button — scrolls with content, top-right */}
            <div className="flex justify-end pt-5 md:pt-0">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close quote form"
                className="inline-flex items-center justify-center rounded-full text-ink-500 hover:bg-neutral-bg hover:text-ink-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-[#FF2929] focus-visible:outline-offset-2"
                style={{ width: 44, height: 44 }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Top hierarchy */}
            <div className="mx-auto text-center" style={{ maxWidth: 850 }}>
              <div className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FF2929" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>
                <span className="text-[14px] font-semibold uppercase tracking-[0.03em] text-[#404040]">{copy.eyebrow}</span>
              </div>
              <h2
                className="mt-4 text-[#1a1a1a] md:mt-4"
                style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: "clamp(28px, 4.4vw, 60px)", lineHeight: 1.08 }}
              >
                {copy.headline}
              </h2>
              <p className="mx-auto mt-4 text-[#8a8a8a]" style={{ maxWidth: 820, fontSize: "clamp(15px, 1.3vw, 20px)", lineHeight: 1.6 }}>
                {copy.support}
              </p>
            </div>

            <QuoteForm service={service} formService={formService} onClose={onClose} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}