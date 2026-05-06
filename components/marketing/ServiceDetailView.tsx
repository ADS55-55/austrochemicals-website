import Image from "next/image";
import Link from "next/link";
import {
  SERVICE_SHARED_HERO,
  type ServiceDetailContent,
} from "@/lib/service-detail-content";
import { Reveal } from "./Reveal";

export function ServiceDetailView({ data }: { data: ServiceDetailContent }) {
  return (
    <article className="service-detail">
      <Reveal>
        <nav className="service-detail__crumb" aria-label="Breadcrumb">
          <Link href="/services">Services</Link>
          <span className="service-detail__crumb-sep" aria-hidden>
            {" "}
            ›{" "}
          </span>
          <span className="service-detail__crumb-current">
            {data.breadcrumbName}
          </span>
        </nav>
      </Reveal>

      <Reveal>
        <section
          className="service-detail__shared-hero"
          aria-labelledby="service-shared-hero-heading"
        >
          <h1
            id="service-shared-hero-heading"
            className="service-detail__shared-hero-title"
          >
            {SERVICE_SHARED_HERO.heading}
          </h1>
        </section>
      </Reveal>

      <Reveal>
        <header className="service-detail__header">
          <h2 className="service-detail__title">{data.heading}</h2>
          <p className="service-detail__intro">{data.intro}</p>
        </header>
      </Reveal>

      <Reveal>
        <ul className="service-detail__points">
          {data.keyPoints.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <div className="service-detail__gallery" role="group" aria-label="Gallery">
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
  );
}
