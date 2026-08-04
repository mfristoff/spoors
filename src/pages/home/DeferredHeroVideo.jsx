import { useEffect, useRef, useState } from "react";

// Desktop-only hero video. It mounts immediately (no idle deferral) and
// preloads eagerly so the video itself is the first thing painted — there is no
// poster/placeholder layer behind it on desktop.
export default function DeferredHeroVideo({ src }) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) setReady(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force Safari to honor autoplay by calling .play() directly after mount.
    const tryPlay = () => {
      video.play().catch(() => {
        setTimeout(() => video.play().catch(() => {}), 200);
      });
    };

    if (video.readyState >= 1) tryPlay();
    else video.addEventListener("loadedmetadata", tryPlay, { once: true });

    return () => video.removeEventListener("loadedmetadata", tryPlay);
  }, [ready]);

  if (!ready) return null;

  return (
    <video
      ref={videoRef}
      src={`${src}#t=0.1`}
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline="true"
      preload="auto"
      controls={false}
      disablePictureInPicture
      controlsList="noplaybackrate nodownload nofullscreen noremoteplayback"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center md:object-[center_20%]"
    />
  );
}