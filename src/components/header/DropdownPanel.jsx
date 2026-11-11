import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./SpoorsNativeDropdown.css";

/**
 * Desktop dropdowns are rendered once. CSS handles hover/focus instantly,
 * without React state changes or Framer Motion on pointer movement.
 * Mobile navigation remains in NewHeader.
 */
export default function DropdownPanel({ item }) {
  const children = item.children || [];
  const cols = children.length >= 12 ? 3 : children.length >= 5 ? 2 : 1;
  const width = cols === 3 ? "660px" : cols === 2 ? "510px" : "250px";
  const id = "spoors-nav-" + item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const updateExpanded = (event, expanded) => {
    const trigger = event.currentTarget.querySelector("[data-spoors-trigger]");
    if (trigger) trigger.setAttribute("aria-expanded", String(expanded));
  };

  return (
    <div
      className="spoors-native-nav"
      data-spoors-menu={item.path}
      onMouseEnter={(event) => updateExpanded(event, true)}
      onMouseLeave={(event) => updateExpanded(event, false)}
      onFocusCapture={(event) => updateExpanded(event, true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          updateExpanded(event, false);
        }
      }}
    >
      <Link
        to={item.path}
        className="spoors-native-trigger"
        data-spoors-trigger="true"
        aria-haspopup="true"
        aria-controls={id}
        aria-expanded={false}
      >
        {item.label}
        <ChevronDown className="spoors-native-chevron" aria-hidden="true" />
      </Link>
      <div
        id={id}
        className="spoors-native-panel"
        role="group"
        aria-label={item.label + " submenu"}
        style={{
          "--spoors-menu-cols": String(cols),
          "--spoors-menu-width": width,
        }}
      >
        <div className="spoors-native-surface">
          <div className="spoors-native-grid">
            {children.map((child) => {
              const inner = (
                <span className="spoors-native-link-inner">
                  <span className="spoors-native-link-label">{child.label}</span>
                  <span className="spoors-native-arrow" aria-hidden="true">
                    {child.external ? "↗" : "›"}
                  </span>
                </span>
              );
              return child.external ? (
                <a
                  key={child.path}
                  href={child.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spoors-native-link"
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={child.path}
                  to={child.path}
                  className="spoors-native-link"
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
