import type { ReactNode, SVGProps } from "react";
import Link from "next/link";
import { SERVICE_DROPDOWN } from "@/lib/nav-dropdowns";
import { getServiceDetailContent } from "@/lib/service-detail-content";

function teaser(intro: string, max = 108): string {
  const t = intro.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

const ICONS: readonly ((props: SVGProps<SVGSVGElement>) => ReactNode)[] = [
  // Design — layout / drawing lines
  (props: SVGProps<SVGSVGElement>) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M3 12h18M3 6h18M3 18h12" />
    </svg>
  ),
  // Civil — grid / structure
  (props: SVGProps<SVGSVGElement>) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  // Fabrication — precision frame
  (props: SVGProps<SVGSVGElement>) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
      <path d="M12 22V12M12 12L4 8M12 12l8-4" />
    </svg>
  ),
  // Erection — vertical build
  (props: SVGProps<SVGSVGElement>) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
      <path d="M6 21h12" />
    </svg>
  ),
  // Commissioning — check / handover
  (props: SVGProps<SVGSVGElement>) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  ),
];

export function HomeServicesCards() {
  return (
    <div className="services-grid services-grid--five">
      {SERVICE_DROPDOWN.map((item, i) => {
        const detail = getServiceDetailContent(item.slug);
        const title = detail?.heading ?? item.label;
        const body = detail?.intro ? teaser(detail.intro) : "Explore scope, deliverables, and how we support your plant.";
        const Icon = ICONS[i] ?? ICONS[0];

        return (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="service service--card"
          >
            <span className="num">S / {String(i + 1).padStart(2, "0")}</span>
            <div className="icon" aria-hidden>
              <Icon />
            </div>
            <div className="service__copy">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
            <span className="service__go" aria-hidden>
              View <span className="arrow">→</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
