import { cdnImage } from "@/lib/cdnImage";
import { images, serviceAreas } from "@/lib/siteConfig";
import { aboutPageContent } from "@/lib/aboutPageContent";

const SERVICES_HERO =
  "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/08b2af924_hero-bg.png";
const PLANNED_MAINTENANCE_HERO =
  "/assets/images/planned-maintenance/spoors-auburn-ca-planned-maintenance-hvac-diagnostics-hero.webp";

const normalizePath = (input = "") => {
  try {
    const pathname = new URL(input, window.location.origin).pathname;
    return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  } catch {
    const pathname = String(input).split(/[?#]/)[0] || "/";
    return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  }
};

const aboutHero = (slug) => {
  const page = aboutPageContent[slug];
  return page ? [cdnImage(page.image, 2400, 1600, page.heroFocalPoint)] : [];
};

const HERO_BY_PATH = {
  "/about-us": ["/assets/images/about/spoors-team-ribbon-cutting-auburn-ca.webp"],
  "/about-us/our-mission": aboutHero("our-mission"),
  "/about-us/our-commitment": aboutHero("our-commitment"),
  "/about-us/customer-service": aboutHero("customer-service"),
  "/about-us/community-involvement": aboutHero("community-involvement"),
  "/services": [cdnImage(SERVICES_HERO, 2400, 1500, { x: 0.5, y: 0.6 })],
  "/services/air-conditioning": [cdnImage(images.acHero, 2560, 1600)],
  "/services/heating": ["/assets/images/heating/spoors-auburn-ca-heating-services-hero-no-pvc.webp"],
  "/services/indoor-air-quality": [
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-hero.webp",
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-mobile-hero.webp",
  ],
  "/services/emergency-repairs": ["/assets/images/update-1/spoors-auburn-ca-emergency-detail-hero.webp"],
  "/services/maintenance-tune-ups": [cdnImage(images.introTruck, 2560, 1600)],
  "/services/ductless-mini-splits": ["/assets/images/update-4/spoors-auburn-ca-ductless-mini-split-hero-wall-unit.webp"],
  "/services/swamp-coolers": [
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-hero-rooftop.webp",
  ],
  "/services/water-heater-services": [
    "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-hero.webp",
    "/assets/images/water-heaters/spoors-auburn-ca-hot-water-system-service-mobile-hero.webp",
  ],
  "/services/planned-maintenance": [cdnImage(PLANNED_MAINTENANCE_HERO, 1920, 1280)],
};

serviceAreas.forEach((area) => {
  const path = `/service-areas/${area.slug}`;
  const center = area.image || images.acHero;
  HERO_BY_PATH[path] = [
    cdnImage(center, 1068, 860),
    cdnImage(images.introTech, 1068, 698),
    cdnImage(images.introAir, 1068, 698),
  ];
});

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

serviceAreas.forEach((area) => {
  MODULE_BY_PATH[`/service-areas/${area.slug}`] = () => import("@/pages/areas/ServiceAreaPage");
});

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

function preloadRouteModule(path) {
  if (typeof window === "undefined") return;
  const normalized = normalizePath(path);
  const loadModule = MODULE_BY_PATH[normalized];
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

const WARM_PATHS = [
  "/services",
  "/services/air-conditioning",
  "/services/heating",
  "/services/emergency-repairs",
  "/about-us",
  "/services/indoor-air-quality",
  "/services/maintenance-tune-ups",
  "/services/ductless-mini-splits",
  "/services/swamp-coolers",
  "/services/water-heater-services",
  "/services/planned-maintenance",
];

function canAggressivelyWarm(connection) {
  if (!connection) return false;
  if (connection.saveData) return false;
  return connection.effectiveType === "4g";
}

export function warmPrimaryRoutes() {
  if (typeof window === "undefined") return () => {};
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || "") || connection?.effectiveType === "3g") {
    return () => {};
  }

  // Automatic warming is deliberately module-only. Hero images are preloaded
  // on actual hover/focus/pointer intent, which preserves instant navigation
  // without downloading megabytes of images the visitor may never view.
  const paths = canAggressivelyWarm(connection) ? WARM_PATHS : ["/services", "/about-us"];
  let cancelled = false;
  let timer = null;
  let idleHandle = null;
  let index = 0;

  const warmNext = () => {
    if (cancelled || index >= paths.length) return;
    const path = paths[index++];
    if (normalizePath(window.location.pathname) !== path) preloadRouteModule(path);
    timer = window.setTimeout(scheduleNext, 1200);
  };

  const scheduleNext = () => {
    if (cancelled || index >= paths.length) return;
    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(warmNext, { timeout: 2200 });
    } else {
      timer = window.setTimeout(warmNext, 900);
    }
  };

  const start = () => {
    timer = window.setTimeout(scheduleNext, 1200);
  };

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    if (idleHandle && "cancelIdleCallback" in window) window.cancelIdleCallback(idleHandle);
    window.removeEventListener("load", start);
  };
}
