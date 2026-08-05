import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { reviewsFor } from "@/lib/serviceReviews";

const waterHeaterContent = {
  heroImage: "/images/spoors-water-heater-hero-auburn-ca.webp",
  heroAlt: "Water heater installation and repair by Spoor's Heating & Air in Auburn, CA",
  badge: "WATER HEATER SERVICES",
  headline: "Trusted Water Heater Repair and Installation in Auburn.",
  intro:
    "Fast water heater repairs and installs that keep hot water flowing.",
  sectionLabel: "WATER HEATER SERVICES",
  sectionHeading: "Reliable hot water for every home and business.",
  breakImage: images.introTruck,
  breakAlt: "Spoor's Heating & Air technician servicing a water heater",
  reviews: reviewsFor("water-heater"),
  reviewsServiceLabel: "Water Heater Services",
  faqHeading: "Frequently Asked Questions About Water Heaters",
  services: [
    {
      title: "Reliable Hot Water on Demand",
      desc: "The traditional style, continually heating water within an insulated tank and providing a reliable source of hot water for households and businesses of all sizes. These heaters typically hold 30–50 gallons, storing it until ready, and can be powered by natural gas or electricity. Expect long-lasting performance and continuous hot water on demand, with many models adding noise reduction and temperature control for extra convenience.",
      image: images.auburn,
    },
    {
      title: "Endless Hot Water, Lower Energy Bills",
      desc: "A tankless water heater provides on-demand heated water using high-powered burners and a heat exchanger—no storage tank needed, so the heated water reaches the faucet immediately. Running on electricity or gas, tankless models are far more energy efficient than a standard tank heater, take up less space with their sleek design, and the lack of an open tank reduces the risk of leaks and flooding. An ideal choice when energy efficiency, dependability, and a small footprint matter.",
      image: images.introAir,
    },
    {
      title: "Expert Installation, Sized to Your Home",
      desc: "Our technicians are experienced in installing water heaters of all types, brands, and sizes. We work with you to determine the best water heater for your home and your needs, then install it promptly and professionally. Whether you're replacing an aging unit or upgrading to a more efficient model, we size it right for the Sierra Foothills climate and your household's hot-water demand.",
      image: images.introTech,
    },
    {
      title: "Fast Diagnosis, Lasting Repairs",
      desc: "Common symptoms that indicate it's time for repair: water temperature not as warm or hot as usual, popping or rumbling noises coming from the unit, leaks around the hot water tank, and cloudy, rusty, or muddy water. The more heavily hot water is used, the sooner or more often your heater may develop problems. A lightly-used tank may have fewer wear-and-tear issues—either way, prompt service prevents bigger failures.",
      image: images.acService,
    },
    {
      title: "Honest Guidance on Tank vs. Tankless",
      desc: "A tankless model costs several thousand dollars to purchase and install—steep upfront—but gas-powered tankless heaters save owners money annually through energy-efficient design, last up to 30 years, and produce hot water the instant a faucet turns on. A tank-style heater runs $200–$800, is simpler and cheaper to repair, but isn't considered energy efficient, has roughly half the lifespan, and can run dry when multiple showers or appliances run at once.",
      image: images.acHero,
    },
    {
      title: "Know When It's Time to Call",
      desc: "Watch for water that isn't as warm or hot as usual, popping or rumbling noises from the unit, leaks around the tank, or cloudy, rusty, and muddy water. These indicators mean service is necessary. For water heater services in Auburn, CA, count on the technicians at Spoor's Heating & Air Conditioning—available around the clock and dedicated to cost-effective service through quality customer care.",
      image: images.aboutTeam,
    },
    {
      title: "Maintenance That Extends Its Life",
      desc: "Routine inspections and flushing extend the life of any water heater and keep it running efficiently. Sediment builds up in tank-style units over time, reducing efficiency and shortening lifespan, while tankless models need periodic descaling to maintain flow and performance. We handle seasonal maintenance so your home or business never goes without reliable hot water.",
      image: images.hero,
    },
  ],
  faqs: [
    {
      q: "How do I know if I need a water heater repair or replacement?",
      a: "If your water isn't as hot as usual, you hear popping or rumbling noises, you spot leaks around the tank, or your water is cloudy, rusty, or muddy, it's time to call us. We'll assess whether a repair will restore reliable hot water or whether replacement is the more cost-effective choice—especially for units nearing the end of their lifespan.",
    },
    {
      q: "Should I choose a tank or tankless water heater for my Auburn home?",
      a: "It depends on your budget and goals. Tank-style heaters cost less upfront ($200–$800) and are simpler to repair, but are less efficient and can run dry with heavy use. Tankless units cost more upfront but save money annually, last up to 30 years, and deliver endless hot water on demand in a compact footprint. We help you weigh both for your home.",
    },
    {
      q: "How long does a water heater last?",
      a: "A tank-style water heater typically lasts 8–12 years, while a tankless model can last up to 30 years with proper maintenance. Regular flushing and descaling extend the lifespan of either type. If your tank heater is over a decade old and needing frequent repairs, replacement is often the better value.",
    },
    {
      q: "Do you install and service both gas and electric water heaters?",
      a: "Yes. Our technicians install and service natural gas and electric water heaters of all types, brands, and sizes—both tank and tankless. We help you choose the right fuel source based on your home's setup, hot-water demand, and energy goals, then install it promptly and professionally.",
    },
    {
      q: "How quickly can Spoor's respond to a water heater emergency?",
      a: "Our HVAC professionals are available around the clock and dedicated to cost-effective service through quality customer care. We prioritize no-hot-water emergencies across Auburn, Meadow Vista, and Placer County, so you're never left waiting long for reliable hot water.",
    },
    {
      q: "Can a tankless water heater handle my whole house?",
      a: "In most cases, yes. A properly sized gas-powered tankless unit can deliver continuous hot water to an entire home. We calculate your household's peak hot-water demand and recommend a unit—or a pairing of units—that keeps up with multiple showers and appliances running at once.",
    },
  ],
};

export default function WaterHeaterServices() {
  return <ServiceDetailLayout {...waterHeaterContent} />;
}