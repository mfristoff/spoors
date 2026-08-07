import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NewHeader from "@/pages/home/new/NewHeader";
import NewFooter from "@/pages/home/new/NewFooter";
import FooterCTANew from "@/pages/home/new/FooterCTANew";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";

// Shared layout wrapping every public page: header + main + footer.
export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <NewHeader />
      <main id="main" className="flex-1">
        <Suspense fallback={<RouteLoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <FooterCTANew />
      <NewFooter />
    </div>
  );
}