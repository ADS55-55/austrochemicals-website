import { cn } from "@/lib/utils";

/**
 * Light dotted field + soft radial wash — subtle edge-to-edge background for
 * marketing detail articles (services, industries).
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
          "absolute inset-0 [background-size:20px_20px] opacity-[0.46]",
          "[background-image:radial-gradient(rgb(148_163_184_/_0.42)_1px,transparent_1px)]",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white"
        style={{
          maskImage:
            "radial-gradient(ellipse 88% 70% at 50% 42%, transparent 18%, black 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 88% 70% at 50% 42%, transparent 18%, black 78%)",
        }}
      />
    </div>
  );
}
