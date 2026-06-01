import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <Reveal>
      <header className={`page-hero${className ? ` ${className}` : ""}`.trim()}>
        <span className="section-tag">{eyebrow}</span>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>
    </Reveal>
  );
}
