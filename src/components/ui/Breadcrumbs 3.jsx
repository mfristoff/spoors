import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { setBreadcrumbSchema } from "@/lib/useSeo";

export default function Breadcrumbs({ items }) {
  setBreadcrumbSchema(items);
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        <li>
          <Link to="/" className="inline-flex items-center hover:text-red-600">
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-ink-300" />
            {i === items.length - 1 ? (
              <span className="font-medium text-ink-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-red-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}