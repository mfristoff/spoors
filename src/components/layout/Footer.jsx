import { Link } from "react-router-dom";
import { business } from "@/lib/siteConfig";

const WATERMARK_PNG = "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/3cf9e7da3_file1.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c1228] text-white">
      {/* Watermark — large Spoor's logo, bottom center */}
      <img
        src={WATERMARK_PNG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1400px] -translate-x-1/2 select-none"
        style={{ opacity: 0.18 }}
      />

      <div className="site-shell relative py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* SITEMAP */}
          <FooterCol title="Sitemap">
            <div className="flex gap-10">
              <ul className="space-y-2.5">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about-us/">About Us</FooterLink>
                <FooterLink to="/services/">Services</FooterLink>
                <FooterLink to="/resources/blog/">Blog</FooterLink>
                <FooterLink to={business.portalUrl} external>Client Portal</FooterLink>
              </ul>
              <ul className="space-y-2.5">
                <FooterLink to="/financing/">Financing</FooterLink>
                <FooterLink to="/rebates/">Rebates</FooterLink>
                <FooterLink to="/contact-us/">Contact Us</FooterLink>
              </ul>
            </div>
          </FooterCol>

          {/* SERVICES */}
          <FooterCol title="Services">
            <div className="flex gap-10">
              <ul className="space-y-2.5">
                <FooterLink to="/services/air-conditioning/">AC Services</FooterLink>
                <FooterLink to="/services/heating/">Heating services</FooterLink>
                <FooterLink to="/services/indoor-air-quality/">Indoor Air Quality</FooterLink>
                <FooterLink to="/services/emergency-repairs/">Emergency Repair</FooterLink>
                <FooterLink to="/services/maintenance-tune-ups/">Maintanance</FooterLink>
              </ul>
              <ul className="space-y-2.5">
                <FooterLink to="/services/ductless-mini-splits/">Ductless Mini Split</FooterLink>
                <FooterLink to="/services/swamp-coolers/">Swamp Coolers</FooterLink>
                <FooterLink to="/services/water-heater-services/">Water Heater</FooterLink>
                <FooterLink to="/services/planned-maintenance/">Planned Maintanance</FooterLink>
              </ul>
            </div>
          </FooterCol>

          {/* EMAIL & SUPPORT */}
          <FooterCol title="Email &amp; Support">
            <a href={business.emailLink} className="block break-all text-sm text-white/70 hover:text-red-300">
              {business.email}
            </a>
            <p className="mt-5 mb-1.5 text-xs font-semibold uppercase tracking-wider text-white">Phone</p>
            <ul className="space-y-1.5">
              <li><a href="tel:5308784812" className="text-sm text-white/70 hover:text-red-300">(530) 878-4812</a></li>
              <li><a href="tel:5308231843" className="text-sm text-white/70 hover:text-red-300">(530) 823-1843</a></li>
              <li><a href="tel:5308784812" className="text-sm text-white/70 hover:text-red-300">(530) 878-4812</a></li>
            </ul>
            <p className="mt-5 mb-1.5 text-xs font-semibold uppercase tracking-wider text-white">Address</p>
            <ul className="space-y-3">
              <li className="text-sm leading-relaxed text-white/70">908 Evergreen Lane<br />Meadow Vista, CA 95722</li>
              <li className="text-sm leading-relaxed text-white/70">345 Sacramento St., #5,<br />Auburn, CA 95603</li>
              <li className="text-sm leading-relaxed text-white/70">9198 Greenback Ln #100<br />Orangevale, CA 95662</li>
            </ul>
          </FooterCol>

          {/* SOCIAL MEDIA */}
          <FooterCol title="Social Media">
            <ul className="space-y-2.5">
              <li>
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-red-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href={business.social.x} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-red-300">
                  X
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-xs uppercase tracking-wider text-white/40">
          ALL RIGHT RESERVE @2025
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ to, children, external }) {
  const cls = "text-sm text-white/70 hover:text-red-300";
  if (external) {
    return <li><a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a></li>;
  }
  return <li><Link to={to} className={cls}>{children}</Link></li>;
}