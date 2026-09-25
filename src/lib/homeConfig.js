// Lightweight configuration used by the homepage shell.
// Keep this file intentionally small so the first route does not pull the
// full service-area + blog content registry into the initial JavaScript bundle.

export const business = {
  name: "Spoor's Heating & Air",
  phone: "(530) 823-1843",
  phoneLink: "tel:5308231843",
  email: "gspoor@spoorsheatingandac.com",
  emailLink: "mailto:gspoor@spoorsheatingandac.com",
  serviceCity: "Auburn",
  serviceRegion: "California",
  domain: "https://www.spoorsheatingandac.com",
  schedulingUrl: "/contact-us/",
  portalUrl: "https://portal.example.com",
  social: {
    facebook: "https://facebook.com/spoorsheatingandac",
    x: "https://twitter.com/SpoorsHeatingAC",
  },
};

export const images = {
  logo: "/assets/base44/0b5814736_spoors-heating-air-logo-fe3e119520.webp",
  hero: "/assets/base44/fed95821e_adobestock_66338212-ae391fcdef.webp",
  fanBg: "/assets/base44/a62fa6031_ctasection-1ddc3936e0.webp",
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us", children: [
    { label: "Our Mission", path: "/about-us/our-mission/" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Our Commitment", path: "/about-us/our-commitment/" },
    { label: "Customer Service", path: "/about-us/customer-service/" },
    { label: "Careers", path: "/careers" },
    { label: "Community Involvement", path: "/about-us/community-involvement/" },
  ]},
  { label: "Services", path: "/services/", children: [
    { label: "Air Conditioning", path: "/services/air-conditioning" },
    { label: "Heating", path: "/services/heating" },
    { label: "Indoor Air Quality", path: "/services/indoor-air-quality" },
    { label: "Emergency Repairs", path: "/services/emergency-repairs" },
    { label: "Maintenance & Tune-Ups", path: "/services/maintenance-tune-ups" },
    { label: "Ductless Mini-Splits", path: "/services/ductless-mini-splits" },
    { label: "Swamp Coolers", path: "/services/swamp-coolers" },
    { label: "Water Heater Services", path: "/services/water-heater-services" },
    { label: "Planned Maintenance", path: "/services/planned-maintenance" },
  ]},
  { label: "Service Areas", path: "/service-areas", children: [
    { label: "Auburn", path: "/service-areas/auburn/" },
    { label: "Roseville", path: "/service-areas/roseville/" },
    { label: "Rocklin", path: "/service-areas/rocklin/" },
    { label: "Folsom", path: "/service-areas/folsom/" },
    { label: "Lincoln", path: "/service-areas/lincoln/" },
    { label: "Citrus Heights", path: "/service-areas/citrus-heights/" },
    { label: "Granite Bay", path: "/service-areas/granite-bay/" },
    { label: "Sacramento", path: "/service-areas/sacramento/" },
    { label: "Orangevale", path: "/service-areas/orangevale/" },
    { label: "Penryn", path: "/service-areas/penryn/" },
    { label: "Weimar", path: "/service-areas/weimar/" },
    { label: "West Sacramento", path: "/service-areas/west-sacramento/" },
    { label: "View All Areas", path: "/service-areas" },
  ]},
  { label: "Resources", path: "/resources/blog/", children: [
    { label: "Blog", path: "/resources/blog/" },
    { label: "Client Portal", path: business.portalUrl, external: true },
  ]},
  { label: "Financing", path: "/financing/" },
  { label: "Rebates", path: "/rebates/" },
  { label: "Contact", path: "/contact-us/" },
];

export const homeServiceCards = [
  { slug: "air-conditioning", title: "Air Conditioning", short: "Fast, reliable AC repair, installation, and replacement to keep your home cool through every Auburn summer.", image: "/assets/base44/b3ec9b18a_adobestock_65737788-03fd4bbec5.webp" },
  { slug: "heating", title: "Heating", short: "Furnace and heat pump repair, installation, and seasonal tune-ups for dependable foothill winter heat.", image: "/assets/base44/2c1a06dc6_heating-furnace-installation-84a7b08993.webp" },
  { slug: "indoor-air-quality", title: "Indoor Air Quality", short: "Whole-home filtration, humidity control, and ventilation solutions for cleaner, healthier indoor air.", image: "/assets/base44/0e5cfc67c_spoors-air-filter-replacement-auburn-ca-2-3e3f989e67.webp" },
  { slug: "emergency-repairs", title: "Emergency Repairs", short: "Around-the-clock emergency HVAC service answered day or night, weekends and holidays included.", image: "/assets/base44/7dc8f7015_adobestock_482908998-adf76ca4aa.webp" },
  { slug: "maintenance-tune-ups", title: "Maintenance & Tune-Ups", short: "Seasonal AC and heating tune-ups that protect your equipment, improve efficiency, and prevent breakdowns.", image: "/assets/base44/8ecf7e092_adobestock_289084367-0599e7bf36.webp" },
  { slug: "ductless-mini-splits", title: "Ductless Mini-Splits", short: "Efficient, flexible zoned heating and cooling without the ductwork for single rooms or whole-home comfort.", image: "/assets/base44/439d96621_adobestock_499333613-1fbb000ceb.webp" },
  { slug: "water-heater-services", title: "Water Heater Services", short: "Water heater repair, replacement, and maintenance for traditional tank, tankless, hybrid, and heat pump systems.", image: "/assets/base44/a08f34059_spoors-heating-system-repair-auburn-ca-4d73af2fbe.webp" },
  { slug: "planned-maintenance", title: "Planned Maintenance", short: "Membership-style maintenance that protects your equipment with scheduled tune-ups and priority service.", image: "/assets/base44/7c770fbd3_heating-system-maintenance-dbddac3f35.webp" },
  { slug: "swamp-coolers", title: "Swamp Coolers", short: "Evaporative cooler installation, service, seasonal start-up, and winterization for dry-climate homes.", image: "/assets/images/update-1/spoors-auburn-ca-home-swamp-cooler-card.webp" },
];
