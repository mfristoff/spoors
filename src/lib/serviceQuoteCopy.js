// Per sub-service CTA copy for the /services page accordions.
// Each entry drives the quote modal opened from a service accordion:
// an eyebrow, a CTA headline, and two lines of supporting text shown
// above the contact form. Em dashes are intentionally avoided.
// CTA labels are kept short so they always render on a single line.

const CTA = {
  // Air Conditioning
  "Air Conditioning Repairs": { cta: "Get a Repair Quote", eyebrow: "FREE AC REPAIR QUOTE", headline: "How Fast Do You Need Your AC Fixed?", support: "Tell us what your air conditioner is doing and pick a time that works. Spoor's will review your request and follow up with clear next steps and upfront pricing." },
  "Air Conditioning Maintenance": { cta: "Get a Tune-Up Quote", eyebrow: "FREE AC MAINTENANCE QUOTE", headline: "Ready to Prep Your AC for Summer?", support: "Tell us about your cooling system and we'll recommend the right tune-up. We follow up with clear service options and straightforward pricing." },
  "Air Conditioning Installation": { cta: "Get an Install Quote", eyebrow: "FREE AC INSTALLATION QUOTE", headline: "Ready for a Comfortable, Efficient System?", support: "Tell us about your home and we'll size a system that fits. We follow up with honest options and a clear installation quote." },
  "24-Hour Emergency AC Repairs": { cta: "Get Emergency Help", eyebrow: "24/7 EMERGENCY AC QUOTE", headline: "AC Down? We Can Help Fast.", support: "Tell us what's happening with your cooling and how soon you need us. We answer around the clock and dispatch a technician to restore comfort." },
  "HVAC Indoor Air Quality Services": { cta: "Get an Air Quality Quote", eyebrow: "FREE INDOOR AIR QUALITY QUOTE", headline: "Ready to Breathe Easier at Home?", support: "Tell us what you've noticed inside your home. We'll help identify the right way to improve your air and follow up with a clear quote." },

  // Heating
  "Heating Repairs": { cta: "Get a Repair Quote", eyebrow: "FREE HEATING REPAIR QUOTE", headline: "How Fast Do You Need Your Heat Back?", support: "Tell us what is happening with your heating system and pick a time. We review your needs and follow up with straightforward recommendations." },
  "Heating Maintenance": { cta: "Get a Tune-Up Quote", eyebrow: "FREE HEATING MAINTENANCE QUOTE", headline: "Ready to Prep Your Heater for Winter?", support: "Tell us about your heating system and we'll recommend the right tune-up. We follow up with clear service options and pricing." },
  "Heating Installation": { cta: "Get an Install Quote", eyebrow: "FREE HEATING INSTALLATION QUOTE", headline: "Ready for Reliable, Efficient Heat?", support: "Tell us about your home and we'll size a system that fits. We follow up with honest options and a clear installation quote." },
  "24-Hour Emergency Heating Repairs": { cta: "Get Emergency Help", eyebrow: "24/7 EMERGENCY HEATING QUOTE", headline: "Heat Out? We Can Help Fast.", support: "Tell us what's happening with your heater and how soon you need us. We answer around the clock and dispatch a technician to restore heat." },

  // Indoor Air Quality
  "Air Filtration Systems": { cta: "Get a Filtration Quote", eyebrow: "FREE AIR FILTRATION QUOTE", headline: "Ready to Capture More Dust and Allergens?", support: "Tell us about your air concerns and we'll recommend the right filtration. We follow up with clear options and a quote." },
  "Humidity Control": { cta: "Get a Humidity Quote", eyebrow: "FREE HUMIDITY CONTROL QUOTE", headline: "Ready for Balanced, Comfortable Humidity?", support: "Tell us if your air feels too dry or too humid. We'll recommend the right solution and follow up with a clear quote." },
  "Ventilation Solutions": { cta: "Get a Ventilation Quote", eyebrow: "FREE VENTILATION QUOTE", headline: "Ready for Fresher, Less Stuffy Air?", support: "Tell us which rooms feel stale or stuffy. We'll recommend the right ventilation fix and follow up with a clear quote." },
  "UV Air Treatment": { cta: "Get a UV Quote", eyebrow: "FREE UV AIR TREATMENT QUOTE", headline: "Ready to Neutralize Airborne Contaminants?", support: "Tell us about your air quality concerns and we'll explain how UV treatment helps. We follow up with clear options and a quote." },
  "Duct Cleaning & Maintenance": { cta: "Get a Duct Quote", eyebrow: "FREE DUCT CLEANING QUOTE", headline: "Ready for Cleaner Ducts and Better Airflow?", support: "Tell us about your ducts and we'll recommend the right cleaning service. We follow up with clear options and a quote." },

  // Emergency Repairs
  "Urgent AC Repairs": { cta: "Get Emergency Help", eyebrow: "24/7 EMERGENCY AC QUOTE", headline: "AC Out? We Can Help Fast.", support: "Tell us what's happening with your cooling and how soon you need us. We answer around the clock and dispatch a technician fast." },
  "Urgent Heating Repairs": { cta: "Get Emergency Help", eyebrow: "24/7 EMERGENCY HEATING QUOTE", headline: "Heat Out? We Can Help Fast.", support: "Tell us what's happening with your heater and how soon you need us. We answer around the clock and dispatch a technician to restore heat." },
  "Rapid Diagnosis": { cta: "Get a Diagnosis Quote", eyebrow: "FREE RAPID DIAGNOSIS QUOTE", headline: "Not Sure What's Wrong with Your System?", support: "Tell us the symptoms and we'll triage the issue over the phone. We follow up with a prompt visit and a clear plan." },
  "After-Hours Support": { cta: "Get After-Hours Help", eyebrow: "AFTER-HOURS SUPPORT QUOTE", headline: "Need Help Outside Normal Hours?", support: "Tell us when you need us and what's going on. Our line is answered day or night, and we follow up with a clear plan." },
  "Prevention Review": { cta: "Get a Prevention Review", eyebrow: "PREVENTION REVIEW QUOTE", headline: "Want to Help Prevent the Next Breakdown?", support: "Tell us about your last failure and we'll explain what caused it. We follow up with clear steps to help prevent a repeat." },

  // Maintenance & Tune-Ups
  "AC Tune-Ups": { cta: "Get a Tune-Up Quote", eyebrow: "FREE AC TUNE-UP QUOTE", headline: "Ready to Prep Your AC for Summer?", support: "Tell us about your cooling system and we'll recommend the right tune-up. We follow up with clear service options and pricing." },
  "Heating Tune-Ups": { cta: "Get a Tune-Up Quote", eyebrow: "FREE HEATING TUNE-UP QUOTE", headline: "Ready to Prep Your Heater for Winter?", support: "Tell us about your heating system and we'll recommend the right tune-up. We follow up with clear service options and pricing." },
  "System Inspection": { cta: "Get an Inspection Quote", eyebrow: "FREE SYSTEM INSPECTION QUOTE", headline: "Want a Full System Health Check?", support: "Tell us about your system and we'll schedule a complete inspection. We follow up with clear findings and pricing." },
  "Filter & Coil Service": { cta: "Get a Service Quote", eyebrow: "FREE FILTER & COIL SERVICE QUOTE", headline: "Ready for Better Comfort and Efficiency?", support: "Tell us about your system and we'll recommend the right filter and coil service. We follow up with clear pricing." },
  "Maintenance Reports": { cta: "Get a Maintenance Quote", eyebrow: "FREE MAINTENANCE QUOTE", headline: "Want a Clear Summary of Your System's Health?", support: "Tell us about your equipment and we'll provide a plain-language report. We follow up with clear service options and pricing." },

  // Ductless Mini-Splits
  "Mini-Split Installation": { cta: "Get an Install Quote", eyebrow: "FREE MINI-SPLIT QUOTE", headline: "Ready to Find the Right Mini-Split for Your Space?", support: "Tell us which rooms need better temperature control. We review your space and recommend the right mini-split solution." },
  "Mini-Split Repair": { cta: "Get a Repair Quote", eyebrow: "FREE MINI-SPLIT REPAIR QUOTE", headline: "How Fast Do You Need Your Mini-Split Fixed?", support: "Tell us what your mini-split is doing and pick a time. We follow up with clear recommendations and pricing." },
  "Multi-Zone Systems": { cta: "Get a Multi-Zone Quote", eyebrow: "FREE MULTI-ZONE MINI-SPLIT QUOTE", headline: "Ready for Zoned Comfort Across Your Home?", support: "Tell us which rooms you want to zone and we'll size the system. We follow up with honest options and a clear quote." },
  "Mini-Split Maintenance": { cta: "Get a Tune-Up Quote", eyebrow: "FREE MINI-SPLIT MAINTENANCE QUOTE", headline: "Ready to Keep Your Mini-Split Quiet and Efficient?", support: "Tell us about your system and we'll recommend seasonal service. We follow up with clear options and pricing." },
  "System Design": { cta: "Get a Design Quote", eyebrow: "FREE SYSTEM DESIGN QUOTE", headline: "Planning an Addition or Conversion?", support: "Tell us about your space and comfort goals. We design the right system and follow up with a clear quote." },

  // Swamp Coolers
  "Swamp Cooler Repair": { cta: "Get a Repair Quote", eyebrow: "FREE SWAMP COOLER QUOTE", headline: "Cooler Not Cooling Like It Should?", support: "Tell us what your swamp cooler is doing and pick a time. We follow up with clear recommendations and pricing." },
  "Swamp Cooler Installation": { cta: "Get an Install Quote", eyebrow: "FREE SWAMP COOLER INSTALL QUOTE", headline: "Wondering If a Swamp Cooler Fits Your Home?", support: "Tell us about your home and we'll give an honest assessment. We follow up with clear options and a quote." },
  "Seasonal Start-Up": { cta: "Get a Start-Up Quote", eyebrow: "FREE SEASONAL START-UP QUOTE", headline: "Ready to Get Your Cooler Ready for Summer?", support: "Tell us about your cooler and we'll schedule a spring start-up. We follow up with clear pricing and timing." },
  "Winterization": { cta: "Get a Winterizing Quote", eyebrow: "FREE WINTERIZATION QUOTE", headline: "Ready to Protect Your Cooler Through Winter?", support: "Tell us about your unit and we'll schedule a fall shut-down. We follow up with clear pricing and timing." },
  "Cooler vs. AC Guidance": { cta: "Get Expert Advice", eyebrow: "FREE COOLER VS. AC GUIDANCE", headline: "Swamp Cooler or AC: Which Is Right for You?", support: "Tell us about your home and comfort goals. We give you an honest comparison and follow up with a clear recommendation." },

  // Water Heater Services
  "Water Heater Repair": { cta: "Get a Repair Quote", eyebrow: "FREE WATER HEATER REPAIR QUOTE", headline: "Out of Hot Water or Hearing Odd Noises?", support: "Tell us what's going on with your water heater and pick a time. We follow up with clear recommendations and pricing." },
  "Water Heater Installation": { cta: "Get an Install Quote", eyebrow: "FREE WATER HEATER INSTALLATION QUOTE", headline: "Ready for Reliable Hot Water?", support: "Tell us about your household and we'll size the right unit. We follow up with honest options and a clear quote." },
  "Tankless Water Heaters": { cta: "Get a Tankless Quote", eyebrow: "FREE TANKLESS WATER HEATER QUOTE", headline: "Ready for Endless Hot Water and Lower Bills?", support: "Tell us about your usage and we'll recommend the right tankless system. We follow up with honest options and a quote." },
  "Hybrid and Heat Pump Water Heaters": { cta: "Get a Hybrid Quote", eyebrow: "FREE HYBRID WATER HEATER QUOTE", headline: "Could a Heat Pump Water Heater Fit Your Home?", support: "Tell us about your current unit and installation area. We compare the practical options and follow up with a clear recommendation." },
  "Maintenance & Flush": { cta: "Get a Flush Quote", eyebrow: "FREE WATER HEATER MAINTENANCE QUOTE", headline: "Want to Extend Your Water Heater's Life?", support: "Tell us about your unit and we'll schedule a flush and inspection. We follow up with clear pricing." },
  "Emergency Water Heater Service": { cta: "Get Emergency Help", eyebrow: "EMERGENCY WATER HEATER QUOTE", headline: "Lost Hot Water Unexpectedly?", support: "Tell us what happened and how soon you need us. We follow up promptly with a clear plan to restore hot water." },

  // Planned Maintenance
  "Scheduled Seasonal Tune-Ups": { cta: "Get a Plan Quote", eyebrow: "FREE PLANNED MAINTENANCE QUOTE", headline: "Want Automatic Tune-Ups Every Season?", support: "Tell us about your equipment and we'll recommend the right plan. We follow up with clear pricing and a seasonal schedule." },
  "Priority Service": { cta: "Get a Priority Quote", eyebrow: "FREE PRIORITY SERVICE QUOTE", headline: "Want Faster Response When You Need It?", support: "Tell us about your equipment and we'll explain member priority benefits. We follow up with clear plan options." },
  "Detailed Service History": { cta: "Get a Plan Quote", eyebrow: "FREE PLANNED MAINTENANCE QUOTE", headline: "Want a Complete Record of Every Visit?", support: "Tell us about your equipment and we'll set up detailed tracking. We follow up with clear plan options and pricing." },
  "Early Problem Detection": { cta: "Get a Plan Quote", eyebrow: "FREE PLANNED MAINTENANCE QUOTE", headline: "Want to Catch Problems Before They Break?", support: "Tell us about your system and we'll explain early detection benefits. We follow up with clear plan options." },
  "Enrollment & Plan Review": { cta: "Join the Comfort Club", eyebrow: "HOME COMFORT CLUB ENROLLMENT", headline: "Ready to Enroll in the Home Comfort Club?", support: "Tell us about your equipment and we'll recommend the right level of care. We follow up with clear pricing and enrollment." },
};

const DEFAULT = {
  cta: "Get Your Quote",
  eyebrow: "FREE HVAC QUOTE",
  headline: "Get a Clear Quote for Your Comfort.",
  support: "Tell us what you need. Spoor's will review the details and follow up with clear recommendations and a free quote.",
};

export function getSubServiceCta(title, serviceTitle = "HVAC Services") {
  const found = CTA[title];
  if (found) return { ...found, service: serviceTitle };
  const short = title.replace(/Services?$/i, "").trim() || title;
  return {
    cta: "Get Your Quote",
    eyebrow: `FREE ${short.toUpperCase()} QUOTE`,
    headline: `Get a Clear Quote for Your ${short}.`,
    support: DEFAULT.support,
    service: serviceTitle,
  };
}

export { DEFAULT as defaultHvacCta };