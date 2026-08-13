import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import { blogArticles, blogCategories, images } from "@/lib/siteConfig";
import InteriorHero from "@/components/ui/InteriorHero";
import Container from "@/components/ui/Container";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 9;

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useSeo({
    title: "Resources & Blog",
    description:
      "Helpful heating and cooling articles from Spoor's Heating & Air — serving Auburn, California since 1925.",
    path: "/resources/blog/",
  });

  const filtered =
    category === "All"
      ? blogArticles
      : blogArticles.filter((a) => a.category === category);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageArticles = filtered.slice(start, start + PAGE_SIZE);

  const crumbs = [
    { name: "Resources", path: "/resources/" },
    { name: "Blog", path: "/resources/blog/" },
  ];

  const selectCategory = (c) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <>
      <InteriorHero
        eyebrow="Resources"
        title="HVAC tips, news, and"
        highlight="guidance."
        intro="Practical, honest information to help Auburn-area homeowners keep their heating and cooling systems running smoothly."
        image={images.introTech}
        crumbs={crumbs}
      />
      <section className="section-pad bg-white">
        <Container>
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => selectCategory(c)}
                className={
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                  (category === c
                    ? "bg-red-600 text-white"
                    : "border border-border-light text-ink-700 hover:bg-soft-red hover:text-red-700")
                }
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-ink-500">
              No articles in this category yet. Check back soon.
            </p>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pageArticles.map((a) => (
                  <article
                    key={a.slug}
                    className="group flex flex-col overflow-hidden rounded-lg border border-border-light bg-white shadow-sm"
                  >
                    <Link to={`/resources/blog/${a.slug}/`}>
                      <div className="aspect-[16/9] overflow-hidden bg-neutral-bg">
                        <img
                          src={a.image || images.introAir}
                          alt={a.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                        {a.category}
                      </span>
                      <h2 className="mt-2 t-h6 text-ink-950">
                        <Link to={`/resources/blog/${a.slug}/`} className="hover:text-red-600">
                          {a.title}
                        </Link>
                      </h2>
                      <p className="mt-2 flex-1 t-body-sm text-ink-600 line-clamp-3">{a.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                        <span>{a.date}</span>
                        <span>•</span>
                        <span>{a.readTime}</span>
                      </div>
                      <Link
                        to={`/resources/blog/${a.slug}/`}
                        className="mt-3 inline-flex items-center font-semibold text-red-600"
                      >
                        Read article <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-light text-ink-700 hover:bg-soft-red disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={
                        "inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors " +
                        (p === currentPage
                          ? "bg-red-600 text-white"
                          : "border border-border-light text-ink-700 hover:bg-soft-red")
                      }
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-light text-ink-700 hover:bg-soft-red disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}

              <p className="mt-8 text-center text-sm text-ink-500">
                Showing {start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)} of {filtered.length} articles
              </p>
            </>
          )}
        </Container>
      </section>

    </>
  );
}