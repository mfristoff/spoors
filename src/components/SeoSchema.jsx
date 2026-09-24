import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SeoSchema() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    let idleHandle = null;
    let timer = null;

    const installSchema = async () => {
      try {
        const { buildSchemaGraph } = await import("@/lib/schemaData");
        if (cancelled) return;
        const id = "site-schema";
        let script = document.getElementById(id);
        if (!script) {
          script = document.createElement("script");
          script.id = id;
          script.type = "application/ld+json";
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(buildSchemaGraph(pathname));
      } catch {
        // Structured data enhancement must never block or break the visible site.
      }
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(installSchema, { timeout: 2200 });
    } else {
      timer = window.setTimeout(installSchema, 700);
    }

    return () => {
      cancelled = true;
      if (idleHandle && "cancelIdleCallback" in window) window.cancelIdleCallback(idleHandle);
      if (timer) window.clearTimeout(timer);
      document.getElementById("site-schema")?.remove();
    };
  }, [pathname]);

  return null;
}
