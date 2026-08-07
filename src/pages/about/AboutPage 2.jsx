import { Navigate, useParams } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import { aboutPageContent } from "@/lib/aboutPageContent";
import AboutDetailHero from "@/components/about/AboutDetailHero";
import AboutStory from "@/components/about/AboutStory";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutStatement from "@/components/about/AboutStatement";
import AboutRelated from "@/components/about/AboutRelated";
import AboutCommunityEvent from "@/components/about/AboutCommunityEvent";

export default function AboutPage() {
  const { slug } = useParams();
  const page = aboutPageContent[slug];

  useSeo({
    title: page ? `${page.title} | Spoor's Heating & Air` : "About Spoor's",
    description: page?.seoDescription,
    path: `/about-us/${slug}/`,
  });

  if (!page) return <Navigate to="/about-us/" replace />;

  return (
    <div className="w-full overflow-hidden bg-background">
      <AboutDetailHero page={page} />
      <AboutStory page={page} />
      <AboutPrinciples page={page} />
      <AboutStatement statement={page.statement} eyebrow={page.eyebrow} bg={page.statementBg} highlight={page.statementHighlight} />
      {page.communityEvent && <AboutCommunityEvent event={page.communityEvent} />}
      <AboutRelated currentSlug={slug} />
    </div>
  );
}