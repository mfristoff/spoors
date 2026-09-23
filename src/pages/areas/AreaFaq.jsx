import FAQAccordion from "@/components/ui/FAQAccordion";
import Reveal from "@/components/ui/Reveal";

/**
 * Location FAQ — canonical accordion only. The owner-quote block that used to
 * sit above it has been removed per request.
 */
export default function AreaFaq({ area, faqs }) {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell max-w-4xl">
        <Reveal>
        <FAQAccordion items={faqs} title={`Frequently Asked Questions About Our ${area.name} Services`} />
        </Reveal>
      </div>
    </section>
  );
}