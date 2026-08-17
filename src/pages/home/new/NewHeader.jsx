import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, business, images } from "@/lib/siteConfig";
import { Phone, Mail, X } from "lucide-react";
import DropdownPanel from "@/components/header/DropdownPanel";
import SwipeableTopBar from "@/components/header/SwipeableTopBar";
import { preloadRouteAssets, warmPrimaryRoutes } from "@/lib/routePreload";

const menuItem = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

// Mobile order: Services, About, Resources, Financing, Rebates, Service Areas, Contact
const mobileNavigation = [
  "Services",
  "About",
  "Resources",
  "Financing",
  "Rebates",
  "Service Areas",
  "Contact",
].map((label) => navigation.find((i) => i.label === label)).filter(Boolean);

export default function NewHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => warmPrimaryRoutes(), []);

  useEffect(() => {
    const wrap = document.querySelector("[data-new-nav-wrap]");
    const header = wrap?.closest("header");

    const measure = () => {
      const h = wrap ? Math.round(wrap.getBoundingClientRect().height) : 154;
      const fullHeaderHeight = header ? Math.round(header.getBoundingClientRect().height) : h + 66;
      document.documentElement.style.setProperty("--collapsed-header-height", `${h}px`);
      document.documentElement.style.setProperty("--expanded-header-height", `${h + 66}px`);
      document.documentElement.style.setProperty("--sticky-header-height", `${fullHeaderHeight}px`);
    };

    measure();
    window.addEventListener("resize", measure);

    const observer = typeof ResizeObserver !== "undefined" && header
      ? new ResizeObserver(measure)
      : null;
    if (observer && header) observer.observe(header);

    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top announcement bar — swipeable carousel on mobile */}
      <SwipeableTopBar />

      {/* Main nav */}
      <div data-new-nav-wrap className="w-full border-b border-[#e0e0e0] bg-white">
        <div className="nav-row-aligned mx-auto flex flex-col items-stretch lg:flex-row">
          {/* Logo */}
          <div className="flex h-[72px] w-full items-center justify-between border-b border-[#e0e0e0] px-5 lg:h-auto lg:max-w-[260px] lg:min-h-[154px] lg:flex-col lg:items-center lg:justify-center lg:border-b-0 lg:border-l lg:border-r lg:border-[#e0e0e0] lg:px-[40.5px] lg:py-[32.77px]">
            <Link to="/" onMouseEnter={() => preloadRouteAssets("/")} onFocus={() => preloadRouteAssets("/")} onPointerDown={() => preloadRouteAssets("/")}>
              <img src={images.logo} alt={business.name} className="h-[52px] w-auto object-contain lg:h-[88px] lg:scale-[1.20]" decoding="async" />
            </Link>
            {/* Mobile toggle — right side, vertically centered with the logo */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex flex-col gap-[5px] p-2 lg:hidden"
            >
              <span className="block h-[2.5px] w-7 rounded-full bg-[#0c1228]" />
              <span className="block h-[2.5px] w-7 rounded-full bg-[#0c1228]" />
              <span className="block h-[2.5px] w-7 rounded-full bg-[#0c1228]" />
            </button>
          </div>

          {/* Nav content */}
          <div className="flex flex-1 flex-col">
            {/* Contact row */}
            <div className="hidden min-h-[77px] items-center justify-between gap-6 border-b border-[#ececec] px-6 lg:flex">
              <div className="flex items-center gap-6">
                <a href={business.phoneLink} className="inline-flex items-center gap-2 text-[#242424] hover:text-red-600">
                  <Phone className="h-4 w-4 text-[#767676]" />
                  <span className="text-[16px]">{business.phone}</span>
                </a>
                <span className="block h-4 w-px bg-[#d7d7d7]" />
                <a href={business.emailLink} className="inline-flex items-center gap-2 text-[#242424] hover:text-red-600">
                  <Mail className="h-4 w-4 text-[#767676]" />
                  <span className="text-[16px]">{business.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:opacity-80" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.5c-.7-.1-1.5-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V14h2.4v7h3.3z" /></svg>
                </a>
                <a href={business.social.x} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:opacity-80" aria-label="X">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                </a>
              </div>
            </div>

            {/* Links row */}
            <nav className="hidden min-h-[77px] items-center justify-between gap-8 px-6 lg:flex lg:justify-start">
              <ul className="hidden items-center gap-6 lg:flex">
                {navigation.map((item) => (
                  <li key={item.path} className="relative">
                    {item.children ? <DropdownPanel item={item} /> : <SimpleNavItem item={item} />}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA */}
          <div className="hidden min-h-[154px] w-[310px] flex-col items-center justify-center bg-[#6e0000] px-6 lg:flex">
            <a
              href={business.phoneLink}
              className="inline-flex h-[69px] w-[244px] items-center justify-center whitespace-nowrap rounded-[9px] bg-[#FF2828] px-5 py-5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
            >
              Call: {business.phone}
            </a>
          </div>
        </div>

        {/* Mobile menu — full-screen slide-in from the right */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-[70] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-[#0c1228] lg:hidden"
            >
              {/* Top row: logo + close */}
              <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/10 px-5">
                <img src="https://media.base44.com/images/public/6a67dcda4fda68f69980f519/d37140e8f_Spoors-Mobile-Logo-2.png" alt={business.name} className="h-[52px] w-auto object-contain" decoding="async" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center p-1 text-white/65 transition-colors hover:text-white"
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Menu content */}
              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0, delayChildren: 0.08 } },
                }}
                initial="hidden"
                animate="visible"
                className="safe-bottom flex flex-1 flex-col px-5 pb-10 pt-14"
              >
                <motion.p variants={menuItem} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-500">Main Menu</motion.p>
                <motion.h2 variants={menuItem} className="mt-2 font-heading text-[clamp(32px,9vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">Where to next?</motion.h2>

                <nav className="mt-8 flex flex-col">
                  {mobileNavigation.map((item) => (
                    <motion.div key={item.path} variants={menuItem} className="border-b border-white/10">
                      <Link to={item.path} onPointerDown={() => preloadRouteAssets(item.path)} onFocus={() => preloadRouteAssets(item.path)} onClick={() => setMobileOpen(false)} className="block py-4 text-[clamp(22px,5.5vw,30px)] font-semibold text-white">
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="flex flex-col gap-0.5 pb-4">
                          {item.children.map((c) =>
                            c.external ? (
                              <a key={c.path} href={c.path} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="py-2 text-[17px] text-white/60 hover:text-white">
                                {c.label}
                              </a>
                            ) : (
                              <Link key={c.path} to={c.path} onPointerDown={() => preloadRouteAssets(c.path)} onFocus={() => preloadRouteAssets(c.path)} onClick={() => setMobileOpen(false)} className="py-2 text-[17px] text-white/60 hover:text-white">
                                {c.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div variants={menuItem} className="mt-auto pt-10">
                  <a href={business.phoneLink} onClick={() => setMobileOpen(false)} className="inline-flex w-full items-center justify-center rounded-[9px] bg-red-600 px-6 py-5 text-[18px] font-semibold text-white transition-colors hover:bg-red-700">
                    Call {business.phone}
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function SimpleNavItem({ item }) {
  return (
    <Link
      to={item.path}
      onMouseEnter={() => preloadRouteAssets(item.path)}
      onFocus={() => preloadRouteAssets(item.path)}
      onPointerDown={() => preloadRouteAssets(item.path)}
      className="inline-flex items-center text-[16px] font-medium text-[#242424] hover:text-red-600"
    >
      {item.label}
    </Link>
  );
}