import { cn } from "@/lib/utils";

/**
 * Grid + light wash behind section content. Stronger grid reads edge-to-edge
 * when the parent is full-bleed (e.g. service detail article).
 */
export function SubtleGridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 [background-size:32px_32px]",
          "[background-image:linear-gradient(to_right,rgb(180_194_220)_1px,transparent_1px),linear-gradient(to_bottom,rgb(180_194_220)_1px,transparent_1px)]",
          "opacity-[0.58]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-b from-white/82 via-slate-50/38 to-[#eef2f9]/72",
        )}
      />
    </div>
  );
}
