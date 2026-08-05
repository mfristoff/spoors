import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/SiteButton";
import { serviceAreas, images } from "@/lib/siteConfig";
import { Image } from "@/components/ui/image";
import { MapPin, ArrowRight } from "lucide-react";

export default function AreasOverview() {
  return (
    <section className="section-pad bg-neutral-bg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Service Areas"
              title="Proudly serving Auburn and"
              highlight="surrounding communities."
            >
              <p className="text-ink-600">
                From our home base in Auburn, Spoor's serves homeowners across Placer County and the
                greater Sacramento region. Find your community below.
              </p>
            </SectionHeading>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {serviceAreas.slice(0, 12).map((a) => (
                <Link
                  key={a.slug}
                  to={`/service-areas/${a.slug}/`}
                  className="inline-flex items-center gap-2 py-1.5 text-sm text-ink-700 hover:text-red-600"
                >
                  <MapPin className="h-4 w-4 text-red-500" />
                  {a.name}
                </Link>
              ))}
            </div>
            <div className="mt-7">
              <Button to="/service-areas/" variant="outline">
                View All Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-lg lg:order-2">
            <Image
              src={images.auburn}
              alt="Auburn, California in the Sierra Nevada foothills"
              fittingType="fill"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}