import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { images } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import { reviewsFor } from "@/lib/serviceReviews";

const heatingContent = {
  heroImage: "/assets/images/heating/spoors-auburn-ca-heating-services-hero-no-pvc.webp",
  heroAlt: "Furnace and water heater equipment in an Auburn, CA mechanical room",
  heroObjectPosition: "68% center",
  badge: "HEATING SERVICES",
  headline: "Auburn's Reliable Heating Experts, Keeping the Sierra Foothills Warm.",
  intro:
    "Nearly 40 years of expert heating repairs, maintenance, and installations for Sierra Foothills homes and businesses—24/7 emergency service available.",
  sectionLabel: "HEATING SERVICE & REPAIRS",
  sectionHeading: "Dependable heating that keeps your family warm all winter.",
  breakImage: "/assets/images/heating/spoors-auburn-ca-heating-system-burner-flames-page-break.webp",
  breakAlt: "Gas furnace burner flames during heating system operation in Auburn, CA",
  breakFocal: { x: 0.5, y: 0.5 },
  breakObjectPosition: "center center",
  breakHeightClass: "h-[340px] lg:h-[520px]",
  breakOverlayClass: "bg-black/45",
  reviews: reviewsFor("heating"),
  reviewsServiceLabel: "Heating",
  faqHeading: "Frequently Asked Questions About Heating",
  services: [
    {
      title: "Fast, Lasting Heat Restored",
      desc: "Spoor's Heating & Air Conditioning has the experience and skills to provide a variety of central heating repairs for furnaces, heat pumps, mini-split heating, and more throughout Auburn and the Sierra Foothills. Count on our team to identify the issue and make the necessary repairs to have your heating system up and running again in no time. We stand behind our work—which isn't complete until you, the customer, are happy.",
      image: spoorsImageLibrary.furnaceRepair,
    },
    {
      title: "Tune-Ups That Prevent Winter Breakdowns",
      desc: "Regular maintenance of a commercial or residential heating system does more than guarantee indoor warmth on a chilly Placer County day. Maintenance lets Spoor's Heating & Air Conditioning inspect and repair issues before they become a problem—some of which can affect your safety. We recommend scheduling heating and furnace maintenance service in the fall. Call us today to schedule an appointment and keep your system running efficiently all winter.",
      image: "/assets/images/heating/spoors-auburn-ca-winter-heating-tune-up.webp",
    },
    {
      title: "Right-Sized Heating for Your Home",
      desc: "If HVAC repair isn't enough to extend the life of your current heating system, call Spoor's Heating & Air Conditioning. For nearly 40 years we've helped Sierra Foothills homeowners choose and install a new furnace, heat pump, or other heat source—including electric & gas furnaces, heat pump heating systems, boilers, and mini-split heating. Our technicians give honest, professional opinions on what heat source best fits your lifestyle and install many major brands.",
      image: "/assets/images/heating/spoors-auburn-ca-right-sized-home-heating-replacement.webp",
    },
    {
      title: "Reliable Hot Water Restored",
      desc: "It's easy to take the electric water heater in your home or business for granted—until it stops delivering hot water. When that day comes, count on Spoor's Heating & Air Conditioning to identify the source of the issue and make necessary repairs. You likely need electric water heater repair if you receive lukewarm water from the hot fixture, the unit is more than 10 years old, the tank shows discoloration or rust, or water from your faucets is discolored.",
      image: "/assets/images/heating/spoors-auburn-ca-hot-water-repair-technician.webp",
    },
    {
      title: "Zoned Heat, Room by Room",
      desc: "Mini split heating systems are popular in Sierra Foothills homes and businesses that rely on hydronic, radiant, and space heating because these buildings are easy to retrofit. Mini splits use an outdoor compressor or condenser and multiple indoor air handlers to heat individual rooms—known as zone heating. They save energy and money because each zone uses its own thermostat, letting you warm only the rooms you're using. Contact Spoor's to learn more about the benefits of a mini split heating system.",
      image: images.ductlessImage,
    },
    {
      title: "Heat Restored, Day or Night",
      desc: "Whether there's an unusual whine coming from your heat pump or the water heater has sprung a leak, count on Spoor's Heating & Air Conditioning for 24-hour emergency repair service across Auburn, Meadow Vista, and Orangevale. We understand that having heat during a NorCal winter goes beyond comfort—it keeps you and your loved ones safe. Our technicians keep you up-to-date and suggest ways to prevent the situation in the future.",
      image: "/assets/images/heating/spoors-auburn-ca-emergency-heating-repair-technician.webp",
    },
    {
      title: "Cleaner Air With Every Heating Cycle",
      desc: "Don't let an inefficient furnace or heating system degrade your air quality. Without professional repairs and prompt maintenance, your heating system could be responsible for low-quality air in your home or business. Call Spoor's Heating & Air Conditioning for all-encompassing indoor air quality services that help you breathe easily indoors and boost your HVAC system's functionality throughout Northern California.",
      image: "/assets/images/heating/spoors-auburn-ca-heating-indoor-air-quality-family-dog.webp",
    },
  ],
  faqs: [
    {
      q: "What types of heating systems does Spoor's service?",
      a: "Our technicians are trained to repair, maintain, and install furnaces (electric & gas), heat pumps, boilers, mini-split heating systems, and electric water heaters across most major brands throughout Auburn and the Sierra Foothills.",
    },
    {
      q: "When should I schedule heating maintenance?",
      a: "We recommend scheduling heating and furnace maintenance in the fall, before the cold Sierra Foothills winter sets in. This lets us catch and fix issues early—some of which can affect your safety—so your system is ready when temperatures drop.",
    },
    {
      q: "Does Spoor's offer 24-hour emergency heating repairs?",
      a: "Yes. Whether your heat pump is making an unusual noise or your water heater has sprung a leak, our technicians are available around the clock across Auburn, Meadow Vista, and Orangevale. Having heat during a NorCal winter goes beyond comfort—it keeps you and your loved ones safe.",
    },
    {
      q: "How do I know if I need a new heating system?",
      a: "If repair is no longer enough to extend the functional life of your current system, we'll give you an honest, professional opinion on whether a new furnace, heat pump, boiler, or mini-split best fits your home, lifestyle, and budget.",
    },
  ],
};

export default function HeatingServices() {
  return <ServiceDetailLayout {...heatingContent} />;
}