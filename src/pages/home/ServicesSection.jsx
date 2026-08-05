import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/siteConfig";
import { Image } from "@/components/ui/image";
import { ArrowRight, Wrench } from "lucide-react";

const extra = [
  { title: "Emergency Repairs", slug: "emergency-repairs", icon: Wrench },
  { title: "Ductless Mini-Splits", slug: "ductless-mini-splits", icon: Wrench },
  { title: "Swamp Coolers", slug: "swamp-coolers", icon: Wrench },
  { title: "Water Heater Services", slug: "water-heater-services", icon: Wrench },
  { title: "Planned Maintenance", slug: "planned-maintenance", icon: Wrench },
];

export default function ServicesSection() {
  const main = services.slice(0, 4);
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            eyebrow="Residential Services"
            title="Complete heating & cooling care for"
            highlight="Auburn-area homes."
          >
            From air conditioning to indoor air quality, our team handles the full range of
            residential HVAC needs — installation, repair, maintenance, and emergencies.
          </SectionHeading>
          <Button to="/services/" variant="outline" className="shrink-0">
            All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Featured service cards with images */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {main.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}/`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border-light bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fittingType="fill"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="t-h5 text-ink-950">{s.title}</h3>
                <p className="mt-2 flex-1 t-body-sm text-ink-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-red-600">
                  Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional services list */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {extra.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}/`}
              className="flex items-center gap-3 rounded-md border border-border-light bg-neutral-bg px-4 py-4 text-sm font-semibold text-ink-800 hover:border-red-300 hover:bg-soft-red hover:text-red-700"
            >
              <s.icon className="h-5 w-5 text-red-600" />
              {s.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}