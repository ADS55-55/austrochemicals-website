import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[minmax(10rem,auto)] md:grid-cols-3 md:gap-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  header: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_40px_-24px_rgba(20,49,110,0.12)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(30,84,224,0.14)] hover:shadow-[0_20px_48px_-28px_rgba(30,84,224,0.14)] md:min-h-0",
        className,
      )}
    >
      {header}
      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 shadow-[0_1px_0_rgba(255,255,255,0.95)_inset]">
            {icon}
          </span>
          <div className="min-w-0 space-y-1.5">
            <h3 className="font-semibold leading-snug tracking-tight text-slate-900">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
