import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { reviewsFor } from "@/lib/serviceReviews";

const WATER_HEATER_IMAGES = {
  hero: "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-hero.webp",
  heroMobile: "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-mobile-hero.webp",
  tank: "/assets/images/water-heaters/spoors-auburn-ca-traditional-tank-water-heater-room.webp",
  tankless: "/assets/images/water-heaters/spoors-auburn-ca-tankless-water-heater-installation.webp",
  hybrid: "/assets/images/water-heaters/spoors-auburn-ca-high-efficiency-water-heater-inspection.webp",
  repair: "/assets/images/water-heaters/spoors-auburn-ca-water-heater-repair-heating-element.webp",
  replacement: "/assets/images/water-heaters/spoors-auburn-ca-water-heater-replacement-mechanical-room.webp",
  maintenance: "/assets/images/water-heaters/spoors-auburn-ca-water-heater-piping-and-gauge-service.webp",
  feature: "/assets/images/water-heaters/spoors-auburn-ca-high-efficiency-water-heater-service-technician.webp",
  break: "/assets/images/water-heaters/spoors-auburn-ca-water-heater-burner-break.webp",
};

const waterHeaterContent = {
  heroImage: WATER_HEATER_IMAGES.hero,
  heroImageMobile: WATER_HEATER_IMAGES.heroMobile,
  heroAlt: "Technician servicing residential hot-water system piping and controls",
  heroObjectPosition: "center center",
  badge: "WATER HEATER SERVICES",
  headline: "Water Heater Repair and Installation in Auburn, CA.",
  intro:
    "Repair, replacement, and maintenance for tank, tankless, hybrid, and heat pump water heaters.",
  sectionLabel: "WATER HEATER SERVICES",
  sectionHeading: "Reliable hot water, sized for the way your home uses it.",
  sectionSubheading:
    "We compare the equipment, installation requirements, and long-term upkeep before recommending a system.",
  breakImage: WATER_HEATER_IMAGES.break,
  breakAlt: "Blue gas burner flames inside a residential water heater",
  reviews: reviewsFor("water-heater"),
  reviewsServiceLabel: "Water Heater Services",
  faqHeading: "Frequently Asked Questions About Water Heaters",
  services: [
    {
      title: "Traditional Tank Water Heaters",
      desc: "We repair and install gas and electric tank water heaters, then size the storage capacity around your household's normal demand. Clean installation, safe connections, and straightforward guidance come standard.",
      image: WATER_HEATER_IMAGES.tank,
    },
    {
      title: "Tankless Water Heaters",
      desc: "Tankless systems heat water as it is needed and free up floor space. We evaluate fuel type, flow rate, venting, water quality, and peak household demand before recommending a unit.",
      image: WATER_HEATER_IMAGES.tankless,
    },
    {
      title: "Hybrid and Heat Pump Water Heaters",
      desc: "Hybrid units move heat from the surrounding air into a storage tank and use electric elements for backup. We check the available space, airflow, drainage, electrical service, and hot-water demand before recommending this option.",
      image: WATER_HEATER_IMAGES.hybrid,
    },
    {
      title: "Water Heater Repair",
      desc: "No hot water, uneven temperatures, unusual noises, discolored water, and leaks all deserve a proper diagnosis. We identify the cause, explain the repair, and tell you when replacement makes more sense.",
      image: WATER_HEATER_IMAGES.repair,
    },
    {
      title: "Replacement and Right-Sizing",
      desc: "A replacement should fit the home, not just the opening left by the old unit. We compare capacity, recovery rate, fuel source, available utilities, and installation requirements before the work begins.",
      image: WATER_HEATER_IMAGES.replacement,
    },
    {
      title: "Maintenance and System Care",
      desc: "Tank flushing, anode checks, tankless descaling, and a full visual inspection help control sediment and catch developing problems. Service needs depend on the equipment and local water conditions.",
      image: WATER_HEATER_IMAGES.maintenance,
    },
  ],
  featureSection: {
    eyebrow: "HYBRID & HEAT PUMP WATER HEATERS",
    heading: "Move heat instead of making it from scratch.",
    description:
      "Hybrid water heaters use heat pump technology to pull warmth from the surrounding air and transfer it into the tank. Built-in electric elements provide backup during periods of heavy demand. For the right home, that can reduce energy use while maintaining dependable hot water.",
    image: WATER_HEATER_IMAGES.feature,
    imageAlt: "Spoor's technician servicing a high-efficiency water heating system",
    imageObjectPosition: "center center",
    benefits: [
      {
        title: "Efficient everyday operation",
        text: "Heat pump mode handles normal demand, while electric backup can support larger or less predictable draws.",
      },
      {
        title: "Installation details matter",
        text: "We evaluate household demand, available air volume, condensate drainage, electrical service, sound, and placement before recommending a system.",
      },
      {
        title: "Clear option comparisons",
        text: "We compare standard electric, gas, tankless, and hybrid equipment without pushing an upgrade that does not fit your home.",
      },
    ],
    ctaLabel: "Ask About Hybrid Water Heaters",
    formService: "Hybrid and Heat Pump Water Heaters",
  },
  faqs: [
    {
      q: "How do I know if I need water heater repair or replacement?",
      a: "Loss of hot water, inconsistent temperatures, rumbling, leaks, and discolored water can point to several different problems. We inspect the unit, identify the cause, and compare the repair against the age and condition of the equipment before recommending replacement.",
    },
    {
      q: "Should I choose a tank or tankless water heater?",
      a: "That depends on household demand, available gas or electrical capacity, venting, water quality, space, and budget. Tank systems store a set volume of hot water. Tankless systems heat water on demand. We size and compare both options for your home.",
    },
    {
      q: "What is a hybrid or heat pump water heater?",
      a: "A hybrid water heater uses a heat pump to transfer warmth from the surrounding air into a tank. Electric resistance elements provide backup when demand rises. The equipment still stores hot water, but it can use less electricity than a standard electric tank in a suitable installation.",
    },
    {
      q: "Is a heat pump water heater right for every home?",
      a: "No. These systems need enough surrounding air, a practical condensate drain, suitable electrical service, and a location where operating sound and cooler discharge air will not create problems. We review those conditions before recommending one.",
    },
    {
      q: "Do you install gas and electric water heaters?",
      a: "Yes. We service and install gas and electric tank systems, tankless systems, and qualifying hybrid heat pump water heaters. We match the equipment to the home's utilities and hot-water demand.",
    },
    {
      q: "Can a tankless water heater serve the whole house?",
      a: "A properly selected system can serve an entire home, but sizing matters. We calculate peak flow and temperature rise, then confirm the fuel, venting, electrical, and water-quality requirements before recommending a unit.",
    },
    {
      q: "What maintenance does a water heater need?",
      a: "Maintenance varies by equipment and water conditions. Tank units may need flushing and anode inspection. Tankless systems may need descaling. Hybrid equipment also needs clear airflow and clean filters. We inspect the full installation and recommend service based on the system in front of us.",
    },
  ],
};

export default function WaterHeaterServices() {
  return <ServiceDetailLayout {...waterHeaterContent} />;
}
