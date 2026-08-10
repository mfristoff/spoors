import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import { reviewsFor } from "@/lib/serviceReviews";

const MAINTENANCE_IMAGES = {
  hero: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-maintenance-tune-up-technicians-hero.webp",
  heroMobile: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-maintenance-tune-up-technicians-mobile-hero.webp",
  break: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-filter-maintenance-break.webp",
  valveCheck: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-ac-maintenance-service-valve-check.webp",
  tuneUpTechnician: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-tune-up-technician-condenser.webp",
  electricalDiagnostic: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-electrical-diagnostic-maintenance.webp",
  condenserTools: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-ac-condenser-maintenance-tools.webp",
  refrigerantGauges: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-ac-refrigerant-pressure-gauge-check.webp",
  heatingMaintenance: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-heating-system-maintenance-technician.webp",
  filterReplacement: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-filter-replacement-maintenance.webp",
  systemInspection: "/assets/images/maintenance-tune-ups/spoors-auburn-ca-hvac-system-maintenance-inspection.webp",
};

const maintenanceContent = {
  heroImage: MAINTENANCE_IMAGES.hero,
  heroImageMobile: MAINTENANCE_IMAGES.heroMobile,
  heroObjectPosition: "center center",
  heroMobileObjectPosition: "center center",
  heroAlt: "Spoor's Heating & Air technician performing an HVAC maintenance tune-up in Auburn, CA",
  badge: "MAINTENANCE & TUNE-UPS",
  headline: "Keep Your HVAC System Efficient with Routine Maintenance & Tune-Ups in Auburn.",
  intro:
    "Preventive tune-ups that stop breakdowns and lower your energy bills.",
  sectionLabel: "HVAC MAINTENANCE & TUNE-UPS",
  sectionHeading: "Protect your comfort, lower your bills, extend your system's life.",
  breakImage: MAINTENANCE_IMAGES.break,
  breakObjectPosition: "center 46%",
  breakAlt: "HVAC technician replacing a dirty air filter during preventive maintenance in Auburn, CA",
  reviews: reviewsFor("maintenance"),
  reviewsServiceLabel: "Maintenance & Tune-Ups",
  faqHeading: "Frequently Asked Questions About HVAC Maintenance",
  services: [
    {
      title: "Know When to Schedule Service",
      desc: "Regular maintenance keeps your system running smoothly, and fixing problems early prevents larger, more expensive issues. Watch for sudden increases in utility bills, unusual heater noises, little to no airflow, reduced efficiency, frequent problems, strange smells, excess moisture or dust, and AC blowing warm air. If you notice any of these, contact our HVAC maintenance company for service before a small issue becomes an emergency.",
      image: MAINTENANCE_IMAGES.valveCheck,
      imageAlt: "HVAC technician checking an outdoor AC service valve during maintenance in Auburn, CA",
    },
    {
      title: "The Right Tune-Up Schedule for You",
      desc: "For most homes and businesses, we recommend a routine HVAC tune-up once a year. Older units benefit from maintenance twice a year. You can have heating and cooling serviced together, or separately—HVAC before summer, heating before winter. If you've recently installed a new unit, it's standard to have it serviced around the start of spring. Our team helps determine the proper schedule based on your unit.",
      image: MAINTENANCE_IMAGES.tuneUpTechnician,
      imageAlt: "HVAC technician performing a scheduled air conditioning tune-up in Auburn, CA",
    },
    {
      title: "Catch Problems Before They Break",
      desc: "Emergency HVAC repairs can be costly, especially when needed several times a year. Regular maintenance and tune-ups help identify and repair issues that could worsen over time and cause further damage to your unit. Catching a worn part or low refrigerant early prevents the mid-summer or mid-winter breakdown no one wants.",
      image: MAINTENANCE_IMAGES.electricalDiagnostic,
      imageAlt: "HVAC technician inspecting electrical controls during preventive maintenance in Auburn, CA",
    },
    {
      title: "Get More Years From Your System",
      desc: "Your HVAC system is a major investment. When properly maintained, it should last for years. Keeping your existing unit running efficiently through routine maintenance ensures you get the best return on investment possible—extending the life of your AC and furnace and delaying the cost of replacement.",
      image: MAINTENANCE_IMAGES.condenserTools,
      imageAlt: "Technician servicing an outdoor AC condenser with maintenance tools in Auburn, CA",
    },
    {
      title: "Lower Bills With Efficient Operation",
      desc: "When your HVAC system functions efficiently, it isn't straining to keep up with your home or business's cooling or heating demands. That efficiency translates into lower monthly utility bills. A system that runs at peak performance uses less energy and produces higher-quality air than one in need of repairs.",
      image: MAINTENANCE_IMAGES.refrigerantGauges,
      imageAlt: "HVAC technician checking refrigerant pressure gauges on an AC system in Auburn, CA",
    },
    {
      title: "Safe Heat, Verified Every Visit",
      desc: "One of the most important aspects of HVAC tune-ups is ensuring your home is safe. Your smoke alarms and carbon monoxide detectors protect your family from serious risks like fire or carbon monoxide poisoning—both of which can be deadly. Heating tune-ups verify safe venting and combustion so a furnace or gas appliance operates safely.",
      image: MAINTENANCE_IMAGES.heatingMaintenance,
      imageAlt: "Heating technician inspecting mechanical equipment during a safety tune-up in Auburn, CA",
    },
    {
      title: "A Thorough Multi-Point Checklist",
      desc: "Our maintenance sessions include a thorough checklist: visually inspecting the unit for damage; checking and tightening electrical connections; testing voltage and amp draw of the blower motor, compressor, and condenser fan motor; checking the thermostat location, mount, and setting; looking over ductwork for damage and leaky connections; and examining the discharge and suction pressure of the unit's refrigerant levels.",
      image: MAINTENANCE_IMAGES.filterReplacement,
      imageAlt: "HVAC technician replacing an air filter during a multi-point maintenance visit in Auburn, CA",
    },
    {
      title: "Priority Care and Real Savings",
      desc: "Join our Home Comfort Club for convenient maintenance and exclusive benefits: 15% discount on parts, maximum system efficiency, maintained and validated manufacturer warranty, no overtime charges, priority service status, extended equipment life, maximum discount pricing on all repairs and service, automatic service-visit notifications, automatic renewal, peace of mind, and $750 off or 10% off a completely new system—whichever is greater.",
      image: MAINTENANCE_IMAGES.systemInspection,
      imageAlt: "HVAC technician inspecting system components during planned maintenance in Auburn, CA",
    },
  ],
  faqs: [
    {
      q: "How often do I need HVAC maintenance in Auburn?",
      a: "For most homes and businesses, we recommend a routine tune-up once a year. Older units benefit from maintenance twice a year. You can service heating and cooling together, or separately—HVAC before summer and heating before winter. New units are typically serviced around the start of spring.",
    },
    {
      q: "What's included in an HVAC tune-up?",
      a: "Our maintenance checklist includes visually inspecting the unit for damage, checking and tightening electrical connections, testing voltage and amp draw of the blower motor, compressor, and condenser fan motor, checking the thermostat, inspecting ductwork for damage and leaks, and examining refrigerant discharge and suction pressure.",
    },
    {
      q: "Can maintenance lower my energy bills?",
      a: "Yes. A system running at peak efficiency doesn't strain to meet your cooling or heating demands, which reduces energy use. Clean coils, correct refrigerant, and unobstructed airflow all contribute to lower monthly utility bills than a system in need of repair.",
    },
    {
      q: "What is the Spoor's Home Comfort Club?",
      a: "Our planned maintenance program includes 15% off parts, no overtime charges, priority service, maximum discount pricing on repairs, maintained manufacturer warranty, automatic service-visit notifications, automatic renewal, peace of mind, and $750 off or 10% off a completely new system—whichever is greater.",
    },
    {
      q: "Will a tune-up protect my equipment warranty?",
      a: "Many manufacturers require regular professional maintenance to keep warranty coverage valid. Our detailed service records help maintain and validate your manufacturer's warranty. Check your warranty terms for the required maintenance schedule.",
    },
    {
      q: "How do I know if I need HVAC maintenance?",
      a: "Watch for sudden increases in utility bills, unusual heater noises, little to no airflow, reduced efficiency, frequent problems, strange smells, excess moisture or dust, and AC blowing warm air. If you notice any of these, contact our HVAC maintenance company to schedule service.",
    },
  ],
};

export default function MaintenanceServices() {
  return <ServiceDetailLayout {...maintenanceContent} />;
}