import React from "react";
import { isChunkLoadError, recoverFromChunkLoadError } from "@/lib/chunkRecovery";

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (isChunkLoadError(error) && recoverFromChunkLoadError()) return;
    console.error("Spoor's site render error", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    const chunkError = isChunkLoadError(this.state.error);

    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold text-[#202020]">This page needs a quick reload.</h1>
          <p className="mt-3 text-base leading-7 text-[#5c5c5c]">
            {chunkError
              ? "The site was updated while this tab was open. Reload to pull the current page files."
              : "The page hit an unexpected loading problem. Reloading should restore it."}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-md bg-[#a00000] px-5 py-3 font-semibold text-white"
          >
            Reload page
          </button>
        </div>
      </main>
    );
  }
}
