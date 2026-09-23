import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/siteConfig";

export default function IntroSection() {
  return (
    <section id="intro" className="section-pad bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Combining small-town values with the latest"
              highlight="heating & cooling technology."
            />
            <div className="mt-5 space-y-4 text-ink-600 t-body">
              <p>
                Spoor's pairs modern equipment and ongoing technician training with the honest,
                local service our community has counted on for nearly a century. We don't upsell —
                we solve the problem in front of us.
              </p>
              <p>
                From quick repairs to full system replacements, every job gets the same careful
                attention and the same straight answers Auburn families deserve.
              </p>
            </div>
          </div>

          {/* Staggered image trio */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg pt-8">
              <Image
                src={images.introTruck}
                alt="Vintage 1920s Spoor's service truck"
                fittingType="fill"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={images.introTech}
                  alt="Spoor's technician using a tablet beside a furnace"
                  fittingType="fill"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={images.introAir}
                  alt="Clean indoor air quality system installation"
                  fittingType="fill"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}