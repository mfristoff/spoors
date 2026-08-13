// The mobile backdrop remains the LCP element while the correct home hero video
// loads after page start. This is the original pre-mobile-video fallback, not a
// frame from the condenser/fan footage.
const BASE =
  "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fed95821e_AdobeStock_66338212.jpeg";
const NAME = "fed95821e_AdobeStock_66338212.webp";

const variant = (w, h, q) =>
  `${BASE}/v1/fill/w_${w},h_${h},al_c,q_${q},enc_webp,quality_auto/${NAME}`;

export const HERO_MOBILE_SRC = variant(900, 1125, 82);

export default function HeroBackdrop() {
  return (
    <img
      src={HERO_MOBILE_SRC}
      width="900"
      height="1125"
      alt=""
      aria-hidden="true"
      decoding="async"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover md:hidden"
    />
  );
}
