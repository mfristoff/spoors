import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, HeartHandshake, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Professional Expertise & Ongoing Training",
    text: "Our technicians stay current on modern HVAC systems through continuous training, so your home benefits from skilled, up-to-date work.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Philosophy",
    text: "We listen, explain your options clearly, and recommend what's right for your home — not what's most profitable for us.",
  },
  {
    icon: BadgeCheck,
    title: "Honesty & Integrity in Service",
    text: "Fair pricing, transparent recommendations, and work we stand behind. It's how we've earned trust in Auburn since 1925.",
  },
];

export default function FeatureCards() {
  return (
    <section className="section-pad bg-neutral-bg">
      <Container>
        <SectionHeading
          eyebrow="Why Spoor's"
          title="A century-old standard for"
          highlight="honest, dependable service."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex h-full flex-col rounded-lg border border-border-light bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-soft-red">
                <f.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="t-h5 text-ink-950">{f.title}</h3>
              <p className="mt-3 t-body-sm text-ink-600">{f.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}