import { cn } from "@/lib/utils";

export default function Container({ children, className, narrow }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}