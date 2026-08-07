import React, { useState } from "react";
import { Star, Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=Spoor%27s+Heating+%26+Air+Conditioning+Auburn+CA";
const YELP_URL = "https://www.yelp.com/biz/spoors-heating-and-air-conditioning-auburn";

const BIZ = {
  name: "Spoor's Heating & Air Conditioning",
  rating: 4.9,
  reviewCount: 906,
  address: "345 Sacramento St, Ste 5, Auburn, CA 95603",
  phone: "(530) 823-1843",
  hours: "Mon–Fri 7:30 AM – 5:30 PM · Sat–Sun Closed",
  services: [
    "HVAC installation or replacement",
    "AC and furnace split system",
    "Mini split or ductless system",
    "Air ducts",
    "HVAC system maintenance",
    "HVAC system repair",
    "Water heater installation / repair",
  ],
};

const HISTOGRAM = { 5: 880, 4: 16, 3: 4, 2: 2, 1: 4 };

const CHIPS = [
  "All",
  "friendly staff 209",
  "professional tech 37",
  "courteous staff 52",
  "heater repair 11",
  "no upselling 12",
  "thorough inspection 8",
  "thorough technician 8",
  "air conditioner repair 8",
  "system replacement 9",
  "whole house fan installation 3",
];

const SOURCE_COLORS = { google: "#4285F4", yelp: "#d32323", angi: "#0a8a5f", homeadvisor: "#1a73e8" };
const SOURCE_NAMES = { google: "Google", yelp: "Yelp", angi: "Angi", homeadvisor: "HomeAdvisor" };

function chipKeyword(label) {
  return label.replace(/\s+\d+$/, "").toLowerCase();
}

function Stars({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-[#fbbc05] text-[#fbbc05]" : "fill-transparent text-[#fbbc05]/30"}
        />
      ))}
    </div>
  );
}

function SourceBadge({ source }) {
  const s = source || "google";
  const color = SOURCE_COLORS[s] || "#999";
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold leading-none"
      style={{ color, border: `1px solid ${color}33` }}
    >
      {SOURCE_NAMES[s] || s}
    </span>
  );
}

export default function GoogleReviewsModal({ open, onOpenChange, reviews, onBook }) {
  const [tab, setTab] = useState("reviews");
  const [chip, setChip] = useState("All");

  const filtered = chip === "All" ? reviews : reviews.filter((r) => r.text.toLowerCase().includes(chipKeyword(chip)));
  const histMax = Math.max(...Object.values(HISTOGRAM));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[460px] max-h-[88vh] p-0 gap-0 flex flex-col overflow-hidden">
        <DialogTitle className="sr-only">Spoor's Heating &amp; Air Customer Reviews</DialogTitle>

        {/* Header + tabs */}
        <div className="px-5 pr-12 pt-4 pb-2 border-b border-[#e8eaed]">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-[16px] font-semibold text-[#202124] leading-tight truncate">{BIZ.name}</h2>
              <p className="text-[12px] text-[#5f6368] mt-0.5">Heating &amp; Air Conditioning / HVAC</p>
            </div>
            <Link
              to="/contact-us"
              className="shrink-0 inline-flex items-center bg-[#1a73e8] hover:bg-[#1765cc] text-white text-[13px] font-medium px-3.5 py-2 rounded-full"
            >
              Book online
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-3 -mb-px">
            {["Overview", "Reviews", "About"].map((t) => (
              <button type="button"
                key={t}
                onClick={() => setTab(t.toLowerCase())}
                className={`relative pb-2 text-[14px] ${tab === t.toLowerCase() ? "text-[#1a73e8] font-medium" : "text-[#5f6368] hover:text-[#202124]"}`}
              >
                {t}
                {tab === t.toLowerCase() && (
                  <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-[#1a73e8] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-4 flex-1">
          {tab === "reviews" && (
            <>
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-[40px] leading-none font-semibold text-[#202124]">{BIZ.rating}</div>
                  <div className="flex items-center gap-1 mt-1"><Stars rating={5} size={16} /></div>
                  <div className="text-[12px] text-[#5f6368] mt-0.5">{BIZ.reviewCount} reviews</div>
                </div>
                <div className="flex-1 flex flex-col gap-1 pb-1">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="text-[11px] text-[#5f6368] w-3 text-right">{s}</span>
                      <div className="flex-1 h-[6px] rounded-full bg-[#e8eaed] overflow-hidden">
                        <div className="h-full bg-[#1a73e8]" style={{ width: `${(HISTOGRAM[s] / histMax) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full border border-[#dadce0] text-[#3c4043] text-[13px] font-medium hover:bg-[#f8f9fa]"
              >
                Write a review
              </a>

              <div className="flex items-center gap-2 mt-4 mb-2 text-[#5f6368]">
                <Search size={16} />
                <span className="text-[13px]">Sort</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CHIPS.map((c) => (
                  <button type="button"
                    key={c}
                    onClick={() => setChip(c)}
                    className={`px-3 py-1.5 rounded-full text-[12px] border ${chip === c ? "bg-[#1a73e8] text-white border-[#1a73e8]" : "bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f8f9fa]"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-5">
                {filtered.length === 0 && (
                  <p className="text-[13px] text-[#5f6368] py-6 text-center">No reviews match “{chip}”.</p>
                )}
                {filtered.map((r, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-5 border-b border-[#f1f3f4] last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full border border-[#dcdcdc] bg-[#e8e8e8] text-[#6b6b6b] flex items-center justify-center text-[13px] font-semibold">
                        {r.name.charAt(0)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[13px] font-medium text-[#202124] leading-tight">{r.name}</span>
                        <Stars rating={r.rating} size={12} />
                      </div>
                    </div>
                    <p className="text-[13px] leading-[1.5] text-[#3c4043]">“{r.text}”</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === "overview" && (
            <div className="flex flex-col gap-4 text-[13px] text-[#3c4043]">
              <div>
                <p className="text-[14px] font-medium text-[#202124] mb-1">Heating &amp; Air Conditioning / HVAC in Auburn, CA</p>
                <p>A family-owned, 4th-generation HVAC company serving the Sierra Foothills since 1979. New installation, service, repair, and ongoing maintenance for residential and commercial customers.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Address</span><span>{BIZ.address}</span></div>
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Phone</span><a href="tel:+15308231843" className="text-[#1a73e8]">{BIZ.phone}</a></div>
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Hours</span><span>{BIZ.hours}</span></div>
              </div>
              <Link to="/contact-us" className="self-start inline-flex items-center bg-[#1a73e8] text-white text-[13px] font-medium px-4 py-2 rounded-full">Book online</Link>
            </div>
          )}

          {tab === "about" && (
            <div className="flex flex-col gap-4 text-[13px] text-[#3c4043]">
              <div>
                <p className="text-[14px] font-medium text-[#202124] mb-2">Services offered</p>
                <ul className="flex flex-col gap-1.5">
                  {BIZ.services.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Hours</span><span>{BIZ.hours}</span></div>
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Phone</span><a href="tel:+15308231843" className="text-[#1a73e8]">{BIZ.phone}</a></div>
                <div className="flex items-start gap-2"><span className="font-medium text-[#202124] w-20">Address</span><span>{BIZ.address}</span></div>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#202124] mb-1">From the owner</p>
                <p>“We are a 4th generation family-run HVAC company located in Placer County, CA. We provide new installation, service, repair, and ongoing system maintenance — operating with you in mind.”</p>
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-3 border-t border-[#e8eaed] bg-[#f8f9fa] flex items-center justify-center">
          <button type="button"
            onClick={onBook}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1a73e8] hover:underline"
          >
            Book Online <ArrowUpRight size={13} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}