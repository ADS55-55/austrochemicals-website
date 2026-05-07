import Link from "next/link";
import { getHeroVideoPublicPath } from "@/lib/hero-video";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

export function HomeHero() {
  const detectedVideo = getHeroVideoPublicPath();

  return (
    <section className="hero hero--full-video" aria-labelledby="hero-heading">
      <HeroBackgroundVideo detectedSrc={detectedVideo} />
      <div className="grid-bg" aria-hidden />
      <div className="hero-bg-text" aria-hidden>
        Austro
      </div>
      <div className="hero-grid">
        <div className="hero-main hero-main--center">
          <span className="eyebrow eyebrow--pill">Austrochemicals</span>
          <h1 className="display" id="hero-heading">
            Engineering <em>cleaner</em> water for industry.
          </h1>
          <p className="hero-sub">
            Design, build and operate zero-liquid-discharge, effluent and
            process-water systems for textile, pharma, chemical and refinery
            clients across 10 countries.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/products">
              Explore Solutions <span className="arrow">→</span>
            </Link>
            <Link className="btn-ghost" href="/contact">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
