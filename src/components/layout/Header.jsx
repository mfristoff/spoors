import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation, business, images } from "@/lib/siteConfig";
import AnnouncementBars from "@/components/layout/AnnouncementBars";
import MobileMenu from "@/components/layout/MobileMenu";
import { ChevronDown, Phone, Mail, Menu } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Collapse the announcement bar after scrolling down.
  // Hysteresis (collapse > 120px, expand < 20px) prevents bounce/flicker
  // when scrolling up near a single threshold.
  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const y = window.scrollY;
        if (prev) return y > 20;
        return y > 120;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publish expanded/collapsed header heights for the hero and pinned sections.
  useEffect(() => {
    const measure = () => {
      const navWrap = document.querySelector("[data-nav-wrap]");
      const collapsedH = navWrap ? Math.round(navWrap.getBoundingClientRect().height) : 0;
      const annH = window.matchMedia("(min-width: 1200px)").matches ? 66 : 102;
      document.documentElement.style.setProperty("--collapsed-header-height", `${collapsedH}px`);
      document.documentElement.style.setProperty("--expanded-header-height", `${collapsedH + annH}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <header data-site-header className="sticky top-0 z-50">
      <AnnouncementBars collapsed={scrolled} />

      <div
        data-nav-wrap
        className="relative z-50 bg-white"
        style={{
          borderBottom: "1px solid rgba(5,13,56,0.08)",
          boxShadow: "0 2px 8px rgba(5,13,56,0.035)",
        }}
      >
        {/* ── Desktop (>=1200px) ── */}
        <div className="hidden min-[1200px]:block">
          <div className="site-shell">
            <div
              className="grid items-stretch"
              style={{ gridTemplateColumns: "190px minmax(0,1fr) 280px", height: 116 }}
            >
              {/* Logo */}
              <div className="flex items-center justify-start">
                <Link to="/" aria-label={`${business.name} home`}>
                  <img
                    src={images.logo}
                    alt={business.name}
                    className="h-auto w-[176px] object-contain"
                    decoding="async"
                  />
                </Link>
              </div>

              {/* Middle: contact row + navigation row */}
              <div className="flex flex-col">
                <div
                  className="flex items-center justify-between border-b border-[#ECECEC] px-6"
                  style={{ height: 50 }}
                >
                  <div className="flex items-center gap-5 text-[13px] text-[#515151]">
                    <a href={business.phoneLink} className="inline-flex items-center gap-2 hover:text-red-600">
                      <Phone className="h-4 w-4 text-[#767676]" />
                      <span>{business.phone}</span>
                    </a>
                    <span className="block w-px bg-[#D7D7D7]" style={{ height: 16 }} />
                    <a href={business.emailLink} className="inline-flex items-center gap-2 hover:text-red-600">
                      <Mail className="h-4 w-4 text-[#767676]" />
                      <span>{business.email}</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={business.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-[#FF2929] hover:opacity-80">
                      <FacebookIcon />
                    </a>
                    <a href={business.social.x} aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-[#FF2929] hover:opacity-80">
                      <TwitterBird />
                    </a>
                  </div>
                </div>

                <nav aria-label="Primary" className="flex items-center px-6" style={{ height: 66 }}>
                  <ul className="flex items-center gap-7">
                    {navigation.map((item) => (
                      <li key={item.path} className="relative">
                        {item.children ? <DropdownNavItem item={item} /> : <SimpleNavItem item={item} />}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Call CTA — dark maroon block with bright red button */}
              <div className="flex items-center justify-center" style={{ backgroundColor: "#8b0000" }}>
                <a
                  href={business.phoneLink}
                  className="inline-flex items-center justify-center rounded-md text-[15px] font-semibold text-white"
                  style={{ backgroundColor: "#ff3333", height: 64, width: 224 }}
                >
                  Call: {business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / tablet (<1200px) ── */}
        <div
          className="grid min-[1200px]:hidden site-shell"
          style={{ height: 64, gridTemplateColumns: "120px 1fr 150px" }}
        >
          <div className="flex items-center">
            <Link to="/" aria-label={`${business.name} home`}>
              <img
                src={images.logo}
                alt={business.name}
                className="h-auto w-[104px] object-contain"
                decoding="async"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-600 hover:bg-neutral-bg"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center justify-end">
            <a
              href={business.phoneLink}
              className="inline-flex h-10 w-[130px] items-center justify-center whitespace-nowrap rounded-[8px] text-[11px] font-semibold text-white"
              style={{ backgroundColor: "#ff2d20" }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function SimpleNavItem({ item }) {
  return (
    <Link
      to={item.path}
      className="inline-flex items-center text-[15px] font-medium leading-5 text-[#404040] hover:text-red-600"
    >
      {item.label}
    </Link>
  );
}

function DropdownNavItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const show = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="static"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) hide();
      }}
    >
      <Link
        to={item.path}
        className="inline-flex items-center gap-1.5 text-[15px] font-medium leading-5 text-[#404040] hover:text-red-600"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="h-3 w-3" />
      </Link>
      {open && (
        <div className="absolute left-0 top-full z-50 w-56 overflow-hidden rounded-lg border border-border-light bg-white py-2 shadow-lg">
          {item.children.map((child) =>
            child.external ? (
              <a
                key={child.path}
                href={child.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-ink-700 hover:bg-soft-red hover:text-red-700"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.path}
                to={child.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-ink-700 hover:bg-soft-red hover:text-red-700"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.5c-.7-.1-1.5-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V14h2.4v7h3.3z" />
    </svg>
  );
}

function TwitterBird() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}