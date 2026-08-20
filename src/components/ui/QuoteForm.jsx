import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/formspree";
import MobileSelectSheet from "@/components/ui/MobileSelectSheet";

const TIME_SLOTS = ["8:00 AM – 10:00 AM", "10:00 AM – 12:00 PM", "1:00 PM – 3:00 PM"];

const SERVICE_OPTIONS = [
  "Air Conditioning",
  "Heating",
  "Indoor Air Quality",
  "Emergency Repairs",
  "Maintenance & Tune-Ups",
  "Ductless Mini-Splits",
  "Swamp Coolers",
  "Water Heater Services",
  "Planned Maintenance",
  "I just have a question",
];

function matchServiceOption(service) {
  if (!service) return "";
  const norm = (s) => s.toLowerCase().replace(/hvac|hvac\s+|services?|service/gi, "").replace(/mini-?split/gi, "ductless").trim();
  const target = norm(service);
  if (!target) return "";
  const match = SERVICE_OPTIONS.find((o) => {
    if (o === "I just have a question") return false;
    return norm(o) === target || target.includes(norm(o)) || norm(o).includes(target);
  });
  return match || "";
}
const STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "Other"];
const REQUIRED = ["first_name", "last_name", "email", "phone", "service_address", "city", "state", "zip"];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const FIELD_BASE =
"w-full rounded-[9px] border border-[#DADADA] bg-white px-5 text-ink-900 placeholder:text-ink-400 focus:border-[#0a1226] focus:outline-none focus:ring-1 focus:ring-[#0a1226]";
const FIELD_H = "h-[60px] md:h-[72px]";

function Field({ name, label, placeholder, type = "text", required = false, full = false, value, onChange, children, heightClass = FIELD_H }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={`q-${name}`} className="sr-only">
        {label}
        {required ? " (required)" : ""}
      </label>
      <div className="relative">
        {children ?
        children :

        <input
          id={`q-${name}`}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
          className={`${FIELD_BASE} ${heightClass}`} />

        }
        {required &&
        <span className="pointer-events-none absolute right-3 top-2 text-[#FF2929]" aria-hidden="true">*</span>
        }
      </div>
    </div>);

}

function urlParam(name) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) || "";
}

export default function QuoteForm({ service = "", formService = "", onClose }) {
  const [form, setForm] = useState({});
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [isOther, setIsOther] = useState(false);
  const [customTime, setCustomTime] = useState("");
  const [inquiryType, setInquiryType] = useState(() => matchServiceOption(service));
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const emailOk = /\S+@\S+\.\S+/.test(form.email || "");
  const displayTime = isOther ? customTime.trim() : time;
  const canSubmit = REQUIRED.every((k) => (form[k] || "").toString().trim()) && emailOk && date && displayTime;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!canSubmit) {
      setError("Please complete the required fields and pick a preferred date and time.");
      return;
    }
    if (!FORMSPREE_ENDPOINT) {
      setError("This quote form is not connected yet. Please call us at (530) 823-1843 to schedule.");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (res.ok) setSubmitted(true);else
      setError("Something went wrong. Please try again or call us.");
    } catch {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  // Calendar helpers
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monthName = month.toLocaleString("en-US", { month: "long", year: "numeric" });
  const startWeekday = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const isPast = (d) => d && d < today;
  const fmtDate = (d) => d ? d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—";

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-[640px] rounded-2xl border border-[#DADADA] bg-white p-8 text-center">
        <p className="t-h4 text-ink-900">Thanks — your request was sent.</p>
        <p className="mt-2 text-ink-600">Spoor's received your request and will follow up to confirm the details.</p>
        {onClose ?
        <button type="button" onClick={onClose} className="mt-6 inline-flex h-11 items-center rounded-md bg-ink-900 px-6 text-white">
            Close
          </button> :
        null}
      </div>);

  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-5 rounded-[18px] border border-[#E2E2E2] bg-white p-5 shadow-[0_8px_30px_rgba(5,13,56,0.06)] sm:p-6 md:mt-8 md:rounded-[22px] md:p-12"
      style={{ maxWidth: 1100 }}>
      
      <div className="mb-5 border-b border-[#ECECEC] pb-5 md:mb-8 md:pb-6">
        <h3 className="font-heading text-[22px] font-bold leading-[1.2] text-red-800">Lock in your priority time slot</h3>
        <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-[1.5] text-ink-600 opacity-60">
          Pick a date &amp; we&apos;ll take it from there.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 md:gap-6">
        {/* LEFT: contact + address (≈53%) */}
        <div className="md:pr-3 flex flex-col">
          {/* Mobile-only service / inquiry selector — custom dropdown avoids Safari's top-of-screen native picker */}
          <div className="mb-4 md:hidden">
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              aria-haspopup="listbox"
              aria-expanded={inquiryOpen}
              className={`${FIELD_BASE} ${FIELD_H} flex w-full items-center justify-between pr-4 text-left`}>
              <span className={inquiryType ? "text-ink-900" : "text-ink-400"}>
                {inquiryType || "Select service or inquiry"}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-ink-400" />
            </button>
            <MobileSelectSheet
              open={inquiryOpen}
              title="Select service or inquiry"
              options={SERVICE_OPTIONS}
              value={inquiryType}
              onSelect={setInquiryType}
              onClose={() => setInquiryOpen(false)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field name="first_name" label="First name" placeholder="First name" required value={form.first_name} onChange={(e) => setField("first_name", e.target.value)} />
            <Field name="last_name" label="Last name" placeholder="Last name" required value={form.last_name} onChange={(e) => setField("last_name", e.target.value)} />
            <Field name="email" label="Email" placeholder="Email address" type="email" required full value={form.email} onChange={(e) => setField("email", e.target.value)} />
            <Field name="phone" label="Phone" placeholder="Phone number" type="tel" required full value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
            <Field name="service_address" label="Service address" placeholder="Street address" required full heightClass="h-[64px] md:h-[96px]" value={form.service_address} onChange={(e) => setField("service_address", e.target.value)} />
            <div className="grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-3">
              <Field name="city" label="City" placeholder="City" required value={form.city} onChange={(e) => setField("city", e.target.value)} />
              <Field name="state" label="State" placeholder="State" required>
                <div className="relative">
                  <select
                    id="q-state"
                    name="state"
                    required
                    value={form.state || ""}
                    onChange={(e) => setField("state", e.target.value)}
                    className={`${FIELD_BASE} ${FIELD_H} appearance-none pr-10`}>
                    
                    <option value="" disabled>State</option>
                    {STATES.map((s) =>
                    <option key={s} value={s}>{s}</option>
                    )}
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-ink-400" />
                </div>
              </Field>
              <Field name="zip" label="ZIP code" placeholder="ZIP code" required value={form.zip} onChange={(e) => setField("zip", e.target.value)} />
            </div>
          </div>
          <div className="mt-4 min-h-[140px] flex-1 md:min-h-[180px]">
            <label htmlFor="q-notes" className="sr-only">Tell us what you need (optional)</label>
            <textarea
              id="q-notes"
              name="message"
              placeholder="Tell us how we can help (optional)"
              value={form.message || ""}
              onChange={(e) => setField("message", e.target.value)}
              className="h-full min-h-[140px] w-full rounded-[13px] md:min-h-[180px] border border-[#DADADA] bg-white px-5 py-4 text-[16px] leading-[1.6] text-ink-900 placeholder:text-ink-400 focus:border-[#0a1226] focus:outline-none focus:ring-1 focus:ring-[#0a1226]" />
            
          </div>
        </div>

        {/* RIGHT: calendar + time slots (≈47%) */}
        <div className="rounded-2xl border border-[#ECECEC] bg-white p-3 shadow-[0_2px_12px_rgba(5,13,56,0.05)] sm:p-5 md:pl-3">
          <p className="mb-3 font-heading text-[15px] font-semibold text-ink-900">Select your preferred service date and time:</p>
          <div className="rounded-[14px] border border-[#E8E8E8] p-4">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                aria-label="Previous month"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-600 hover:bg-neutral-bg">
                
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-heading text-[15px] font-bold text-ink-900">{monthName}</span>
              <button
                type="button"
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                aria-label="Next month"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-600 hover:bg-neutral-bg">
                
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-7 text-center text-[12px] font-semibold text-ink-400">
              {WEEKDAYS.map((w, i) =>
              <div key={i}>{w}</div>
              )}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {cells.map((d, i) => {
                if (!d) return <div key={i} />;
                const past = isPast(d);
                const selected = isSameDay(d, date);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={past}
                    onClick={() => setDate(d)}
                    className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-[14px] transition-colors"
                    style={
                    selected ?
                    { background: "#6B7280", color: "#fff", fontWeight: 600 } :
                    past ?
                    { color: "#C8C8C8", cursor: "not-allowed" } :
                    { color: "#333" }
                    }
                    aria-label={d.toDateString()}
                    aria-pressed={selected}>
                    
                    {d.getDate()}
                  </button>);

              })}
            </div>
          </div>

          <p className="mt-4 mb-2 font-heading text-[14px] font-semibold text-ink-700">Request your ideal time</p>
          <div className="flex flex-col gap-2">
            {TIME_SLOTS.map((slot) => {
              const selected = !isOther && time === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {setIsOther(false);setTime(slot);}}
                  className="rounded-[11px] border px-4 py-3 text-left text-[15px] font-medium transition-colors"
                  style={
                  selected ?
                  { background: "#e2e2e2", borderColor: "#9a9a9a", color: "#242424" } :
                  { background: "#f5f5f5", borderColor: "#e4e4e7", color: "#3f3f46" }
                  }
                  aria-pressed={selected}>
                  
                  {slot}
                </button>);

            })}
            <button
              type="button"
              onClick={() => {setIsOther(true);setTime("");}}
              className="rounded-[11px] border px-4 py-3 text-left text-[15px] font-medium transition-colors"
              style={
              isOther ?
              { background: "#e2e2e2", borderColor: "#9a9a9a", color: "#242424" } :
              { background: "#f5f5f5", borderColor: "#e4e4e7", color: "#3f3f46" }
              }
              aria-pressed={isOther}>
              
              Other
            </button>
            {isOther &&
            <div>
                <label htmlFor="q-custom-time" className="sr-only">Preferred time</label>
                <input
                id="q-custom-time"
                type="text"
                placeholder="e.g., 5:00 PM"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
                className="w-full rounded-[11px] border border-[#e4e4e7] bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-[#0a1226] focus:outline-none focus:ring-1 focus:ring-[#0a1226]" />
              
              </div>
            }
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-stretch overflow-hidden rounded-[9px] border-[2.5px] border-[#d8d8d8] text-white transition-transform hover:-translate-y-0.5 hover:border-[#b0b0b0] sm:w-auto"
              style={{ height: 56, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
              
              <span className="flex flex-1 items-center justify-center bg-[#FF2929] px-8 text-[15px] font-semibold transition-colors group-hover:bg-[#e31e1e]">
                {submitting ? "Sending…" : "Send Request"}
              </span>
              <span className="grid w-[54px] place-items-center bg-[#c81e1e] transition-colors group-hover:bg-[#a81a1a]">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
            {canSubmit &&
            <p className="text-[14px] leading-[1.55] text-ink-600 text-center sm:text-left">
                Your requested time is{" "}
                <span className="font-semibold text-ink-900">{fmtDate(date)}</span> at{" "}
                <span className="font-semibold text-ink-900">{displayTime || "—"}</span>.
              </p>
            }
          </div>
        </div>
      </div>

      {error && <p className="mt-5 text-sm font-medium text-red-600">{error}</p>}

      <p className="mt-5 text-center text-[14px] font-medium text-ink-600">
        Prefer to talk on the phone?{" "}
        <a href="tel:5308231843" className="font-semibold text-ink-900 underline-offset-2 transition-colors hover:text-[#FF2929] hover:underline">
          Call: (530) 823-1843
        </a>
      </p>

      {/* Hidden context fields */}
      <input type="hidden" name="selected_service" value={formService || inquiryType || service || ""} />
      <input type="hidden" name="service_category" value={inquiryType || service || ""} />
      <input type="hidden" name="page_url" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="page_title" value={typeof document !== "undefined" ? document.title : ""} />
      <input type="hidden" name="source_section" value="service-detail" />
      <input type="hidden" name="cta_label" value="Get Free Quote" />
      <input type="hidden" name="selected_date" value={date ? date.toISOString().slice(0, 10) : ""} />
      <input type="hidden" name="selected_time" value={displayTime} />
      <input type="hidden" name="_subject" value={`New Spoor's Quote Request: ${formService || inquiryType || service || ""}`} />
      <input type="hidden" name="utm_source" value={urlParam("utm_source")} />
      <input type="hidden" name="utm_medium" value={urlParam("utm_medium")} />
      <input type="hidden" name="utm_campaign" value={urlParam("utm_campaign")} />
      <input type="hidden" name="utm_term" value={urlParam("utm_term")} />
      <input type="hidden" name="utm_content" value={urlParam("utm_content")} />
      <input type="hidden" name="gclid" value={urlParam("gclid")} />
    </form>);

}