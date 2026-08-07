// The mobile poster is the LCP element. It is a local first-frame extraction
// from the mobile hero video, so the browser can request it during HTML parsing
// and the eventual image-to-video transition stays visually seamless.
export const HERO_MOBILE_SRC =
  "/assets/images/home/spoors-home-hero-mobile-poster.webp";

export default function HeroBackdrop() {
  return (
    <img
      src={HERO_MOBILE_SRC}
      width="720"
      height="1280"
      alt=""
      aria-hidden="true"
      decoding="async"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
    />
  );
}
