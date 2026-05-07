import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO } from "@/lib/brand-logo";
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
          <div className="hero-brand-lockup">
            <Image
              src={BRAND_LOGO.src}
              alt="Austro Chemicals"
              width={BRAND_LOGO.width}
              height={BRAND_LOGO.height}
              className="hero-brand-logo"
              priority
            />
          </div>
          <h1 className="display hero-headline-display" id="hero-heading">
            <span className="hero-headline-line">
              Engineering{" "}
              <span className="hero-clean-water-pill">
                <em>Clean Water</em>
              </span>
            </span>
            <span className="hero-headline-line hero-headline-line--second">
              for Industrial Excellence
            </span>
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
