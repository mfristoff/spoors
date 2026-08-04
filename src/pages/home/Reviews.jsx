import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Auburn Homeowner",
    text: "Sample review placeholder — verified customer testimonials will appear here once collected and approved.",
  },
  {
    name: "Roseville Resident",
    text: "Sample review placeholder — verified customer testimonials will appear here once collected and approved.",
  },
  {
    name: "Rocklin Customer",
    text: "Sample review placeholder — verified customer testimonials will appear here once collected and approved.",
  },
];

export default function Reviews() {
  return (
    <section className="section-pad bg-navy-600">
      <Container>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trusted by Auburn-area"
          highlight="homeowners."
          light
          align="center"
        >
          <p className="text-white/70">
            We're proud of the relationships we've built. Verified reviews will be featured here
            once collected. (Listed below are clearly labeled sample placeholders.)
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="flex h-full flex-col rounded-lg border border-white/10 bg-navy-700 p-7">
              <Quote className="h-8 w-8 text-red-500" />
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm italic text-white/80">{r.text}</p>
              <p className="mt-5 font-semibold text-white">{r.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}