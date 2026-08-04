import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildSchemaGraph } from "@/lib/schemaData";

export default function SeoSchema() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = "site-schema";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildSchemaGraph(pathname));
    return () => script.remove();
  }, [pathname]);

  return null;
}