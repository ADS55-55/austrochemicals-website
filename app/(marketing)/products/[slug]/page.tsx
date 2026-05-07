import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/marketing/ProductDetailView";
import {
  getProductDetailContent,
  PRODUCT_SHARED_HERO,
} from "@/lib/product-detail-content";
import { productSlugs } from "@/lib/nav-dropdowns";

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProductDetailContent(slug);
  if (!detail) return { title: "Product" };
  return {
    title: `${detail.pageTitle} — Products — Austro Chem`,
    description: detail.intro?.trim() || PRODUCT_SHARED_HERO.subtext,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getProductDetailContent(slug);
  if (!detail) notFound();

  return <ProductDetailView data={detail} />;
}
