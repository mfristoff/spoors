import Reveal from "@/components/ui/Reveal";

const LOGO_HERO = "https://spoors.olivemedia.agency/wp-content/uploads/2026/06/logo-hero-1024x131.png";

export default function BrandStrip() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal variant="in" delay={0.05}>
          <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-500 md:text-base">
            Providing Big-Name technology with the Integrity of a Locally recognized team:
          </p>
        </Reveal>
        <Reveal variant="in" delay={0.25} className="mt-8 flex justify-center">
          <img
            src={LOGO_HERO}
            alt="Trusted HVAC brands and accreditations"
            className="h-auto w-full max-w-[760px] object-contain"
            loading="eager"
          />
        </Reveal>
      </div>
    </section>
  );
}