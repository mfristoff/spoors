import FAQAccordion from "@/components/ui/FAQAccordion";
import Reveal from "@/components/ui/Reveal";

export default function ServiceFaq({ faqs, title }) {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        <Reveal>
          <FAQAccordion items={faqs} title={title} />
        </Reveal>
      </div>
    </section>
  );
}