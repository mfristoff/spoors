import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import { reviewsFor } from "@/lib/serviceReviews";

const iaqContent = {
  heroImage: images.introAir,
  heroImageMobile: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/c97cbcdee_IndoorAirQualitymobilehero.png",
  heroAlt: "Spoor's Heating & Air technician improving indoor air quality in Auburn, CA",
  badge: "INDOOR AIR QUALITY",
  headline: "Breathe Easier with Cleaner, Healthier Indoor Air Quality in Auburn.",
  intro:
    "Filtration and purification for cleaner, healthier air in Auburn homes.",
  sectionLabel: "INDOOR AIR QUALITY SERVICES",
  sectionHeading: "Purify your indoor air and protect your family's health.",
  breakImage: images.introTech,
  breakAlt: "Spoor's Heating & Air technician servicing an HVAC system for cleaner indoor air",
  reviews: reviewsFor("indoor-air-quality"),
  reviewsServiceLabel: "Indoor Air Quality",
  faqHeading: "Frequently Asked Questions About Indoor Air Quality",
  services: [
    {
      title: "Find What's in Your Air",
      desc: "Bad air quality can be harder to identify than inefficient HVAC function—but the consequences are real, ranging from headaches and fatigue to respiratory issues and, with pollutants like carbon monoxide, worse. Our IAQ testing for Auburn and Meadow Vista homes and businesses identifies the contaminants affecting your air so we can recommend the right solution. Air pollution from wildfires, inadequate maintenance, and tight modern construction all contribute to poor IAQ we can measure and address.",
      image: images.auburn,
    },
    {
      title: "Right Filters for Cleaner Air",
      desc: "Using the correct type and size of air filter is critical to safe indoor air. A filter too large lets contaminants circulate; one too small restricts airflow and strains the system. MERV (Minimum Efficiency Reporting Value) rates filtration on a 1–16 scale—higher ratings trap more pollen, pet dander, and bacteria. For most residential and commercial systems we recommend a MERV 8–13 filter. We help you select the ideal filter—HEPA, disposable pleated, fiberglass, or electrostatic—based on your home or business.",
      image: spoorsImageLibrary.hvacFilterService,
    },
    {
      title: "Balanced Humidity, Healthier Air",
      desc: "Moisture-rich, high-heat environments breed mold, mildew, and dust mites that degrade indoor air quality. High moisture also strains your cooling system—dirty filters and airborne contaminants cause filtration failure and premature breakdowns. We balance humidity and improve IAQ with AC repairs, installations, swamp cooler installations, and general maintenance, catching HVAC issues early so your system functions optimally and your indoor air stays clean.",
      image: images.acHero,
    },
    {
      title: "Safe Heat That Won't Pollute Your Air",
      desc: "Without regular tune-ups and prompt repairs, your furnace can be a hidden source of poor indoor air. Natural gas, propane, and oil furnaces can release carbon monoxide—colorless, odorless, and deadly without proper ventilation. Outdated heating systems often fail to clean indoor air and regulate humidity, worsening allergies. Protect your air quality and safety with comprehensive heating services, including ductless mini-split systems that improve IAQ and reduce energy use through zoned temperature control.",
      image: images.heatingFurnace,
    },
    {
      title: "Ongoing Care for Cleaner Air",
      desc: "Indoor pollutant concentrations can run two to five times higher than outdoors. The best safeguard is regular AC and furnace maintenance. Our Home Comfort Club delivers priority service, lower energy bills, maximum system efficiency, extended equipment life, maximum discount pricing on repairs, and high-quality indoor air. Members extend system lifespan (from ~10 to ~15 years), prevent up to 95% of common breakdowns, boost air quality, and cut monthly utility costs.",
      image: spoorsImageLibrary.acMaintenance,
    },
    {
      title: "Perfect Moisture, Year-Round Comfort",
      desc: "Indoor humidity control is integral to high air quality. Air too dry causes nosebleeds and skin irritation; air too moist breeds airborne allergens and damages your building. Our residential and commercial IAQ services control indoor moisture, preventing mold and bacteria growth and increasing comfort. We help you achieve an ideal humidity level for optimized home comfort throughout the Sierra Foothills.",
      image: images.aboutTeam,
    },
    {
      title: "Relief for Allergy Sufferers",
      desc: "Cleaner air means better breathing for seasonal and year-round allergy sufferers. We offer multiple indoor air solutions—including evaporative coolers and purification systems—designed for those with allergies and respiratory problems. After inspecting your HVAC unit, our technicians help you determine the best filtration option for both you and your system.",
      image: images.hero,
    },
    {
      title: "Whole-Home Air Purification",
      desc: "Whether your HVAC system needs replacement, your AC or furnace needs repairs, or your equipment is past its functional lifespan, we help ensure your indoor atmosphere is healthy and comfortable. We offer effective air purification tools that remove pet dander, mold and mildew spores, dust, and other airborne contaminants—and help you pick the right system for your home or business.",
      image: spoorsImageLibrary.airConditionerFilterMaintenance,
    },
  ],
  faqs: [
    {
      q: "What is indoor air quality and why does it matter in Auburn?",
      a: "Indoor air quality (IAQ) is the quality of air within and around your home or business. Poor IAQ—worsened by wildfire smoke, inadequate HVAC maintenance, and tight modern construction—can cause higher utility costs, health effects, frequent breakdowns, and premature system replacement. Spoor's helps Auburn and Meadow Vista property owners measure and improve it.",
    },
    {
      q: "What are the signs of bad indoor air quality?",
      a: "Common signs include headaches, shortness of breath, sore or swollen throat, sinus problems, dizziness, irritated watery eyes, persistent fatigue, coughing and sneezing, worsening allergies, flu-like symptoms, burning nose, musty odors, and mold or mildew growth. If you notice these indoors, schedule an IAQ inspection.",
    },
    {
      q: "How does my HVAC system affect indoor air quality?",
      a: "Your HVAC system is a primary determinant of IAQ. A properly programmed thermostat, well-sealed ductwork, good insulation, and modern components all support clean air. Outdated or poorly maintained systems work overtime to meet temperature, wasting energy, shortening lifespan, and circulating contaminants. Regular maintenance keeps both your air and your equipment healthy.",
    },
    {
      q: "What MERV rating should I use for my air filter?",
      a: "For most residential and commercial systems we recommend a MERV 8–13 filter. A rating too high restricts airflow, making your system work harder and lowering both efficiency and IAQ. We help you select the ideal MERV rating and filter type—HEPA, disposable pleated, fiberglass, or electrostatic—based on your system and needs.",
    },
    {
      q: "How can HVAC maintenance improve my air quality?",
      a: "Regular AC and furnace maintenance keeps filters, vents, and ducts clean so dust, mold, and particulates don't circulate. It also extends equipment life, prevents up to 95% of common breakdowns, lowers energy bills, and produces higher-quality air. Our Home Comfort Club makes this easy with priority service and discounts.",
    },
    {
      q: "Do you offer indoor air quality services in Auburn and Meadow Vista?",
      a: "Yes. Spoor's provides IAQ testing, filtration, humidity control, air purification, and the maintenance that supports clean air to homes and businesses across Auburn, Meadow Vista, and the surrounding Sierra Foothills. Contact us today to schedule indoor air quality services.",
    },
  ],
};

export default function IndoorAirQualityServices() {
  return <ServiceDetailLayout {...iaqContent} />;
}