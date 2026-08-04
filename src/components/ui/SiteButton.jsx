import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const variants = {
  red: "bg-red-600 text-white hover:bg-red-700",
  navy: "bg-navy-600 text-white hover:bg-navy-700",
  outline: "bg-transparent border border-current text-navy-600 hover:bg-navy-600 hover:text-white",
  outlineLight: "bg-transparent border border-white/70 text-white hover:bg-white hover:text-navy-600",
  white: "bg-white text-navy-600 hover:bg-red-50",
  ghost: "bg-transparent text-navy-600 hover:bg-neutral-bg",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "red",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className,
  disabled,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}