import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { reviewsFor } from "@/lib/serviceReviews";

const B = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519";

// Card images, in the exact order they appear in the service card section.
const cardImages = [
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-simple-reliable-upkeep.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-keep-running-right.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-repairs-restore-cool-air.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-mold-leaks-fan-fixes.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-efficient-evaporative-cooling.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-cooler-vs-ac-guidance.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-right-sized-cooling.webp",
  "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-card-portable-whole-home.webp",
];

const swampCoolerContent = {
  heroImage: "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-hero-fan.webp",
  heroImageMobile: "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-hero-fan.webp",
  heroObjectPosition: "center center",
  heroMobileObjectPosition: "62% center",
  heroAlt: "Modern evaporative swamp cooler fan for Auburn, CA home cooling service",
  heroDimRight: true,
  badge: "SWAMP COOLERS",
  headline: "Swamp Cooler Maintenance, Repair & Installation in Auburn.",
  intro:
    "Seasonal start-ups, winterization, and pad repairs for Auburn swamp coolers.",
  sectionLabel: "SWAMP COOLER SERVICE",
  sectionHeading: "Efficient evaporative cooling, serviced the right way.",
  breakImage: `${B}/e02929fdf_imagebreakswampcooler.png`,
  breakAlt: "Close view of an evaporative swamp cooler blower and cooling pads",
  reviews: reviewsFor("swamp-coolers"),
  reviewsServiceLabel: "Swamp Cooler Services",
  faqHeading: "Frequently Asked Questions About Swamp Coolers",
  services: [
    {
      title: "Simple, Reliable Upkeep",
      desc: "Simple, efficient technology makes swamp coolers less cumbersome to service than air conditioners. AC units use a refrigeration cycle that needs refrigerants and components requiring regular cleaning and replacement. Swamp coolers use evaporative cooling with less complicated parts—mainly blowers, damp pads, and pumps. These components can become dirty over time, but regular maintenance prevents most significant repairs.",
      image: cardImages[0],
    },
    {
      title: "Keep Your Cooler Running Right",
      desc: "Basic maintenance can be done at home. Changing the water in the reservoir prevents mold growth, and inspecting the unit's exterior walls for damage catches undetected leaks before they become major repairs. Interior parts like the motorized fan are best left to professional technicians—electrical components are delicate, and their proximity to water makes them dangerous for untrained hands. Always disconnect the power supply before any maintenance or repairs.",
      image: cardImages[1],
    },
    {
      title: "Repairs That Restore Cool Air",
      desc: "Because swamp coolers use moisture, their exteriors and parts can rust from neglect. A rusty swamp cooler looks unattractive on a roof and runs badly—producing too little cold air for comfort or excess moisture that makes indoor air humid and musty. Spoor's offers complete HVAC services including swamp cooler parts replacements and repairs. We can also inspect a swamp-cooler-and-AC combination during one appointment to save you time and money.",
      image: cardImages[2],
    },
    {
      title: "Mold, Leaks, and Fan Fixes",
      desc: "Through meticulous, multi-point inspections we find and fix the most frequent issues. Mold grows in coolers left inactive with water in the reservoir—winterizing prevents it. Leaks from a crack or hole drain the reservoir, making the cooler ineffective and risking dry-run damage. Motorized fans that fail or weaken—often from a worn belt or blade—stop air from reaching the ductwork. We handle all three with prompt, dependable repair.",
      image: cardImages[3],
    },
    {
      title: "Efficient Evaporative Cooling",
      desc: "The concept of evaporative cooling is as old as civilization—ancient Egyptians hung wet blankets across doorways to cool incoming desert air. Electric fans pull in dry, warm outside air; the air passes over damp pads kept moist by small pumps; and that evaporation cools the air. Internal blowers then force the cooler air through the HVAC ducts and out the vents into your home.",
      image: cardImages[4],
    },
    {
      title: "Honest Cooler-vs-AC Guidance",
      desc: "Swamp coolers use less electricity than air conditioners, making them attractive for eco-friendly homeowners. But they shouldn't fully replace AC: evaporative cooling won't lower temperatures as much as refrigeration, and it functions best in arid conditions—which Northern California has in summer but not during rainy spring and fall. We'll give you an honest take on whether a swamp cooler or AC is the better fit for your home.",
      image: cardImages[5],
    },
    {
      title: "Right-Sized Cooling for Your Space",
      desc: "Swamp cooler capacity is measured in cubic feet per minute (CFM)—higher CFM cools a larger space. Estimate minimum CFM as square footage × ceiling height ÷ 2. A two-car garage (676 sq ft, 8-ft ceilings) needs at least ~2,800 CFM. Models differ by CFM output, energy efficiency, and cost, and lifespan varies by manufacturer. If you can't decide between models, our technicians point out the ideal one for you.",
      image: cardImages[6],
    },
    {
      title: "Portable Comfort or Whole-Home Coverage",
      desc: "Your first choice is portable versus whole-house. Portable coolers move room-to-room but only cool individual spaces, take up floor space, and stand out visually. Whole-house evaporative coolers mount outside on roofs or lawns and require professional installation—but they use the same ducts as your central HVAC system, making installation fast and easy. We help you choose the right approach for your home.",
      image: cardImages[7],
    },
  ],
  faqs: [
    {
      q: "Is a swamp cooler right for my Auburn home?",
      a: "Evaporative coolers work best in dry climates with good ventilation—conditions Northern California has in summer. Swamp coolers cost less to run than AC and offer fresh, ventilated air, but they're less effective in humid or rainy weather. We'll honestly assess whether a swamp cooler, AC, or a combination is the best fit for your home.",
    },
    {
      q: "What's the difference between a swamp cooler and central AC?",
      a: "A swamp cooler cools by evaporating water and brings in fresh outside air, while central AC recirculates and dehumidifies. Swamp coolers cost less to run but can't cool as aggressively in humid conditions. We help you compare based on your climate, comfort goals, and budget.",
    },
    {
      q: "What are signs my swamp cooler needs service?",
      a: "Rust on the exterior, weak airflow from the vents, odd fan noises, a trail of water near the unit, musty or humid indoor air, and mold growth after winter are common signs. Many of these are fixed with pad cleaning, part replacement, or winterization. If you notice any, schedule a service visit.",
    },
    {
      q: "Do swamp coolers need seasonal maintenance?",
      a: "Yes. A spring start-up gets the unit ready for summer, and a fall winterization—flushing the reservoir—prevents mold growth and protects the unit through cold months. Seasonal care extends the cooler's life and keeps it running efficiently. We handle both start-up and winterization.",
    },
    {
      q: "Can Spoor's repair my existing swamp cooler?",
      a: "Yes. We service pads, pumps, floats, fans, and motors, and replace rusty or worn parts. If you run a swamp-cooler-and-AC combination, our technicians can inspect both systems during one appointment. If a repair isn't worth it, we'll say so and explain your replacement options.",
    },
    {
      q: "How do I choose the right swamp cooler for my home?",
      a: "Start with capacity—measured in cubic feet per minute (CFM), estimated as square footage × ceiling height ÷ 2. Then choose portable versus whole-house based on your space, and compare models by CFM, efficiency, and cost. Our technicians help you calculate the right CFM and recommend the ideal model for your home.",
    },
  ],
};

export default function SwampCoolerServices() {
  return <ServiceDetailLayout {...swampCoolerContent} />;
}