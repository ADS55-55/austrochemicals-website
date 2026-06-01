"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  /** Optional id for the trigger link (e.g. focus when opening menu from elsewhere). */
  triggerId?: string;
};

export function NavDropdown({
  basePath,
  label,
  items,
  isActive = false,
  triggerId,
}: NavDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeMenu = () => {
    setOpen(false);
    setActiveSubmenu(null);
  };
  const navigateAfterClose = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();
    window.setTimeout(() => {
      router.push(href);
    }, 80);
  };
  const toggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) setActiveSubmenu(null);
      return next;
    });
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div
      className={`nav-dropdown-wrap${open ? " is-open" : ""}`.trim()}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setActiveSubmenu(null);
      }}
    >
      <div
        id={triggerId}
        className={`nav-dropdown-trigger${isActive ? " active" : ""}`.trim()}
        onClick={toggleMenu}
      >
        <span className="nav-dropdown-label">{label}</span>
        <button
          type="button"
          className="nav-dropdown-chev nav-dropdown-chev-btn"
          aria-label={`Open ${label} options`}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <ChevronDown />
        </button>
      </div>
      <div className="nav-dropdown-panel" role="menu" aria-label={`${label} menu`}>
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          if (!hasChildren) {
            return (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="nav-dropdown-row"
                role="menuitem"
                onClick={(e) => navigateAfterClose(e, `${basePath}/${item.slug}`)}
              >
                <span className="nav-dropdown-row-label">{item.label}</span>
                {item.hasNestedChevron ? (
                  <span className="nav-dropdown-row-chev" aria-hidden>
                    ›
                  </span>
                ) : null}
              </Link>
            );
          }

          return (
            <div
              key={item.slug}
              className={`nav-dropdown-subwrap${
                activeSubmenu === item.slug ? " is-open" : ""
              }`.trim()}
              onMouseEnter={() => setActiveSubmenu(item.slug)}
              onFocus={() => setActiveSubmenu(item.slug)}
            >
              <Link
                href={`${basePath}/${item.slug}`}
                className="nav-dropdown-row nav-dropdown-row--with-sub"
                role="menuitem"
                onClick={(e) => navigateAfterClose(e, `${basePath}/${item.slug}`)}
              >
                <span className="nav-dropdown-row-label">{item.label}</span>
                <span className="nav-dropdown-row-chev" aria-hidden>
                  ›
                </span>
              </Link>
              <div
                className="nav-dropdown-subpanel"
                role="menu"
                aria-label={`${item.label} options`}
              >
                {item.children?.map((child) => (
                  <Link
                    key={`${item.slug}-${child.slug}`}
                    href={`${basePath}/${item.slug}/${child.slug}`}
                    className="nav-dropdown-row nav-dropdown-subrow"
                    role="menuitem"
                    onClick={(e) =>
                      navigateAfterClose(
                        e,
                        `${basePath}/${item.slug}/${child.slug}`,
                      )
                    }
                  >
                    <span className="nav-dropdown-row-label">{child.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
