import { cdnImage } from "@/lib/cdnImage";
import { images, serviceAreas } from "@/lib/siteConfig";
import { spoorsImageLibrary } from "@/lib/spoorsImageLibrary";
import { aboutPageContent } from "@/lib/aboutPageContent";

const SERVICES_HERO =
  "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/08b2af924_hero-bg.png";
const PLANNED_MAINTENANCE_HERO =
  "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/4fdf840dc_15501be56_c3661b5ec2d388862a914240e8e219d8d549dee6.png";

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
  "/services/heating": [cdnImage(images.heatingHero, 2560, 1600)],
  "/services/indoor-air-quality": [
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-hero.webp",
    "/assets/images/indoor-air-quality/spoors-auburn-ca-clean-indoor-air-relaxing-home-mobile-hero.webp",
  ],
  "/services/emergency-repairs": [cdnImage(images.introTech, 2560, 1600)],
  "/services/maintenance-tune-ups": [cdnImage(images.introTruck, 2560, 1600)],
  "/services/ductless-mini-splits": [cdnImage(spoorsImageLibrary.miniSplitInstallation, 2560, 1600)],
  "/services/swamp-coolers": [
    "/assets/images/swamp-coolers/spoors-auburn-ca-swamp-cooler-hero-fan.webp",
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

export function preloadRouteAssets(path) {
  if (typeof window === "undefined") return;
  const normalized = normalizePath(path);

  const loadModule = MODULE_BY_PATH[normalized];
  if (loadModule && !moduleCache.has(normalized)) {
    moduleCache.add(normalized);
    loadModule().catch(() => moduleCache.delete(normalized));
  }

  (HERO_BY_PATH[normalized] || []).forEach(preloadImage);
}

const WARM_PATHS = [
  "/services",
  "/services/air-conditioning",
  "/services/heating",
  "/services/indoor-air-quality",
  "/services/emergency-repairs",
  "/services/maintenance-tune-ups",
  "/services/ductless-mini-splits",
  "/services/swamp-coolers",
  "/services/water-heater-services",
  "/services/planned-maintenance",
  "/about-us",
];

export function warmPrimaryRoutes() {
  if (typeof window === "undefined") return () => {};
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || "")) return () => {};

  let cancelled = false;
  let timer = null;
  let index = 0;

  const next = () => {
    if (cancelled || index >= WARM_PATHS.length) return;
    const path = WARM_PATHS[index++];
    if (normalizePath(window.location.pathname) !== path) preloadRouteAssets(path);
    timer = window.setTimeout(next, 650);
  };

  const start = () => {
    timer = window.setTimeout(next, 900);
  };

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    window.removeEventListener("load", start);
  };
}
