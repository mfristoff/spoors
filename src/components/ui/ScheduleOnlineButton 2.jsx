import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { business } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export default function ScheduleOnlineButton({ className }) {
  return (
    <Link
      to={business.schedulingUrl}
      className={cn("group inline-flex h-[58px] w-[217px] shrink-0 items-stretch overflow-hidden rounded-[5px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/45", className)}
    >
      <span className="flex flex-1 items-center whitespace-nowrap px-4 text-[18px] font-semibold tracking-[-0.2px] text-red-500">
        Schedule Online
      </span>
      <span className="flex w-[50px] items-center justify-center bg-red-500 transition-colors group-hover:bg-red-600">
        <ArrowDownRight className="h-6 w-6 text-white" />
      </span>
    </Link>
  );
}