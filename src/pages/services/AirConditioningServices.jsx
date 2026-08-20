import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import { reviewsFor } from "@/lib/serviceReviews";

const U1 = "/assets/images/update-1";
const U3 = "/assets/images/update-3";

const acContent = {
  heroImage: images.acHero,
  heroAlt: "Spoor's Heating & Air technician servicing an outdoor air conditioning unit in Auburn, CA",
  badge: "AC SERVICES",
  headline: "Auburn's Trusted Air Conditioning Experts, Since 1925.",
  intro:
    "Since 1925, Spoor's has kept Auburn and the Sierra Foothills cool with honest AC repairs, tune-ups, and right-sized installations.",
  sectionLabel: "AC SERVICE & REPAIRS",
  sectionHeading: "Take definitive control of your indoor microclimate.",
  breakImage: `${U1}/spoors-auburn-ca-ac-detail-page-break.webp`,
  breakAlt: "Two outdoor air conditioning units beside an Auburn-area home",
  breakObjectPosition: "center 22%",
  breakHeightClass: "h-[320px] lg:h-[520px]",
  reviews: reviewsFor("air-conditioning"),
  reviewsServiceLabel: "Air Conditioning",
  faqHeading: "Frequently Asked Questions About Air Conditioning",
  services: [
    {
      title: "Fast, Lasting AC Repairs",
      desc: "The last thing you want on a hot Auburn afternoon is to wait hours for cool air. Spoor's Heating & Air Conditioning offers reliable, lasting air conditioner repair across the Sierra Foothills—24/7. Frequent NorCal repair calls include compressor, thermostat, and fan failures and clogged condensate drains. Our trained technicians diagnose any issue and fix it right the first time so your home or business is cooled quickly, your unit lasts longer, and your utility bills stay low.",
      image: spoorsImageLibrary.acElectricalRepair,
    },
    {
      title: "Cooling Restored, Day or Night",
      desc: "Air conditioner breakdowns rarely happen at an opportune time. Spoor's Heating & Air Conditioning doesn't believe you should have to wait until the next morning or workday for a home AC repair. Regardless of the hour, our technicians respond promptly across Auburn, Meadow Vista, and Orangevale, using the latest industry tools and techniques to resolve the issue. We'll always keep you informed and suggest ways to avoid the problem in the future.",
      image: `${U1}/spoors-auburn-ca-ac-detail-cooling-restored.webp`,
    },
    {
      title: "Tune-Ups That Cut Your Cooling Bills",
      desc: "Regular air conditioner maintenance is the best way to extend the life of any unit. Spoor's Heating & Air Conditioning provides semi-annual tune-ups that reduce breakdowns, increase efficiency, and lower monthly utility bills for homeowners across Placer County. Our technicians follow a detailed multi-point checklist and keep you fully informed throughout the appointment. Join our Home Comfort Club for two tune-ups a year, repair and service discounts, and other member benefits.",
      image: `${U3}/spoors-auburn-ca-ac-detail-tuneups-v2.webp`,
    },
    {
      title: "Cleaner Air With Every Cooling Cycle",
      desc: "Professional HVAC services from Spoor's Heating & Air Conditioning can make your indoor environment both comfortable and healthy. We offer a complete range of indoor air quality services that purify and remove harmful allergens and airborne contaminants from your home or business. Our team inspects your AC unit and helps you determine whether a system upgrade can optimize the air quality throughout your Northern California property.",
      image: `${U1}/spoors-auburn-ca-ac-detail-cleaner-air.webp`,
    },
    {
      title: "Right-Sized AC Installation for Auburn Homes",
      desc: "When it's time to replace your current air conditioner, Spoor's Heating & Air Conditioning is here to help. We guide you through the entire installation process, from inspecting your existing system to sizing a new central air conditioner built for the Sierra Foothills climate. An undersized unit runs constantly and wears out early; an oversized one short-cycles and swings temperatures. We use the latest load calculations to size it right—so your Auburn-area home stays comfortable and efficient for years.",
      image: spoorsImageLibrary.rooftopAcInstallation,
    },
  ],
  faqs: [
    {
      q: "What sets Spoor's apart from other HVAC providers in Auburn?",
      a: "We blend hometown integrity with state-of-the-art digital diagnostic technology. Our focus goes beyond quick fixes; we prioritize long-term system efficiency and proactive care through our signature Home Comfort Club.",
    },
    {
      q: "Does Spoor's provide emergency services outside of regular business hours?",
      a: "Yes, we offer 24/7 emergency repair services to ensure your home remains comfortable and safe, no matter the time of day or night.",
    },
    {
      q: "How does the Home Comfort Club program work?",
      a: "The Home Comfort Club is our preventative maintenance program. Members receive bi-annual system tune-ups, priority scheduling, and exclusive discounts on repairs and new installations.",
    },
    {
      q: "Are price estimates provided transparently upfront?",
      a: "Absolutely. We believe in complete transparency. Before any work begins, our technicians provide a detailed, upfront estimate so you know exactly what to expect without any hidden fees.",
    },
  ],
};

export default function AirConditioningServices() {
  return <ServiceDetailLayout {...acContent} />;
}