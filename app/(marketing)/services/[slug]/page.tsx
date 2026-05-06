import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/marketing/ServiceDetailView";
import { getServiceDetailContent } from "@/lib/service-detail-content";
import { serviceSlugs } from "@/lib/nav-dropdowns";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetailContent(slug);
  if (!detail) return { title: "Service" };
  return {
    title: `${detail.heading} — Services — Austro Chem`,
    description: detail.intro,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getServiceDetailContent(slug);
  if (!detail) notFound();

  return <ServiceDetailView data={detail} />;
}
