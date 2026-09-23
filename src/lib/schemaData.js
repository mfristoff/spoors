import { areaFaqs } from "@/lib/areaContent";
import { blogArticles, business, getArticle, getService, getServiceArea, images, serviceAreas, services } from "@/lib/siteConfig";

const ROOT = business.domain;
const BUSINESS_ID = `${ROOT}/#business`;
const WEBSITE_ID = `${ROOT}/#website`;
const AUTHOR_ID = `${ROOT}/#jeff-spoor`;
const cleanPath = (path) => path === "/" ? "/" : `/${path.split("/").filter(Boolean).join("/")}/`;
const absolute = (path) => `${ROOT}${cleanPath(path)}`;
const slugLabel = (value) => value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const PAGE_NAMES = {
  "/": "Spoor's Heating & Air",
  "/about/": "About Spoor's Heating & Air",
  "/about-us/": "About Spoor's Heating & Air",
  "/testimonials/": "Customer Testimonials",
  "/services/": "HVAC Services",
  "/service-areas/": "HVAC Service Areas",
  "/resources/": "HVAC Resources",
  "/resources/blog/": "HVAC Resources & Blog",
  "/financing/": "HVAC Financing",
  "/rebates/": "HVAC Rebates",
  "/contact-us/": "Contact Spoor's Heating & Air",
  "/careers/": "HVAC Careers",
  "/services/planned-maintenance/": "Home Comfort Club Planned Maintenance",
};

function authorNode() {
  return {
    "@type": "Person",
    "@id": AUTHOR_ID,
    name: "Jeff Spoor",
    jobTitle: "Owner & Master HVAC Technician",
    description: "Jeff Spoor is the owner of Spoor's Heating & Air Conditioning, a family-owned HVAC company serving Auburn, Meadow Vista, and the Sierra Foothills since 1925.",
    url: `${ROOT}/about-us/`,
    image: images.logo,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: [
      "https://www.facebook.com/spoorsheatingandac/",
      "https://www.yelp.com/biz/spoors-heating-and-air-conditioning-auburn",
      "https://www.bbb.org/us/ca/auburn/profile/heating-and-air-conditioning/spoors-heating-and-air-conditioning-1156-47000520",
    ],
  };
}

function businessNode() {
  return {
    "@type": ["HVACBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName,
    url: ROOT,
    logo: { "@type": "ImageObject", url: images.logo },
    image: [images.logo, images.hero, images.introTech],
    telephone: "+1-530-823-1843",
    email: business.email,
    foundingDate: String(business.founded),
    description: "Family-owned heating, air conditioning, indoor air quality, water heater, and emergency HVAC service based in Auburn, California.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "345 Sacramento St, Suite 5",
      addressLocality: "Auburn",
      addressRegion: "CA",
      postalCode: "95603",
      addressCountry: "US",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    }],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+1-530-823-1843",
      contactType: "customer service and emergency HVAC support",
      areaServed: "US-CA",
      availableLanguage: "English",
    }],
    areaServed: serviceAreas.map((area) => ({ "@type": "City", name: `${area.name}, California` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Heating, Cooling, and Home Comfort Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absolute(`/services/${service.slug}/`),
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/spoorsheatingandac/",
      "https://twitter.com/SpoorsHeatingAC",
      "https://www.yelp.com/biz/spoors-heating-and-air-conditioning-auburn",
      "https://www.bbb.org/us/ca/auburn/profile/heating-and-air-conditioning/spoors-heating-and-air-conditioning-1156-47000520",
    ],
  };
}

function breadcrumbs(path, pageName) {
  if (path === "/") return null;
  const parts = path.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: ROOT }];
  parts.forEach((part, index) => {
    const itemPath = `/${parts.slice(0, index + 1).join("/")}/`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: index === parts.length - 1 ? pageName : (PAGE_NAMES[itemPath] || slugLabel(part)),
      item: absolute(itemPath),
    });
  });
  return { "@type": "BreadcrumbList", "@id": `${absolute(path)}#breadcrumb`, itemListElement: items };
}

function routeDetails(path) {
  const serviceMatch = path.match(/^\/services\/([^/]+)\/$/);
  const areaMatch = path.match(/^\/service-areas\/([^/]+)\/$/);
  const articleMatch = path.match(/^\/resources\/blog\/([^/]+)\/$/);
  const service = serviceMatch ? getService(serviceMatch[1]) : path === "/services/planned-maintenance/" ? getService("planned-maintenance") : null;
  const area = areaMatch ? getServiceArea(areaMatch[1]) : null;
  const article = articleMatch ? getArticle(articleMatch[1]) : null;
  if (service) return { name: service.h1 || service.title, description: service.metaDescription || service.short, image: service.image, service };
  if (area) return { name: `HVAC Services in ${area.name}, CA`, description: area.intro, image: area.image || images.acHero, area };
  if (article) return { name: article.title, description: article.excerpt, image: article.image, article };
  if (path.startsWith("/about-us/")) return { name: slugLabel(path.split("/")[2]), description: `Learn more about ${business.name}.` };
  return { name: PAGE_NAMES[path] || slugLabel(path.split("/").filter(Boolean).pop() || business.name), description: `${business.name} provides trusted HVAC service in Auburn and surrounding Northern California communities.` };
}

export function buildSchemaGraph(rawPath) {
  const path = cleanPath(rawPath);
  const url = absolute(path);
  const details = routeDetails(path);
  const graph = [
    businessNode(),
    authorNode(),
    { "@type": "WebSite", "@id": WEBSITE_ID, url: ROOT, name: business.name, publisher: { "@id": BUSINESS_ID }, inLanguage: "en-US" },
    {
      "@type": path === "/contact-us/" ? "ContactPage" : path.startsWith("/about-us/") || path === "/about/" ? "AboutPage" : "WebPage",
      "@id": `${url}#webpage`, url, name: details.name, description: details.description,
      isPartOf: { "@id": WEBSITE_ID }, about: { "@id": BUSINESS_ID }, primaryImageOfPage: details.image ? { "@type": "ImageObject", url: details.image } : undefined,
      breadcrumb: path === "/" ? undefined : { "@id": `${url}#breadcrumb` }, inLanguage: "en-US",
    },
  ];
  const crumbNode = breadcrumbs(path, details.name);
  if (crumbNode) graph.push(crumbNode);
  if (details.service) {
    graph.push({
      "@type": "Service", "@id": `${url}#service`, name: details.service.title,
      serviceType: details.service.title, description: details.service.overview,
      url, image: details.service.image, provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "AdministrativeArea", name: "Northern California" },
      hasOfferCatalog: { "@type": "OfferCatalog", name: `${details.service.title} services`, itemListElement: details.service.subServices.map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item.title, description: item.description } })) },
    });
    if (path !== "/services/planned-maintenance/") graph.push(faqNode(url, details.service.faqs));
  }
  if (details.area) {
    graph.push({
      "@type": "Service", "@id": `${url}#service`, name: details.name, description: details.area.intro,
      provider: { "@id": BUSINESS_ID }, areaServed: { "@type": "City", name: details.area.name, containedInPlace: { "@type": "State", name: "California" } }, url,
    });
    graph.push(faqNode(url, areaFaqs(details.area.name)));
  }
  if (details.article) {
    graph.push({
      "@type": "BlogPosting", "@id": `${url}#article`, headline: details.article.title,
      description: details.article.excerpt, image: details.article.image, datePublished: details.article.isoDate,
      dateModified: details.article.dateModified, articleSection: details.article.category,
      author: { "@id": AUTHOR_ID }, publisher: { "@id": BUSINESS_ID }, mainEntityOfPage: { "@id": `${url}#webpage` }, inLanguage: "en-US",
    });
  }
  if (path === "/services/") graph.push(itemListNode(url, "HVAC Services", services.map((s) => ({ name: s.title, url: absolute(`/services/${s.slug}/`) }))));
  if (path === "/service-areas/") graph.push(itemListNode(url, "HVAC Service Areas", serviceAreas.map((a) => ({ name: a.name, url: absolute(`/service-areas/${a.slug}/`) }))));
  if (path === "/resources/blog/" || path === "/Blog/" || /^\/resources\/blog\/page\/\d+\/$/.test(path)) graph.push(itemListNode(url, "HVAC Articles", blogArticles.map((article) => ({ name: article.title, url: absolute(`/resources/blog/${article.slug}/`) }))));
  return { "@context": "https://schema.org", "@graph": graph.filter(Boolean) };
}

function faqNode(url, faqs) {
  return { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
}

function itemListNode(url, name, items) {
  return { "@type": "ItemList", "@id": `${url}#list`, name, itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: item.url })) };
}