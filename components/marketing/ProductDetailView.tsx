import Link from "next/link";
import { DetailSplitBand } from "@/components/marketing/DetailSplitBand";
import type { SplitBandFigure } from "@/components/marketing/DetailSplitBand";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { SubtleGridBackground } from "@/components/marketing/SubtleGridBackground";
import {
  PRODUCT_SHARED_HERO,
  buildProductRows,
  type ProductDetailContent,
} from "@/lib/product-detail-content";
import { Reveal } from "./Reveal";

export function ProductDetailView({ data }: { data: ProductDetailContent }) {
  const rows = buildProductRows(data);
  const hasIntro = Boolean(data.intro?.trim());
  const showLead = hasIntro || rows.length > 0;

  const sideFigures: SplitBandFigure[] =
    data.secondaryImageSrc != null && data.secondaryImageSrc !== ""
      ? [
          { src: data.imageSrc, alt: data.imageAlt },
          {
            src: data.secondaryImageSrc,
            alt: data.secondaryImageAlt ?? data.imageAlt,
          },
        ]
      : [{ src: data.imageSrc, alt: data.imageAlt }];

  let pointNum = 0;

  return (
    <>
      <section
        className="hero hero--full-video hero--about-video service-detail__hero"
        aria-labelledby="product-hero-heading"
      >
        <HeroBackgroundVideo detectedSrc={null} forcedSrc="/video/ZLD.mp4" />
        <div className="grid-bg" aria-hidden />
        <div className="hero-bg-text" aria-hidden>
          {PRODUCT_SHARED_HERO.heading}
        </div>
        <div className="hero-grid">
          <Reveal>
            <div className="hero-main hero-main--center">
              <nav
                className="service-detail__crumb service-detail__crumb--hero"
                aria-label="Breadcrumb"
              >
                <Link href="/products">Products</Link>
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
                id="product-hero-heading"
              >
                <span className="service-detail__hero-service service-detail__hero-service--product">
                  <em>{data.breadcrumbName}</em>
                </span>
              </h1>
              <p className="service-detail__hero-deck">
                {data.intro?.trim() || PRODUCT_SHARED_HERO.subtext}
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
              <span className="service-detail__section-tag">Overview</span>
              <h2
                className="service-detail__section-title"
                id="product-overview-heading"
              >
                Engineered solution details
              </h2>
            </header>
          </Reveal>

          {showLead ? (
            <DetailSplitBand
              galleryLabel="Product imagery"
              figures={sideFigures}
              lead={
                <div className="service-detail__lead-card">
                  {hasIntro ? (
                    <p className="service-detail__intro">{data.intro}</p>
                  ) : null}
                  {rows.length > 0 ? (
                    <div
                      className={
                        hasIntro
                          ? "service-detail__highlights"
                          : "service-detail__highlights service-detail__highlights--solo"
                      }
                      role="list"
                    >
                      {rows.map((row, i) => {
                        if (row.type === "sub") {
                          return (
                            <h3
                              key={`sub-${row.title}-${i}`}
                              className="service-detail__highlight-subhead"
                            >
                              {row.title}
                            </h3>
                          );
                        }
                        pointNum += 1;
                        return (
                          <div
                            key={`p-${i}-${row.text.slice(0, 24)}`}
                            className="service-detail__highlight-row"
                            role="listitem"
                          >
                            <span
                              className="service-detail__highlight-idx"
                              aria-hidden
                            >
                              {String(pointNum).padStart(2, "0")}
                            </span>
                            <p className="service-detail__highlight-text">
                              {row.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              }
            />
          ) : (
            <DetailSplitBand
              galleryLabel="Product imagery"
              figures={sideFigures}
            />
          )}

          <Reveal>
            <section
              className="service-detail__contact-cta"
              aria-labelledby="product-contact-cta-heading"
            >
              <p className="service-detail__contact-eyebrow">Next step</p>
              <h2
                className="service-detail__contact-title"
                id="product-contact-cta-heading"
              >
                For more enquiries, Contact us.
              </h2>
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
