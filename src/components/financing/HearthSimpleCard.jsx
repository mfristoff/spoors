import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Simple dark-navy financing card shown on the mobile financing hero,
 * with a Contact Us call-to-action.
 */
export default function HearthSimpleCard() {
  return (
    <div className="flex lg:hidden flex-col gap-5">
      {/* The nice card from the screenshot */}
      <div className="rounded-[20px] bg-[#262a3d] px-6 py-9 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <h3 className="text-[22px] font-bold leading-[1.2] tracking-[-0.01em] text-white">
          Hearth makes financing simple.
        </h3>
        <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[1.55] text-[#a0a0a0]">
          Hearth lets you check personalized financing options from multiple lending partners through one secure application.
        </p>
      </div>

      {/* Contact Us CTA */}
      <Link to="/contact-us/" className="group flex w-fit items-center gap-2 text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-text-1 transition-colors hover:text-figma-accent">
        Contact Us <ArrowRight size={18} className="text-figma-accent transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}