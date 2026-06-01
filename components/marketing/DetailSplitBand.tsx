import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type SplitBandFigure = { src: string; alt: string };

type DetailSplitBandProps = {
  /** Intro + bullets card — keep markup inside `.service-detail__lead-card`. Omit for imagery-only band. */
  lead?: ReactNode;
  figures: readonly SplitBandFigure[];
  galleryLabel: string;
  layout?: "side" | "stacked";
};

export function DetailSplitBand({
  lead,
  figures,
  galleryLabel,
  layout = "side",
}: DetailSplitBandProps) {
  const multi = figures.length > 1;
  const isStacked = layout === "stacked";

  if (lead == null) {
    return (
      <Reveal>
        <div
          className={`service-detail__split-band service-detail__split-band--figures-only${
            isStacked ? " service-detail__split-band--stacked" : ""
          }`}
        >
          <div
            className={
              multi
                ? "service-detail__side-gallery"
                : "service-detail__side-gallery service-detail__side-gallery--single"
            }
            role="group"
            aria-label={galleryLabel}
          >
            {figures.map((fig, i) => (
              <figure
                key={`${fig.src}-${i}`}
                className={
                  multi
                    ? "service-detail__side-gallery-item"
                    : "service-detail__side-gallery-item service-detail__side-gallery-item--solo"
                }
              >
                <Image
                  src={fig.src}
                  alt={fig.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, min(720px, 88vw)"
                  className="service-detail__side-gallery-img"
                  priority={i === 0}
                />
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div
        className={`service-detail__split-band${
          isStacked ? " service-detail__split-band--stacked" : ""
        }`}
      >
        <div className="service-detail__lead-wrap service-detail__lead-wrap--split">
          {lead}
        </div>
        <div
          className={
            multi
              ? "service-detail__side-gallery"
              : "service-detail__side-gallery service-detail__side-gallery--single"
          }
          role="group"
          aria-label={galleryLabel}
        >
          {figures.map((fig, i) => (
            <figure
              key={`${fig.src}-${i}`}
              className={
                multi
                  ? "service-detail__side-gallery-item"
                  : "service-detail__side-gallery-item service-detail__side-gallery-item--solo"
              }
            >
              <Image
                src={fig.src}
                alt={fig.alt}
                fill
                sizes="(max-width: 1023px) 100vw, min(420px, 36vw)"
                className="service-detail__side-gallery-img"
                priority={i === 0}
              />
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
