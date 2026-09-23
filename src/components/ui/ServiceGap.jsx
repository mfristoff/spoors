import React from "react";

// Renders text with a tiny gap between "r" and "v" in every occurrence of
// "service" / "Services", matching the homepage hero refinement:
//   Ser<span className="ml-[0.025em] inline-block">vice</span>
// Use for any H1 headline that contains the word "service".
export function withServiceGap(text) {
  if (typeof text !== "string" || !text) return text;
  const regex = /(ser)(vice[es]?)/gi;
  const out = [];
  let last = 0;
  let i = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <span key={`svc-gap-${i++}`} className="whitespace-nowrap">
        {m[1]}
        <span className="ml-[0.025em] inline-block">{m[2]}</span>
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
}

export default function ServiceGap({ text }) {
  return <>{withServiceGap(text)}</>;
}