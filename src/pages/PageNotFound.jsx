import { Link } from "react-router-dom";
import { useSeo } from "@/lib/useSeo";
import Button from "@/components/ui/Button";
import { business } from "@/lib/siteConfig";
import { Home, Phone } from "lucide-react";

export default function PageNotFound() {
  useSeo({
    title: "Page Not Found",
    description: "The page you're looking for could not be found.",
    path: "/404",
  });

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-xl px-5 text-center">
        <p className="t-h1 text-red-600">404</p>
        <h1 className="mt-2 t-h3 text-ink-950">Page Not Found</h1>
        <p className="mt-4 text-ink-600 t-body">
          We couldn't find the page you were looking for. It may have been moved or no longer
          exists.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" variant="red">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </Button>
          <Button href={business.phoneLink} variant="outline">
            <Phone className="mr-2 h-5 w-5" /> {business.phone}
          </Button>
        </div>
        <div className="mt-8">
          <Link to="/services/" className="text-sm font-semibold text-red-600 hover:underline">
            Browse our services
          </Link>
        </div>
      </div>
    </section>
  );
}