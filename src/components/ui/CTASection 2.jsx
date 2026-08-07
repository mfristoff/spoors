import { business } from "@/lib/siteConfig";
import Button from "@/components/ui/SiteButton";
import Container from "@/components/ui/Container";
import { Phone, CalendarClock } from "lucide-react";

export default function CTASection({
  title = "Ready for honest, dependable HVAC service?",
  text = "Schedule your appointment with Auburn's trusted, family-owned HVAC team — serving the community since 1925.",
}) {
  return (
    <section className="section-pad bg-navy-600">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="t-h2 max-w-3xl text-white">{title}</h2>
          <p className="max-w-2xl text-white/80 t-body-lg">{text}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button to={business.schedulingUrl} size="lg" variant="red">
              <CalendarClock className="mr-2 h-5 w-5" /> Schedule Online
            </Button>
            <Button href={business.phoneLink} size="lg" variant="outlineLight">
              <Phone className="mr-2 h-5 w-5" /> {business.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}