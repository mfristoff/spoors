const normalizePath = (input = "") => {
  try {
    const pathname = new URL(input, window.location.origin).pathname;
    return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  } catch {
    const pathname = String(input).split(/[?#]/)[0] || "/";
    return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  }
};

const HERO_BY_PATH = {
  "/about-us": ["/assets/images/about/spoors-team-ribbon-cutting-auburn-ca.webp"],
  "/services": ["/assets/base44/08b2af924_hero-bg-310b81f67c.webp"],
  "/services/air-conditioning": ["https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/b3ec9b18a_AdobeStock_65737788.jpeg"],
  "/services/heating": ["/assets/images/heating/spoors-auburn-ca-heating-services-hero-no-pvc.webp"],
  "/services/indoor-air-quality": [
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-hero.webp",
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-mobile-hero.webp",
  ],
  "/services/emergency-repairs": ["/assets/images/update-1/spoors-auburn-ca-emergency-detail-hero.webp"],
  "/services/maintenance-tune-ups": ["https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/4f14fb0f8_AdobeStock_197213379.jpeg"],
  "/services/ductless-mini-splits": ["/assets/images/update-5/spoors-auburn-ca-ductless-mini-split-full-bleed-hero.webp"],
  "/services/swamp-coolers": ["/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-hero-rooftop.webp"],
  "/services/water-heater-services": [
    "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-hero.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-mobile-hero.webp",
  ],
  "/services/planned-maintenance": ["/assets/images/planned-maintenance/spoors-auburn-ca-planned-maintenance-hvac-diagnostics-hero.webp"],
};

const MODULE_BY_PATH = {
  "/about-us": () => import("@/pages/AboutUs"),
  "/about-us/our-mission": () => import("@/pages/about/AboutPage"),
  "/about-us/our-commitment": () => import("@/pages/about/AboutPage"),
  "/about-us/customer-service": () => import("@/pages/about/AboutPage"),
  "/about-us/community-involvement": () => import("@/pages/about/AboutPage"),
  "/services": () => import("@/pages/Services"),
  "/services/air-conditioning": () => import("@/pages/services/AirConditioningServices"),
  "/services/heating": () => import("@/pages/services/HeatingServices"),
  "/services/indoor-air-quality": () => import("@/pages/services/IndoorAirQualityServices"),
  "/services/emergency-repairs": () => import("@/pages/services/EmergencyServices"),
  "/services/maintenance-tune-ups": () => import("@/pages/services/MaintenanceServices"),
  "/services/ductless-mini-splits": () => import("@/pages/services/DuctlessMiniSplitServices"),
  "/services/swamp-coolers": () => import("@/pages/services/SwampCoolerServices"),
  "/services/water-heater-services": () => import("@/pages/services/WaterHeaterServices"),
  "/services/planned-maintenance": () => import("@/pages/Group30"),
  "/service-areas": () => import("@/pages/ServicesAreaPage"),
  "/resources": () => import("@/pages/Resources"),
  "/resources/blog": () => import("@/pages/Blog"),
  "/financing": () => import("@/pages/Financing2"),
  "/rebates": () => import("@/pages/Rebates2"),
  "/contact-us": () => import("@/pages/Contact"),
  "/testimonials": () => import("@/pages/Testimonial"),
  "/careers": () => import("@/pages/CareerPage"),
};

const imageCache = new Map();
const moduleCache = new Set();

function preloadImage(src) {
  if (!src || typeof window === "undefined" || imageCache.has(src)) return;
  const img = new window.Image();
  img.decoding = "async";
  try { img.fetchPriority = "high"; } catch {}
  img.src = src;
  imageCache.set(src, img);
}

function loaderFor(path) {
  if (MODULE_BY_PATH[path]) return MODULE_BY_PATH[path];
  if (/^\/service-areas\/[^/]+$/.test(path)) return () => import("@/pages/areas/ServiceAreaPage");
  if (/^\/resources\/blog\/[^/]+$/.test(path)) return () => import("@/pages/resources/Article");
  return null;
}

function preloadRouteModule(path) {
  if (typeof window === "undefined") return;
  const normalized = normalizePath(path);
  const loadModule = loaderFor(normalized);
  if (!loadModule || moduleCache.has(normalized)) return;
  moduleCache.add(normalized);
  loadModule().catch(() => moduleCache.delete(normalized));
}

export function preloadRouteAssets(path) {
  if (typeof window === "undefined") return;
  const normalized = normalizePath(path);
  preloadRouteModule(normalized);
  (HERO_BY_PATH[normalized] || []).forEach(preloadImage);
}
