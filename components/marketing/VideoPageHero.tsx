import type { ReactNode } from "react";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { Reveal } from "@/components/marketing/Reveal";

type VideoPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  bgText?: string;
  id?: string;
};

export function VideoPageHero({
  eyebrow,
  title,
  description,
  bgText,
  id = "page-hero-heading",
}: VideoPageHeroProps) {
  return (
    <section
      className="hero hero--full-video hero--about-video service-detail__hero"
      aria-labelledby={id}
    >
      <HeroBackgroundVideo detectedSrc={null} forcedSrc="/video/ZLD.mp4" />
      <div className="grid-bg" aria-hidden />
      <div className="hero-bg-text" aria-hidden>
        {bgText ?? eyebrow}
      </div>
      <div className="hero-grid">
        <Reveal>
          <div className="hero-main hero-main--center">
            <span className="eyebrow eyebrow--pill">{eyebrow}</span>
            <h1 className="display" id={id}>
              {title}
            </h1>
            {description ? <p className="service-detail__hero-deck">{description}</p> : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
