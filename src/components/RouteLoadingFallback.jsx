export default function RouteLoadingFallback() {
  return (
    <div
      className="flex min-h-[38vh] w-full items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-[#ececec] border-t-[#a00000]" />
    </div>
  );
}
