import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

/**
 * Bottom-sheet picker for mobile selects: full-width tap rows, its own
 * scroll area, and a backdrop — so choosing never fights the page scroll.
 */
export default function MobileSelectSheet({ open, title, options, value, onSelect, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[1100] flex items-end md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/45"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            role="listbox"
            aria-label={title}
            className="relative z-10 w-full max-h-[80vh] overflow-hidden rounded-t-[20px] bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_40px_rgba(5,13,56,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-[#ECECEC] px-5 py-4">
              <p className="font-heading text-[17px] font-bold text-ink-900">{title}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full text-ink-500 hover:bg-neutral-bg"
                data-compact-tap
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[calc(80vh-64px)] overflow-y-auto overscroll-contain">
              {options.map((opt) => {
                const active = value === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onSelect(opt);
                      onClose();
                    }}
                    className={`flex w-full items-center justify-between gap-3 border-b border-[#F2F2F2] px-5 py-4 text-left text-[17px] leading-[1.35] transition-colors active:bg-neutral-bg ${
                      active ? "font-semibold text-red-600" : "text-ink-900"
                    }`}
                  >
                    <span>{opt}</span>
                    {active && <Check className="h-5 w-5 shrink-0 text-red-600" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}