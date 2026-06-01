"use client";

import Image from "next/image";
import { CLIENT_LOGO_IMAGE_SRCS } from "@/lib/client-logo-images";

function LogoStrip({ prefix }: { prefix: string }) {
  return (
    <>
      {CLIENT_LOGO_IMAGE_SRCS.map((src, i) => (
        <div key={`${prefix}-${i}`} className="client client--logo">
          <Image
            src={src}
            alt=""
            fill
            sizes="220px"
            className="client__logo-img"
          />
        </div>
      ))}
    </>
  );
}

/**
 * Two duplicate sequences side-by-side; CSS translates -50% for a seamless loop.
 * to-right: logos drift left → right on screen.
 * to-left: logos drift right → left on screen.
 */
function Strip({
  variant,
  durationSec,
}: {
  variant: "to-right" | "to-left";
  durationSec: number;
}) {
  return (
    <div className="clients-marquee-row">
      <div
        className={`clients-marquee-inner clients-marquee-inner--${variant}`}
        style={{
          animationDuration: `${durationSec}s`,
        }}
      >
        <div className="clients-marquee-seq">
          <LogoStrip prefix={`${variant}-a`} />
        </div>
        <div className="clients-marquee-seq" aria-hidden>
          <LogoStrip prefix={`${variant}-b`} />
        </div>
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <div className="clients-marquee-stack">
      <Strip variant="to-right" durationSec={48} />
      <Strip variant="to-left" durationSec={42} />
    </div>
  );
}
