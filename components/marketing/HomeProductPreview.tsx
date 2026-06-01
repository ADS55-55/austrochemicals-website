import Image from "next/image";
import Link from "next/link";
import { PRODUCT_DROPDOWN } from "@/lib/nav-dropdowns";
import { getProductDetailContent } from "@/lib/product-detail-content";

const FEATURED_PRODUCTS = PRODUCT_DROPDOWN.slice(0, 8);

export function HomeProductPreview() {
  return (
    <section
      className="canvas product-preview-section"
      id="products-preview"
      aria-labelledby="products-preview-heading"
    >
      <div className="product-preview-wrap">
        <div className="product-preview-head">
          <div>
            <span className="section-tag">03 — Products</span>
            <h2 className="section-title" id="products-preview-heading">
              Built for plants that can&apos;t afford <em>downtime</em> or drift
            </h2>
            <p className="section-sub product-preview-sub">
              A curated set of high-demand treatment systems engineered for reliable
              output, compliance, and long operating life.
            </p>
          </div>
        </div>

        <div
          className="product-preview-grid product-preview-grid--static"
          role="list"
          aria-label="Featured products"
        >
          {FEATURED_PRODUCTS.map((item) => {
            const detail = getProductDetailContent(item.slug);
            const src = detail?.imageSrc ?? "/products/zld.jpg";
            const catalogIndex = PRODUCT_DROPDOWN.findIndex((p) => p.slug === item.slug);

            return (
              <Link
                key={item.slug}
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
                    P / {String(catalogIndex >= 0 ? catalogIndex + 1 : 0).padStart(2, "0")}
                  </span>
                </div>
                <div className="product-preview-card__body">
                  <h3 className="product-preview-card__title">{item.label}</h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="product-preview-actions">
          <Link href="/products" className="btn-primary product-preview-explore">
            View More Products <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
