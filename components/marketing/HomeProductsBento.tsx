import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Droplets, Factory, Filter, Flame, Gauge, Layers, Leaf, LayoutGrid, Microscope, Package, Pipette, Sparkles, Waves, Wind, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { PRODUCT_DROPDOWN } from "@/lib/nav-dropdowns";
import { getProductDetailContent } from "@/lib/product-detail-content";

const ICONS: LucideIcon[] = [
  Droplets,
  Factory,
  Waves,
  Filter,
  Layers,
  Microscope,
  Pipette,
  Wrench,
  LayoutGrid,
  Sparkles,
  Package,
  Gauge,
  Wind,
  Zap,
  Leaf,
  Flame,
  Box,
];

function teaserFromIntro(intro: string | undefined): string {
  if (!intro?.trim()) return "Specifications, applications, and engineering notes.";
  const t = intro.trim();
  if (t.length <= 110) return t;
  return `${t.slice(0, 107).trim()}…`;
}

/** Home preview: five tiles only */
const PREVIEW_COUNT = 5;

function bentoItemClass(i: number): string {
  /* Five-tile layout: hero + wide accent */
  if (i === 0) return "md:col-span-2 md:row-span-2";
  if (i === 3) return "md:col-span-2";
  return "";
}

function headerHeightClass(i: number): string {
  if (i === 0)
    return "min-h-[12rem] shrink-0 md:min-h-[14rem] md:flex-1 md:basis-0";
  return "min-h-[7.5rem] shrink-0 md:min-h-[8.25rem]";
}

export function HomeProductsBento() {
  const preview = PRODUCT_DROPDOWN.slice(0, PREVIEW_COUNT);

  return (
    <div className="mx-auto max-w-6xl space-y-8 md:space-y-10">
      <BentoGrid>
        {preview.map((product, i) => {
          const detail = getProductDetailContent(product.slug);
          const src = detail?.imageSrc ?? "/products/zld.jpg";
          const Icon = ICONS[i % ICONS.length];
          const catalogIndex = PRODUCT_DROPDOWN.findIndex(
            (p) => p.slug === product.slug,
          );

          return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className={cn(
                "block h-full min-h-0 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(30,84,224,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]",
                bentoItemClass(i),
              )}
            >
              <BentoGridItem
                className="h-full border-slate-200/80 bg-white"
                title={product.label}
                description={teaserFromIntro(detail?.intro)}
                icon={<Icon className="h-4 w-4" aria-hidden strokeWidth={2} />}
                header={
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-slate-100",
                      headerHeightClass(i),
                    )}
                  >
                    <Image
                      src={src}
                      alt={product.label}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-500 ease-out group-hover/bento:scale-[1.03]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur-sm">
                      P / {String(catalogIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                }
              />
            </Link>
          );
        })}
      </BentoGrid>

      <div className="flex flex-col items-center gap-3 text-center">
        <Link
          href="/products"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(30,84,224,0.22)] bg-gradient-to-br from-white to-slate-50 px-8 py-3.5 text-sm font-semibold tracking-tight text-[var(--blue)] shadow-[0_12px_40px_-24px_rgba(20,49,110,0.18)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(30,84,224,0.35)] hover:shadow-[0_18px_48px_-28px_rgba(30,84,224,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(30,84,224,0.45)]",
          )}
        >
          Explore more products
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
