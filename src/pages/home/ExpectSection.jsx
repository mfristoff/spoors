import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ClipboardList, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "Before",
    title: "Clear, Upfront Communication",
    text: "We confirm your appointment, arrive within the scheduled window, and listen carefully to your concerns before any work begins.",
  },
  {
    icon: Wrench,
    step: "During",
    title: "Skilled, Respectful Work",
    text: "Our technicians protect your home, explain what they find, and complete the repair or installation with care and precision.",
  },
  {
    icon: ShieldCheck,
    step: "After",
    title: "Follow-Through You Can Count On",
    text: "We confirm everything works, review simple maintenance tips, and stand behind our work — if something isn't right, we make it right.",
  },
];

export default function ExpectSection() {
  return (
    <section className="section-pad bg-soft-red">
      <Container>
        <SectionHeading
          eyebrow="What to Expect"
          title="Dependable service"
          highlight="before, during, and after."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative rounded-lg border border-border-light bg-white p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-600">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <span className="absolute right-6 top-7 text-4xl font-bold text-soft-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">{s.step}</p>
              <h3 className="mt-1 t-h5 text-ink-950">{s.title}</h3>
              <p className="mt-3 t-body-sm text-ink-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}