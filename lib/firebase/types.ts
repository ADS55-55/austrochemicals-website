import type { Timestamp } from "firebase/firestore";

export type ContactStatus = "open" | "dealt";

export type ContactSubmission = {
  id: string;
  fullName: string;
  workEmail: string;
  company: string;
  phoneNumber: string;
  requirement: string;
  dailyFlow: string;
  message: string;
  status: ContactStatus;
  createdAt?: Timestamp;
  dealtAt?: Timestamp;
};

export type BlogPostRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};
