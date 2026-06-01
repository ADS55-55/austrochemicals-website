"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  clearAdminSession,
  HARDCODED_ADMIN_EMAIL,
  hasAdminSession,
} from "@/lib/admin-auth";

export function AdminShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const sessionExists = hasAdminSession();
    setIsAuthorized(sessionExists);
    setCheckingAuth(false);
    if (!sessionExists) {
      router.replace("/admin");
    }
  }, [router]);

  const isContactRoute = useMemo(() => pathname.startsWith("/admin/contact"), [pathname]);
  const isBlogRoute = useMemo(() => pathname.startsWith("/admin/blog"), [pathname]);

  if (checkingAuth) {
    return <div className="admin-loading-screen">Checking admin session...</div>;
  }

  if (!isAuthorized) {
    return <div className="admin-loading-screen">Redirecting to login...</div>;
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <p className="admin-sidebar-label">Austro Admin</p>
          <h1 className="admin-sidebar-title">Control Panel</h1>
        </div>

        <nav className="admin-topbar-nav">
          <Link href="/admin/contact" className={isContactRoute ? "admin-nav-link active" : "admin-nav-link"}>
            Contact
          </Link>
          <Link href="/admin/blog" className={isBlogRoute ? "admin-nav-link active" : "admin-nav-link"}>
            Blog
          </Link>
        </nav>

        <div className="admin-topbar-actions">
          <p className="admin-user-email">{HARDCODED_ADMIN_EMAIL}</p>
          <button
            type="button"
            className="admin-secondary-btn"
            onClick={() => {
              clearAdminSession();
              router.replace("/admin");
            }}
          >
            Log out
          </button>
        </div>
      </header>

      <main className="admin-main">{children}</main>
    </div>
  );
}
