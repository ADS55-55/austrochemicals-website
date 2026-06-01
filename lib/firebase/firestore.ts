"use client";

import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/lib/firebase/client";

export const firestoreDb = getFirestore(firebaseApp);
