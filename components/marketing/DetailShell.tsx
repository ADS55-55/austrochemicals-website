import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";

type DetailShellProps = {
  sectionHref: string;
  sectionLabel: string;
  title: string;
  children?: ReactNode;
};

export function DetailShell({
  sectionHref,
  sectionLabel,
  title,
  children,
}: DetailShellProps) {
  return (
    <>
      <Reveal>
        <header className="page-hero">
          <p className="section-tag" style={{ marginBottom: 12 }}>
            <Link href={sectionHref} style={{ color: "inherit" }}>
              ← {sectionLabel}
            </Link>
          </p>
          <h1>{title}</h1>
          {children ? (
            <div style={{ marginTop: 20 }}>{children}</div>
          ) : (
            <p>
              Detailed specifications and case material for this line can be
              linked here. Use the navigation or contact sales for tailored
              documentation.
            </p>
          )}
        </header>
      </Reveal>
    </>
  );
}
