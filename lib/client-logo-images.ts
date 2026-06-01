/** Files in `public/Client Logos/` — used by the home clientele marquee. */

const FILENAMES = [
  "WhatsApp Image 2025-08-14 at 1.12.48 PM (1).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.48 PM (2).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.48 PM (3).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.48 PM.jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (1).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (10).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (13).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (2).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (3).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (4).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (5).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (7).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM (8).jpeg",
  "WhatsApp Image 2025-08-14 at 1.12.49 PM.jpeg",
] as const;

export function clientLogoSrc(filename: string): string {
  return (
    "/" +
    ["Client Logos", filename]
      .map((segment) => encodeURIComponent(segment))
      .join("/")
  );
}

export const CLIENT_LOGO_IMAGE_SRCS: readonly string[] = FILENAMES.map(clientLogoSrc);
