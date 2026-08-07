import Container from "@/components/ui/Container";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { homeFaqs } from "@/lib/siteConfig";

export default function HomeFAQ() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <FAQAccordion items={homeFaqs} title="Frequently Asked Questions About Our HVAC Services" />
      </Container>
    </section>
  );
}