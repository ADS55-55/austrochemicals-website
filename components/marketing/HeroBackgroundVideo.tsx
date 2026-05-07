"use client";

import { useCallback, useMemo, useState } from "react";

const FALLBACK_URLS = [
  "/video/hero.mp4",
  "/video/main.mp4",
  "/video/video.mp4",
  "/video/austro.mp4",
];

export function HeroBackgroundVideo({
  detectedSrc,
  forcedSrc = null,
}: {
  detectedSrc: string | null;
  /** When set, only this URL is used (e.g. page-specific hero). */
  forcedSrc?: string | null;
}) {
  const candidates = useMemo(() => {
    if (forcedSrc) return [forcedSrc];
    const order: string[] = [];
    if (detectedSrc) order.push(detectedSrc);
    for (const u of FALLBACK_URLS) {
      if (!order.includes(u)) order.push(u);
    }
    return order;
  }, [detectedSrc, forcedSrc]);

  const [index, setIndex] = useState(0);
  const onVideoError = useCallback(() => {
    setIndex((i) => i + 1);
  }, []);

  const tryVideo = index < candidates.length;
  const src = tryVideo ? candidates[index] : null;

  return (
    <div className="hero-bg-video-stack">
      {tryVideo && src ? (
        <video
          key={src}
          className="hero-bg-video-full"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Austro Chem — water treatment and plant footage"
          onError={onVideoError}
        />
      ) : (
        <div className="hero-bg-fallback" />
      )}
      <div className="hero-bg-video-shade" />
    </div>
  );
}
