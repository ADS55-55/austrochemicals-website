"use client";

export const HARDCODED_ADMIN_EMAIL = "admin@austochemicals.com";
export const HARDCODED_ADMIN_PASSWORD = "Password";
export const ADMIN_SESSION_KEY = "austro_admin_session";

export function validateAdminCredentials(email: string, password: string) {
  return (
    email.trim().toLowerCase() === HARDCODED_ADMIN_EMAIL.toLowerCase() &&
    password === HARDCODED_ADMIN_PASSWORD
  );
}

export function setAdminSession() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADMIN_SESSION_KEY, "true");
}

export function clearAdminSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function hasAdminSession() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}
