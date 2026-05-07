import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetailView } from "@/components/marketing/IndustryDetailView";
import { getIndustryDetailContent } from "@/lib/industry-detail-content";
import { industrySlugs } from "@/lib/nav-dropdowns";

export function generateStaticParams() {
  return industrySlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getIndustryDetailContent(slug);
  if (!detail) return { title: "Industry" };
  return {
    title: `${detail.sectionTitle} — Industries — Austro Chem`,
    description: detail.intro.slice(0, 160),
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getIndustryDetailContent(slug);
  if (!detail) notFound();

  return <IndustryDetailView data={detail} />;
}
