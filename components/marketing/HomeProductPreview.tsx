"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { PRODUCT_DROPDOWN } from "@/lib/nav-dropdowns";
import { OPEN_PRODUCTS_NAV_EVENT } from "@/lib/nav-events";
import { getProductDetailContent } from "@/lib/product-detail-content";

/** First 16 catalogue lines — grid shows 4 at a time, full set rotates every 5s */
const ROTATING_PRODUCTS = PRODUCT_DROPDOWN.slice(0, 16);
const CARDS_PER_VIEW = 4;
const PAGE_COUNT = ROTATING_PRODUCTS.length / CARDS_PER_VIEW;
const ROTATION_MS = 5000;

export function HomeProductPreview() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  const sliceStart = page * CARDS_PER_VIEW;
  const visible = ROTATING_PRODUCTS.slice(sliceStart, sliceStart + CARDS_PER_VIEW);

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
            <span className="section-tag">03 — Products</span>
            <h2 className="section-title" id="products-preview-heading">
              Built for plants that can&apos;t afford <em>downtime</em> or drift.
            </h2>
          </div>
        </Reveal>

        <div
          key={page}
          className="product-preview-grid product-preview-grid--cycle"
          role="list"
          aria-label={`Products ${sliceStart + 1}–${sliceStart + visible.length} of ${ROTATING_PRODUCTS.length}`}
        >
          {visible.map((item) => {
            const detail = getProductDetailContent(item.slug);
            const src = detail?.imageSrc ?? "/products/zld.jpg";
            const catalogIndex = PRODUCT_DROPDOWN.findIndex((p) => p.slug === item.slug);

            return (
              <Link
                key={`${page}-${item.slug}`}
                href={`/products/${item.slug}`}
                className="product-preview-card"
                role="listitem"
              >
                <div className="product-preview-card__media">
                  <Image
                    src={src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1199px) 50vw, 25vw"
                    className="product-preview-card__img"
                  />
                  <div className="product-preview-card__media-overlay" aria-hidden />
                  <span className="product-preview-card__badge">
                    P /{" "}
                    {String(catalogIndex >= 0 ? catalogIndex + 1 : 0).padStart(2, "0")}
                  </span>
                </div>
                <div className="product-preview-card__body">
                  <h3 className="product-preview-card__title">{item.label}</h3>
                </div>
              </Link>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
