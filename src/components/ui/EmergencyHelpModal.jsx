import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, X } from "lucide-react";
import { business } from "@/lib/siteConfig";
import { submitFormspreeJson } from "@/lib/formspree";

const FIELD =
  "w-full rounded-[11px] border border-[#D9D9DC] bg-white px-4 text-[16px] text-[#202020] placeholder:text-[#8A8A8F] outline-none transition-[border-color,box-shadow] focus:border-[#0C1228] focus:shadow-[0_0_0_3px_rgba(12,18,40,0.08)]";

export default function EmergencyHelpModal({ open, onClose }) {
  const modalRef = useRef(null);
  const lastActiveRef = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", problem: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => modalRef.current?.focus({ preventScroll: true }), 20);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const root = modalRef.current;
      if (!root) return;
      const focusable = Array.from(
        root.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => !el.disabled && el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastActiveRef.current?.focus?.({ preventScroll: true });
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const resetTimer = window.setTimeout(() => {
        setSubmitted(false);
        setError("");
      }, 180);
      return () => window.clearTimeout(resetTimer);
    }
  }, [open]);

  if (!open) return null;

  const setField = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Please add your name, phone number, and service address.");
      return;
    }

    setSubmitting(true);
    try {
      await submitFormspreeJson({
        _subject: "URGENT: New Emergency HVAC Request",
        form_name: "Header Emergency Help",
        urgency: "Emergency HVAC request — help needed now",
        name: form.name.trim(),
        phone: form.phone.trim(),
        service_address: form.address.trim(),
        problem: form.problem.trim() || "Not provided",
        page_url: typeof window !== "undefined" ? window.location.href : "",
      });
      setSubmitted(true);
    } catch {
      setError("We couldn't send the request. Please call us now instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.11, ease: "easeOut" }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5"
      style={{ background: "rgba(5,13,56,0.72)", willChange: "opacity" }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-help-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 8, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden rounded-[22px] bg-[#F7F7F8] focus:outline-none"
        style={{ maxWidth: 760, boxShadow: "0 30px 90px rgba(0,0,0,0.28)", willChange: "transform, opacity" }}
      >
        <div className="absolute inset-x-0 top-0 h-[5px] bg-[#FF2929]" aria-hidden="true" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close emergency request"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#5F6065] transition-colors hover:bg-black/[0.05] hover:text-[#151515]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8 md:p-10">
          {submitted ? (
            <div className="py-6 text-center sm:py-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0F0] text-[#FF2929]">
                <Phone className="h-6 w-6" />
              </div>
              <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#C61E1E]">Emergency Request Sent</p>
              <h2 id="emergency-help-title" className="mx-auto mt-2 max-w-[560px] font-heading text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#171717] sm:text-[42px]">
                Spoor&apos;s has your details.
              </h2>
              <p className="mx-auto mt-4 max-w-[540px] text-[16px] leading-[1.65] text-[#68686D]">
                If you need immediate assistance, calling is still the fastest way to reach the team.
              </p>
              <a
                href={business.phoneLink}
                className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-[10px] bg-[#FF2929] px-7 text-[16px] font-semibold text-white transition-colors hover:bg-[#E82020]"
              >
                <Phone className="h-[18px] w-[18px]" />
                Call {business.phone}
              </a>
            </div>
          ) : (
            <>
              <div className="pr-10">
                <div className="flex items-center gap-2 text-[#C61E1E]">
                  <span className="h-2 w-2 rounded-full bg-[#FF2929] shadow-[0_0_0_5px_rgba(255,41,41,0.10)]" />
                  <span className="text-[13px] font-bold uppercase tracking-[0.12em]">24/7 Emergency HVAC</span>
                </div>
                <h2 id="emergency-help-title" className="mt-4 font-heading text-[34px] font-bold leading-[1.02] tracking-[-0.025em] text-[#171717] sm:text-[46px]">
                  Need help right now?
                </h2>
                <p className="mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#6A6A70] sm:text-[17px]">
                  Send the essentials so Spoor&apos;s knows who to contact, where you are, and what&apos;s happening.
                </p>
              </div>

              <form onSubmit={submit} className="mt-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#36363A]">Name</span>
                    <input
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={setField("name")}
                      placeholder="Your name"
                      className={`${FIELD} h-[58px]`}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#36363A]">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={setField("phone")}
                      placeholder="Best number to reach you"
                      className={`${FIELD} h-[58px]`}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-semibold text-[#36363A]">Service address</span>
                    <input
                      name="service_address"
                      autoComplete="street-address"
                      value={form.address}
                      onChange={setField("address")}
                      placeholder="Where do you need help?"
                      className={`${FIELD} h-[58px]`}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-semibold text-[#36363A]">What&apos;s happening? <span className="font-normal text-[#8A8A8F]">Optional</span></span>
                    <textarea
                      name="problem"
                      value={form.problem}
                      onChange={setField("problem")}
                      placeholder="No cooling, no heat, system stopped, strange smell, leaking…"
                      rows={3}
                      className={`${FIELD} min-h-[96px] resize-none py-3.5 leading-[1.5]`}
                    />
                  </label>
                </div>

                {error ? <p className="mt-3 text-[14px] font-medium text-[#B42318]">{error}</p> : null}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex h-[58px] flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#FF2929] px-6 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(255,41,41,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#E82020] disabled:cursor-wait disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : "Send Emergency Request"}
                    {!submitting ? <ArrowUpRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
                  </button>
                  <a
                    href={business.phoneLink}
                    className="inline-flex h-[58px] items-center justify-center gap-2 rounded-[10px] border border-[#D9D9DC] bg-white px-6 text-[16px] font-semibold text-[#202024] transition-colors hover:border-[#BFC0C4] hover:bg-[#FCFCFC] sm:min-w-[200px]"
                  >
                    <Phone className="h-[18px] w-[18px] text-[#FF2929]" />
                    Call Now
                  </a>
                </div>
                <p className="mt-4 text-center text-[12px] leading-[1.5] text-[#86868B] sm:text-left">
                  For immediate assistance, calling {business.phone} is the fastest option.
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
