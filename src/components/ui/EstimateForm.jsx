import { useState } from "react";
import { business, services } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitFormspreeJson } from "@/lib/formspree";

const initialState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  address: "",
  message: "",
  consent: false,
};

export default function EstimateForm({ compact = false }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.address.trim()) e.address = "Please enter your address or ZIP code.";
    if (!form.consent) e.consent = "Please provide consent to be contacted.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("submitting");
    try {
      await submitFormspreeJson({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        address: form.address,
        message: form.message,
        consent: form.consent ? "yes" : "no",
        page_url: typeof window !== "undefined" ? window.location.href : "",
        _subject: "New Spoor's Estimate Request",
      });
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors((prev) => ({ ...prev, form: "Something went wrong. Please try again or call us." }));
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border-light bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-red-600" />
        <h3 className="t-h4 mt-4 text-ink-950">Thank you, {form.name.split(" ")[0]}!</h3>
        <p className="mt-2 t-body-sm text-ink-600">
          Your request has been received. A member of the Spoor's team will reach out shortly to
          confirm your appointment. For urgent needs, call us at{" "}
          <a href={business.phoneLink} className="font-semibold text-red-600">
            {business.phone}
          </a>
          .
        </p>
        <Button
          variant="ghost"
          className="mt-6"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-md border bg-white px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field label="Name" error={errors.name} htmlFor="est-name">
        <input
          id="est-name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
        />
      </Field>

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Phone" error={errors.phone} htmlFor="est-phone">
          <input
            id="est-phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="est-email">
          <input
            id="est-email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field label="Service Needed" error={errors.service} htmlFor="est-service">
        <select
          id="est-service"
          className={fieldClass}
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          aria-invalid={!!errors.service}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / Not sure</option>
        </select>
      </Field>

      <Field label="Address or ZIP Code" error={errors.address} htmlFor="est-address">
        <input
          id="est-address"
          type="text"
          autoComplete="street-address"
          className={fieldClass}
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          aria-invalid={!!errors.address}
        />
      </Field>

      <Field label="Message" htmlFor="est-message" optional>
        <textarea
          id="est-message"
          rows={compact ? 3 : 4}
          className={fieldClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us briefly what's going on."
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink-300 text-red-600 focus:ring-red-600"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          aria-invalid={!!errors.consent}
        />
        <span>
          I consent to be contacted by Spoor's Heating &amp; Air regarding my request.{" "}
          {errors.consent && <span className="block text-red-600">{errors.consent}</span>}
        </span>
      </label>

      {errors.form && <p className="text-sm font-medium text-red-600">{errors.form}</p>}
      <Button type="submit" variant="red" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          "Request Free Estimate"
        )}
      </Button>
    </form>
  );
}

function Field({ label, htmlFor, error, optional, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label} {optional && <span className="font-normal text-ink-400">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}