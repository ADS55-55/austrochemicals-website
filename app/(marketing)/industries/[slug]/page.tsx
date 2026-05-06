import { notFound } from "next/navigation";
import { INDUSTRY_DROPDOWN, industrySlugs } from "@/lib/nav-dropdowns";
import { DetailShell } from "@/components/marketing/DetailShell";

export function generateStaticParams() {
  return industrySlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = INDUSTRY_DROPDOWN.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <DetailShell
      sectionHref="/industries"
      sectionLabel="Industries"
      title={item.label}
    />
  );
}
