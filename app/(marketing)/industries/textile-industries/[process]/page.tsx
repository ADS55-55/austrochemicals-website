import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { Reveal } from "@/components/marketing/Reveal";
import { SubtleGridBackground } from "@/components/marketing/SubtleGridBackground";
import { INDUSTRY_SHARED_HERO } from "@/lib/industry-detail-content";
import {
  getTextileProcessContent,
  textileProcessSlugs,
} from "@/lib/textile-process-content";

type PageProps = { params: Promise<{ process: string }> };

export function generateStaticParams() {
  return textileProcessSlugs().map((process) => ({ process }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { process } = await params;
  const detail = getTextileProcessContent(process);
  if (!detail) return { title: "Textile Process" };
  return {
    title: `${detail.label} — Textile Industries — Austro Chem`,
    description: detail.description,
  };
}

export default async function TextileProcessPage({ params }: PageProps) {
  const { process } = await params;
  const detail = getTextileProcessContent(process);
  if (!detail) notFound();

  return (
    <>
      <section
        className="hero hero--full-video hero--about-video service-detail__hero"
        aria-labelledby="textile-process-hero-heading"
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
                <Link href="/industries/textile-industries">Textile Industries</Link>
                <span className="service-detail__crumb-sep" aria-hidden>
                  {" "}
                  ›{" "}
                </span>
                <span className="service-detail__crumb-current">{detail.label}</span>
              </nav>
              <h1
                className="display service-detail__hero-title"
                id="textile-process-hero-heading"
              >
                <span className="service-detail__hero-line">
                  {INDUSTRY_SHARED_HERO.heading}
                </span>
                <span className="service-detail__hero-service">
                  <em>{detail.label}</em>
                </span>
              </h1>
              <p className="service-detail__hero-deck">{detail.description}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="service-detail">
        <SubtleGridBackground />
        <div className="service-detail__inner">
          <section className="content-block industry-process-page">
            <article className="industry-process-card">
              <p className="industry-process-card__eyebrow">Technical brief</p>
              <h2>{detail.title}</h2>
              {detail.paragraphs.map((paragraph, i) => (
                <p key={`${detail.slug}-${i}`}>{paragraph}</p>
              ))}
              <div className="industry-process-card__actions">
                <Link href="/industries/textile-industries" className="btn-ghost">
                  Back to Textile Industries
                </Link>
                <Link href="/contact" className="btn-primary">
                  Talk to Engineering Desk <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          </section>
        </div>
      </article>
    </>
  );
}
