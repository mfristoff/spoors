import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const REVIEWS = [
  {
    quote: "Spoor’s installed our new heat pump last winter and the difference is night and day. The crew was punctual, respectful of our home, and explained every step. Best HVAC experience we’ve had in Auburn.",
    author: "Karen Thompson",
    source: "Submitted on Google Reviews",
    tag: "New heat pump installed",
  },
  {
    quote: "Our AC quit during a 100° week and Spoor’s had a tech out the same afternoon. Honest diagnosis, fair price, no upselling. This is the only company I’ll call from now on.",
    author: "Michael Reyes",
    source: "Submitted on Yelp",
    tag: "Same-day AC repair",
  },
  {
    quote: "We joined the Home Comfort Club last year and it’s already paid for itself. They caught a small issue during a tune-up before it became a costly repair. Truly dependable team.",
    author: "Jennifer Patterson",
    source: "Submitted on Angi",
    tag: "Home Comfort Club member",
  },
  {
    quote: "After three other companies gave us the runaround, Spoor’s showed up on time, fixed our furnace in one visit, and charged exactly what they quoted. Honest, old-fashioned service.",
    author: "Robert Caldwell",
    source: "Submitted on HomeAdvisor",
    tag: "Upfront, flat-rate pricing",
  },
];

function Card({ quote, author, source, tag }) {
  return (
    <div className="flex min-h-[400px] w-[85vw] shrink-0 flex-col justify-between rounded-[20px] bg-[#f7f7f7] p-8 shadow-[inset_0_0_0_1px_#e8e8e8] snap-center sm:w-[600px]">
      <div className="flex flex-col gap-8">
        <img className="h-[50px] w-16 object-contain" src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/07bc810cd_8cc68bec7_127_467.svg" alt="" />
        <p className="text-[clamp(16px,1.56vw,30px)] font-medium leading-[1.6] text-[#252525]">{quote}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex w-fit items-center gap-4 rounded-[25px] bg-[#fceeee] px-4 py-3">
          <div className="h-2 w-2 rounded-full bg-red-600" />
          <span className="text-[16px] text-[#515151]">{tag}</span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-bold text-[#252525]">{author}</p>
          <p className="text-[16px] text-[#767676]">{source}</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="flex gap-5 px-2">
      {REVIEWS.map((r, i) => (
        <Card key={i} quote={r.quote} author={r.author} source={r.source} tag={r.tag} />
      ))}
    </div>
  );
}

export default function TestimonialsNew() {
  return (
    <section className="w-full overflow-hidden bg-white pt-[clamp(25px,5.2vw,100px)] pb-0">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex flex-col items-center">
          <img
            src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/936c19043_Bolt.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6"
          />
          <p className="mt-3 font-heading text-[13px] font-bold uppercase tracking-[0.22em] text-red-600">
            Testimonials
          </p>
          <h2 className="mt-4 px-4 text-center text-[36px] leading-[1.04] tracking-[-0.02em] font-bold text-[#252525] md:text-[clamp(30px,3vw,58px)] md:leading-[1.1] md:tracking-normal">
            Real Reviews from <span className="text-red-600">Real Auburn Families</span>
          </h2>
        </motion.div>

        {/* Auto-scrolling marquee — no scrollbar */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-[marquee_75s_linear_infinite]">
            <Group />
            <Group />
          </div>
        </div>
      </div>
    </section>
  );
}