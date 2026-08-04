import { useState } from "react";
import { Bell } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CommunityEventNotifyModal from "@/components/about/CommunityEventNotifyModal";

const BOLT = "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg";

/**
 * Community event highlight card. Mobile: single column with image above copy.
 */
export default function AboutCommunityEvent({ event }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <div className="site-shell">
        <Reveal>
          <div className="mb-8 flex items-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">{event.label}</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border-light bg-background shadow-[0_2px_16px_rgba(0,0,0,0.06)] lg:flex-row">
            {/* Image */}
            <div className="relative h-[260px] w-full shrink-0 lg:h-auto lg:w-[420px]">
              <img
                src={event.image}
                alt={`${event.title} — Spoor's Heating & Air community event`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Copy */}
            <div className="flex flex-1 flex-col justify-center gap-5 p-7 lg:p-10">
              <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink-900">
                {event.title}
              </h3>
              <p className="text-[17px] leading-[1.7] text-ink-600">{event.summary}</p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-700"
              >
                {event.cta} <Bell className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      <CommunityEventNotifyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}