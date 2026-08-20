// Centralized configuration for Spoor's Heating & Air
// Update business info, navigation, services, and locations here.

import { additionalBlogArticles, blogCategories } from "./blogData.js";

export const business = {
  name: "Spoor's Heating & Air",
  shortName: "Spoor's",
  legalName: "Spoor's Heating & Air Conditioning, Inc.",
  tagline: "Family-Owned HVAC Service Since 1925",
  founded: 1925,
  phone: "(530) 823-1843",
  phoneLink: "tel:5308231843",
  email: "gspoor@spoorsheatingandac.com",
  emailLink: "mailto:gspoor@spoorsheatingandac.com",
  address: {
    street: "345 Sacramento St, Suite 5",
    city: "Auburn",
    state: "CA",
    zip: "95603",
  },
  serviceCity: "Auburn",
  serviceRegion: "California",
  hours: [
    { day: "Monday – Friday", time: "7:30 AM – 5:30 PM" },
    { day: "Saturday – Sunday", time: "Closed — emergency support available" },
  ],
  emergencyNote: "24/7 Emergency Support",
  social: {
    facebook: "https://facebook.com/spoorsheatingandac",
    x: "https://twitter.com/SpoorsHeatingAC",
  },
  schedulingUrl: "/contact-us/",
  estimateUrl: "/contact-us/",
  portalUrl: "https://portal.example.com",
  domain: "https://www.spoorsheatingandac.com",
};

export const images = {
  logo: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/0b5814736_spoors-heating-air-logo.png",
  // NOTE: all photos are served from media.base44.com — that host supports the
  // /v1/ transform pipeline used by <Image> (resize to container + WebP), which
  // the legacy base44.app/api/.../files path does NOT. Same files, ~8x faster
  // TTFB and ~5x smaller payloads. Never point an image at base44.app/api.
  hero: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fed95821e_AdobeStock_66338212.jpeg",
  introTruck: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/4f14fb0f8_AdobeStock_197213379.jpeg",
  introTech: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/7dc8f7015_AdobeStock_482908998.jpeg",
  introAir: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/0e5cfc67c_spoors-air-filter-replacement-auburn-ca-2.webp",
  acService: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/8ecf7e092_AdobeStock_289084367.jpeg",
  acHero: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/b3ec9b18a_AdobeStock_65737788.jpeg",
  heatingFurnace: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/36a13156d_AdobeStock_150249395.jpeg",
  auburn: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/99d8f9440_AdobeStock_117354486.jpeg",
  aboutTeam: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/25c356f1d_AdobeStock_319218928.jpeg",
  ductlessImage: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/439d96621_AdobeStock_499333613.jpeg",
  waterHeaterImage: "/assets/images/water-heaters/spoors-auburn-ca-water-heater-installation-hero.webp",
  swampCoolerImage: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/9e0f4a6c8_swamp-cooler-image-2.png",
  fanBg: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/a62fa6031_CTASection.png",
  heatingHero: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/f62049928_heating-heat-pump-maintenance-hero.jpg",
  heatingBreak: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/7c770fbd3_heating-system-maintenance.jpg",
  heatingRepair: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/d1ca0657c_heating-leak-detector.jpg",
  heatingTuneup: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/c64cc766f_heating-heat-pump-control-panel.jpg",
  heatingInstall: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/2c1a06dc6_heating-furnace-installation.jpg",
  heatingEmergency: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/5529f3f61_heating-heat-pump-wiring.jpg",
  heatingGrid: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/2c1a06dc6_heating-furnace-installation.jpg",
};

export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about-us",
    children: [
      { label: "Our Mission", path: "/about-us/our-mission/" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Our Commitment", path: "/about-us/our-commitment/" },
      { label: "Customer Service", path: "/about-us/customer-service/" },
      { label: "Careers", path: "/careers" },
      { label: "Community Involvement", path: "/about-us/community-involvement/" },
    ],
  },
  {
    label: "Services",
    path: "/services/",
    children: [
      { label: "Air Conditioning", path: "/services/air-conditioning" },
      { label: "Heating", path: "/services/heating" },
      { label: "Indoor Air Quality", path: "/services/indoor-air-quality" },
      { label: "Emergency Repairs", path: "/services/emergency-repairs" },
      { label: "Maintenance & Tune-Ups", path: "/services/maintenance-tune-ups" },
      { label: "Ductless Mini-Splits", path: "/services/ductless-mini-splits" },
      { label: "Swamp Coolers", path: "/services/swamp-coolers" },
      { label: "Water Heater Services", path: "/services/water-heater-services" },
      { label: "Planned Maintenance", path: "/services/planned-maintenance" },
    ],
  },
  {
    label: "Service Areas",
    path: "/service-areas",
    children: [
      { label: "Auburn", path: "/service-areas/auburn/" },
      { label: "Roseville", path: "/service-areas/roseville/" },
      { label: "Rocklin", path: "/service-areas/rocklin/" },
      { label: "Folsom", path: "/service-areas/folsom/" },
      { label: "Lincoln", path: "/service-areas/lincoln/" },
      { label: "Citrus Heights", path: "/service-areas/citrus-heights/" },
      { label: "Granite Bay", path: "/service-areas/granite-bay/" },
      { label: "Sacramento", path: "/service-areas/sacramento/" },
      { label: "Orangevale", path: "/service-areas/orangevale/" },
      { label: "Penryn", path: "/service-areas/penryn/" },
      { label: "Weimar", path: "/service-areas/weimar/" },
      { label: "West Sacramento", path: "/service-areas/west-sacramento/" },
      { label: "View All Areas", path: "/service-areas" },
    ],
  },
  {
    label: "Resources",
    path: "/resources/blog/",
    children: [
      { label: "Blog", path: "/resources/blog/" },
      { label: "Client Portal", path: business.portalUrl, external: true },
    ],
  },
  { label: "Financing", path: "/financing/" },
  { label: "Rebates", path: "/rebates/" },
  { label: "Contact", path: "/contact-us/" },
];

export const trustBadges = [
  { label: "Family-Owned Since 1925" },
  { label: "Licensed & Insured" },
  { label: "24/7 Emergency Service" },
  { label: "Auburn, California" },
];

export const services = [
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    short: "Fast, reliable AC repair, installation, and replacement to keep your home cool through every Auburn summer.",
    seoTitle: "Air Conditioning Services in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Air conditioning services in Auburn, CA from Spoor's Heating & Air — AC repair, maintenance, installation, and 24-hour emergency cooling for Placer County homes since 1925.",
    h1: "Trusted Air Conditioning Services in Auburn, CA",
    headline: "Fast, reliable cooling for Auburn's hottest days.",
    controlHeader: "Take definitive control of your indoor microclimate.",
    subServices: [
      { title: "Air Conditioning Repairs", description: "Full-scale maintenance, complex repairs, and fast fixes to keep your office cool, our professional technicians are here with emergency cooling relief, day or night, rain or shine. If it's broken, we can fix it—and we'll make sure it's done your way and the right way the first time." },
      { title: "Air Conditioning Maintenance", description: "Seasonal tune-ups, coil cleaning, and refrigerant checks that keep your system efficient and help prevent mid-summer breakdowns." },
      { title: "Air Conditioning Installation", description: "Honest guidance and clean installation of high-efficiency systems sized to your home, with straightforward repair-vs-replace advice." },
      { title: "24-Hour Emergency AC Repairs", description: "When your AC fails during a heat wave, our 24/7 emergency line is answered around the clock to restore comfort fast." },
      { title: "HVAC Indoor Air Quality Services", description: "Filtration, humidity control, and ventilation solutions that keep the air your family breathes clean year-round." },
    ],
    image: images.acHero,
    overview:
      "From routine tune-ups to full system replacement, Spoor's keeps your home cool through the hottest California summers. We service all major brands and install high-efficiency systems sized to your home.",
    signs: [
      "Warm air coming from your vents",
      "Weak or uneven airflow across rooms",
      "Unusual noises or odors when the unit runs",
      "Higher energy bills during cooling season",
      "System short-cycles or runs constantly",
    ],
    benefits: [
      "Lower monthly cooling costs with efficient equipment",
      "Even, consistent temperatures throughout your home",
      "Longer equipment life with proper installation",
      "Honest recommendations — repair vs. replace",
    ],
    process: [
      { step: "Before", title: "Fair Diagnosis", text: "We listen to your concerns, inspect the system, and explain what we find before any work begins." },
      { step: "During", title: "Clean, Skilled Work", text: "Our technicians complete the repair or installation with care, protecting your home and keeping you informed." },
      { step: "After", title: "Follow-Through", text: "We confirm the system is running correctly, review maintenance tips, and stand behind our work." },
    ],
    faqs: [
      { q: "How often should I have my air conditioner serviced in Auburn?", a: "We recommend one professional AC tune-up per year, ideally in spring before the cooling season begins. A spring visit lets us clean coils, check refrigerant, and catch small problems before the foothill heat arrives. Our maintenance page explains what a tune-up includes." },
      { q: "What are the most common signs my AC needs repair?", a: "Warm air from the vents, weak airflow, unusual noises or odors, short cycling, and unexpectedly high summer bills are the usual warning signs. If you notice any of these, it's worth a diagnostic visit before the system fails on a hot day." },
      { q: "Should I repair or replace my air conditioner?", a: "Age is a major factor. If your system is 10–12 years or older, needs frequent repairs, or your cooling bills keep rising, replacement often makes more sense. We'll give you an honest side-by-side comparison of repair cost versus a new, more efficient system so you can decide with confidence." },
      { q: "Does Spoor's offer emergency AC repair in Auburn?", a: "Yes. Our emergency line is answered around the clock for urgent cooling failures across our service area. If your AC stops during a heat wave, call us anytime and we'll help assess the situation and dispatch a technician. See our emergency repairs page for details." },
      { q: "How long does a typical air conditioning repair take?", a: "Many common repairs are completed in a single visit once the problem is diagnosed. The exact time depends on parts availability and what we find. We'll explain the scope before starting and keep you informed if a part needs to be ordered." },
      { q: "What can I check before calling for AC service?", a: "Check that the thermostat is set to cool, the filter isn't clogged, the outdoor unit is clear of debris, and the breaker hasn't tripped. If those steps don't restore cooling, give us a call. Simple filter and airflow issues are worth ruling out before a service visit." },
      { q: "Can regular AC maintenance prevent breakdowns?", a: "Yes. Seasonal tune-ups keep coils clean, refrigerant levels correct, and electrical connections tight, which reduces strain on the system. Maintenance won't prevent every failure, but it catches many issues early and helps the equipment run efficiently through peak summer." },
    ],
    internalLinks: [
      { label: "AC maintenance in Auburn", path: "/services/maintenance-tune-ups/" },
      { label: "emergency AC repair", path: "/services/emergency-repairs/" },
      { label: "indoor air quality services", path: "/services/indoor-air-quality/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request an HVAC estimate", path: "/contact-us/" },
    ],
    related: ["heating", "maintenance-tune-ups", "indoor-air-quality"],
  },
  {
    slug: "heating",
    title: "Heating",
    short: "Furnace and heat pump repair, installation, and seasonal tune-ups for dependable foothill winter heat.",
    seoTitle: "Heating Services in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Heating services in Auburn, CA from Spoor's Heating & Air — furnace and heat pump repair, maintenance, installation, and 24-hour emergency heating for Placer County foothill homes since 1925.",
    h1: "Trusted Heating Services in Auburn, CA",
    headline: "Dependable heat through every foothill winter.",
    controlHeader: "Take definitive control of your home's heating.",
    subServices: [
      { title: "Heating Repairs", description: "Fast, dependable furnace and heat pump repairs to restore reliable heat through cold foothill nights." },
      { title: "Heating Maintenance", description: "Fall tune-ups that keep your system safe, efficient, and ready for winter." },
      { title: "Heating Installation", description: "Clean installation of furnaces and heat pumps sized to your home, with honest repair-vs-replace guidance." },
      { title: "24-Hour Emergency Heating Repairs", description: "When your heat goes out on a cold night, our 24/7 emergency team is ready to help." },
      { title: "Heating Air Quality Support", description: "Filtration and ventilation solutions that complement your heating system for healthier indoor air." },
    ],
    image: images.heatingGrid,
    overview:
      "Spoor's installs, repairs, and maintains furnaces and heat pumps built for the Sierra Nevada foothill winters. We help you choose reliable, efficient equipment and keep it running safely for years.",
    signs: [
      "Cold air or weak heat from your vents",
      "Pilot light issues or frequent cycling",
      "Unusual banging, rattling, or squealing",
      "Rising gas or electric bills in winter",
      "A yellow pilot flame instead of blue",
    ],
    benefits: [
      "Reliable heat through cold foothill nights",
      "Improved efficiency and lower utility bills",
      "Safer operation with proper venting and diagnostics",
      "Honest repair-vs-replace guidance",
    ],
    process: [
      { step: "Before", title: "Thorough Inspection", text: "We diagnose the issue, check safety controls, and explain the problem in plain language." },
      { step: "During", title: "Dependable Repair", text: "We complete the repair using quality parts and protect your home throughout the visit." },
      { step: "After", title: "Safety Check", text: "We verify safe operation, confirm proper airflow, and review simple upkeep steps." },
    ],
    faqs: [
      { q: "How long do furnaces last in the Auburn area?", a: "A well-maintained furnace typically lasts 15–20 years. Foothill winters and usage patterns affect lifespan. If yours is approaching that range and needs major repairs, we'll walk you through whether repair or replacement is the better value." },
      { q: "What are signs my heater needs repair?", a: "Cold or weak airflow, frequent cycling, unusual banging or squealing, a yellow pilot flame, and rising winter gas or electric bills are common signs. A yellow flame can indicate a venting or combustion issue worth checking promptly for safety." },
      { q: "Do you service heat pumps as well as furnaces?", a: "Yes. We install and service heat pumps, which provide both heating and cooling efficiently for many Auburn-area homes. Heat pumps are a good fit for milder foothill climates and can lower energy use compared to separate systems." },
      { q: "Does Spoor's offer emergency heating repair?", a: "Yes. Our emergency line is answered around the clock for urgent heating failures. If your heat goes out on a cold foothill night, call us anytime and we'll help triage the situation. See our emergency repairs page for more." },
      { q: "How often should I service my heating system?", a: "We recommend one heating tune-up per year, ideally in fall before the heating season. A fall visit lets us check safety controls, clean components, and confirm proper venting before cold weather arrives." },
      { q: "Should I repair or replace my furnace?", a: "Age, repair frequency, and energy bills guide the decision. If your furnace is near the end of its typical life, needs repeated repairs, or isn't keeping up, replacement may be more cost-effective. We'll give you an honest comparison either way." },
      { q: "What should I do before calling for heating service?", a: "Check that the thermostat is set to heat, the filter is clean, the switch near the furnace is on, and the breaker hasn't tripped. If those don't restore heat, call us. Ruling out simple filter and thermostat issues first can save a service visit." },
    ],
    internalLinks: [
      { label: "heating maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "emergency heating repair", path: "/services/emergency-repairs/" },
      { label: "ductless mini-splits", path: "/services/ductless-mini-splits/" },
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request an HVAC estimate", path: "/contact-us/" },
    ],
    related: ["air-conditioning", "maintenance-tune-ups", "ductless-mini-splits"],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    short: "Whole-home filtration, humidity control, and ventilation solutions for cleaner, healthier indoor air.",
    seoTitle: "Indoor Air Quality Services in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Indoor air quality services in Auburn, CA — whole-home air filtration, humidity control, UV treatment, and ventilation from Spoor's Heating & Air, serving Placer County homes since 1925.",
    h1: "Trusted Indoor Air Quality Services in Auburn, CA",
    headline: "Cleaner, healthier air for your whole home.",
    controlHeader: "Take definitive control of your indoor air.",
    subServices: [
      { title: "Air Filtration Systems", description: "Whole-home filtration that reduces dust, pollen, and allergens throughout your home." },
      { title: "Humidity Control", description: "Humidifiers and dehumidifiers that balance moisture for comfort and protection of your home." },
      { title: "Ventilation Solutions", description: "Fresh-air systems that reduce stale, stuffy rooms and improve circulation." },
      { title: "UV Air Treatment", description: "UV light systems that neutralize airborne contaminants at the source." },
      { title: "Duct Cleaning & Maintenance", description: "Cleaner ducts and coils for better airflow and improved efficiency." },
    ],
    image: images.introAir,
    overview:
      "Dust, pollen, and humidity affect more than comfort — they affect your family's health. Spoor's installs and maintains filtration, humidification, and ventilation systems that keep your indoor air clean year-round.",
    signs: [
      "Excessive dust on surfaces and vents",
      "Allergy or asthma symptoms that worsen indoors",
      "Dry air and static in winter",
      "Stale or stuffy rooms",
      "Uneven humidity levels",
    ],
    benefits: [
      "Cleaner, healthier air for your family",
      "Reduced allergens, dust, and pollen",
      "Balanced humidity for comfort and protection",
      "Better HVAC efficiency with cleaner coils",
    ],
    process: [
      { step: "Before", title: "Air Assessment", text: "We review your home's air and discuss concerns like allergies, dust, or humidity." },
      { step: "During", title: "Right-Sized Solution", text: "We install the appropriate filtration, humidification, or ventilation system for your needs." },
      { step: "After", title: "Ongoing Support", text: "We explain filter schedules and offer maintenance to keep the system effective." },
    ],
    faqs: [
      { q: "What causes poor indoor air quality in Auburn homes?", a: "Dust, pollen, pet dander, cooking odors, and unbalanced humidity are common contributors. Homes that are tightly sealed for efficiency can trap these pollutants unless ventilation is addressed. We assess your home to identify the main sources before recommending a solution." },
      { q: "Can my HVAC system help reduce dust and allergens?", a: "Yes. Whole-home filtration and UV treatment integrated with your HVAC system can capture particles and neutralize some airborne contaminants at the source. The right approach depends on what's in your air and your family's health concerns." },
      { q: "What is the difference between an air filter and a whole-home air cleaner?", a: "A standard filter catches larger particles as air passes through. A whole-home air cleaner, often electronic or high-efficiency media, captures much smaller particles and can cover the entire home. We can help you compare based on your needs." },
      { q: "Can Spoor's test my home's indoor air quality?", a: "We review your home's conditions and discuss concerns like allergies, dust, and humidity, then recommend practical solutions. We focus on identifying real issues rather than upselling equipment you may not need." },
      { q: "How often should HVAC filters be replaced?", a: "It depends on filter type and household. A common guideline is every 1–3 months for standard filters, longer for high-efficiency media. Homes with pets or allergies usually need more frequent changes. We'll advise a schedule during a visit." },
      { q: "Can humidity affect indoor comfort and air quality?", a: "Yes. Air that's too dry worsens static and respiratory comfort, while overly humid air encourages dust mites and mold. Humidifiers and dehumidifiers balance moisture to protect both comfort and your home." },
      { q: "What indoor air quality solution is right for my home?", a: "It depends on your specific concerns. Filtration, UV treatment, humidity control, and ventilation each address different problems. We'll recommend the combination that fits your home rather than a one-size approach." },
    ],
    internalLinks: [
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "HVAC maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request an indoor air quality estimate", path: "/contact-us/" },
    ],
    related: ["air-conditioning", "heating", "maintenance-tune-ups"],
  },
  {
    slug: "emergency-repairs",
    title: "Emergency Repairs",
    short: "Around-the-clock emergency HVAC service answered day or night, weekends and holidays included.",
    seoTitle: "Emergency HVAC Repair in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "24-hour emergency HVAC repair in Auburn, CA — urgent air conditioning and heating service from Spoor's Heating & Air, answered around the clock for Placer County homes since 1925.",
    h1: "Trusted Emergency HVAC Repair in Auburn, CA",
    headline: "24/7 emergency HVAC service, day or night.",
    controlHeader: "Take control when comfort can't wait.",
    subServices: [
      { title: "Urgent AC Repairs", description: "Around-the-clock cooling service when your AC quits during a heat wave, day or night." },
      { title: "Urgent Heating Repairs", description: "Reliable heat restored fast when temperatures drop and your system won't start." },
      { title: "Rapid Diagnosis", description: "Quick, honest triage over the phone and prompt dispatch to your home." },
      { title: "After-Hours Support", description: "Our emergency line is answered day or night, weekends and holidays included." },
      { title: "Prevention Review", description: "We explain what caused the failure and how to help prevent a repeat." },
    ],
    image: images.introTech,
    overview:
      "When your heat goes out on a cold night or your AC fails during a heat wave, Spoor's is here. We offer 24/7 emergency support for Auburn-area homeowners, with dependable technicians who treat your home with respect.",
    signs: [
      "Complete heating or cooling failure",
      "Strange burning or electrical smell",
      "System won't turn on at all",
      "Frozen indoor coil in summer",
      "No heat during freezing temperatures",
    ],
    benefits: [
      "Fast response, day or night",
      "Dependable, licensed technicians",
      "Honest pricing and clear communication",
      "Peace of mind for your family",
    ],
    process: [
      { step: "Before", title: "Quick Triage", text: "Call us anytime. We help assess the urgency and dispatch a technician as needed." },
      { step: "During", title: "Prompt Repair", text: "Our technician diagnoses the problem and works to restore comfort quickly and safely." },
      { step: "After", title: "Prevention Review", text: "We explain what caused the issue and recommend steps to prevent a repeat." },
    ],
    faqs: [
      { q: "Do you really answer emergency calls 24/7?", a: "Yes. Our emergency line is answered around the clock for urgent heating and cooling issues across our service area. When you call, we help assess the urgency and dispatch a technician as needed." },
      { q: "What counts as an HVAC emergency?", a: "A complete heating failure in freezing weather, a cooling failure during a heat wave, unusual burning or electrical smells, or a system that won't start are typical emergencies. If you're unsure, call us and we'll help you decide how urgent it is." },
      { q: "How fast can Spoor's respond to an emergency in Auburn?", a: "Response time depends on call volume and your location within our service area. We prioritize true emergencies and communicate clearly about timing when you call. Our goal is to restore comfort as safely and quickly as possible." },
      { q: "What should I do before calling for emergency service?", a: "Check the thermostat setting, breaker, and switch near the equipment, and note any unusual sounds or smells. That information helps us triage the call. If you smell gas or see smoke, follow your utility's safety guidance and leave the home first." },
      { q: "Can emergency repairs be avoided with maintenance?", a: "Many breakdowns are preventable. Seasonal tune-ups catch worn parts and low refrigerant before they cause a failure. Maintenance won't stop every emergency, but it reduces the chance of a mid-season outage." },
      { q: "Do you service both emergency AC and heating calls?", a: "Yes. We handle urgent failures for both cooling and heating systems, including furnaces, heat pumps, and central air. One call covers whichever system has failed." },
      { q: "What happens after an emergency repair?", a: "We confirm the system is running safely, explain what failed and why, and suggest steps to help prevent a repeat. If the repair points to a larger issue, we'll outline your options clearly." },
    ],
    internalLinks: [
      { label: "air conditioning repair", path: "/services/air-conditioning/" },
      { label: "heating repair", path: "/services/heating/" },
      { label: "HVAC maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "call for emergency service", path: "/contact-us/" },
    ],
    related: ["air-conditioning", "heating", "maintenance-tune-ups"],
  },
  {
    slug: "maintenance-tune-ups",
    title: "Maintenance & Tune-Ups",
    short: "Seasonal AC and heating tune-ups that protect your equipment, improve efficiency, and prevent breakdowns.",
    seoTitle: "AC & Heating Maintenance in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "HVAC maintenance and tune-ups in Auburn, CA — seasonal AC and heating service from Spoor's Heating & Air that keeps Placer County systems efficient and reliable since 1925.",
    h1: "Trusted HVAC Maintenance in Auburn, CA",
    headline: "Seasonal tune-ups that prevent breakdowns.",
    controlHeader: "Take control of your comfort all year.",
    subServices: [
      { title: "AC Tune-Ups", description: "Spring cooling tune-ups that improve efficiency and catch small issues early." },
      { title: "Heating Tune-Ups", description: "Fall heating tune-ups that keep your furnace safe and reliable." },
      { title: "System Inspection", description: "Full inspection of key components, safety controls, and airflow." },
      { title: "Filter & Coil Service", description: "Filter replacement and coil cleaning for better comfort and efficiency." },
      { title: "Maintenance Reports", description: "Clear, plain-language summaries of what we found and what to watch." },
    ],
    image: images.acService,
    overview:
      "Regular maintenance is the simplest way to protect your investment. Spoor's seasonal tune-ups keep your system efficient, catch problems early, and help avoid costly breakdowns.",
    signs: [
      "It's been over a year since your last service",
      "Your system is working harder than usual",
      "You want to protect your equipment warranty",
      "Energy bills are creeping up",
    ],
    benefits: [
      "Improved efficiency and lower bills",
      "Fewer unexpected breakdowns",
      "Longer equipment life",
      "Maintained warranty coverage",
    ],
    process: [
      { step: "Before", title: "Full Inspection", text: "We inspect, clean, and test your system's key components." },
      { step: "During", title: "Precision Tune-Up", text: "We clean coils, check refrigerant, calibrate controls, and replace filters as needed." },
      { step: "After", title: "Clear Report", text: "We summarize what we found and flag anything that may need attention down the road." },
    ],
    faqs: [
      { q: "How often should I tune up my HVAC system?", a: "We recommend an AC tune-up in spring and a heating tune-up in fall so each system is ready for its peak season. Two visits a year is the common baseline for Auburn-area homes." },
      { q: "What does an AC tune-up include?", a: "A typical visit includes cleaning coils, checking refrigerant, inspecting electrical connections, calibrating controls, and replacing filters as needed. We summarize what we find and flag anything to watch, so you get a clear report rather than a checklist you can't read." },
      { q: "What does a heating tune-up include?", a: "We inspect and clean key components, check safety controls and venting, confirm proper airflow, and test operation. Safety is a priority on heating visits, especially for gas furnaces." },
      { q: "Can maintenance lower my energy bills?", a: "Yes. Clean coils, proper refrigerant, and unobstructed airflow let the system run efficiently, which can reduce energy use. The savings depend on your equipment and how far out of tune it was." },
      { q: "Will a tune-up protect my equipment warranty?", a: "Many manufacturers require regular professional maintenance to keep warranty coverage valid. We provide a service record you can keep for that purpose. Check your warranty terms for the specific schedule." },
      { q: "What's the difference between a tune-up and planned maintenance?", a: "A single tune-up is one visit. Planned maintenance schedules seasonal tune-ups automatically, adds priority service, and keeps a detailed history. If you forget to schedule, the plan handles it." },
      { q: "What should I do before a maintenance visit?", a: "Make sure the thermostat and equipment are accessible, note any concerns, and replace a visibly clogged filter if you have one. Clear access helps the technician work efficiently and inspect thoroughly." },
    ],
    internalLinks: [
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "Spoor's Home Comfort Club", path: "/services/planned-maintenance/" },
      { label: "emergency repairs", path: "/services/emergency-repairs/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request a tune-up", path: "/contact-us/" },
    ],
    related: ["planned-maintenance", "air-conditioning", "heating"],
  },
  {
    slug: "ductless-mini-splits",
    title: "Ductless Mini-Splits",
    short: "Efficient, flexible zoned heating and cooling without the ductwork for single rooms or whole-home comfort.",
    seoTitle: "Ductless Mini-Split Installation & Repair in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Ductless mini-split installation, repair, and maintenance in Auburn, CA — zoned heating and cooling from Spoor's Heating & Air, serving Placer County homes since 1925.",
    h1: "Trusted Ductless Mini-Split Services in Auburn, CA",
    headline: "Efficient zoned comfort without the ductwork.",
    controlHeader: "Take control of comfort, room by room.",
    subServices: [
      { title: "Mini-Split Installation", description: "Clean installation of indoor and outdoor units sized to your space." },
      { title: "Mini-Split Repair", description: "Dependable repairs for cooling, heating, and airflow issues." },
      { title: "Multi-Zone Systems", description: "Zoned comfort for multiple rooms from a single outdoor unit." },
      { title: "Mini-Split Maintenance", description: "Seasonal service to keep your system quiet and efficient." },
      { title: "System Design", description: "Right-sized recommendations for additions, conversions, and whole-home comfort." },
    ],
    image: images.ductlessImage,
    overview:
      "Ductless mini-splits offer an efficient way to heat and cool individual rooms or additions without installing ductwork. Spoor's installs and services systems from trusted manufacturers, sized for your space.",
    signs: [
      "You're adding a room or converting a space",
      "A room never reaches a comfortable temperature",
      "You want zoning without extending ductwork",
      "You're looking to lower energy use",
    ],
    benefits: [
      "Zoned comfort for individual rooms",
      "High efficiency with no duct losses",
      "Quiet, compact indoor units",
      "Both heating and cooling in one system",
    ],
    process: [
      { step: "Before", title: "Needs Assessment", text: "We evaluate your space and recommend the right capacity and layout." },
      { step: "During", title: "Clean Installation", text: "We install indoor and outdoor units with minimal disruption to your home." },
      { step: "After", title: "Walkthrough", text: "We show you how to operate and maintain your new system." },
    ],
    faqs: [
      { q: "What is a ductless mini-split?", a: "A mini-split is a heating and cooling system that doesn't need ductwork. An outdoor unit connects to one or more indoor wall units, letting you control comfort room by room. It's a flexible option for additions, conversions, or homes without ducts." },
      { q: "Can a mini-split heat in cold foothill weather?", a: "Yes. Many modern mini-splits provide effective heat even in cold temperatures, making them a flexible year-round option for Auburn-area homes. Cold-climate models are designed to keep performing when the temperature drops." },
      { q: "Are mini-splits more efficient than central AC?", a: "Mini-splits avoid the energy losses of ductwork and let you heat or cool only the rooms you use, which can lower energy use. The right choice depends on your home's layout and needs." },
      { q: "How many rooms can one mini-split system cover?", a: "A multi-zone system connects several indoor units to one outdoor unit. The number depends on the outdoor unit's capacity and your comfort goals. We size the system to your space during a visit." },
      { q: "Do you repair mini-splits as well as install them?", a: "Yes. We service cooling, heating, and airflow issues for ductless systems from common manufacturers. If your mini-split isn't performing, we can diagnose and repair it." },
      { q: "How do I maintain a ductless system?", a: "Keep indoor unit filters clean, ensure the outdoor unit stays clear of debris, and schedule seasonal service. Mini-splits generally need less maintenance than ducted systems, but the filters should be checked regularly." },
      { q: "Is a mini-split right for an addition or converted space?", a: "Often, yes. Because they don't require ductwork, mini-splits are a clean fit for room additions, garage conversions, or spaces your current system doesn't reach. We'll confirm the right capacity for the space." },
    ],
    internalLinks: [
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "indoor air quality services", path: "/services/indoor-air-quality/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request a mini-split estimate", path: "/contact-us/" },
    ],
    related: ["air-conditioning", "heating", "indoor-air-quality"],
  },
  {
    slug: "swamp-coolers",
    title: "Swamp Coolers",
    short: "Evaporative cooler installation, service, seasonal start-up, and winterization for dry-climate homes.",
    seoTitle: "Swamp Cooler Service & Repair in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Swamp cooler installation, repair, and seasonal maintenance in Auburn, CA — evaporative cooling service from Spoor's Heating & Air, serving Placer County homes since 1925.",
    h1: "Trusted Swamp Cooler Services in Auburn, CA",
    headline: "Reliable evaporative cooling for dry climates.",
    controlHeader: "Take control of efficient, fresh-air cooling.",
    subServices: [
      { title: "Swamp Cooler Repair", description: "Pads, pump, float, and motor service to restore cool airflow." },
      { title: "Swamp Cooler Installation", description: "Honest assessment and installation where evaporative cooling makes sense." },
      { title: "Seasonal Start-Up", description: "Spring start-up service to get your cooler ready for summer." },
      { title: "Winterization", description: "Fall shut-down and winterization to protect your unit through the cold months." },
      { title: "Cooler vs. AC Guidance", description: "Straight advice on whether a swamp cooler or AC is the better fit for your home." },
    ],
    image: images.swampCoolerImage,
    overview:
      "Evaporative coolers can be an efficient, cost-effective option in our dry California climate. Spoor's installs, repairs, and maintains swamp coolers for homes where they're a good fit.",
    signs: [
      "Reduced airflow from your cooler",
      "Warm air instead of cool",
      "Unusual odors or mineral buildup",
      "Water pump issues",
    ],
    benefits: [
      "Lower operating costs in dry climates",
      "Fresh, ventilated air rather than recirculated",
      "Reliable seasonal performance with upkeep",
      "Honest guidance on cooler vs. AC",
    ],
    process: [
      { step: "Before", title: "Condition Check", text: "We inspect pads, pump, float, and motor to identify the issue." },
      { step: "During", title: "Service or Repair", text: "We clean and service the unit or replace worn parts as needed." },
      { step: "After", title: "Seasonal Tips", text: "We share start-up and winterization tips to extend the unit's life." },
    ],
    faqs: [
      { q: "Is a swamp cooler right for my home?", a: "Evaporative coolers work best in dry climates with good ventilation. Our dry California foothill climate can be a good fit, but it depends on your home. We'll honestly assess whether a swamp cooler or traditional AC makes more sense." },
      { q: "What's the difference between a swamp cooler and central AC?", a: "A swamp cooler cools by evaporating water and brings in fresh outside air, while central AC recirculates and dehumidifies. Swamp coolers cost less to run but are less effective in humid weather. We'll help you compare." },
      { q: "What are signs my swamp cooler needs service?", a: "Reduced airflow, warm air, unusual odors, mineral buildup, or a pump that isn't cycling water are common signs. Many of these are fixed with pad cleaning or component service." },
      { q: "Do swamp coolers need seasonal maintenance?", a: "Yes. A spring start-up gets the unit ready for summer, and a fall winterization protects it through cold months. Seasonal care extends the unit's life and keeps it cooling efficiently." },
      { q: "Can Spoor's repair my existing swamp cooler?", a: "Yes. We service pads, pumps, floats, and motors to restore cool airflow. If a repair isn't worth it, we'll say so and explain your replacement options." },
      { q: "Should I replace my swamp cooler with AC?", a: "It depends on your comfort goals and budget. AC offers more consistent cooling in humid conditions, while a well-kept swamp cooler costs less to run. We'll give you a straight recommendation for your home." },
    ],
    internalLinks: [
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "HVAC maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request a swamp cooler estimate", path: "/contact-us/" },
    ],
    related: ["air-conditioning", "maintenance-tune-ups"],
  },
  {
    slug: "water-heater-services",
    title: "Water Heater Services",
    short: "Water heater repair, replacement, and maintenance for traditional tank, tankless, hybrid, and heat pump systems.",
    seoTitle: "Water Heater Repair & Installation in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Water heater repair and installation in Auburn, CA for tank, tankless, hybrid, and heat pump systems from Spoor's Heating & Air.",
    h1: "Trusted Water Heater Services in Auburn, CA",
    headline: "Dependable hot water whenever you need it.",
    controlHeader: "Take control of your home's hot water.",
    subServices: [
      { title: "Water Heater Repair", description: "Fast diagnosis and repair for no-hot-water, leaks, and noise issues." },
      { title: "Water Heater Installation", description: "Clean, code-compliant installation of tank, tankless, and qualifying hybrid units." },
      { title: "Tankless Water Heaters", description: "On-demand hot water from a system sized around household flow and available utilities." },
      { title: "Hybrid & Heat Pump Water Heaters", description: "High-efficiency water heating that transfers heat from the surrounding air into a storage tank." },
      { title: "Maintenance & Flush", description: "Tank flushing and anode checks that can help protect equipment life." },
      { title: "Emergency Water Heater Service", description: "Prompt help when you lose hot water unexpectedly." },
    ],
    image: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/a08f34059_spoors-heating-system-repair-auburn-ca.jpeg",
    overview:
      "Spoor's repairs and replaces tank, tankless, hybrid, and heat pump water heaters. We compare installation needs, household demand, and maintenance before recommending equipment.",
    signs: [
      "Not enough hot water or none at all",
      "Rumbling or popping noises from the tank",
      "Discolored or rusty water",
      "Water pooling near the unit",
    ],
    benefits: [
      "Reliable hot water for your household",
      "Efficient options, including tankless and hybrid systems",
      "Safe, code-compliant installation",
      "Honest repair-vs-replace advice",
    ],
    process: [
      { step: "Before", title: "Diagnosis", text: "We inspect the unit and identify whether a repair or replacement is the right call." },
      { step: "During", title: "Service", text: "We complete the repair or install the new unit cleanly and safely." },
      { step: "After", title: "Maintenance Plan", text: "We share simple steps like flushing the tank to extend its life." },
    ],
    faqs: [
      { q: "What are signs my water heater needs repair?", a: "Not enough hot water, rumbling or popping noises, discolored water, or water pooling near the unit are common signs. Some are fixed with a flush or part replacement; others point to a failing tank." },
      { q: "Should I switch to a tankless water heater?", a: "Tankless systems heat water on demand, but they are not right for every home. We compare peak flow, available utilities, venting, water quality, and installation needs against a traditional tank." },
      { q: "What is a hybrid heat pump water heater?", a: "A hybrid unit transfers heat from the surrounding air into a storage tank and uses electric elements for backup. It can reduce energy use in a suitable location with enough air volume, drainage, and electrical capacity." },
      { q: "How long does a water heater last?", a: "Service life varies by equipment, installation, water quality, household demand, and maintenance. If the unit is aging, leaking, or needing repeated repairs, we compare repair and replacement before recommending the next step." },
      { q: "Can Spoor's install a new water heater?", a: "Yes. We install tank, tankless, and qualifying hybrid heat pump water heaters to code, sized around the household and the home's available utilities." },
      { q: "Does a water heater need maintenance?", a: "Yes. Flushing the tank to clear sediment and checking the anode rod can help protect the unit and catch developing problems. Maintenance needs vary by equipment and local water conditions." },
      { q: "Do you handle emergency water heater service?", a: "Yes. If you lose hot water unexpectedly, call us. We'll diagnose whether a repair or replacement is the right call and work to restore hot water promptly." },
    ],
    internalLinks: [
      { label: "HVAC maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "emergency repairs", path: "/services/emergency-repairs/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "request a water heater estimate", path: "/contact-us/" },
    ],
    related: ["maintenance-tune-ups", "emergency-repairs"],
  },
  {
    slug: "planned-maintenance",
    title: "Planned Maintenance",
    short: "Membership-style maintenance that protects your equipment with scheduled tune-ups and priority service.",
    seoTitle: "Planned HVAC Maintenance in Auburn, CA | Spoor's Heating & Air",
    metaDescription: "Planned HVAC maintenance in Auburn, CA — the Spoor's Home Comfort Club with scheduled tune-ups, priority service, and detailed records for Placer County homes since 1925.",
    h1: "Trusted Planned HVAC Maintenance in Auburn, CA",
    headline: "Planned comfort care that's always covered.",
    controlHeader: "Take the guesswork out of staying comfortable.",
    subServices: [
      { title: "Scheduled Seasonal Tune-Ups", description: "Automatic AC and heating tune-ups timed to each peak season." },
      { title: "Priority Service", description: "Priority scheduling and faster response for plan members." },
      { title: "Detailed Service History", description: "Complete records so nothing is missed from year to year." },
      { title: "Enrollment & Plan Review", description: "We review your equipment and recommend the right level of care." },
      { title: "Early Problem Detection", description: "We catch small issues before they become costly breakdowns." },
    ],
    image: images.heatingBreak,
    overview:
      "Spoor's Planned Maintenance program keeps your heating and cooling systems in top shape with scheduled tune-ups, priority service, and peace of mind — so you're never caught off guard by a breakdown.",
    signs: [
      "You want to avoid surprise breakdowns",
      "You'd like priority scheduling",
      "You want to extend equipment life",
      "You forget to schedule seasonal tune-ups",
    ],
    benefits: [
      "Scheduled, automatic seasonal tune-ups",
      "Priority service and scheduling",
      "Longer equipment life and efficiency",
      "Early detection of potential problems",
    ],
    process: [
      { step: "Before", title: "Enrollment", text: "We review your equipment and recommend the right maintenance plan." },
      { step: "During", title: "Scheduled Care", text: "We perform seasonal tune-ups at the right times each year." },
      { step: "After", title: "Ongoing Records", text: "We keep detailed service history so nothing is missed." },
    ],
    faqs: [
      { q: "Is planned maintenance worth it?", a: "For most homeowners, yes. Planned maintenance helps prevent breakdowns, keeps systems efficient, and extends equipment life — often saving more than the cost of the program. You also avoid forgetting to schedule seasonal visits." },
      { q: "What's included in the Home Comfort Club?", a: "Scheduled seasonal tune-ups, priority service and scheduling, detailed service history, and early problem detection. The plan keeps your equipment on a consistent care routine year after year." },
      { q: "How often will my system be serviced?", a: "Typically twice a year — an AC tune-up in spring and a heating tune-up in fall — so each system is ready for its peak season. We schedule the visits and keep the records." },
      { q: "Does planned maintenance include repairs?", a: "The plan covers scheduled tune-ups and priority service. Repairs are separate, but members get priority scheduling and a clear record that helps us diagnose faster. We'll always explain costs before any repair work." },
      { q: "Will the plan protect my equipment warranty?", a: "Many manufacturers require regular professional maintenance to keep warranty coverage valid. Our detailed service records help you meet that requirement. Check your warranty terms for the required schedule." },
      { q: "What if I have a breakdown as a member?", a: "Members get priority scheduling and faster response. We have your service history on hand, which helps us diagnose and get you back up and running sooner." },
      { q: "How do I enroll in the Home Comfort Club?", a: "Reach out through our contact page and we'll review your equipment and recommend the right level of care. We'll confirm your plan and set up your seasonal schedule." },
    ],
    internalLinks: [
      { label: "AC & heating tune-ups", path: "/services/maintenance-tune-ups/" },
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "heating services", path: "/services/heating/" },
      { label: "emergency repairs", path: "/services/emergency-repairs/" },
      { label: "areas Spoor's serves", path: "/service-areas/" },
      { label: "enroll in the Home Comfort Club", path: "/contact-us/" },
    ],
    related: ["maintenance-tune-ups", "air-conditioning", "heating"],
  },
];

export const serviceAreas = [
  { slug: "alta", name: "Alta", intro: "Spoor's proudly serves the community of Alta with dependable HVAC service from our Auburn home base.", nearby: ["Colfax", "Weimar", "Meadow Vista"] },
  { slug: "applegate", name: "Applegate", intro: "Homeowners in Applegate rely on Spoor's for honest heating and cooling service backed by a century of local trust.", nearby: ["Auburn", "Meadow Vista", "Newcastle"] },
  { slug: "auburn", name: "Auburn", intro: "As an Auburn-based, family-owned company since 1925, Spoor's is proud to keep our hometown neighbors comfortable all year.", nearby: ["Newcastle", "Meadow Vista", "Applegate", "Penryn"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/eb41d5106_auburn-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Auburn, CA — homes served by Spoor's Heating & Air" },
  { slug: "citrus-heights", name: "Citrus Heights", intro: "Spoor's brings dependable, family-owned HVAC service to Citrus Heights homeowners throughout the seasons.", nearby: ["Roseville", "Folsom", "Sacramento"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/ace35d5a5_citrus-heights-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Citrus Heights, CA — homes served by Spoor's Heating & Air" },
  { slug: "colfax", name: "Colfax", intro: "From foothill winters to hot summers, Spoor's serves Colfax homeowners with reliable heating and cooling.", nearby: ["Alta", "Weimar", "Meadow Vista"] },
  { slug: "folsom", name: "Folsom", intro: "Spoor's provides trusted HVAC installation, repair, and maintenance to Folsom homeowners.", nearby: ["Roseville", "Granite Bay", "Orangevale"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/2fe39efcd_folsom-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Folsom, CA — homes served by Spoor's Heating & Air" },
  { slug: "granite-bay", name: "Granite Bay", intro: "Granite Bay homeowners count on Spoor's for honest, professional heating and air conditioning service.", nearby: ["Roseville", "Folsom", "Rocklin"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/73c3b4414_granite-bay-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Granite Bay, CA — homes served by Spoor's Heating & Air" },
  { slug: "lincoln", name: "Lincoln", intro: "Spoor's brings nearly a century of family-owned HVAC experience to homes in Lincoln.", nearby: ["Rocklin", "Roseville", "Citrus Heights"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/b0bbf4ef8_lincoln-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Lincoln, CA — homes served by Spoor's Heating & Air" },
  { slug: "loomis", name: "Loomis", intro: "Dependable, local HVAC service for Loomis homeowners — from tune-ups to full system replacement.", nearby: ["Rocklin", "Penryn", "Newcastle"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/c3baf3b45_loomis-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Loomis, CA — homes served by Spoor's Heating & Air" },
  { slug: "meadow-vista", name: "Meadow Vista", intro: "Spoor's serves Meadow Vista with the same honest, family-owned care we've offered since 1925.", nearby: ["Auburn", "Colfax", "Applegate"] },
  { slug: "nevada-city", name: "Nevada City", intro: "From cold foothill winters to warm summers, Spoor's keeps Nevada City homes comfortable.", nearby: ["Grass Valley", "Colfax", "Alta"] },
  { slug: "newcastle", name: "Newcastle", intro: "Newcastle homeowners trust Spoor's for dependable HVAC service from a locally rooted, family-owned team.", nearby: ["Auburn", "Loomis", "Penryn"] },
  { slug: "orangevale", name: "Orangevale", intro: "Spoor's provides honest, reliable heating and cooling service to Orangevale homeowners.", nearby: ["Folsom", "Citrus Heights", "Roseville"] },
  { slug: "penryn", name: "Penryn", intro: "Penryn homeowners rely on Spoor's for trusted HVAC service from a century-old local business.", nearby: ["Loomis", "Newcastle", "Auburn"] },
  { slug: "rocklin", name: "Rocklin", intro: "Spoor's serves Rocklin with dependable HVAC installation, repair, and maintenance from our Auburn base.", nearby: ["Roseville", "Lincoln", "Loomis"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/3592917f2_rocklin-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Rocklin, CA — homes served by Spoor's Heating & Air" },
  { slug: "roseville", name: "Roseville", intro: "Roseville homeowners count on Spoor's for honest, family-owned heating and air conditioning service.", nearby: ["Rocklin", "Granite Bay", "Citrus Heights"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/e6d23f11a_roseville-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Roseville, CA — homes served by Spoor's Heating & Air" },
  { slug: "sacramento", name: "Sacramento", intro: "Spoor's brings trusted, family-owned HVAC service to homes across the Sacramento area.", nearby: ["West Sacramento", "Citrus Heights", "Roseville"], image: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/83d08d6ec_sacramento-ca-neighborhood-aerial.webp", imageAlt: "Aerial view of a residential neighborhood in Sacramento, CA — homes served by Spoor's Heating & Air" },
  { slug: "weimar", name: "Weimar", intro: "Weimar homeowners trust Spoor's for reliable HVAC service backed by nearly a century of local experience.", nearby: ["Colfax", "Meadow Vista", "Auburn"] },
  { slug: "west-sacramento", name: "West Sacramento", intro: "Spoor's provides dependable heating and cooling service to West Sacramento homeowners.", nearby: ["Sacramento", "Davis", "Roseville"] },
];

export const aboutPages = [
  {
    slug: "our-mission",
    title: "Our Mission",
    summary: "To combine small-town values with the latest heating and cooling technology — delivering honest, dependable service that Auburn-area families can trust.",
    body: [
      "Our mission is simple: treat every home like it's our own. For four generations, Spoor's has served Auburn and the surrounding foothill communities with honest recommendations, skilled workmanship, and a genuine commitment to our neighbors' comfort.",
      "We believe that modern equipment and training matter — but they only matter when paired with integrity. That's why we invest in ongoing technician education while holding fast to the values this company was built on in 1925.",
    ],
  },
  {
    slug: "our-commitment",
    title: "Our Commitment",
    summary: "A century-old promise to our community: honest work, fair pricing, and dependable service.",
    body: [
      "Since 1925, our commitment to Auburn hasn't changed. We show up when we say we will, explain our work in plain language, and stand behind everything we do.",
      "We hire and train technicians who share these values, so the person working in your home treats it — and you — with respect.",
    ],
  },
  {
    slug: "customer-service",
    title: "Customer Service",
    summary: "How we treat our customers — before, during, and after every service call.",
    body: [
      "Before we arrive, we communicate clearly about timing and what to expect. During the visit, our technicians protect your home, explain their findings, and answer your questions.",
      "After the work is done, we're still here. If something isn't right, we'll make it right. That's been our standard for nearly a hundred years.",
    ],
  },
  {
    slug: "careers",
    title: "Careers",
    summary: "Join a family-owned team that values skill, integrity, and our local community.",
    body: [
      "Spoor's is always looking for dependable, skilled technicians who take pride in their work and treat customers with respect.",
      "If you're interested in joining our team, please reach out through our contact page. We'll be in touch when openings match your qualifications.",
    ],
  },
  {
    slug: "community-involvement",
    title: "Community Involvement",
    summary: "Proudly rooted in Auburn and the surrounding foothill communities.",
    body: [
      "As a family-owned business since 1925, Spoor's is part of the fabric of Auburn. We support our neighbors not just through our work, but through involvement in the community we call home.",
      "We're grateful for the trust this community has placed in us for four generations, and we're committed to earning it for the next four.",
    ],
  },
];

export const homeFaqs = [
  { q: "How long has Spoor's been in business?", a: "Spoor's has been family-owned and serving the Auburn, California area since 1925 — nearly a century of trusted local HVAC service." },
  { q: "Do you offer 24/7 emergency service?", a: "Yes. We provide 24/7 emergency support for heating and cooling issues across our service area. Call (530) 823-1843 anytime." },
  { q: "What areas do you serve?", a: "We serve Auburn and surrounding communities including Roseville, Rocklin, Folsom, Lincoln, Granite Bay, and more. See our service areas page for the full list." },
  { q: "Do you offer financing?", a: "Yes. We offer financing options to help make larger repairs and system replacements manageable. Visit our financing page or contact us for details." },
  { q: "How do I schedule a service?", a: "You can call us at (530) 823-1843 or use our contact page to request an estimate online. We'll get back to you to confirm a time." },
];

const blogArticleRecords = [
  {
    slug: "after-the-wildfires-servicing-your-ac-system-for-smoke-damage",
    title: "After the Wildfires: Servicing Your AC System for Smoke Damage",
    category: "Air Conditioning",
    date: "Jun 10, 2026",
    isoDate: "2026-06-10",
    author: "Spoor's Heating & Air",
    readTime: "4 mins read",
    excerpt:
      "Wildfire smoke carries fine ash and soot that settle inside your AC system. Here's how professional servicing protects your home after smoke exposure.",
    image: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/e895156ef_AdobeStock_541231422.jpeg",
    body: [
      "Wildfires are an unfortunate reality for many communities across Northern California, including areas like Sacramento, Auburn, and Meadow Vista. Even when fires are miles away, smoke particles infiltrate homes and damage HVAC equipment. If your home experienced wildfire smoke exposure, your air conditioning system and HVAC components need professional inspection and servicing to maintain performance and protect indoor air quality.",
      "Smoke carries fine ash, chemicals, and soot that settle inside your AC system, ductwork, and air filters. Without proper cleaning and maintenance, these contaminants circulate through your home long after the fires are gone. Professional HVAC servicing helps restore efficiency, improve air quality, and prevent costly breakdowns.",
      {
        heading: "How Wildfire Smoke Gets Into Your HVAC System",
        paragraphs: [
          "Wildfire smoke infiltrates your air conditioning system and entire HVAC system, especially when units run continuously during hot California summers. Smoke particles are extremely small and pass through basic air filters, collecting on evaporator coils, fans, and internal components. Over time, this buildup restricts airflow and reduces cooling performance.",
          "For homeowners in Sacramento, Auburn, and Meadow Vista, wildfire smoke exposure forces your HVAC equipment to work harder than normal. Soot accumulation inside your system also causes unpleasant odors whenever the system runs. Professional HVAC technicians inspect and clean internal components to remove smoke residue and restore proper airflow.",
          "Routine servicing after wildfire events is one of the best ways to protect your system. A professional inspection ensures your heating and cooling system continues operating safely while improving your home's indoor air quality.",
        ],
      },
      {
        heading: "Signs of Smoke Damage in Your AC or HVAC System",
        paragraphs: [
          "Smoke damage is not always obvious right away. However, there are several warning signs homeowners should watch for after wildfire smoke exposure.",
          "One of the most common signs is a lingering smoky or musty smell whenever your AC turns on. This may mean smoke particles, soot, or ash have collected inside your system or ductwork. You may also notice weaker airflow, uneven cooling, or higher energy bills because your HVAC system is working harder to push air through dirty components.",
          "Other signs of possible smoke damage include dirty air filters that clog quickly, visible soot around vents, increased dust inside the home, allergy-like symptoms, or unusual noises from the system. If your AC struggles to cool your home after wildfire smoke has been present in the area, it is time to schedule a professional inspection.",
        ],
      },
      {
        heading: "Improving Indoor Air Quality After Wildfire Smoke Exposure",
        paragraphs: [
          "Wildfire smoke dramatically impacts indoor air quality. Even if smoke exposure lasted only a few days, lingering particles remain trapped inside your HVAC system and ductwork.",
          "For families in Granite Bay, Orangevale, Auburn, and Sacramento, improving indoor air quality is a top priority after wildfire season. Advanced filtration systems, duct cleaning, and professional servicing help remove pollutants and allergens introduced by smoke.",
          "Professional HVAC technicians recommend upgraded filtration, air purification systems, or enhanced maintenance schedules to keep your home safe and comfortable year-round.",
        ],
      },
      {
        heading: "Protecting Your AC Unit After Wildfires",
        paragraphs: [
          "Your central air conditioner is a major investment in your home's comfort. Protecting it after wildfire smoke exposure is critical for maintaining long-term efficiency and preventing premature system failure.",
          "Smoke particles accumulate in sensitive components like condenser coils and blower assemblies. If not addressed, these contaminants restrict airflow, reduce cooling capacity, and increase strain on your HVAC equipment. Professional inspections and cleaning services ensure your central air conditioning unit operates at peak performance.",
          "If your HVAC system was affected by wildfire smoke, don't wait for small problems to become major repairs. Contact Spoor's Heating & Air today to schedule your AC repair, HVAC service, or air conditioning maintenance.",
        ],
      },
    ],
  },
  {
    slug: "breathe-easy-hvac-tips-for-allergy-sufferers",
    title: "Breathe Easy: HVAC Tips for Allergy Sufferers",
    category: "Indoor Air Quality",
    date: "May 18, 2026",
    isoDate: "2026-05-18",
    author: "Spoor's Heating & Air",
    readTime: "5 mins read",
    excerpt:
      "Seasonal allergens and indoor air pollutants can make home feel miserable. Here's how your HVAC system can help allergy sufferers breathe easier.",
    image: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/0e5cfc67c_spoors-air-filter-replacement-auburn-ca-2.webp",
    body: [
      "Seasonal allergies make even the most comfortable home feel unbearable. While many people focus on outdoor triggers like pollen counts and changing weather, the truth is that indoor air often contains just as many allergens. Dust mites, pet dander, mold spores, and outdoor pollutants can all become trapped inside your home and circulate through your HVAC system if proper precautions are not taken.",
      "For allergy sufferers, maintaining clean air indoors is not just about comfort — it is about health. With professional HVAC services and proper system care, you can notably improve indoor air quality and reduce the irritants that trigger your symptoms.",
      {
        heading: "Why Indoor Air Quality Matters for Allergy Relief",
        paragraphs: [
          "Many homeowners do not realize that indoor air can be more polluted than outdoor air. When windows and doors remain closed for much of the year, allergens become trapped and continuously recirculated through your heating and cooling system. Each time your system runs, it may be spreading microscopic particles throughout every room.",
          "Poor air quality contributes to persistent coughing, congestion, sinus irritation, headaches, and fatigue. For individuals with asthma or severe allergies, contaminated air heavily impacts daily comfort and overall wellness.",
          "A properly maintained HVAC system plays a central role in filtering and circulating air. When components are clean and functioning correctly, your system captures airborne particles, regulates airflow, and maintains balanced humidity levels.",
        ],
      },
      {
        heading: "Upgrade Your Air Filtration for Maximum Protection",
        paragraphs: [
          "Your air filter is your home's first line of defense against airborne allergens. However, not all filters provide the same level of protection. Basic filters are designed primarily to protect the equipment itself, not necessarily to improve air quality.",
          "Upgrading your air filtration system makes a noticeable difference in reducing allergy triggers. Higher-efficiency filters are capable of trapping smaller particles, including pollen, pet dander, and fine dust. Advanced filtration options are integrated directly into your existing AC system, providing whole-home protection rather than targeting a single room.",
          "The key is consistency. Even the best filter cannot perform effectively if it is clogged. Replacing filters on a regular schedule ensures optimal airflow, better HVAC efficiency, and improved air cleanliness.",
        ],
      },
      {
        heading: "Routine HVAC Maintenance is Key",
        paragraphs: [
          "Routine HVAC maintenance is one of the most effective ways to support allergy relief. Over time, internal components such as coils, blowers, and ducts accumulate dust and debris. If left unaddressed, this buildup causes a circulation of allergens back into your home.",
          "Professional HVAC service includes cleaning critical components, inspecting ductwork, checking airflow, and ensuring your system is operating efficiently. Maintenance appointments not only extend the lifespan of your equipment but also improve air circulation and reduce contaminant buildup.",
          "When your system runs efficiently, it filters air more effectively and maintains consistent temperatures throughout your home.",
        ],
      },
      {
        heading: "Managing Humidity to Reduce Allergens",
        paragraphs: [
          "Humidity plays an important role in indoor air quality. High moisture levels create an ideal environment for mold growth and dust mites, both of which are common allergy triggers. In humid climates, managing moisture is essential for maintaining a healthy indoor space.",
          "Your AC system naturally removes some humidity during operation, but in many homes, additional support may be necessary. Installing a whole-home dehumidifier provides consistent moisture control throughout every room.",
          "Maintaining balanced humidity levels helps prevent mold spores from spreading, reduces musty odors, and improves overall comfort.",
        ],
      },
    ],
  },
  {
    slug: "annual-hvac-maintenance-checklist-for-homeowners",
    title: "Annual HVAC Maintenance Checklist for Homeowners",
    category: "Maintenance",
    date: "Apr 6, 2026",
    isoDate: "2026-04-06",
    author: "Spoor's Heating & Air",
    readTime: "5 mins read",
    excerpt:
      "Following a simple annual maintenance checklist can prevent costly breakdowns, lower energy bills, and extend the life of your HVAC system.",
    image: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/777a02c57_AdobeStock_596579616.jpeg",
    body: [
      "Your air conditioning system and heating equipment work hard through long cooling seasons, high humidity, and sudden temperature swings. Routine maintenance is essential for reliable comfort. Whether you rely on a central air conditioner or a heat pump, following an annual maintenance checklist helps prevent breakdowns, improves efficiency, and reduces the need for unexpected repairs throughout the year.",
      {
        heading: "Why Annual HVAC Maintenance Matters",
        paragraphs: [
          "Over time, environmental factors build up inside your AC system, restricting airflow and forcing components to operate under increased strain. When systems run inefficiently, homeowners often notice higher utility bills long before realizing maintenance is overdue.",
          "Properly maintained equipment consumes less energy, maintains more consistent indoor temperatures, and experiences fewer mechanical failures. Regular inspections also allow technicians to identify worn parts early, helping homeowners avoid costly repairs or unexpected system replacements.",
          "Many homeowners only search for HVAC maintenance after their system stops working. However, annual maintenance significantly reduces the likelihood of emergency breakdowns while extending the lifespan of your HVAC unit.",
        ],
      },
      {
        heading: "Replace Air Filters",
        paragraphs: [
          "Changing filters regularly is one of the easiest and most effective forms of air conditioner maintenance. Dirty filters restrict airflow, forcing your AC unit or heating system to work harder to maintain temperature settings. This added strain increases energy usage and accelerates wear on internal components.",
          "Most households should replace filters every one to three months, though homes with pets, allergies, or higher dust levels require more frequent changes. Clean filters not only protect your HVAC system, but also improve air quality by reducing circulating allergens and airborne particles.",
        ],
      },
      {
        heading: "Inspect Thermostat Performance and Settings",
        paragraphs: [
          "Your thermostat acts as the control center for your heating and air conditioning systems. Incorrect settings or outdated thermostats cause excessive cycling, uneven temperatures, or wasted energy.",
          "Homeowners should verify seasonal temperature settings, replace batteries when necessary, and consider upgrading to programmable or smart thermostats. Modern controls help optimize run times, reduce energy consumption, and improve overall efficiency.",
        ],
      },
      {
        heading: "Clean Around the Outdoor AC Unit",
        paragraphs: [
          "The outdoor condenser plays a critical role in heat transfer for your central air system. Leaves, dirt, grass clippings, and landscaping debris can accumulate around the unit, restricting airflow and reducing cooling capacity.",
          "Maintaining at least two feet of clearance around the outdoor AC unit helps ensure proper ventilation. Gently rinsing the coils with a garden hose can remove surface buildup and improve performance.",
        ],
      },
      {
        heading: "When to Schedule a Professional HVAC Maintenance",
        paragraphs: [
          "Even with regular homeowner upkeep, professional inspections remain essential for maintaining a healthy HVAC system. Licensed HVAC contractors have specialized tools and training to evaluate internal components that homeowners cannot safely access.",
          "During a professional service appointment, technicians perform a detailed system evaluation that includes electrical inspections, refrigerant testing, coil cleaning, airflow measurement, and safety checks. These steps ensure your system operates efficiently while identifying developing issues before they require a major repair.",
          "Contact Spoor's Heating & Air to schedule your professional HVAC maintenance and keep your home comfortable all year long.",
        ],
      },
    ],
  },
  {
    slug: "5-warning-signs-of-poor-indoor-air-quality-in-auburn-ca",
    title: "5 Warning Signs of Poor Indoor Air Quality in Auburn, CA",
    category: "Indoor Air Quality",
    date: "Mar 30, 2026",
    isoDate: "2026-03-30",
    author: "Spoor's Heating & Air",
    readTime: "6 mins read",
    excerpt:
      "Stuffy air, excessive dust, and visible mold are signs your indoor air quality needs attention. Here's what Auburn homeowners should watch for.",
    image: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/e3f4c7187_AdobeStock_450097271.jpeg",
    body: [
      "Many Auburn, CA, homeowners don't realize their indoor air quality may be worse than the air outside. Poor indoor air quality can result in headaches, allergies, and respiratory irritation caused by excessive dust throughout the home. If your house feels stuffy, humid, or musty, your HVAC system may be contributing to the problem.",
      "Excessive condensation, stale air, mildew, dust, and mold growth are warning signs that your air quality is at risk and needs evaluation from an HVAC professional. With over 100 years of experience, Spoor's Heating & Air Conditioning walks you through the top warning signs of poor air quality, and how regular maintenance can help protect your home.",
      {
        heading: "Physical Symptoms Like Headaches or Fatigue",
        paragraphs: [
          "If you find yourself feeling unwell at home more often than usual, your air quality could be compromised. Common symptoms of poor air quality include headaches, fatigue, brain fog, increased allergies, and asthma. Shortness of breath, coughing, and sneezing can be signs of poor indoor air quality and may indicate your air conditioner needs servicing.",
          "In Northern California, wildfire smoke is common and can influence indoor air quality. Smoke from wildfires can overload filters, contaminate coils, and cause damage to outdoor HVAC units, which can lead to issues in indoor air quality.",
        ],
      },
      {
        heading: "Stale or Stuffy Air In Your Auburn Home",
        paragraphs: [
          "Stagnant air is immediately noticeable. A clear sign of poor indoor air quality, stale air can occur when evaporator coils become dirty or malfunction. Poor air circulation allows toxins, pollutants, and other negative airborne particles to gather, which can make breathing clearly difficult.",
          "To ensure your air quality is in peak condition, stay up to date with filter changes. Our HVAC technicians recommend that homeowners change their filters every 90 days. If you have pets or allergies, every 60 days is recommended.",
          "If regular filter changes don't resolve the issue, it signals a deeper air conditioning problem. Malfunctioning ductwork can lead to excessive dust accumulation, likely attributed to gaps or leaks that allow contaminants to enter the air supply.",
        ],
      },
      {
        heading: "Condensation and High Indoor Humidity",
        paragraphs: [
          "If condensation is apparent in your home, chances are your air conditioner is not functioning properly, leading to high humidity. Condensation appears as water droplets on your microwave, bathroom mirror, windows, walls, and other surfaces throughout your home. Indoor humidity above 50% is the EPA's general threshold for mold risk.",
          "Excess humidity leads to mold and mildew growth, which are serious issues that need to be addressed immediately. During the rainy season, Northern California is especially at risk for mold growth given the increase in moisture levels.",
        ],
      },
      {
        heading: "Mildew and Mold Growth Around Vents and Walls",
        paragraphs: [
          "A clear sign that something is wrong with your indoor air quality is the presence of mildew and mold. Once mold gets into your duct system, your HVAC starts actively circulating spores throughout every room in the house.",
          "Dark spots or discoloration on your ceiling, walls, floors, and windowsills indicate mold growth. Mold spores can trigger respiratory problems, including chronic coughing, throat irritation, and in severe cases, long-term lung damage.",
        ],
      },
      {
        heading: "Excessive Dust Accumulation Throughout the Home",
        paragraphs: [
          "Dust is made up of dead skin cells, volatile organic compounds, fibers from clothing, and pet hair. Like mold and mildew, excessive dust can stir up health problems and accelerate asthma and allergies.",
          "If you notice dust continually comes back after cleaning, your air filtration system may not be working correctly. Dirty filters and coils, leaky ducts, and fan issues could be causing your HVAC system to malfunction, leading to inadequate indoor air quality.",
          "If you're noticing warning signs of poor indoor air quality in Auburn, Meadow Vista, or Orangevale, Spoor's Heating & Air Conditioning can help. Our certified technicians provide professional IAQ testing, air filtration installation, duct inspections, and HVAC maintenance to keep your home's air clean year-round.",
        ],
      },
    ],
  },
  {
    slug: "when-is-it-time-to-replace-your-hvac-system",
    title: "When Is It Time To Replace Your HVAC System?",
    category: "Air Conditioning",
    date: "Feb 26, 2026",
    isoDate: "2026-02-26",
    author: "Spoor's Heating & Air",
    readTime: "7 mins read",
    excerpt:
      "Repeated repairs, rising energy bills, and an aging system are all signs it may be time to replace your HVAC equipment rather than keep fixing it.",
    image: "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fed95821e_AdobeStock_66338212.jpeg",
    body: [
      "Knowing when to replace your HVAC system can help you avoid unexpected breakdowns and costly emergency repairs. While regular air conditioner maintenance can extend the life of your unit, every system eventually reaches a point where repairs become less practical than replacement. Paying attention to performance issues, rising costs, and the age of your equipment can help you make a proactive decision before comfort and efficiency decline.",
      {
        heading: "System Is Over 15 Years Old",
        paragraphs: [
          "Most HVAC systems are built to last about 12 to 15 years with consistent maintenance. In the Sierra Foothills, systems often run hard during hot summers and still see steady use in cooler months. Once your unit passes the 15-year mark, efficiency typically drops and the likelihood of breakdowns increases. Even if it's still operating, an aging system may cost more to run and struggle to keep your home consistently comfortable.",
        ],
      },
      {
        heading: "Energy Bills Keep Rising",
        paragraphs: [
          "If your energy bills keep rising without a clear change in usage, your HVAC system may be losing efficiency. As equipment ages, components wear down and the system has to work harder to maintain the same temperature. Longer run times and reduced performance can quietly drive up utility costs.",
        ],
      },
      {
        heading: "Frequent Repairs",
        paragraphs: [
          "If you've needed multiple repairs over the past year or two, your HVAC system may be nearing the end of its lifespan. While occasional service calls are normal, repeated breakdowns can signal deeper mechanical wear. As parts begin to fail more often, repair costs add up quickly. At a certain point, investing in a new system becomes more practical than continuing to fix an aging one.",
        ],
      },
      {
        heading: "System Uses R-22 Refrigerant",
        paragraphs: [
          "If your HVAC system uses R-22 refrigerant, it's a sign that you should consider AC replacement. R-22 refrigerant was phased out in 2020 due to environmental regulations, which means it is no longer produced and has become increasingly expensive to source. Upgrading to a newer unit that uses current refrigerants can improve efficiency and eliminate the risk of rising R-22 costs.",
        ],
      },
      {
        heading: "Short Cycling and Constant Running",
        paragraphs: [
          "If you notice your HVAC system switching on and off frequently throughout the day, it could be short cycling. This constant restarting puts extra stress on the equipment, can raise energy bills, and may lead to premature wear.",
          "Conversely, if your system runs constantly but your home still doesn't feel cool, it may no longer be operating efficiently. Continuous operation not only increases energy costs but can signal the system is nearing the end of its service life.",
        ],
      },
      {
        heading: "Loud or Unusual Noises",
        paragraphs: [
          "If your HVAC system starts making loud or unusual noises, it may be a sign that internal components are wearing out. Banging, grinding, squealing, or rattling sounds are not normal during regular operation. These noises can indicate issues with the motor, blower, compressor, or other moving parts. Persistent or worsening noise in an older system can signal deeper mechanical problems.",
        ],
      },
      {
        heading: "Schedule a Professional HVAC Evaluation",
        paragraphs: [
          "Knowing when to replace your HVAC system can save you from unexpected breakdowns, rising energy costs, and ongoing repair expenses. While many issues can be fixed with routine service, repeated performance problems often signal that your system is no longer keeping up.",
          "If you're unsure whether repair or new AC installation makes more sense, Spoor's skilled HVAC technicians can help you understand the condition of your system and your options. Replacing your HVAC unit at the right time can improve comfort, lower energy bills, and provide greater reliability for years to come.",
        ],
      },
    ],
  },
  ...additionalBlogArticles,
];

const articleText = (article) => (article.body || [])
  .flatMap((block) => typeof block === "string" ? [block] : block.paragraphs || [])
  .join(" ");

export const blogArticles = blogArticleRecords.map((article) => ({
  ...article,
  imageAlt: article.imageAlt || `${article.title} — Spoor's Heating & Air`,
  seoTitle: article.seoTitle || article.title,
  metaDescription: article.metaDescription || article.excerpt,
  canonical: article.canonical || `${business.domain}/resources/blog/${article.slug}/`,
  primaryQuery: article.primaryQuery || article.title.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim(),
  supportingTopics: article.supportingTopics || [article.category],
  primaryLocalRelationship: article.primaryLocalRelationship || (/auburn|norcal|wildfire|sierra foothill/i.test(articleText(article)) ? "Auburn and Placer County" : ""),
  contextualInternalLinks: article.contextualInternalLinks || [],
  relatedArticles: article.relatedArticles || [],
  sources: article.sources || [],
  dateModified: article.dateModified || article.isoDate,
  verifiedReviewer: article.verifiedReviewer || null,
}));

export { blogCategories };

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function getServiceArea(slug) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getAboutPage(slug) {
  return aboutPages.find((a) => a.slug === slug);
}

export function getArticle(slug) {
  return blogArticles.find((a) => a.slug === slug);
}