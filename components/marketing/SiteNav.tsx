"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  startTransition,
  useEffect,
  useLayoutEffect,
  useState,
  type MouseEvent,
} from "react";
import { NavDropdown } from "./NavDropdown";
import {
  PRODUCT_DROPDOWN,
  SERVICE_DROPDOWN,
  INDUSTRY_DROPDOWN,
} from "@/lib/nav-dropdowns";
import { BRAND_LOGO } from "@/lib/brand-logo";
import { OPEN_PRODUCTS_NAV_EVENT } from "@/lib/nav-events";

const COMPACT_SCROLL_Y = 48;
const NAV_PRODUCTS_TRIGGER_ID = "nav-products-menu-trigger";
const MOBILE_NAV_MQ = "(max-width: 1100px)";

export function SiteNav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(() =>
    typeof window !== "undefined" ? window.scrollY >= COMPACT_SCROLL_Y : false,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    let raf = 0;
    let last = window.scrollY >= COMPACT_SCROLL_Y;

    const apply = () => {
      raf = 0;
      const next = window.scrollY >= COMPACT_SCROLL_Y;
      if (next !== last) {
        last = next;
        setCompact(next);
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const sync = () => {
      if (mq.matches) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onOpenProductsMenu = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const mq = window.matchMedia(MOBILE_NAV_MQ);
      window.setTimeout(() => {
        if (mq.matches) {
          setMenuOpen(true);
        }
        window.setTimeout(() => {
          document.getElementById(NAV_PRODUCTS_TRIGGER_ID)?.focus();
        }, mq.matches ? 420 : 120);
      }, 180);
    };
    window.addEventListener(OPEN_PRODUCTS_NAV_EVENT, onOpenProductsMenu);
    return () =>
      window.removeEventListener(OPEN_PRODUCTS_NAV_EVENT, onOpenProductsMenu);
  }, []);

  const closeIfBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setMenuOpen(false);
  };

  const onRailClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a[href]")) setMenuOpen(false);
  };

  return (
    <header
      className={`nav-wrap${compact ? " nav-wrap--compact" : ""}`.trim()}
    >
      <nav
        className={`nav${menuOpen ? " nav--menu-open" : ""}`.trim()}
        aria-label="Primary"
      >
        <div className="nav-left">
          <Link className="brand brand--logo-only" href="/">
            <Image
              src={BRAND_LOGO.src}
              alt="Austro Chemicals"
              width={BRAND_LOGO.width}
              height={BRAND_LOGO.height}
              className="brand-logo-img"
              priority
            />
          </Link>
        </div>

        <div
          id="nav-primary-panel"
          className="nav-links-shell"
          onClick={closeIfBackdrop}
        >
          <div
            className="nav-links-rail"
            onClick={onRailClick}
            role="presentation"
          >
            <Link
              href="/"
              className={pathname === "/" ? "active" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : undefined}
            >
              About Us
            </Link>

            <NavDropdown
              triggerId={NAV_PRODUCTS_TRIGGER_ID}
              basePath="/products"
              label="Products"
              items={PRODUCT_DROPDOWN}
              isActive={
                pathname === "/products" || pathname.startsWith("/products/")
              }
            />
            <NavDropdown
              basePath="/services"
              label="Services"
              items={SERVICE_DROPDOWN}
              isActive={
                pathname === "/services" || pathname.startsWith("/services/")
              }
            />
            <NavDropdown
              basePath="/industries"
              label="Industries"
              items={INDUSTRY_DROPDOWN}
              isActive={
                pathname === "/industries" ||
                pathname.startsWith("/industries/")
              }
            />

            <Link
              href="/blog"
              className={pathname === "/blog" ? "active" : undefined}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : undefined}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <button
            type="button"
            className="nav-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-primary-panel"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="nav-menu-bars" aria-hidden />
          </button>
          <Link className="nav-cta" href="/contact">
            <span className="dot" aria-hidden />
            Request Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
