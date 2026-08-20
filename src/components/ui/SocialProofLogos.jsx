import { SOCIAL_PROOF_LOGOS } from "@/lib/socialProofLogos";
import { Image } from "@/components/ui/image";

// Per-mark sizing. BBB (a wide badge) is height-driven and kept shorter than
// the taller marks for optical balance; Fujitsu sits in the center. The row uses
// uniform right margins on desktop and wraps on mobile.
const LOGO_SIZE_CLASS = {
  "BBB Accredited Business": "w-auto h-10 sm:h-12 lg:h-[76px]",
  "Bryant Heating & Cooling Systems": "w-auto h-20 sm:h-16 lg:h-[140px]",
  "Fujitsu Elite Contractor": "w-auto h-14 sm:h-16 lg:h-[120px]",
  "Meadow Vista Merchants Association Member": "w-auto h-14 sm:h-16 lg:h-[112px]",
  "Auburn Chamber of Commerce": "w-auto h-14 sm:h-16 lg:h-[116px]",
};

// Desktop right margins between consecutive marks (last mark has none).
const LOGO_MR_CLASS = {
  "BBB Accredited Business": "lg:mr-[64px]",
  "Auburn Chamber of Commerce": "lg:mr-[64px]",
  "Fujitsu Elite Contractor": "lg:mr-[64px]",
  "Bryant Heating & Cooling Systems": "lg:mr-[64px]",
  "Meadow Vista Merchants Association Member": "",
};

export default function SocialProofLogos({ className = "" }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap lg:justify-center lg:gap-0 ${className}`}
    >
      {SOCIAL_PROOF_LOGOS.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          originWidth={logo.width}
          originHeight={logo.height}
          fittingType="fit"
          quality={82}
          loading="eager"
          className={`object-contain ${
            LOGO_SIZE_CLASS[logo.alt] ?? "w-auto h-14 sm:h-16 lg:h-[112px]"
          } ${LOGO_MR_CLASS[logo.alt] ?? ""}`}
        />
      ))}
    </div>
  );
}