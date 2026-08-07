import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSeo } from "@/lib/useSeo";
import { getArticle, blogArticles, business } from "@/lib/siteConfig";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import FooterCTANew from "@/pages/home/new/FooterCTANew";
import { Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import RichArticleParagraph from "@/components/blog/RichArticleParagraph";
import ArticleSources from "@/components/blog/ArticleSources";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function ShareBar({ title, url }) {
  const enc = encodeURIComponent;
  const links = [
    { label: "Email", icon: Mail, href: `mailto:?subject=${enc(title)}&body=${enc(url)}` },
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}` },
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer.php?u=${enc(url)}&title=${enc(title)}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/shareArticle?mini=true&url=${enc(url)}&title=${enc(title)}` },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[clamp(22px,2vw,32px)] font-bold leading-[1.09] tracking-[-0.0187em] text-[#0a0a0a]">Share this article</h3>
      <div className="flex flex-row items-center gap-3">
        {links.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className="p-3 bg-[#ededed] rounded-[6px] hover:bg-gray-200 transition-colors flex items-center justify-center w-12 h-12 text-[#383838] hover:text-red-600"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

function TableOfContents({ sections }) {
  if (!sections || sections.length === 0) return null;
  return (
    <div className="flex flex-col gap-8 p-6 bg-[#fbf8f8] rounded-[11px]">
      <h3 className="text-[clamp(18px,1.5vw,26px)] font-bold leading-[1.12] tracking-[-0.01em] text-[#0a0a0a]">In This Article</h3>
      <div className="flex flex-col gap-4">
        {sections.map((s, i) => (
          <a key={i} href={`#section-${i}`} className="flex items-center gap-1.5 group" style={{ paddingLeft: i === 0 ? 0 : 30 }}>
            <span className={`text-figma-20 font-[440] leading-figma-32 ${i === 0 ? "text-red-600" : "text-[#5a5a5a]"} group-hover:text-red-600 transition-colors`}>
              {s}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function LatestArticles({ current }) {
  const latest = blogArticles.filter((a) => a.slug !== current).slice(0, 4);
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[clamp(22px,2vw,32px)] font-bold leading-[1.09] tracking-[-0.0187em] text-[#0a0a0a]">Latest Article</h3>
      <div className="flex flex-col gap-7">
        {latest.map((a) => (
          <Link key={a.slug} to={`/resources/blog/${a.slug}/`} className="flex flex-col gap-3 pb-8 border-b border-[#d6d6d6] group hover:opacity-80 transition-opacity">
            <h4 className="text-figma-20 font-bold leading-figma-22 text-[#0a0a0a] group-hover:text-red-600 transition-colors line-clamp-2">{a.title}</h4>
            <div className="flex flex-nowrap items-center gap-2 text-[12px] text-[#5a5a5a] whitespace-nowrap overflow-hidden">
              <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                {a.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <span className="font-medium text-[#383838] truncate">{a.author}</span>
              <span className="bg-[#9a9a9a] w-1 h-1 rounded-full flex-shrink-0" />
              <span className="flex-shrink-0">{a.date}</span>
              <span className="bg-[#9a9a9a] w-1 h-1 rounded-full flex-shrink-0" />
              <span className="flex-shrink-0">{a.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticleBody({ body, sources }) {
  let sectionIndex = 0;
  return (
    <motion.article
      className="flex flex-col gap-8 text-figma-20 font-[440] leading-figma-32 text-[#5a5a5a] w-full order-2 lg:order-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {body.map((block, i) => {
        if (typeof block === "string" || block.segments) {
          return <RichArticleParagraph key={i} value={block} />;
        }
        const idx = sectionIndex++;
        return (
          <div key={i} id={`section-${idx}`}>
            <h2 className="font-bold text-[clamp(28px,3vw,40px)] text-[#0a0a0a] mt-8 mb-4 leading-[1.1] tracking-[-0.01em]">
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph, j) => (
              <RichArticleParagraph key={j} value={paragraph} className="mb-6" />
            ))}
          </div>
        );
      })}
      <ArticleSources sources={sources} />
    </motion.article>
  );
}

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useSeo({
    title: article ? article.seoTitle : "Article",
    description: article ? article.metaDescription : undefined,
    path: `/resources/blog/${slug}/`,
    type: "article",
    image: article ? article.image : undefined,
  });

  if (!article) return <Navigate to="/resources/blog/" replace />;

  const pageUrl = typeof window !== "undefined" ? window.location.href : `${business.domain}/resources/blog/${slug}/`;

  const tocSections = (article.body || [])
    .filter((b) => typeof b === "object" && b.heading)
    .map((b) => b.heading);

  return (
    <div className="min-h-screen w-full bg-white font-display overflow-x-clip">
      <NewHeader />

      {/* HERO */}
      <section className="header-aligned-section bg-[#fbf8f8] w-full py-12 lg:py-[clamp(20px,4.1vw,79px)]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[clamp(69px,17.9vw,344px)]">
          <motion.div
            className="flex flex-col justify-start items-start gap-8 lg:gap-[clamp(16px,2.7vw,51px)] w-full lg:max-w-[653px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <nav className="flex items-center gap-2 text-[13px] text-[#5a5a5a] mb-2">
              <Link to="/" className="hover:text-red-600">Home</Link>
              <span>/</span>
              <Link to="/resources/blog/" className="hover:text-red-600">Resources</Link>
              <span>/</span>
              <Link to="/resources/blog/" className="hover:text-red-600">Blog</Link>
            </nav>
            <h1 className="text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.1] tracking-[-0.0187em] text-[#0a0a0a]">
              {article.title}
            </h1>
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex flex-row items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                  {article.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <p className="text-[clamp(16px,1.5vw,24px)] font-medium leading-[1.58] text-[#383838]">{article.author}</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-[#767676]">Published {article.date}</p>
                {article.modifiedDate && <><div className="bg-[#9E0000] w-1.5 h-1.5 rounded-full" /><p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-[#767676]">Updated {article.modifiedDate}</p></>}
                <div className="bg-[#9E0000] w-1.5 h-1.5 rounded-full" />
                <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-[#767676]">Read in: {parseInt(article.readTime, 10) || 0} mins</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:max-w-[683px] aspect-[683/330] rounded-[18px] overflow-clip relative bg-[#f0e6e6]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {article.image && (
              <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover" />
            )}
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="header-aligned-section w-full py-12 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[402fr_1112fr] gap-12 lg:gap-[clamp(33px,8.6vw,166px)] items-start">
          {/* Mobile TOC — body starts immediately after "In This Article" */}
          {tocSections.length > 0 && (
            <div className="lg:hidden order-1">
              <TableOfContents sections={tocSections} />
            </div>
          )}
          {/* Sidebar */}
          <motion.aside
            className="flex flex-col gap-12 lg:gap-[clamp(19px,5vw,96px)] w-full lg:sticky lg:top-8 lg:self-start order-3 lg:order-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ShareBar title={article.title} url={pageUrl} />
            {tocSections.length > 0 && (
              <div className="hidden lg:block">
                <TableOfContents sections={tocSections} />
              </div>
            )}
            <LatestArticles current={slug} />
          </motion.aside>

          {/* Main Content */}
          <ArticleBody body={article.body} sources={article.sources} />
        </div>
      </section>

      <FooterCTANew />
      <NewFooter />
    </div>
  );
}