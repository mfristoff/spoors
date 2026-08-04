import { Link } from "react-router-dom";
import { business } from "@/lib/siteConfig";

export default function NewFooter() {
  return (
    <footer className="relative w-full overflow-clip bg-[#0c1228] px-4 pt-[220px] pb-[160px] md:pt-[clamp(220px,18vw,280px)] md:pb-[clamp(300px,26vw,460px)] text-white md:px-[clamp(18px,6.2vw,120px)]">
      {/* Bottom-anchored logo watermark — top aligns with the copyright line */}
      <img
        src="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/3d0100751_Usethisinthefooter.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[140px] w-full select-none object-contain object-bottom opacity-25 md:h-[clamp(300px,26vw,460px)] md:object-fill md:opacity-[0.15]"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col justify-between gap-16 lg:flex-row">
        {/* Left: Sitemap + Services */}
        <div className="flex flex-col gap-16 sm:flex-row lg:gap-[clamp(28px,7.3vw,140px)]">
          <FooterCol title="SITEMAP">
            <div className="flex gap-10">
              <ul className="flex flex-col gap-5">
                <FLink to="/">Home</FLink>
                <FLink to="/about-us">About Us</FLink>
                <FLink to="/services/">Services</FLink>
                <FLink to="/resources/blog/">Blog</FLink>
                <FLink to={business.portalUrl} external>Client Portal</FLink>
              </ul>
              <ul className="flex flex-col gap-5">
                <FLink to="/financing/">Financing</FLink>
                <FLink to="/rebates/">Rebates</FLink>
                <FLink to="/contact-us/">Contact Us</FLink>
                <FLink to="/privacy-policy/">Privacy Policy</FLink>
                <FLink to="/cookie-policy/">Cookie Policy</FLink>
              </ul>
            </div>
          </FooterCol>

          <FooterCol title="SERVICES">
            <div className="flex gap-10">
              <ul className="flex flex-col gap-5">
                <FLink to="/services/air-conditioning/">AC Services</FLink>
                <FLink to="/services/heating/">Heating services</FLink>
                <FLink to="/services/indoor-air-quality/">Indoor Air Quality</FLink>
                <FLink to="/services/emergency-repairs/">Emergency Repair</FLink>
                <FLink to="/services/maintenance-tune-ups/">Maintenance</FLink>
              </ul>
              <ul className="flex flex-col gap-5">
                <FLink to="/services/ductless-mini-splits/">Ductless Mini-Split</FLink>
                <FLink to="/services/swamp-coolers/">Swamp Coolers</FLink>
                <FLink to="/services/water-heater-services/">Water Heater</FLink>
                <FLink to="/services/planned-maintenance/">Planned Maintenance</FLink>
              </ul>
            </div>
          </FooterCol>
        </div>

        {/* Right: Contact + Social */}
        <div className="flex flex-col gap-16 sm:flex-row lg:gap-[clamp(28px,7.3vw,140px)]">
          <div className="flex max-w-[296px] flex-col gap-12">
            <FooterCol title="EMAIL & SUPPORT">
              <a href={business.emailLink} className="break-all text-[16px] font-semibold text-white/85 hover:text-red-300">
                {business.email}
              </a>
            </FooterCol>
            <FooterCol title="PHONE">
              <div className="flex flex-col gap-4">
                <a href="tel:5308784812" className="text-[16px] font-semibold text-white/85 hover:text-red-300">(530) 878-4812</a>
                <a href="tel:5308231843" className="text-[16px] font-semibold text-white/85 hover:text-red-300">(530) 823-1843</a>
                <a href="tel:5308784812" className="text-[16px] font-semibold text-white/85 hover:text-red-300">(530) 878-4812</a>
              </div>
            </FooterCol>
            <FooterCol title="ADDRESS">
              <div className="flex flex-col gap-4">
                <p className="whitespace-pre-line text-[16px] font-semibold text-white/85">{"908 Evergreen Lane\nMeadow Vista, CA 95722"}</p>
                <p className="whitespace-pre-line text-[16px] font-semibold text-white/85">{"345 Sacramento St., #5,\nAuburn, CA 95603"}</p>
                <p className="whitespace-pre-line text-[16px] font-semibold text-white/85">{"9198 Greenback Ln #100\nOrangevale, CA 95662"}</p>
              </div>
            </FooterCol>
            <p className="mt-[52px] text-[14px] font-semibold text-white/40">ALL RIGHTS RESERVED ©2026</p>
          </div>

          <FooterCol title="SOCIAL MEDIA">
            <div className="flex flex-col gap-5">
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold text-white/85 hover:text-red-300">Facebook</a>
              <a href={business.social.x} target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold text-white/85 hover:text-red-300">X</a>
            </div>
          </FooterCol>
        </div>
      </div>

      {/* Copyright moved up next to the address column */}
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[16px] font-semibold text-white/60">{title}</p>
      {children}
    </div>
  );
}

function FLink({ to, children, external }) {
  const cls = "text-[16px] font-semibold text-white/85 hover:text-red-300";
  if (external) return <li><a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a></li>;
  return <li><Link to={to} className={cls}>{children}</Link></li>;
}