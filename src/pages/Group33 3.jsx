import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Group33() {
  const containerRef = useRef(null);

  // Parallax setup for the hero image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="w-full flex flex-col relative">
      {/* Hero Image Section */}
      <div className="relative w-full aspect-[1920/1043] overflow-clip z-[1]">
        <motion.img
          style={{ y }}
          className="absolute top-[-10%] left-0 w-full h-[120%] object-cover object-center"
          src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/0604463a4_40dc07d21_d8efb5307ef6538d08f32b1c8225c80319b053ae.png"
          alt="Parallax Section"
        />
      </div>

      {/* Value Proposition Section */}
      <div className="relative w-full bg-figma-primary flex flex-col items-center justify-center overflow-clip py-[15vw] lg:py-[clamp(75px,15.6vw,299px)] px-6 md:px-12 z-[2]">
        {/* Decorative Background Vector */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-[0.6] z-[1] pointer-events-none"
          style={{ objectPosition: "center top" }}
          src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/4d521cb1d_fd5d3a4b4_134_704.svg"
          alt="Vector"
        />

        {/* Text Content */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-[2] w-full max-w-[1396px] text-[clamp(34px,3.23vw,62px)] font-bold font-display leading-[1.3065] tracking-[-0.0194em] text-center text-figma-text-7"
        >
          Spoor’s brings together expert technicians,{" "}
          <span className="text-[#ff2929]">advanced HVAC technology</span>, and a
          customer-first philosophy to help Auburn families simplify their{" "}
          <span className="text-[#ff0000]">home comfort</span> and live every
          season with absolute confidence.
        </motion.p>
      </div>
    </div>
  );
}
