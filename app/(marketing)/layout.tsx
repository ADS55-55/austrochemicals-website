import type { ReactNode } from "react";
import "../austro.css";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="austro min-h-screen"
      style={{
        background: "var(--paper)",
        color: "var(--text)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
