import Image from "next/image";
import Link from "next/link";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
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
        <Reveal>
          <div className="service-detail__body">
            <p className="service-detail__intro">{data.intro}</p>
            <ul className="service-detail__points">
              {data.keyPoints.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="service-detail__gallery"
            role="group"
            aria-label="Gallery"
          >
            {data.figures.map((fig, i) => (
              <figure key={fig.src} className="service-detail__gallery-item">
                <Image
                  src={fig.src}
                  alt={fig.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 699px) 100vw, (max-width: 1100px) 50vw, min(720px, 46vw)"
                  className="service-detail__gallery-img"
                  priority={i === 0}
                />
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="service-detail__cta">
            <Link className="btn-primary" href="/services">
              All services <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </article>
    </>
  );
}
