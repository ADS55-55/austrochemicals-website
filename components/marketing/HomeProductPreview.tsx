"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { PRODUCT_DROPDOWN } from "@/lib/nav-dropdowns";
import { OPEN_PRODUCTS_NAV_EVENT } from "@/lib/nav-events";
import { getProductDetailContent } from "@/lib/product-detail-content";

const FEATURED_SLUGS = [
  "zero-liquid-discharge",
  "effluent-treatment-plant",
  "reverse-osmosis",
  "membrane-bio-reactor",
] as const;

function teaserFromIntro(intro: string | undefined): string {
  if (!intro?.trim()) return "Specifications, applications, and engineering notes.";
  const t = intro.trim();
  if (t.length <= 118) return t;
  return `${t.slice(0, 115).trim()}…`;
}

export function HomeProductPreview() {
  const openProductsNav = () => {
    window.dispatchEvent(new CustomEvent(OPEN_PRODUCTS_NAV_EVENT));
  };

  return (
    <section
      className="canvas alt"
      id="products-preview"
      aria-labelledby="products-preview-heading"
    >
      <div className="product-preview-wrap">
        <Reveal>
          <div className="product-preview-head">
            <span className="section-tag">03 — Flagship systems</span>
            <h2 className="section-title" id="products-preview-heading">
              Built for plants that can&apos;t afford <em>downtime</em> or drift.
            </h2>
            <p className="section-sub product-preview-deck">
              From zero-liquid discharge to membrane polish — explore how each line is
              engineered for recovery, compliance, and decades of operation.
            </p>
          </div>
        </Reveal>

        <div className="product-preview-grid">
          {FEATURED_SLUGS.map((slug, i) => {
            const detail = getProductDetailContent(slug);
            const meta = PRODUCT_DROPDOWN.find((p) => p.slug === slug);
            const title = meta?.label ?? detail?.breadcrumbName ?? slug;
            const src = detail?.imageSrc ?? "/products/zld.jpg";
            const catalogIndex = PRODUCT_DROPDOWN.findIndex((p) => p.slug === slug);

            return (
              <Reveal key={slug}>
                <Link
                  href={`/products/${slug}`}
                  className="product-preview-card"
                >
                  <div className="product-preview-card__media">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1199px) 50vw, 25vw"
                      className="product-preview-card__img"
                    />
                    <div className="product-preview-card__media-overlay" aria-hidden />
                    <span className="product-preview-card__badge">
                      P / {String(catalogIndex >= 0 ? catalogIndex + 1 : i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="product-preview-card__body">
                    <h3 className="product-preview-card__title">{title}</h3>
                    <p className="product-preview-card__teaser">
                      {teaserFromIntro(detail?.intro)}
                    </p>
                    <span className="product-preview-card__cta">
                      View system <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="product-preview-actions">
            <button
              type="button"
              className="btn-primary product-preview-explore"
              onClick={openProductsNav}
            >
              Explore more products <span className="arrow">→</span>
            </button>
            <p className="product-preview-hint">
              Opens the Products menu — pick any line to jump straight to its page.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
