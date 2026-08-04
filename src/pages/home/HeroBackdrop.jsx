// The hero backdrop is the LCP element, so it deliberately does NOT use the
// measuring <Image> component: that one waits for JS to boot and measure the
// container before requesting anything. These URLs are static, so the browser
// can fetch them straight from the <link rel="preload"> in index.html — the
// request starts during HTML parse instead of after hydration.
const BASE =
  "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fed95821e_AdobeStock_66338212.jpeg";
const NAME = "fed95821e_AdobeStock_66338212.webp";

const variant = (w, h, q) =>
  `${BASE}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_webp,quality_auto/${NAME}`;

export const HERO_MOBILE_SRC = variant(900, 1125, 82);
export const HERO_DESKTOP_SRC = variant(1920, 1080, 85);

export default function HeroBackdrop() {
  return (
    <img
      src={HERO_MOBILE_SRC}
      width="900"
      height="1125"
      alt=""
      aria-hidden="true"
      decoding="async"
      fetchpriority="high"
      className="absolute inset-0 h-full w-full object-cover md:hidden"
    />
  );
}