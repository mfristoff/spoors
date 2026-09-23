import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { aboutPageContent } from "@/lib/aboutPageContent";

export default function AboutRelated({ currentSlug }) {
  const pages = Object.entries(aboutPageContent).filter(([slug]) => slug !== currentSlug);
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="site-shell">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><div className="mb-4 flex items-center gap-2"><img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Continue exploring</span></div><h2 className="text-[clamp(32px,3.5vw,50px)] font-bold tracking-[-0.025em] text-ink-900">More about Spoor’s</h2></div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border-light bg-border-light md:grid-cols-3">
          {pages.map(([slug, page]) => (
            <Link key={slug} to={`/about-us/${slug}/`} className="group flex min-h-[170px] flex-col justify-end gap-3 bg-background p-7 hover:bg-neutral-bg">
              <span className="text-sm font-medium text-ink-400">{page.relatedLabel}</span>
              <span className="flex items-end justify-between gap-4 text-xl font-bold text-ink-900">{page.title}<ArrowUpRight className="h-5 w-5 text-red-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}