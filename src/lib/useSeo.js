import { useEffect } from "react";
import { business, images as siteImages } from "@/lib/siteConfig";

// Lightweight SEO: sets document title, meta description, canonical, and OG tags.
// In a Vite SPA, this updates head tags per page without a full SSR pipeline.
export function useSeo({ title, description, path = "/", image, type = "website" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${business.name}`
      : `${business.name} | Family-Owned HVAC Service in Auburn, CA Since 1925`;

    const desc = description || `${business.name} has provided honest, family-owned HVAC service to Auburn, California and surrounding communities since 1925.`;
    const canonical = `${business.domain}${path}`;
    const ogImage = image || siteImages.hero;

    document.title = fullTitle;
    setMeta("description", desc);
    const isStaging = window.location.hostname === "newspoors.olivemedia.agency";
    setMeta("robots", isStaging ? "noindex, nofollow" : "index, follow");
    setLink("canonical", canonical);
    setOg("og:title", fullTitle);
    setOg("og:description", desc);
    setOg("og:url", canonical);
    setOg("og:type", type);
    setOg("og:site_name", business.name);
    setOg("og:image", ogImage);
    setOg("og:image:alt", fullTitle);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", ogImage);

  }, [title, description, path, image, type]);
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setOg(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function setBreadcrumbSchema(crumbs) {
  setJsonLd("breadcrumb", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${business.domain}${c.path}`,
    })),
  });
}

export function setFaqSchema(faqs) {
  if (!faqs || faqs.length === 0) return;
  setJsonLd("faqpage", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function setServiceSchema(service) {
  setJsonLd("service", {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "HVACBusiness", name: business.name, telephone: business.phone },
    areaServed: `${business.serviceCity}, ${business.serviceRegion} and surrounding communities`,
  });
}