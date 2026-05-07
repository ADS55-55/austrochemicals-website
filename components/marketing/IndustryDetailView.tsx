import Link from "next/link";
import { DetailSplitBand } from "@/components/marketing/DetailSplitBand";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { SubtleGridBackground } from "@/components/marketing/SubtleGridBackground";
import {
  INDUSTRY_SHARED_HERO,
  type IndustryDetailContent,
} from "@/lib/industry-detail-content";
import { Reveal } from "./Reveal";

export function IndustryDetailView({ data }: { data: IndustryDetailContent }) {
  return (
    <>
      <section
        className="hero hero--full-video hero--about-video service-detail__hero"
        aria-labelledby="industry-hero-heading"
      >
        <HeroBackgroundVideo detectedSrc={null} forcedSrc="/video/ZLD.mp4" />
        <div className="grid-bg" aria-hidden />
        <div className="hero-bg-text" aria-hidden>
          {INDUSTRY_SHARED_HERO.heading}
        </div>
        <div className="hero-grid">
          <Reveal>
            <div className="hero-main hero-main--center">
              <nav
                className="service-detail__crumb service-detail__crumb--hero"
                aria-label="Breadcrumb"
              >
                <Link href="/industries">Industries</Link>
                <span className="service-detail__crumb-sep" aria-hidden>
                  {" "}
                  ›{" "}
                </span>
                <span className="service-detail__crumb-current">
                  {data.breadcrumbName}
                </span>
              </nav>
              <h1
                className="display service-detail__hero-title"
                id="industry-hero-heading"
              >
                <span className="service-detail__hero-line">
                  {INDUSTRY_SHARED_HERO.heading}
                </span>
                <span className="service-detail__hero-service">
                  <em>{data.breadcrumbName}</em>
                </span>
              </h1>
              <p className="service-detail__hero-deck">
                {INDUSTRY_SHARED_HERO.subtext}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="service-detail">
        <SubtleGridBackground />
        <div className="service-detail__inner">
          <Reveal>
            <header className="service-detail__section-head">
              <span className="service-detail__section-tag">{data.sectionTag}</span>
              <h2
                className="service-detail__section-title"
                id="industry-overview-heading"
              >
                {data.sectionTitle}
              </h2>
              {data.sectionSub ? (
                <p className="service-detail__section-sub">{data.sectionSub}</p>
              ) : null}
            </header>
          </Reveal>

          <DetailSplitBand
            galleryLabel="Industry imagery"
            figures={data.figures}
            lead={
              <div className="service-detail__lead-card">
                <p className="service-detail__intro">{data.intro}</p>
                <div className="service-detail__highlights" role="list">
                  {data.keyPoints.map((text, i) => (
                    <div
                      key={i}
                      className="service-detail__highlight-row"
                      role="listitem"
                    >
                      <span
                        className="service-detail__highlight-idx"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="service-detail__highlight-text">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <Reveal>
            <section
              className="service-detail__contact-cta"
              aria-labelledby="industry-contact-cta-heading"
            >
              <p className="service-detail__contact-eyebrow">Next step</p>
              <h2
                className="service-detail__contact-title"
                id="industry-contact-cta-heading"
              >
                When you&apos;re ready, let&apos;s talk.
              </h2>
              <p className="service-detail__contact-lede">
                Reach out for customized designs, case-specific consultancy, and
                other services.
              </p>
              <div className="service-detail__contact-actions">
                <Link className="service-detail__contact-btn" href="/contact">
                  <span className="service-detail__contact-btn-label">
                    Contact us
                  </span>
                  <span
                    className="service-detail__contact-btn-arrow"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </article>
    </>
  );
}
