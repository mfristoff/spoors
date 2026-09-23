import Reveal from "@/components/ui/Reveal";
import { Image } from "@/components/ui/image";
import { GraduationCap, Users, BadgeCheck } from "lucide-react";

const _I = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/";
const GALLERY = [
  _I + "25c356f1d_AdobeStock_319218928.jpeg",
  _I + "7dc8f7015_AdobeStock_482908998.jpeg",
  _I + "714690075_AdobeStock_355728990.jpeg",
];

const CARDS = [
  {
    icon: GraduationCap,
    title: "Professional Expertise & Ongoing Training",
    body: "We provide professional HVAC services in the Auburn area, ensuring that every technician receives the best training to master the latest products and systems.",
    bg: "#fff1f3",
    accent: "#ff2929",
  },
  {
    icon: Users,
    title: "Customer-First Philosophy",
    body: "Our top priority is customer satisfaction, whether through cost-effective routine maintenance or by providing expert advice to prevent future damage.",
    bg: "#f3f0ff",
    accent: "#050d38",
  },
  {
    icon: BadgeCheck,
    title: "Honesty & Integrity in Service",
    body: "We build trust through honest and fair price estimates, and we are committed to always providing solutions that help customers save money.",
    bg: "#f3f4f6",
    accent: "#0a1226",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="bg-white">
      {/* Two-column introduction */}
      <div className="site-shell py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-[clamp(28px,3.6vw,48px)] font-bold leading-[1.1] text-ink-950">
              Combining small-town values with the latest{" "}
              <span className="text-red-600">cooling technology.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:pt-10">
            <p className="max-w-xl text-[17px] leading-[1.7] text-ink-600">
              Experience big-name tech with small-town integrity. Based in Auburn, we treat your
              home with the respect and care it deserves.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Three-image values row */}
      <div className="site-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={i * 0.1}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt=""
                  fittingType="fill"
                  className="h-[260px] w-full object-cover md:h-[420px]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Three light value cards */}
      <div className="site-shell py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full overflow-hidden rounded-xl border border-black/5 shadow-sm">
                  <div className="h-1 w-full" style={{ background: c.accent }} />
                  <div className="h-full p-7" style={{ background: c.bg }}>
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm"
                    >
                      <Icon className="h-6 w-6" style={{ color: c.accent }} />
                    </span>
                    <h3 className="mt-5 font-heading text-[22px] font-bold leading-snug text-ink-950">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Values-to-services transition: pale-pink curve + red-to-pink gradient */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-[60px] w-full md:h-[90px]"
          aria-hidden="true"
        >
          <path d="M0,40 C360,90 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff1f3" />
        </svg>
        <div
          className="h-3 w-full"
          style={{ background: "linear-gradient(to right, #fff1f3 0%, #ff2929 100%)" }}
        />
      </div>
    </section>
  );
}