import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, X } from "lucide-react";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
import { setFaqSchema } from "@/lib/useSeo";

/**
 * Canonical FAQ block (1:1 with reference design):
 *  - red flame icon + "FAQ" eyebrow
 *  - large centered heading
 *  - accordion rows separated by thin light-gray dividers; open row shows an
 *    "x", closed rows show a "+"; the answer appears below the question
 *  - footer CTA: "Didn't find what you were looking for? [Contact Our Experts]"
 */
export default function FAQAccordion({ items, title = "Frequently Asked Questions", label = "FAQ" }) {
  const [open, setOpen] = useState(0);
  setFaqSchema(items);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Icon + label */}
      <div className="flex items-center justify-center gap-2">
        <img src={BOLT} alt="" className="h-4 w-4" />
        <span className="text-sm font-bold uppercase tracking-wider text-red-600">{label}</span>
      </div>

      {/* Heading */}
      {title && (
        <h2
          className="mt-4 text-center font-heading text-ink-950"
          style={{ fontSize: "clamp(26px, 3.5vw, 44px)", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.01em" }}
        >
          {title}
        </h2>
      )}

      {/* Accordion rows */}
      <div className="mt-10 divide-y divide-[#E0E0E0]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-heading text-[20px] font-semibold leading-snug text-ink-900 md:text-[24px]">
                  {item.q}
                </span>
                <span className="shrink-0 text-ink-900">
                  {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>
              {isOpen && (
                <div className="pb-6 text-[16px] leading-relaxed text-ink-600">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
        <p className="text-[16px] text-ink-700">Didn't find what you were looking for?</p>
        <Link
          to="/contact-us/"
          className="inline-flex items-center rounded-[9px] border-[3px] border-[#d8d8d8]/70 bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
        >
          Contact Our Experts
        </Link>
      </div>
    </div>
  );
}