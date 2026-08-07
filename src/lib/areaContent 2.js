import { business } from "@/lib/siteConfig";

/**
 * Location-page content. Parameterized by area so every city page reads
 * its own name and foothill context — no city is hardcoded into the shared
 * template, and no single paragraph is pasted verbatim across every page.
 *
 * Claims are limited to things that are true for Spoor's and the region:
 * family-owned since 1925, Auburn-based, serving the surrounding foothill
 * and valley communities, 24/7 emergency line, all major brands serviced.
 */

export function localChallenges(name) {
  return {
    eyebrow: `${name} Heating & Air Conditioning`,
    heading: `Expert HVAC Repair & Installation for ${name} Homes`,
    paragraphs: [
      `${name} homeowners deal with real seasonal swings — hot summer afternoons that push cooling systems hard, and cold foothill nights that expect reliable heat. Spoor's has served this region since 1925, so we understand how elevation, older housing stock, and dry, dusty air affect comfort equipment.`,
      `Wildfire smoke and dust can clog filters and strain indoor air quality. Tight, energy-efficient homes can trap stale air. And when a system fails on the hottest or coldest day of the year, you need a local team that answers the phone and shows up.`,
    ],
    links: [
      { label: `AC repair in ${name}`, path: "/services/air-conditioning/" },
      { label: `heating repair in ${name}`, path: "/services/heating/" },
      { label: "indoor air quality", path: "/services/indoor-air-quality/" },
    ],
  };
}

export const whyChooseItems = [
  {
    n: "01",
    title: "Factory-Trained Technicians",
    text: "Our technicians receive ongoing training so they can service and install modern, high-efficiency HVAC equipment with confidence — and explain it in plain language.",
    image: "introTech",
  },
  {
    n: "02",
    title: "Official Bryant Dealer",
    text: "As a Bryant dealer, Spoor's can recommend and install Bryant systems sized to your home, and we stand behind the equipment we install.",
    image: "introAir",
  },
  {
    n: "03",
    title: "We Provide Emergency Service",
    text: "Our emergency line is answered around the clock for urgent heating and cooling failures. When comfort can't wait, one call reaches a real, local team.",
    image: "heatingEmergency",
  },
  {
    n: "04",
    title: "Our Home Comfort Club",
    text: "Our planned-maintenance program keeps your equipment on a consistent seasonal care routine with priority service and detailed service history.",
    image: "heatingTuneup",
  },
  {
    n: "05",
    title: "We Service All Major Brands",
    text: "We service, repair, and maintain all major HVAC brands — not just the ones we install. If you have existing equipment, we can help keep it running.",
    image: "heatingRepair",
  },
];

export const processSteps = [
  { n: "01", title: "Seamless Scheduling", text: "Call or message us. We listen to what's happening and find the earliest available time that works for you." },
  { n: "02", title: "Inspection", text: "Our technician inspects your system and home, and explains what we find before any work begins." },
  { n: "03", title: "Diagnosis", text: "We identify the root cause — not just the symptom — and walk you through your options in plain language." },
  { n: "04", title: "Upfront Pricing", text: "You get clear, honest pricing before we start. No surprise charges; you decide what work to approve." },
  { n: "05", title: "Precision Service & Verification", text: "We complete the work with care and verify safe, correct operation before we leave your home." },
];

export const problemsSolved = [
  { title: "Restricted Air Delivery", text: "Weak or uneven airflow from your vents often points to a clogged filter, a duct issue, or a blower problem. We find the cause and restore even, comfortable airflow.", path: "/services/maintenance-tune-ups/" },
  { title: "Rapid System Shut-Offs", text: "Short cycling — turning on and off too quickly — strains equipment and wastes energy. We diagnose the trigger and fix it before it shortens system life.", path: "/services/air-conditioning/" },
  { title: "Mechanical Inefficiency", text: "A system running harder than it should raises your bills. Cleaning, calibration, or a targeted repair can often bring efficiency back without replacement.", path: "/services/maintenance-tune-ups/" },
  { title: "Inconsistent Temperatures", text: "When some rooms never reach the set temperature, zoning, ductwork, or sizing may be the issue. We pinpoint it and recommend the right fix.", path: "/services/ductless-mini-splits/" },
  { title: "Poor Indoor Air Quality", text: "Dust, allergens, and smoke can build up indoors. Filtration, ventilation, and humidity control help your family breathe easier year-round.", path: "/services/indoor-air-quality/" },
  { title: "Rising Energy Bills", text: "An unexplained climb in heating or cooling costs usually means your system is working too hard. A tune-up or repair often brings usage back down.", path: "/services/maintenance-tune-ups/" },
];

export const productCategories = [
  { title: "Air Conditioners", text: "High-efficiency central air systems sized to your home for reliable, even cooling through the hottest foothill summers.", path: "/services/air-conditioning/" },
  { title: "Furnaces", text: "Dependable, efficient gas and electric furnaces installed to keep your home warm through cold Sierra foothill nights.", path: "/services/heating/" },
  { title: "Heat Pumps", text: "Efficient heating and cooling in one system — a strong fit for milder foothill climates and lower energy use.", path: "/services/heating/" },
  { title: "Ductless Mini-Splits", text: "Zoned comfort for additions, conversions, or rooms your current system doesn't reach — without installing ductwork.", path: "/services/ductless-mini-splits/" },
  { title: "Indoor Air Quality Systems", text: "Whole-home filtration, humidity control, and ventilation that keep the air your family breathes clean year-round.", path: "/services/indoor-air-quality/" },
  { title: "Smart Thermostats", text: "Precise, programmable control that improves comfort and helps lower energy use without sacrificing convenience.", path: "/services/maintenance-tune-ups/" },
];

export const exploreLinks = [
  { label: "About Spoor's", path: "/AboutPage" },
  { label: "Services", path: "/services/" },
  { label: "Service Areas", path: "/service-areas/" },
  { label: "Resources", path: "/resources/" },
  { label: "Financing", path: "/financing/" },
  { label: "Rebates", path: "/rebates/" },
  { label: "Contact", path: "/contact-us/" },
  { label: "Home Comfort Club", path: "/services/planned-maintenance/" },
  { label: "Emergency Service", path: "/services/emergency-repairs/" },
];

export function areaFaqs(name) {
  return [
    { q: `Does Spoor's provide HVAC service in ${name}?`, a: `Yes. Spoor's is a family-owned HVAC company based in Auburn, and we proudly serve ${name} and the surrounding communities with the same dependable care we've offered since 1925. Call us or request service online.` },
    { q: `What heating and cooling services are available in ${name}?`, a: `We provide air conditioning repair, installation, and maintenance; furnace and heat pump service; indoor air quality solutions; ductless mini-splits; water heater service; and 24/7 emergency repairs for ${name} homeowners.` },
    { q: `Does Spoor's offer emergency HVAC repair in ${name}?`, a: `Yes. Our emergency line is answered around the clock for urgent heating and cooling failures in ${name}. If your system fails on a hot day or a cold night, call us anytime and we'll help triage the situation.` },
    { q: `How often should ${name} homeowners schedule HVAC maintenance?`, a: `We recommend an AC tune-up in spring and a heating tune-up in fall so each system is ready for its peak season. Two visits a year is the common baseline, and our Home Comfort Club handles the scheduling for you.` },
    { q: "What signs indicate that my heating or cooling system needs repair?", a: "Warm or weak airflow, unusual noises or odors, short cycling, uneven temperatures, and rising energy bills are the usual warning signs. If you notice any of these, a diagnostic visit can catch the problem before a full breakdown." },
    { q: "Can Spoor's help improve indoor air quality?", a: "Yes. We install and maintain whole-home filtration, humidity control, and ventilation that reduce dust, allergens, and stale air — especially helpful during wildfire-smoke and high-dust periods common in our region." },
    { q: "Does Spoor's service all major HVAC brands?", a: "Yes. We service, repair, and maintain all major HVAC brands — not just the equipment we install. If you have an existing system, we can help keep it running efficiently." },
    { q: "How do I decide between repairing and replacing my system?", a: "Age, repair frequency, and energy bills guide the decision. If your system is near the end of its typical life, needs repeated repairs, or isn't keeping up, we'll give you an honest side-by-side comparison so you can decide with confidence." },
    { q: `How can I schedule HVAC service in ${name}?`, a: `Call us at ${business.phone} or use the contact form on this page. Tell us what you need and we'll follow up to confirm a time that works for you.` },
  ];
}

export function locationCtaCopy(name) {
  return {
    eyebrow: "SPOOR'S HEATING & AIR",
    statement: ["A dedicated HVAC team based in Auburn, passionate about delivering ", `precision comfort to ${name}.`, " From emergency repairs to high-efficiency system designs and maintenance."],
  };
}