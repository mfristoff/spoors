import { Suspense } from "react";

// v66: mount sections immediately so content and images do not visibly pop in
// as the visitor scrolls. Suspense still provides a stable fallback if a split
// chunk has not finished downloading yet.
export default function LazySection({ children, minHeight = 600 }) {
  return <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>;
}
