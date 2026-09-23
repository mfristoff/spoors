import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  children,
  align = "left",
  light = false,
  className,
}) {
  return (
    <div className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "", className)}>
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-wider",
            light ? "text-red-300" : "text-red-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "t-h2",
          light ? "text-white" : "text-ink-950"
        )}
      >
        {title}{" "}
        {highlight && <span className="text-red-highlight">{highlight}</span>}
      </h2>
      {children && (
        <div className={cn("mt-4 t-body-lg", light ? "text-white/80" : "text-ink-600")}>
          {children}
        </div>
      )}
    </div>
  );
}