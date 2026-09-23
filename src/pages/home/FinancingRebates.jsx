import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import { DollarSign, Gift } from "lucide-react";

export default function FinancingRebates() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={DollarSign}
            title="Financing Options"
            text="We offer financing to help make larger repairs and system replacements manageable for your family."
            to="/financing/"
            cta="Explore Financing"
          />
          <Card
            icon={Gift}
            title="Rebates & Incentives"
            text="High-efficiency equipment may qualify for manufacturer and utility rebates. We'll help you understand what's available."
            to="/rebates/"
            cta="View Rebates"
          />
        </div>
      </Container>
    </section>
  );
}

function Card({ icon: Icon, title, text, to, cta }) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-lg border border-border-light bg-neutral-bg p-8 transition-colors hover:border-red-300 hover:bg-soft-red"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-600">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="t-h4 text-ink-950">{title}</h3>
      <p className="mt-3 t-body text-ink-600">{text}</p>
      <span className="mt-5 inline-flex items-center font-semibold text-red-600">
        {cta}
        <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}