"use client";

import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyCu6fk2aGlkWQz0VXUofqL4Za5n6U3rZVg",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "austrochemicals-website.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "austrochemicals-website",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "austrochemicals-website.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "1047694605584",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:1047694605584:web:921796096cb27ce5057995",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-17ENBFG3YE",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
