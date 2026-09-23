import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "spoors_cookie_consent";

// A purely informational cookie notice. It does NOT gate or block any tracking
// scripts (GTM, GA4, Google Ads) — those load on page load as configured.
// Accepting simply dismisses the bar and remembers the choice in localStorage.
export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] flex items-center justify-between gap-4 bg-[#0a1226] px-4 py-3 text-white shadow-[0_-2px_12px_rgba(0,0,0,0.25)] md:px-[clamp(18px,6.2vw,120px)]">
      <p className="text-[13px] leading-snug text-white/85 md:text-[14px]">
        We use cookies to improve your experience and analyze traffic. By continuing, you agree to our use of
        cookies. See our{" "}
        <Link to="/cookie-policy/" className="font-semibold underline underline-offset-2 hover:text-red-300">
          Cookie Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="shrink-0 rounded-md bg-white px-5 py-2 text-[13px] font-semibold text-[#0a1226] transition-colors hover:bg-gray-100"
      >
        Accept
      </button>
    </div>
  );
}