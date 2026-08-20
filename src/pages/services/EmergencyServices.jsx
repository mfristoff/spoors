import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { reviewsFor } from "@/lib/serviceReviews";

const U1 = "/assets/images/update-1";

const emergencyContent = {
  heroImage: `${U1}/spoors-auburn-ca-emergency-detail-hero.webp`,
  heroAlt: "HVAC technician diagnosing an outdoor air conditioner during an emergency service call",
  badge: "24/7 EMERGENCY REPAIR",
  headline: "24-Hour Emergency HVAC Repair in Auburn.",
  intro:
    "Heat or AC out? Our technicians answer 24/7 across Auburn.",
  sectionLabel: "EMERGENCY HVAC REPAIRS",
  sectionHeading: "Is it an HVAC emergency? Here's what to watch for.",
  breakImage: `${U1}/spoors-auburn-ca-emergency-detail-page-break.webp`,
  breakAlt: "Close view of an outdoor HVAC fan for emergency repair service",
  breakObjectPosition: "center center",
  breakHeightClass: "h-[300px] lg:h-[460px]",
  reviews: reviewsFor("emergency"),
  reviewsServiceLabel: "Emergency Repairs",
  faqHeading: "Frequently Asked Questions About Emergency HVAC Repair",
  services: [
    {
      title: "Burning or Gas Odors, Addressed Fast",
      desc: "A brief burning smell when a heater first turns on can be normal, but a lingering burning odor is cause for concern. Overheating, melting electrical components produce a burnt smell and can become a fire hazard—call Spoor's as soon as possible. If you have gas-powered appliances and smell rotting eggs, leave your home immediately and call the professionals; there may be a dangerous gas leak.",
      image: images.acService,
    },
    {
      title: "Strange Noises Diagnosed Quickly",
      desc: "Belts, fans, and internal components make loud or unusual noises when there's an issue. A high-pitched or shrill noise can signal the compressor's pressure is too high and needs immediate attention. Watch for banging, clanking, clicking, buzzing, rattling, squealing, or humming. If your air conditioner sounds like it's trying to talk to you, professional repairs are needed quickly to prevent more costly damage.",
      image: images.acHero,
    },
    {
      title: "Restored Airflow, No Guesswork",
      desc: "A clogged air filter can block airflow from reaching the ductwork and vents, making it seem like there's no air movement. We offer air quality services to ensure correct MERV-rated filtration. But if the system is running and air still isn't flowing, call us—there could be a duct issue, dirty coils, a faulty fan, or low refrigerant. We arrive promptly, diagnose the cause, and fix it.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-airflow.webp`,
    },
    {
      title: "Leaks Stopped Before They Spread",
      desc: "Small amounts of condensation are nothing to worry about, but puddles accumulating inside or outside the unit need a professional. Left alone, collected water can ruin the surrounding area, cause mold growth, and irreparably damage internal electrical components—sometimes requiring a full unit replacement. Water underneath the AC may also indicate a refrigerant leak, which is dangerous and requires immediate service.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-leaks.webp`,
    },
    {
      title: "Frozen Coils Thawed and Fixed",
      desc: "If your AC isn't cooling as usual, isn't coming on, or turns off prematurely, it could be a frozen evaporator coil or lines. Coils and their connecting lines can freeze when the unit is overtaxed, clogged, or dirty—no matter the outside temperature. A frozen coil blocks refrigerant flow so the unit can't cool. Don't be stuck sweating on a hot summer night; call our AC repair company for fast service.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-frozen.webp`,
    },
    {
      title: "Safe, Professional Repairs—Not DIY",
      desc: "The do-it-yourself approach is great for many situations, but letting someone without proper HVAC training repair a heating or cooling issue—or install a system—can result in complete system failure and cost a significant amount to correct. For safe, reliable emergency HVAC repair in Auburn, trust our trained and qualified technicians instead.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-safe-repair.webp`,
    },
    {
      title: "Prevent the Next Emergency",
      desc: "Regular HVAC maintenance lets our technicians catch potential issues before they develop into a full-blown emergency. It also keeps your system running at peak efficiency, saving energy and money each month. Joining our Home Comfort Club makes seasonal tune-ups automatic so you never forget to schedule them.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-prevent-next.webp`,
    },
    {
      title: "Honest Repair-vs-Replace Guidance",
      desc: "The more wear and tear placed on an HVAC system over time, the more emergency repairs it will need to stay operational. When our technicians feel your system is reaching the end of its service life, we'll offer honest suggestions and guidance on repair versus replacement—so you can avoid repeated breakdowns and restore dependable comfort.",
      image: `${U1}/spoors-auburn-ca-emergency-detail-repair-replace.webp`,
    },
  ],
  faqs: [
    {
      q: "Do you really answer emergency HVAC calls 24/7 in Auburn?",
      a: "Yes. Spoor's is available 24 hours a day, seven days a week for emergency HVAC repair across Auburn, Meadow Vista, and the Sierra Foothills. Our technicians deliver the same exceptional service at any time of day, so you're never left powering through a cold night or hot day.",
    },
    {
      q: "What counts as an HVAC emergency?",
      a: "Obvious emergencies include a system that won't turn on at all, a complete cooling or heating failure, or a refrigerant leak. Subtler signs include a lingering burning smell, a rotten-egg (gas) odor, loud banging or squealing noises, no air from the vents, puddles around the unit, or a frozen evaporator coil. If you're unsure, call us and we'll help you decide how urgent it is.",
    },
    {
      q: "What should I do before calling for emergency service?",
      a: "Check the thermostat setting, breaker, and the switch near the equipment, and note any sounds or smells. If you smell rotting eggs or suspect a gas leak, leave your home immediately and call your utility and a professional. If you see smoke or signs of fire, follow your utility's safety guidance first. That information helps us triage the call.",
    },
    {
      q: "How fast can Spoor's respond to an emergency in Auburn?",
      a: "Response time depends on call volume and your location within our service area. We prioritize true emergencies and communicate clearly about timing when you call, with the goal of restoring comfort as safely and quickly as possible.",
    },
    {
      q: "Can HVAC maintenance prevent emergencies?",
      a: "Many emergencies can be avoided. Regular tune-ups let our technicians catch worn parts, low refrigerant, and clogged coils before they cause a failure. Maintenance also keeps the system efficient, saving energy and money. While it won't stop every breakdown, it dramatically reduces the chance of a mid-season outage.",
    },
    {
      q: "Do you handle both emergency AC and heating repairs?",
      a: "Yes. We service urgent failures for both cooling and heating—central air, furnaces, heat pumps, and mini-splits. One call covers whichever system has failed, day or night, weekends and holidays included.",
    },
  ],
};

export default function EmergencyServices() {
  return <ServiceDetailLayout {...emergencyContent} />;
}