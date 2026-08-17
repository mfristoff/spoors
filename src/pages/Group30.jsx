import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceQuoteModal from "@/components/ui/ServiceQuoteModal";
import { cdnImage } from "@/lib/cdnImage";

export default function SpoorHVAC() {
  const [clubModalOpen, setClubModalOpen] = useState(false);
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const benefits = [
  {
    img: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/225800095_2bd149670_25a79af4a509bf2a55797d9465b6b4be1d68e878.png",
    title: "Maximum System Efficiency",
    desc: "Keep your heat pump operating at peak performance to drastically reduce monthly electricity usage."
  },
  {
    img: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2c7e23e54_spoors-hvac-technician-auburn-ca.png",
    title: "No Overtime Charges",
    desc: "Get dependable emergency fixes anytime, including nights and weekends, at no extra cost."
  },
  {
    img: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/4fdf840dc_15501be56_c3661b5ec2d388862a914240e8e219d8d549dee6.png",
    title: "Priority Service Status",
    desc: "Skip the queue entirely and get dispatched to the front of the line during peak seasonal heatwaves."
  },
  {
    img: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/44aa664ae_a116f5e12_54beac8fa7344215202cbe7ed5062271693ebcb9.png",
    title: "Extended Equipment Life",
    desc: "Proactive structural tune-ups designed to maximize the operational lifespan of your machinery."
  },
  {
    img: "https://media.base44.com/images/public/6a67dcda4fda68f69980f519/5e066e0c3_2026-07-30_17-42-43.png",
    title: "Automatic Notifications for Effortless Service Visits",
    desc: "Stay ahead of changing foothill seasons with automated, stress-free maintenance reminders."
  }];


  const technicianCards = [
  {
    title: "General Services",
    icon: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg",
    items: [
    "Clean or replace 1” non-pleated filter",
    "Measure and record indoor and outdoor",
    "Measure indoor relative humidity",
    "Check thermostat and replace battery"]

  },
  {
    title: "Gas Heat Services",
    icon: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg",
    items: [
    "Inspect burners and clean",
    "Clean flame sensor",
    "Check heat exchanger for cracks",
    "Inspect pilot operations"]

  },
  {
    title: "AC Services",
    icon: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg",
    items: [
    "Inspect and clean outdoor condenser coil",
    "Inspect contactor",
    "Check start and run capacitors",
    "Measure temperature drop across the coil"]

  },
  {
    title: "Air Source Heat Pump Service",
    icon: "https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg",
    items: [
    "Air conditioner services",
    "Test defrost cycle operation",
    "Test reversing valve operation",
    "Test emergency heat operation"]

  }];


  const testimonials = [
  {
    quote: "If they can save me this much on energy bills while keeping my home this comfortable... that’s a win for me.",
    name: "David Miller",
    role: "Home Comfort Club Member since 2022"
  },
  {
    quote: "Our heater died on the coldest night of the year. Spoor’s had someone at our door in under two hours. Saved our family's weekend.",
    name: "Sarah Jenkins",
    role: "Home Comfort Club Member since 2021"
  },
  {
    quote: "The air quality in our home has never been better. My son’s allergies cleared up within a week of their system overhaul.",
    name: "Michael Chang",
    role: "Home Comfort Club Member since 2023"
  },
  {
    quote: "Being a Club member means I never have to worry about my AC again. It’s the best investment I’ve made.",
    name: "Emily Roberts",
    role: "Home Comfort Club Member since 2020"
  }];


  const TestimonialCard = ({ t }) =>
  <div className="flex w-[85vw] shrink-0 flex-col justify-between rounded-[20px] bg-figma-color-14 p-8 shadow-[inset_0_0_0_1px_#e8e8e8] snap-center sm:w-[600px]">
      <div className="flex flex-col gap-8">
        <img className="h-[50px] w-16 object-contain" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/ccd923d51_60a77b5a9_470_237.svg" alt="" />
        <p className="text-[clamp(18px,1.56vw,30px)] font-medium leading-[1.6] tracking-[-0.0133em] text-figma-text-2">
          {t.quote}
        </p>
        <div className="flex w-fit items-center gap-4 rounded-[25px] bg-figma-surface py-3 px-4">
          <div className="h-2 w-2 rounded-full bg-figma-accent" />
          <p className="text-figma-18 font-normal leading-figma-18 tracking-[-0.2px] text-figma-text-8">
            15% average savings per month
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <p className="text-figma-20 font-bold leading-figma-22 text-figma-text-2">{t.name}</p>
        <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-3">{t.role}</p>
      </div>
    </div>;


  const TestimonialGroup = () =>
  <div className="flex gap-5 px-2.5">
      {testimonials.map((t, i) =>
    <TestimonialCard key={i} t={t} />
    )}
    </div>;


  return (
    <div className="relative w-full min-h-screen bg-figma-primary font-display overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[580px] lg:min-h-[calc(100vh-154px)] flex items-center border-b border-[#050404]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-[60%_center] lg:object-[62%_center]"
            src="/assets/images/planned-maintenance/spoors-planned-maintenance-hero.webp"
            alt="Technician servicing an outdoor air conditioning unit" />

          <div className="absolute inset-0 bg-black/78 lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.90)_36%,rgba(0,0,0,0.74)_58%,rgba(0,0,0,0.56)_100%)]" />
          {/* Keep the lower part of the hero solid black so it melts into the black section below. */}
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-black/70 to-[#050404]" />
        </div>

        <div className="nav-row-aligned mx-auto w-full relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-12 pt-20 pb-8 lg:pt-6 lg:pb-6">
          {/* Hero Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-7 lg:gap-9 w-full max-w-[710px] items-start text-left">
            
            <div className="flex flex-row items-center gap-[11px]">
              <img src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg" alt="" aria-hidden="true" className="h-5 w-5" />
              <p className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-primary uppercase">
                Planned Maintenance Services
              </p>
            </div>
            <h1 className="text-[clamp(40px,3.7vw,72px)] font-bold leading-[1.01] tracking-[-0.0197em] text-figma-primary">Join Our Comfort Club &amp; Make Maintenance <span className="text-figma-accent">Easy</span></h1>
            <div className="flex flex-col gap-[18px] max-w-[640px] items-start">
              <p className="text-[clamp(16px,1.05vw,18px)] font-medium leading-[1.55] tracking-[-0.2px] text-white/75">
                Members enjoy exclusive savings, priority service, and total peace of mind:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3">
                {[
                  "15% Discount on Parts",
                  "Maximum System Efficiency",
                  "Maintain Manufacturer's Warranty",
                  "No Overtime Charges",
                  "Priority Service Status",
                  "Extended Equipment Life",
                  "Max Discount on Repairs & Service",
                  "Automatic Renewal for Continued Coverage",
                  "$750 Off or 10% Off New System",
                  "Year-Round Comfort and Peace of Mind",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/2a7194aa9_Bolt.svg" alt="" className="h-[18px] w-[18px] mt-0.5 shrink-0" />
                    <span className="text-[15px] leading-[1.4] text-white" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="travel-border flex flex-col items-center gap-6 p-5 md:p-7 bg-figma-primary rounded-[18px] w-full max-w-[400px] shadow-2xl">
            
            <div className="flex flex-col items-center gap-2 w-full text-center">
              <h2 className="text-[clamp(20px,1.8vw,30px)] font-bold leading-[1.1] text-[#303030]">
                Get Club Details
              </h2>
              <p className="text-figma-16 font-[440] leading-figma-22 tracking-[-0.2px] text-figma-text-1-2">
                Learn how membership works.
              </p>
            </div>
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-3 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-figma-color-14 rounded-[5px] shadow-[inset_0_0_0_1px_#eaeaea] text-figma-16 font-[440] text-figma-text-2 placeholder:text-figma-text-5 outline-none transition-all duration-300 ease-out hover:shadow-[inset_0_0_0_1px_#d0d0d0] hover:bg-white focus:shadow-[inset_0_0_0_2px_#0a1226] focus:bg-white" />
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-figma-color-14 rounded-[5px] shadow-[inset_0_0_0_1px_#eaeaea] text-figma-16 font-[440] text-figma-text-2 placeholder:text-figma-text-5 outline-none transition-all duration-300 ease-out hover:shadow-[inset_0_0_0_1px_#d0d0d0] hover:bg-white focus:shadow-[inset_0_0_0_2px_#0a1226] focus:bg-white" />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-figma-color-14 rounded-[5px] shadow-[inset_0_0_0_1px_#eaeaea] text-figma-16 font-[440] text-figma-text-2 placeholder:text-figma-text-5 outline-none transition-all duration-300 ease-out hover:shadow-[inset_0_0_0_1px_#d0d0d0] hover:bg-white focus:shadow-[inset_0_0_0_2px_#0a1226] focus:bg-white" />
                
                <textarea
                  placeholder="Additional Information"
                  className="w-full p-3 h-[80px] bg-figma-color-14 rounded-[5px] shadow-[inset_0_0_0_1px_#eaeaea] text-figma-16 font-[440] text-figma-text-2 placeholder:text-figma-text-5 outline-none transition-all duration-300 ease-out hover:shadow-[inset_0_0_0_1px_#d0d0d0] hover:bg-white focus:shadow-[inset_0_0_0_2px_#0a1226] focus:bg-white resize-none" />
                
              </div>
              <button
                type="button"
                onClick={() => setClubModalOpen(true)}
                className="bg-figma-accent rounded-[5px] w-full h-[48px] flex flex-row items-center justify-between p-1 pl-4 group hover:bg-red-700 transition-colors">
                
                <span className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-primary mx-auto">
                  Request Details
                </span>
                <div className="flex items-center justify-center min-h-[42px] bg-figma-secondary rounded-[2px] w-[30px] shrink-0">
                  <img className="w-[12px] h-[12px]" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/5de0fcfa1_1f1360926_341_121.svg" alt="Arrow" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* OUR BENEFIT SECTION */}
      <section className="w-full bg-figma-color-17-5 text-figma-primary pt-20 pb-20 lg:pt-[100px] lg:pb-[clamp(32px,6.6vw,127px)]">
        <div className="w-full border-t border-[#515151]" aria-hidden="true" />
        <div className="site-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col w-full">
            
            {/* Heading Row */}
            <div className="flex items-end pt-0 pr-[10px] pb-[clamp(16px,2.1vw,40px)] pl-[24px] min-h-[150px] lg:h-[241px] border-x border-b border-[#515151] w-full mx-auto">
              <h2 className="text-[clamp(34px,3.23vw,62px)] font-bold leading-[1.0968] tracking-[-0.0194em] text-white">Club Benefits

              </h2>
            </div>

            {/* Benefit Rows */}
            <div className="flex flex-col w-full mx-auto">
              {benefits.map((item, idx) =>
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col lg:flex-row border-x border-b border-[#515151] w-full group">
                
                  <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#515151] overflow-clip">
                    <img
                    className="w-full h-[300px] lg:h-[415px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    src={item.img}
                    alt={item.title} />
                  
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 gap-4">
                    <h3 className="text-[clamp(26px,2.4vw,40px)] font-bold leading-[1.05] tracking-[-0.0208em] text-figma-color-20">
                      {item.title}
                    </h3>
                    {item.desc &&
                  <p className="text-figma-20 font-normal leading-figma-32 tracking-[-0.2px] text-figma-text-6 opacity-60 line-clamp-2 min-h-[64px]">
                    {item.desc}
                  </p>
                  }
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom CTA Row */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-10 px-4 border-t border-[#515151] w-full mx-auto mt-20">
              <p className="text-figma-18 font-[440] leading-figma-29 tracking-[-0.2px] text-figma-text-4 max-w-[620px] text-center lg:text-left">
                Join the Comfort Club today and enjoy priority service, exclusive member savings, and year-round peace of mind for your home's heating and cooling.
              </p>
              <button type="button" onClick={() => setClubModalOpen(true)} className="bg-figma-accent rounded-[5px] w-full max-w-[217px] h-[58px] flex flex-row items-center justify-between p-1 pl-4 group hover:bg-red-700 transition-colors shrink-0">
                <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary mx-auto">
                  Request Details
                </span>
                <div className="flex items-center justify-center min-h-[50px] bg-figma-secondary rounded-[2px] w-[33px] shrink-0">
                  <img className="w-[13px] h-[13px]" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/2d637d123_df497f77a_467_230.svg" alt="Arrow" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICIAN SERVICES SECTION */}
      <section className="w-full bg-figma-surface py-20 lg:py-[clamp(28px,5.8vw,112px)]">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-[clamp(24px,6.2vw,120px)]">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start gap-8 max-w-[828px]">
              
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-row items-center gap-[11px]">
                  <div className="w-6 h-6 relative flex items-center justify-center">
                    <img className="w-[13px] h-2.5 absolute top-px left-1.5" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/261990790_420fe99ad_472_286.svg" alt="Icon" />
                    <img className="w-[13px] h-2.5 opacity-50 absolute top-[11px] left-2" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/a6f03d3cf_8dc950f65_472_287.svg" alt="Icon Shadow" />
                  </div>
                  <p className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-text-1 uppercase">
                    TECHNICIAN SERVICES
                  </p>
                </div>
                <h2 className="text-[clamp(36px,3.2vw,56px)] font-bold leading-[1.0] tracking-[-0.0187em] text-figma-text-1">
                  What Your Club Technicians Do for You
                </h2>
              </div>
              <p className="text-figma-20 font-[440] leading-figma-32 text-figma-text-4-2">
                As a Club member, your technicians perform a comprehensive seasonal tune-up using state-of-the-art digital diagnostics, going beyond quick fixes to prioritize long-term system efficiency and proactive care.
              </p>
              <button type="button" onClick={() => setClubModalOpen(true)} className="bg-figma-accent rounded-[5px] w-full max-w-[217px] h-[58px] flex flex-row items-center justify-between p-1 pl-4 group hover:bg-red-700 transition-colors mt-4">
                <span className="text-figma-18 font-semibold leading-figma-18 tracking-[-0.2px] text-figma-primary mx-auto">
                  Join Now
                </span>
                <div className="flex items-center justify-center min-h-[50px] bg-figma-secondary rounded-[2px] w-[33px] shrink-0">
                  <img className="w-[13px] h-[13px]" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/335f5162e_6f821a54c_472_298.svg" alt="Arrow" />
                </div>
              </button>
            </motion.div>

            {/* Right Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {technicianCards.map((card, idx) =>
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col gap-7 p-7 bg-figma-primary rounded-[14px] shadow-[inset_0_0_0_1px_#e2e2e2] hover:shadow-lg transition-shadow">
                
                  <div className="flex flex-row items-center gap-2 pb-3 border-b border-figma-color-20">
                    <div className="w-8 h-8 relative flex items-center justify-center">
                      <img className="w-6 h-6 object-contain" src={card.icon} alt={card.title} />
                    </div>
                    <h3 className="text-figma-20 font-bold leading-figma-22 text-figma-text-6-2">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-[18px] flex-1">
                    {card.items.map((item, i) =>
                  <div key={i} className="flex flex-row items-start gap-2">
                        <div className="w-[18px] min-h-[18px] relative flex items-center justify-center shrink-0 mt-1">
                          <img className="w-[13px] h-3" src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/e3fe3ceb2_cf79b4572_472_318.svg" alt="Check" />
                        </div>
                        <p className="text-figma-16 font-[440] leading-figma-26 text-figma-text-1">
                          {item}
                        </p>
                      </div>
                  )}
                  </div>
                  <div className="pt-4 border-t border-figma-color-20 mt-auto">
                    <button type="button" onClick={() => setClubModalOpen(true)} className="text-figma-14 font-medium leading-figma-14 tracking-[-0.1px] text-figma-text-1 hover:text-figma-accent transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION — full-width slow marquee */}
      <section className="w-full bg-figma-primary pt-20 lg:pt-[clamp(25px,5.2vw,100px)] pb-16 overflow-clip">
        <div className="site-shell flex flex-col items-center gap-6 text-center">
          <img
            src="https://media.base44.com/images/public/6a638421a0f67c7e06d9df17/bc3f76106_Bolt.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6" />
          
          <p className="text-figma-16 font-semibold leading-figma-16 tracking-[-0.2px] text-figma-accent uppercase">
            Testimonials
          </p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[clamp(40px,4vw,76px)] font-bold leading-[1.0] tracking-[-0.0187em] text-figma-text-2 max-w-[900px]">
            
            The Voice of <span className="text-figma-surface-2">Our Community</span>.
          </motion.h2>
        </div>

        {/* Full-width slow auto-scroll marquee — two cards visible in center, partials on edges */}
        <div className="relative w-full overflow-hidden mt-12">
          <div className="flex w-max animate-[marquee_60s_linear_infinite]">
            <TestimonialGroup />
            <TestimonialGroup />
          </div>
        </div>
      </section>

      <ServiceQuoteModal
        open={clubModalOpen}
        onClose={() => setClubModalOpen(false)}
        service="Comfort Club"
        eyebrow="COMFORT CLUB MEMBERSHIP"
        headline="Join the Comfort Club Today"
        support="Get exclusive savings, priority service, and total peace of mind. Tell us about your home and we'll follow up with membership details."
        formService="Comfort Club Membership"
      />
    </div>);

}