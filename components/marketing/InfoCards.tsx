import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function InfoGrid({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="content-block">
        <div className="info-grid">{children}</div>
      </div>
    </Reveal>
  );
}

export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}
