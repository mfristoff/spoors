import { Link } from "react-router-dom";
import { problemsSolved } from "@/lib/areaContent";
import { ArrowRight } from "lucide-react";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";

/**
 * HVAC Problems We Solve — pale-gray rounded container with white problem
 * cards. Two-column desktop, one-column mobile. Honest, homeowner-language
 * diagnostics; each card links to a relevant service where useful.
 */
export default function AreaProblems() {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell">
        <div className="rounded-2xl bg-neutral-bg p-6 md:p-12">
          <div className="flex items-center justify-center gap-2">
            <img src={BOLT} alt="" className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">Common HVAC Issues</span>
          </div>
          <h2
            className="mt-4 text-center font-heading text-ink-950"
            style={{ fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            HVAC Problems We Solve
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {problemsSolved.map((p) => (
              <div key={p.title} className="rounded-xl border border-border-light bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-ink-950">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{p.text}</p>
                <Link
                  to={p.path}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 underline underline-offset-4 hover:text-red-700"
                >
                  Learn how we help <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}