import Image from "next/image";
import Link from "next/link";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { SubtleGridBackground } from "@/components/marketing/SubtleGridBackground";
import type { ServiceDetailContent } from "@/lib/service-detail-content";
import { Reveal } from "./Reveal";

export function ServiceDetailView({ data }: { data: ServiceDetailContent }) {
  return (
    <>
      <section
        className="hero hero--full-video hero--about-video service-detail__hero"
        aria-labelledby="service-hero-heading"
      >
        <HeroBackgroundVideo detectedSrc={null} forcedSrc="/video/ZLD.mp4" />
        <div className="grid-bg" aria-hidden />
        <div className="hero-bg-text" aria-hidden>
          Services
        </div>
        <div className="hero-grid">
          <Reveal>
            <div className="hero-main hero-main--center">
              <nav
                className="service-detail__crumb service-detail__crumb--hero"
                aria-label="Breadcrumb"
              >
                <Link href="/services">Services</Link>
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
                id="service-hero-heading"
              >
                <span className="service-detail__hero-line">Services</span>
                <span className="service-detail__hero-service">
                  <em>{data.heading}</em>
                </span>
              </h1>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="service-detail">
        <SubtleGridBackground />
        <div className="service-detail__inner">
          <Reveal>
            <header className="service-detail__section-head">
              <span className="service-detail__section-tag">Overview</span>
              <h2
                className="service-detail__section-title"
                id="service-overview-heading"
              >
                Scope &amp; capabilities
              </h2>
              <p className="service-detail__section-sub">
                How we approach{" "}
                <span className="service-detail__section-service">
                  {data.heading}
                </span>{" "}
                for your plant.
              </p>
            </header>
          </Reveal>

          <Reveal>
            <div className="service-detail__lead-card">
              <p className="service-detail__intro">{data.intro}</p>
              <div className="service-detail__highlights" role="list">
                {data.keyPoints.map((text, i) => (
                  <p
                    key={i}
                    className="service-detail__highlight"
                    role="listitem"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="service-detail__gallery service-detail__gallery--row"
              role="group"
              aria-label="Project imagery"
            >
              {data.figures.map((fig, i) => (
                <figure key={fig.src} className="service-detail__gallery-item">
                  <Image
                    src={fig.src}
                    alt={fig.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="service-detail__gallery-img"
                    priority={i === 0}
                  />
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <section
              className="service-detail__contact-cta"
              aria-labelledby="service-contact-cta-heading"
            >
              <p className="service-detail__contact-eyebrow">Next step</p>
              <h2
                className="service-detail__contact-title"
                id="service-contact-cta-heading"
              >
                When you&apos;re ready, let&apos;s talk.
              </h2>
              <p className="service-detail__contact-lede">
                Share your scope, discharge matrix, and timelines. Our team
                will respond with clear options aligned to your plant goals.
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
