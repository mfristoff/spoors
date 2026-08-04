import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Image } from "@/components/ui/image";

export default function InteriorHero({ eyebrow, title, highlight, intro, image, imageAlt, crumbs }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-600">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={imageAlt || ""} fittingType="fill" quality={95} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-600/75" />
      </div>
      <Container className="py-14 md:py-20">
        {crumbs && (
          <div className="mb-5">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-red-300">
            {eyebrow}
          </span>
        )}
        <h1 className="t-h1 max-w-3xl text-white">
          {title} {highlight && <span className="text-red-highlight">{highlight}</span>}
        </h1>
        {intro && <p className="mt-5 max-w-2xl t-body-lg text-white/85">{intro}</p>}
      </Container>
    </section>
  );
}