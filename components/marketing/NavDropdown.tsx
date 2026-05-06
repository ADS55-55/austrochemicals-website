"use client";

import Link from "next/link";
import type { NavDropdownItem } from "@/lib/nav-dropdowns";

function ChevronDown() {
  return (
    <svg
      className="nav-dropdown-chev-svg"
      viewBox="0 0 12 8"
      width="10"
      height="7"
      aria-hidden
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type NavDropdownProps = {
  basePath: string;
  label: string;
  items: NavDropdownItem[];
  isActive?: boolean;
};

export function NavDropdown({
  basePath,
  label,
  items,
  isActive = false,
}: NavDropdownProps) {
  return (
    <div className="nav-dropdown-wrap">
      <Link
        href={basePath}
        className={`nav-dropdown-trigger${isActive ? " active" : ""}`.trim()}
      >
        {label}
        <span className="nav-dropdown-chev" aria-hidden>
          <ChevronDown />
        </span>
      </Link>
      <div className="nav-dropdown-panel" role="menu" aria-label={`${label} menu`}>
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className="nav-dropdown-row"
            role="menuitem"
          >
            <span className="nav-dropdown-row-label">{item.label}</span>
            {item.hasNestedChevron ? (
              <span className="nav-dropdown-row-chev" aria-hidden>
                ›
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
