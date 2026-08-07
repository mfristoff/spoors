import { Link } from "react-router-dom";

export default function RichArticleParagraph({ value, className }) {
  if (typeof value === "string") return <p className={className}>{value}</p>;
  return (
    <p className={className}>
      {value.segments.map((segment, index) => {
        if (typeof segment === "string") return segment;
        const classes = "font-semibold text-red-600 underline decoration-red-200 underline-offset-4 hover:text-red-700";
        return segment.external ? (
          <a key={index} href={segment.href} target="_blank" rel="noopener noreferrer" className={classes}>{segment.label}</a>
        ) : (
          <Link key={index} to={segment.to} className={classes}>{segment.label}</Link>
        );
      })}
    </p>
  );
}