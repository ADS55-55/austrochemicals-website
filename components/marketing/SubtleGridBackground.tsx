import { cn } from "@/lib/utils";

/**
 * Light grid + radial fade (inspired by external GridBackgroundDemo pattern).
 * Intended as an absolute layer behind section content.
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
          "absolute inset-0 [background-size:40px_40px] opacity-[0.45]",
          "[background-image:linear-gradient(to_right,rgb(226_232_240)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240)_1px,transparent_1px)]",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/95 to-[#f6f8fc]"
        style={{
          maskImage:
            "radial-gradient(ellipse 72% 60% at 50% 38%, transparent 18%, black 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 60% at 50% 38%, transparent 18%, black 72%)",
        }}
      />
    </div>
  );
}
