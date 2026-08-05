import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Image } from "@/components/ui/image";
import { images, business } from "@/lib/siteConfig";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={images.aboutTeam}
                alt="Spoor's HVAC technicians with a homeowner"
                fittingType="fill"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-navy-600 px-6 py-5 text-white shadow-xl md:block">
              <p className="text-3xl font-bold">{new Date().getFullYear() - business.founded}+</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Years Serving Auburn
              </p>
            </div>
          </div>

          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-red-600">
              About Spoor's
            </span>
            <h2 className="t-h2 text-ink-950">
              Auburn's <span className="text-red-highlight">family-owned</span> HVAC team since 1925.
            </h2>
            <div className="mt-5 space-y-4 text-ink-600 t-body">
              <p>
                Spoor's has kept Auburn-area families comfortable for four generations. What started
                as a small local shop in 1925 has grown into a trusted, full-service HVAC company —
                but our values haven't changed.
              </p>
              <p>
                We're proud of our roots, our neighbors, and the honest work that's earned us their
                trust. When you call Spoor's, you're calling a local team that cares.
              </p>
            </div>
            <div className="mt-7">
              <Button to="/about-us/" variant="navy">
                Learn About Spoor's <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}