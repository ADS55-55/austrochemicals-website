import { notFound } from "next/navigation";
import { SERVICE_DROPDOWN, serviceSlugs } from "@/lib/nav-dropdowns";
import { DetailShell } from "@/components/marketing/DetailShell";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = SERVICE_DROPDOWN.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <DetailShell
      sectionHref="/services"
      sectionLabel="Services"
      title={item.label}
    />
  );
}
