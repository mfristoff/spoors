import { useEffect, useRef, useState } from "react";

const MOBILE_IDLE_DELAY_MS = 350;

function connectionShouldSkipVideo() {
  const connection =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  return Boolean(
    connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g"
  );
}

// Desktop keeps the original eager behavior. Mobile normally mounts after load,
// but callers can opt into immediate mobile playback with no static fallback.
export default function DeferredHeroVideo({ src, mobileSrc, mobilePoster, mobileEager = false, mobileObjectPosition }) {
  const [viewport, setViewport] = useState(null);
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      setViewport("desktop");
      return undefined;
    }

    if (!mobileSrc) {
      return undefined;
    }

    // The home hero opts into immediate mobile video loading with no static
    // image fallback. Other uses retain the conservative deferred behavior.
    if (mobileEager) {
      setViewport("mobile");
      return undefined;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connectionShouldSkipVideo()
    ) {
      return undefined;
    }

    let delayTimer;
    let fallbackTimer;
    let idleHandle;
    let cancelled = false;

    const mountVideo = () => {
      if (!cancelled) setViewport("mobile");
    };

    const scheduleIdleMount = () => {
      delayTimer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) {
          idleHandle = window.requestIdleCallback(mountVideo, { timeout: 1400 });
        } else {
          fallbackTimer = window.setTimeout(mountVideo, 450);
        }
      }, MOBILE_IDLE_DELAY_MS);
    };

    if (document.readyState === "complete") {
      scheduleIdleMount();
    } else {
      window.addEventListener("load", scheduleIdleMount, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleIdleMount);
      window.clearTimeout(delayTimer);
      window.clearTimeout(fallbackTimer);
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
    };
  }, [mobileSrc, mobileEager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const tryPlay = () => {
      video.play().catch(() => {
        window.setTimeout(() => video.play().catch(() => {}), 200);
      });
    };

    if (video.readyState >= 1) tryPlay();
    else video.addEventListener("loadedmetadata", tryPlay, { once: true });

    return () => video.removeEventListener("loadedmetadata", tryPlay);
  }, [viewport]);

  const activeSrc = viewport === "mobile" ? mobileSrc : src;
  if (!viewport || !activeSrc) return null;

  const isMobile = viewport === "mobile";

  return (
    <video
      ref={videoRef}
      src={`${activeSrc}#t=0.1`}
      poster={isMobile ? mobilePoster : undefined}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload={isMobile && !mobileEager ? "metadata" : "auto"}
      controls={false}
      disablePictureInPicture
      controlsList="noplaybackrate nodownload nofullscreen noremoteplayback"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setMobilePlaying(true)}
      style={isMobile && mobileObjectPosition ? { objectPosition: mobileObjectPosition } : undefined}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 md:object-[center_20%] ${
        isMobile && !mobileEager && !mobilePlaying ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
