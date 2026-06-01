"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Droplets,
  Gauge,
  LayoutGrid,
  Shirt,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const achievements: {
  area: string;
  icon: LucideIcon;
  title: string;
  description: ReactNode;
}[] = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: Droplets,
    title: "25+",
    description: "Wastewater treatment types",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: Shirt,
    title: "550+",
    description: "Textiles ZLD projects served",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: Gauge,
    title: "1800+",
    description: "MLD wastewater treated",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: LayoutGrid,
    title: "38+",
    description: "Industry types served",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: Award,
    title: "30+",
    description: "Years of proven expertise",
  },
];

function GridItem({
  area,
  icon: Icon,
  title,
  description,
}: {
  area: string;
  icon: LucideIcon;
  title: string;
  description: ReactNode;
}) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="group relative h-full rounded-2xl border border-[rgba(31,41,55,0.22)] bg-white p-px shadow-[0_1px_3px_rgba(20,49,110,0.06)] md:rounded-3xl md:p-[2px] md:shadow-[0_2px_10px_-4px_rgba(20,49,110,0.08)]">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={72}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="brand"
          movementDuration={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[14px] border border-[rgba(31,41,55,0.18)] bg-white p-6 shadow-none transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:rounded-[20px] md:p-6 group-hover:-translate-y-px group-hover:shadow-[0_4px_24px_-12px_rgba(20,49,110,0.1)] dark:bg-neutral-950 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative z-[1] flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-[rgba(31,41,55,0.28)] bg-neutral-50/90 p-2 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] dark:border-neutral-500 dark:bg-neutral-900/60">
              <Icon
                className="h-4 w-4 text-neutral-900 dark:text-neutral-400"
                strokeWidth={2}
                aria-hidden
              />
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-[0.04em] pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance tabular-nums text-neutral-950 md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] leading-snug text-neutral-600 antialiased md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function AchievementsGlowingStats() {
  return (
    <section
      className="stats achievements-section"
      aria-labelledby="performance-metrics-heading"
    >
      <Reveal>
        <header className="achievements-head achievements-head--title-fit">
          <span className="section-tag">02 — Performance metrics</span>
          <h2
            className="section-title achievements-title"
            id="performance-metrics-heading"
          >
            Trusted performance <em>evidenced through data</em>
          </h2>
        </header>
      </Reveal>
      <Reveal>
        <div className="stats-cards-wrap achievements-cards-wrap">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 md:gap-4 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {achievements.map((item) => (
              <GridItem
                key={item.title}
                area={item.area}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
