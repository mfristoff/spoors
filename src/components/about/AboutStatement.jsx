import { Link } from "react-router-dom";
import Reveal from "@/components/ui/Reveal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";
const HOME_QUOTE_BG = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/309bfc2b7_TitleSection.png";

export default function AboutStatement({ statement, eyebrow, highlight }) {
  return (
    <section className="relative overflow-hidden bg-white py-[clamp(72px,8vw,118px)]">
      <img
        src={HOME_QUOTE_BG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="relative site-shell mx-auto max-w-[1120px]">
        <Reveal>
          <div className="flex items-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider text-ink-800">{eyebrow}</span>
          </div>
          <p
            className="mt-7 font-heading text-ink-900"
            style={{
              fontSize: "clamp(34px, 4.35vw, 62px)",
              lineHeight: 1.16,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            &ldquo;{highlight
              ? statement.split(highlight).map((part, i, arr) => (
                  <span key={i}>{part}{i < arr.length - 1 && <span className="text-red-600">{highlight}</span>}</span>
                ))
              : statement}&rdquo;
          </p>
          <Link
            to="/about-us"
            className="group mt-9 inline-flex h-[56px] items-stretch overflow-hidden rounded-[9px] text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex min-w-[146px] items-center bg-[#FF2929] px-6 text-[15px] font-semibold transition-colors duration-200 group-hover:bg-[#d11f1f]">
              Explore More
            </span>
            <span className="flex w-[32px] items-center justify-center bg-[#c81e1e] transition-colors duration-200 group-hover:bg-[#a61717]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3.375 3.375L14.625 14.625M6.1875 14.625L14.625 14.625L14.625 6.1875"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
