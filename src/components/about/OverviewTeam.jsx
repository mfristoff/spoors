import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const BOLT = "/assets/base44/04dc9d564_bolt-f432cef86e.svg";

const team = [
  { name: "Jeff Spoor", role: "Owner & Founder", img: "/assets/base44/cfba0dea7_generated_image-91d9c615ac.webp" },
  { name: "Nikki Wade", role: "Senior Operations Manager", img: "/assets/base44/61d86d7aa_generated_image-c80e25a215.webp" },
  { name: "Randy", role: "Lead Service Technician", img: "/assets/base44/4928134bb_generated_image-efa957d89d.webp" },
  { name: "Jack Spoor", role: "Operations & HR", img: "/assets/base44/d1f3f231d_generated_image-23efd3a14d.webp" },
];

export default function OverviewTeam() {
  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <div className="site-shell">
        <div className="mb-8 md:mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <img src={BOLT} alt="" className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Our Team</span>
          </div>
          <h2 className="text-[clamp(30px,4vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            Meet The Core Team, Keeping Auburn Comfortable
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-sm">
              <Image src={member.img} alt={`${member.name} — ${member.role}`} fittingType="fill" className="block h-[140px] md:h-[200px] w-full" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink-900">{member.name}</h3>
                <p className="mt-1 text-sm text-ink-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}