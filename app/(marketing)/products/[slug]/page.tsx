import { notFound } from "next/navigation";
import { PRODUCT_DROPDOWN, productSlugs } from "@/lib/nav-dropdowns";
import { DetailShell } from "@/components/marketing/DetailShell";

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = PRODUCT_DROPDOWN.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <DetailShell
      sectionHref="/products"
      sectionLabel="Products"
      title={item.label}
    />
  );
}
