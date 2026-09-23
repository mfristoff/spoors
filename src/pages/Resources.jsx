import { Link } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import { images, business } from "@/lib/siteConfig";
import InteriorHero from "@/components/ui/InteriorHero";
import { ArrowRight, ExternalLink, BookOpen, FileText } from "lucide-react";


export default function Resources() {
  useSeo({
    title: "Resources",
    description:
      "Helpful HVAC resources, articles, and tools from Spoor's Heating & Air in Auburn, California.",
    path: "/resources/",
  });

  const crumbs = [{ name: "Resources", path: "/resources/" }];

  return (
    <>
      <InteriorHero
        eyebrow="Resources"
        title="Helpful HVAC"
        highlight="resources."
        intro="Practical guidance, articles, and tools to help you make confident decisions about your home's heating and cooling."
        image={images.introTech}
        crumbs={crumbs}
      />
      <section className="section-pad bg-white">
        <div className="site-shell">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/resources/blog/"
              className="group flex flex-col rounded-lg border border-border-light bg-neutral-bg p-8 hover:border-red-300 hover:bg-soft-red"
            >
              <BookOpen className="h-8 w-8 text-red-600" />
              <h2 className="mt-4 t-h4 text-ink-950">Blog & Articles</h2>
              <p className="mt-2 flex-1 text-ink-600">
                Honest, practical articles on heating, cooling, maintenance, and indoor air quality.
              </p>
              <span className="mt-4 inline-flex items-center font-semibold text-red-600">
                Read articles <ArrowRight className="ml-1.5 h-4 w-4" />
              </span>
            </Link>

            <a
              href={business.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border-light bg-neutral-bg p-8 hover:border-red-300 hover:bg-soft-red"
            >
              <FileText className="h-8 w-8 text-red-600" />
              <h2 className="mt-4 t-h4 text-ink-950">Client Portal</h2>
              <p className="mt-2 flex-1 text-ink-600">
                Access your service records, scheduling, and account information.
              </p>
              <span className="mt-4 inline-flex items-center font-semibold text-red-600">
                Open portal <ExternalLink className="ml-1.5 h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}