"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  hasAdminSession,
  setAdminSession,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (hasAdminSession()) {
      router.replace("/admin/contact");
    }
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const isValid = validateAdminCredentials(email, password);
      if (!isValid) {
        throw new Error("Invalid credentials");
      }
      setAdminSession();
      router.replace("/admin/contact");
    } catch {
      setError("Invalid credentials. Please check your admin email and password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <p className="admin-login-kicker">Austro Chemicals</p>
        <h1>Admin Login</h1>
        <p className="admin-login-subtext">Sign in to manage contact enquiries and blog content.</p>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@company.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          {error ? <p className="admin-error-text">{error}</p> : null}

          <button type="submit" className="admin-primary-btn" disabled={loading}>
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>
      </section>
    </main>
  );
}
