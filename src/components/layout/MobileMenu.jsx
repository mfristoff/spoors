import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation, business } from "@/lib/siteConfig";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ChevronDown, Phone, X } from "lucide-react";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={"fixed inset-0 z-[60] md:hidden " + (open ? "" : "pointer-events-none")}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={"absolute inset-0 bg-navy-600/60 transition-opacity duration-200 " + (open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={
          "absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-200 " +
          (open ? "translate-x-0" : "translate-x-full")
        }
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-600 hover:bg-neutral-bg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Compact announcement bars */}
        <div className="bg-navy-700 px-5 py-2 text-sm text-white">
          {business.emergencyNote}:{" "}
          <a href={business.phoneLink} className="font-semibold text-red-200">
            {business.phone}
          </a>
        </div>
        <div className="bg-navy-600 px-5 py-2 text-sm text-white/90">
          Get a fair estimate from Auburn's trusted HVAC experts.
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.children ? (
                  <MobileAccordion item={item} />
                ) : (
                  <Link
                    to={item.path}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-ink-800 hover:bg-soft-red hover:text-red-700"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border-light p-4">
          <Button href={business.phoneLink} variant="red" size="lg" className="w-full">
            <Phone className="mr-2 h-5 w-5" /> {business.phone}
          </Button>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-ink-800 hover:bg-soft-red hover:text-red-700"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={"h-5 w-5 text-ink-400 transition-transform " + (open ? "rotate-180" : "")} />
      </button>
      {open && (
        <div className="ml-3 border-l border-border-light pl-3">
          <Link
            to={item.path}
            className="block rounded-md px-3 py-2.5 text-sm text-ink-600 hover:bg-soft-red hover:text-red-700"
          >
            All {item.label}
          </Link>
          {item.children.map((child) =>
            child.external ? (
              <a
                key={child.path}
                href={child.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2.5 text-sm text-ink-600 hover:bg-soft-red hover:text-red-700"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.path}
                to={child.path}
                className="block rounded-md px-3 py-2.5 text-sm text-ink-600 hover:bg-soft-red hover:text-red-700"
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