import { useEffect, useRef, useState } from "react";

// Background hero video for desktop + mobile. Mobile mounts immediately for the
// homepage so there is no static hero image underneath it.
export default function DeferredHeroVideo({
  src,
  mobileSrc,
  mobileEager = false,
  mobileObjectPosition,
  mobileScale = 1,
}) {
  const [viewport, setViewport] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const setCurrentViewport = () => {
      if (media.matches) {
        setViewport("desktop");
      } else if (mobileSrc) {
        setViewport("mobile");
      } else {
        setViewport(null);
      }
    };

    setCurrentViewport();
    media.addEventListener?.("change", setCurrentViewport);

    return () => media.removeEventListener?.("change", setCurrentViewport);
  }, [mobileSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let retryTimer;

    // iOS Safari is more reliable when these properties are also set directly
    // on the DOM node before play() is requested.
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      if (document.visibilityState === "hidden") return;

      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          window.clearTimeout(retryTimer);
          retryTimer = window.setTimeout(() => {
            video.play().catch(() => {});
          }, 180);
        });
      }
    };

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    const resumeAfterInteraction = () => tryPlay();

    if (video.readyState >= 2) tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    document.addEventListener("visibilitychange", resumeWhenVisible);

    // If iOS blocks autoplay because of a device/browser state, the first user
    // interaction resumes the muted background video without showing a poster.
    window.addEventListener("touchstart", resumeAfterInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", resumeAfterInteraction, { passive: true, once: true });

    return () => {
      window.clearTimeout(retryTimer);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
      window.removeEventListener("touchstart", resumeAfterInteraction);
      window.removeEventListener("pointerdown", resumeAfterInteraction);
    };
  }, [viewport]);

  const activeSrc = viewport === "mobile" ? mobileSrc : src;
  if (!viewport || !activeSrc) return null;

  const isMobile = viewport === "mobile";
  const mobileStyle = isMobile
    ? {
        objectPosition: mobileObjectPosition || "center center",
        transform: mobileScale !== 1 ? `scale(${mobileScale})` : undefined,
      }
    : undefined;

  return (
    <video
      key={viewport}
      ref={videoRef}
      src={activeSrc}
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
      style={mobileStyle}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover md:object-[center_20%]"
    />
  );
}
