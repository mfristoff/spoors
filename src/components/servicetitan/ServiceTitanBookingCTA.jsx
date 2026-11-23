import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// These are public widget identifiers (not API secrets). Fill from the exact
// account-specific code provided by Spoor's ServiceTitan administrator.
const schedulerId = import.meta.env.VITE_SPOORS_ST_SCHEDULER_ID || "";
const schedulerApiKey = import.meta.env.VITE_SPOORS_ST_SCHEDULER_API_KEY || "";
const schedulerReady = Boolean(schedulerId && schedulerApiKey);

export default function ServiceTitanBookingCTA({ className = "", children = "Schedule Online" }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!schedulerReady || document.getElementById("se-widget-embed")) return;
    const script = document.createElement("script");
    script.id = "se-widget-embed";
    script.src = "https://embed.scheduler.servicetitan.com/scheduler-v1.js";
    script.defer = true;
    script.dataset.apiKey = schedulerApiKey;
    script.setAttribute("data-schedulerid", schedulerId);
    document.body.appendChild(script);
  }, []);

  // A live booking CTA must never open a broken/empty widget.
  // Until Spoor's supplies the Scheduling Pro identifiers, the same space
  // provides a working fallback to the existing service-request page.
  if (!schedulerReady) {
    return <Link to="/contact-us/" className={className} data-servicetitan-status="pending">{children}</Link>;
  }

  const openBooking = (event) => {
    event.preventDefault();
    if (window._scheduler && typeof window._scheduler.show === "function") {
      window._scheduler.show({ schedulerId });
    } else {
      navigate("/contact-us/");
    }
  };
  return (
    <button type="button" className={`se-booking-show ${className}`} onClick={openBooking} data-servicetitan-status="configured">
      {children}
    </button>
  );
}
