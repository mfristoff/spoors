import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { reviewsFor } from "@/lib/serviceReviews";

const IAQ_IMAGES = {
  hero: "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-hero.webp",
  heroMobile: "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-mobile-hero.webp",
  inYourAir: "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-ceiling-vent-plant.webp",
  cleanerFilter: images.introAir,
  pageBreak: "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-air-page-break-ceiling-vent-plant.webp",
  wholeHomeDehumidifier: "/assets/images/indoor-air-quality/spoors-auburn-ca-whole-home-dehumidifier-system.webp",
};

const iaqContent = {
  heroImage: IAQ_IMAGES.hero,
  heroImageMobile: IAQ_IMAGES.heroMobile,
  heroAlt: "Woman relaxing comfortably in a clean, well-ventilated Auburn home",
  heroObjectPosition: "center center",
  heroMobileObjectPosition: "40% center",
  heroImagePlacement: "right",
  badge: "INDOOR AIR QUALITY",
  headline: "Breathe Easier With Cleaner, Healthier Indoor Air Quality in Auburn.",
  intro:
    "Filtration and purification for cleaner, healthier air in Auburn homes.",
  sectionLabel: "INDOOR AIR QUALITY SERVICES",
  sectionHeading: "Purify your indoor air and protect your family's health.",
  sectionSubheading:
    "From air scrubbers to whole-home humidifiers, our comfort experts help you create a safe, healthy indoor environment for your home or office.",
  breakImage: IAQ_IMAGES.pageBreak,
  breakAlt: "Green plant leaves below a clean ceiling air vent in an Auburn home",
  breakObjectPosition: "center 42%",
  breakHeightClass: "h-[500px]",
  reviews: reviewsFor("indoor-air-quality"),
  reviewsServiceLabel: "Indoor Air Quality Services",
  faqHeading: "Frequently Asked Questions About Indoor Air Quality",
  services: [
    {
      title: "Find What's in Your Air",
      desc: "Bad air quality can be harder to identify than inefficient HVAC function—but the consequences are real, ranging from headaches and fatigue to respiratory issues and, with pollutants like carbon monoxide, worse. Our IAQ testing for Auburn and Meadow Vista homes and businesses identifies the contaminants affecting your air so we can recommend the right solution. Air pollution from wildfires, inadequate maintenance, and tight modern construction all contribute to poor IAQ we can measure and address.",
      image: IAQ_IMAGES.inYourAir,
    },
    {
      title: "Right Filters for Cleaner Air",
      desc: "Using the correct type and size of air filter is critical to safe indoor air. A filter too large lets contaminants circulate; one too small restricts airflow and strains the system. MERV (Minimum Efficiency Reporting Value) rates filtration on a 1–16 scale—higher ratings trap more pollen, pet dander, and bacteria. For most residential and commercial systems we recommend a MERV 8–13 filter. We help you select the ideal filter—HEPA, disposable pleated, fiberglass, or electrostatic—based on your needs.",
      image: images.introAir,
    },
    {
      title: "High-Efficiency Air Scrubbers",
      desc: "Air scrubbers go beyond standard filtration by actively reducing airborne contaminants that may pass through a filter alone. Installed within the HVAC system, they can help address dust, allergens, odors, and microscopic particles that affect comfort and air quality. We evaluate system compatibility, airflow, and the specific concerns inside the home before recommending an air scrubber solution.",
      image: images.introTech,
    },
    {
      title: "Whole-Home Dehumidifiers",
      desc: "High indoor humidity can leave a home feeling sticky, stress the cooling system, and create conditions that allow mold and mildew to thrive. A whole-home dehumidifier works with the HVAC system to remove excess moisture more consistently than portable units. We review indoor humidity levels, comfort concerns, and system setup before recommending equipment.",
      image: IAQ_IMAGES.wholeHomeDehumidifier,
    },
    {
      title: "Whole-Home Humidifiers",
      desc: "Dry air can make a home less comfortable and affect wood furnishings, flooring, and indoor air balance during the heating season. A whole-home humidifier adds moisture through the HVAC system to help maintain steadier humidity levels throughout the home. We inspect the system, discuss comfort concerns, and recommend the right style of humidification equipment.",
      image: images.introAir,
    },
  ],
  faqs: [
    {
      q: "What are the health risks associated with poor indoor air quality?",
      a: "Poor indoor air quality can cause several issues, including headaches, fatigue, respiratory irritation, allergy symptoms, and, in some cases, exposure to pollutants like carbon monoxide. The exact risk depends on what is circulating through the home and how long it has been there.",
    },
    {
      q: "How can I tell if my indoor air quality is poor?",
      a: "Common signs include lingering odors, excessive dust, stale air, worsening allergy symptoms, uneven humidity, and rooms that feel stuffy even when the HVAC system is running. Testing is the best way to identify what is actually affecting the air.",
    },
    {
      q: "Can wildfires affect the air quality inside my home in Auburn?",
      a: "Yes. Wildfire smoke can significantly affect indoor air quality throughout Auburn and nearby areas, especially during fire season. Fine particles can work their way indoors through leaks, open doors, and HVAC systems without the right filtration or purification in place.",
    },
    {
      q: "What is the best filter for my HVAC system?",
      a: "That depends on the system and the needs inside the home. For many residential systems, a MERV 8–13 filter offers a strong balance between airflow and filtration. We check the equipment, the filter size, and the air-quality goal before recommending a filter type.",
    },
  ],
};

export default function IndoorAirQualityServices() {
  return <ServiceDetailLayout {...iaqContent} />;
}
