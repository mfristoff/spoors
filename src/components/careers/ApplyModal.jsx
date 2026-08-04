import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { submitFormspreeFormData } from "@/lib/formspree";

const inputCls =
  "w-full rounded-[8px] border border-[#e0e0e0] px-3.5 py-2.5 text-[15px] text-[#242424] outline-none focus:border-[#FF2828] transition-colors";

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-[#4A4A4A]">{label}</span>
      {children}
    </label>
  );
}

export default function ApplyModal({ open, onClose, position }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const handleClose = () => {
    setSubmitted(false);
    setErr("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) handleClose();
      }}
    >
      <DialogContent className="max-w-[560px] overflow-hidden rounded-[14px] border-0 bg-white p-0">
        <DialogHeader className="p-7 pb-2">
          <DialogTitle className="text-[24px] font-bold text-[#0c1228]">
            Apply to Join Us
          </DialogTitle>
          <DialogDescription className="text-[15px] text-[#616161]">
            Tell us a bit about yourself and we&rsquo;ll be in touch.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 px-7 pb-8 pt-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
              ✓
            </div>
            <h3 className="text-[20px] font-bold text-[#0c1228]">
              Thanks for reaching out!
            </h3>
            <p className="text-[15px] text-[#616161]">
              We&rsquo;ve received your application for {position}. Our team will
              review it and reach out soon.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 rounded-[9px] bg-[#FF2828] px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            key={position}
            className="flex flex-col gap-4 px-7 pb-7 pt-2"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr("");
              setSubmitting(true);
              try {
                await submitFormspreeFormData(new FormData(e.currentTarget));
                setSubmitted(true);
              } catch {
                setErr("Something went wrong. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <input type="hidden" name="_subject" value={`New Spoor's Job Application: ${position}`} />
            <Field label="Full Name">
              <input required type="text" name="full_name" className={inputCls} placeholder="Jane Doe" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Email">
                <input required type="email" name="email" className={inputCls} placeholder="you@email.com" />
              </Field>
              <Field label="Phone">
                <input type="tel" name="phone" className={inputCls} placeholder="(530) 555-0100" />
              </Field>
            </div>
            <Field label="Position">
              <input
                type="text"
                name="position"
                readOnly
                defaultValue={position}
                className={`${inputCls} bg-[#f3f4f6]`}
              />
            </Field>
            <Field label="Resume / Portfolio Link (optional)">
              <input type="url" name="resume_link" className={inputCls} placeholder="https://..." />
            </Field>
            <Field label="Why Spoor&rsquo;s? (optional)">
              <textarea
                rows={3}
                name="why_spoors"
                className={`${inputCls} resize-none`}
                placeholder="Tell us what draws you to Spoor's..."
              />
            </Field>
            {err && <p className="text-sm font-medium text-red-600">{err}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 w-full rounded-[9px] bg-[#FF2828] py-3.5 font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}