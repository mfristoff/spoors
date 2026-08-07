import { Link } from "react-router-dom";
import { business, images } from "@/lib/siteConfig";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label={`${business.name} home`}>
      <img
        src={images.logo}
        alt={`${business.name} — We Are In The Business Of Caring For People!`}
        className="h-16 w-auto object-contain md:h-[72px]"
        decoding="async"
      />
    </Link>
  );
}