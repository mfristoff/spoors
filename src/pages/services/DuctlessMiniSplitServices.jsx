import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { reviewsFor } from "@/lib/serviceReviews";

const LOCAL_DUCTLESS_IMAGES = {
  atticInstallation: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-attic-installation.webp",
  ceilingCassette: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-ceiling-cassette.webp",
  floorMountedConsole: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-floor-mounted-console.webp",
  homeComfortCouple: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-home-comfort-couple.webp",
  homeComfortRemote: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-home-comfort-remote.webp",
  indoorHeadCloseup: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-indoor-head-closeup.webp",
  outdoorCondenser: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-outdoor-condenser.webp",
  outdoorMultiZoneCondensers: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-outdoor-multi-zone-condensers.webp",
  outdoorWallMount: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-outdoor-wall-mount.webp",
  outdoorSideyardUnit: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-outdoor-sideyard-unit.webp",
  pageBreakCondensers: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-page-break-condensers.webp",
  rooftopTechnician: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-rooftop-technician.webp",
  wallUnitByWindow: "/assets/images/ductless-mini-splits/spoors-auburn-ca-ductless-mini-split-wall-unit-by-window.webp",
  updateHero: "/assets/images/update-4/spoors-auburn-ca-ductless-mini-split-hero-wall-unit.webp",
  updateCleanerAir: "/assets/images/update-4/spoors-auburn-ca-ductless-cleaner-air-wall-unit-plants.webp",
  updateZonedEfficiency: "/assets/images/update-4/spoors-auburn-ca-ductless-zoned-efficiency-electric-meter.webp",
  updateSleekComfort: "/assets/images/update-4/spoors-auburn-ca-ductless-sleek-wall-mount-family-comfort.webp",
  updateBestFit: "/assets/images/update-4/spoors-auburn-ca-ductless-best-fit-living-room-comfort.webp",
  updatePageBreak: "/assets/images/update-4/spoors-auburn-ca-ductless-wall-unit-page-break.webp",
  fullBleedHero: "/assets/images/update-5/spoors-auburn-ca-ductless-mini-split-full-bleed-hero.webp",
};

const ductlessContent = {
  heroImage: LOCAL_DUCTLESS_IMAGES.fullBleedHero,
  heroAlt: "Wall-mounted ductless mini-split system in an Auburn-area home",
  heroObjectPosition: "center top",
  heroImagePlacement: "full",
  badge: "DUCTLESS MINI-SPLITS",
  headline: "Zoned Comfort and Lower Energy Bills with Ductless Mini-Splits in Auburn.",
  intro:
    "Room-by-room comfort from efficient mini-splits, installed across Placer County.",
  sectionLabel: "DUCTLESS MINI-SPLIT HEATING & COOLING",
  sectionHeading: "Efficient, Room-by-Room Comfort Without the Ductwork.",
  breakImage: LOCAL_DUCTLESS_IMAGES.updatePageBreak,
  breakAlt: "Wall-mounted ductless mini-split indoor unit",
  breakObjectPosition: "center 42%",
  breakHeightClass: "h-[340px] lg:h-[520px]",
  breakParallax: true,
  reviews: reviewsFor("ductless-mini-splits"),
  reviewsServiceLabel: "Ductless Mini-Splits",
  faqHeading: "Frequently Asked Questions About Ductless Mini-Splits",
  services: [
    {
      title: "Whisper-Quiet Comfort",
      desc: "Traditional HVAC systems rely on a network of ducts to deliver conditioned air. With mini-splits, each indoor unit operates individually, reducing noise pollution—common banging, squeaking, and whistling noises associated with ductwork are eliminated entirely. Even with multiple indoor units, ductless mini-splits are designed for quiet function.",
      image: LOCAL_DUCTLESS_IMAGES.homeComfortCouple,
    },
    {
      title: "Cleaner Air Without Leaky Ducts",
      desc: "Air ducts are notoriously leaky, with up to one-third of total energy loss coming from the ductwork. Leaking ducts force your HVAC system to work overtime and disperse allergens like dust and pollen throughout your home. Ductless mini-split systems improve indoor air quality by reducing the chance of exposure to allergens and airborne pollutants.",
      image: LOCAL_DUCTLESS_IMAGES.updateCleanerAir,
    },
    {
      title: "Custom Comfort, Room by Room",
      desc: "Since ductless systems can be set up for single or multiple zones, home and business owners have more control over indoor temperature. Thermostat wars become a thing of the past—the living room can be set to a milder temperature than the kitchen. You'll enjoy increased comfort and overall lower energy costs, with each indoor unit using its own thermostat.",
      image: LOCAL_DUCTLESS_IMAGES.homeComfortRemote,
    },
    {
      title: "Lower Bills With Zoned Efficiency",
      desc: "A major benefit of mini-split systems is a reduction in energy consumption—and lower utility bills. Each indoor unit can use a separate thermostat programmed to a temperature suitable for the specific room, so you only condition the spaces you use. High-efficiency components save you even more over the long run.",
      image: LOCAL_DUCTLESS_IMAGES.updateZonedEfficiency,
    },
    {
      title: "Sleek Wall-Mount Comfort",
      desc: "The most common type of mini-split. Wall-mount systems are installed high on a wall and work in any type of room. Because they're visible, this type comes in several style options that make the indoor unit as inconspicuous as possible—an easy fit for Auburn homes and businesses.",
      image: LOCAL_DUCTLESS_IMAGES.updateSleekComfort,
    },
    {
      title: "Hidden Ceiling Cassette Comfort",
      desc: "The indoor unit of a ceiling cassette system inserts into the ceiling, similar to a cassette tape into a tape deck. The surface sits flush with the ceiling, making it a great choice for home and business owners who want to keep the unit out of sight. Air flow from the ceiling also provides a wider range of distribution.",
      image: LOCAL_DUCTLESS_IMAGES.ceilingCassette,
    },
    {
      title: "Floor-Mounted Flexibility",
      desc: "Also called floor-mounted, these indoor units install along the baseboard in rooms. Because the unit is always visible, most floor-standing systems are designed with contemporary styling to help the unit blend into the surrounding room—an option for spaces where wall or ceiling mounting isn't ideal.",
      image: LOCAL_DUCTLESS_IMAGES.floorMountedConsole,
    },
    {
      title: "Ceiling-Suspended Discretion",
      desc: "This type closely resembles a wall-mount mini-split but is mounted on the ceiling instead of the wall. Ceiling-suspended systems are an option for anyone with limited wall space or those who want a discreet appearance while still delivering efficient, zoned heating and cooling.",
      image: LOCAL_DUCTLESS_IMAGES.atticInstallation,
    },
    {
      title: "When Ductless Makes the Most Sense",
      desc: "Ductless mini-splits shine in converted spaces (attics, garages, porches) where adding or rerouting ductwork isn't practical; when replacing an outdated HVAC system that needs constant repairs or that you want to upgrade for energy savings; and in older buildings where installing ductwork would require a major renovation. They let you create custom zoning to meet each space's needs.",
      image: LOCAL_DUCTLESS_IMAGES.updateBestFit,
    },
  ],
  faqs: [
    {
      q: "What is a mini-split AC?",
      a: "A mini-split AC—also known as a ductless air conditioner or ductless mini-split—works the same way as a traditional air conditioning unit, providing both cooling and heating but without the need for ducts. Each room can have its own air handler so you can tune the temperature individually via remote control.",
    },
    {
      q: "How do mini-split ACs work?",
      a: "A mini-split uses evaporator coils to cool the air inside during summer and can pull warm air from outside into your home during winter. Each room can have its own air handler so you tune the temperature per room, adjustable via remote control.",
    },
    {
      q: "Why should I get a mini-split?",
      a: "Ductless air conditioning offers many advantages over traditional AC: small, unobtrusive units; quiet performance; remote controls; per-room temperature control; no ductwork required; more affordable installation in many cases; and less energy loss with lower utility costs.",
    },
    {
      q: "How do you install a mini-split AC?",
      a: "We drill a hole 2–3 inches in diameter on your property's exterior wall to connect the inside and outside units, mount the heat pump outside and the air handler inside (usually on a wall or ceiling), then connect both through the hole using a conduit that houses the electrical wiring, refrigerant line, and condensate drain.",
    },
    {
      q: "Are ductless AC units more efficient than traditional ACs?",
      a: "Yes. Leaky duct systems can lose up to 30% of the energy used in cooling or heating your home. Without ducts, air is delivered directly with no leaks, and mini-splits tend to use high-efficiency components—saving you more money over the long run.",
    },
    {
      q: "How is a mini-split AC different from a window unit?",
      a: "While both can cool rooms without ducts, a mini-split is more efficient because one outdoor heat pump can cool up to four rooms. Window units also pose security risks because they can be easily removed to provide intruders access to your home.",
    },
    {
      q: "How long will a mini-split AC system last?",
      a: "Regular maintenance and the amount of use are the two biggest factors. With proper care and moderate use, you can expect an average 20-year lifespan from a ductless mini-split system.",
    },
    {
      q: "How many indoor air handling units can I install?",
      a: "Most heat pumps support up to four indoor air handling units. Your HVAC technician can help determine the best layout and number of units needed; if your home requires more, an additional ductless heat pump can be installed. Not every room needs a unit—main living areas and add-ons are the usual choices.",
    },
    {
      q: "How much does it cost to install a ductless AC unit?",
      a: "Typically, a split AC unit costs between $3,000 and $5,000. Your technician helps determine what's necessary for the most cost-effective solution. While the initial cost may seem high, the long-term energy savings more than make up for it. Contact Spoor's for a consultation tailored to your home.",
    },
  ],
};

export default function DuctlessMiniSplitServices() {
  return <ServiceDetailLayout {...ductlessContent} />;
}
