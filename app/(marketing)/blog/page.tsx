"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { VideoPageHero } from "@/components/marketing/VideoPageHero";
import { firestoreDb } from "@/lib/firebase/firestore";
import type { BlogPostRecord } from "@/lib/firebase/types";

function sortByCreatedDesc(list: BlogPostRecord[]) {
  return [...list].sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postQuery = query(collection(firestoreDb, "blogPosts"), where("published", "==", true));
    const unsubscribe = onSnapshot(postQuery, (snapshot) => {
      const records: BlogPostRecord[] = snapshot.docs.map((entry) => ({
        id: entry.id,
        ...(entry.data() as Omit<BlogPostRecord, "id">),
      }));
      setPosts(sortByCreatedDesc(records));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const hasPosts = useMemo(() => posts.length > 0, [posts.length]);

  return (
    <>
      <VideoPageHero
        eyebrow="Insights"
        bgText="Blog"
        title={
          <>
            Engineering intelligence from the <em>plant floor.</em>
          </>
        }
        description="Commissioning lessons, optimization playbooks, and regulatory briefings from real water and wastewater implementations."
      />

      <div className="dotted-page-shell">
      <section className="content-block blog-listing">
        <div className="blog-intro-band">
          <p>
            Practical insights from operations, design, and compliance teams
            building reliable industrial water systems every day.
          </p>
        </div>
        <div className="blog-grid" role="list" aria-label="Blog posts">
          {hasPosts ? (
            posts.map((post) => (
              <article className="blog-card" key={post.id} role="listitem">
                <div className="blog-card__media">
                  <Image
                    src={post.coverImage || "/products/zld.jpg"}
                    alt={post.title}
                    fill
                    className="blog-card__img"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="blog-card__body">
                  <p className="blog-card__meta">
                    {post.createdAt
                      ? post.createdAt.toDate().toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Recently published"}
                  </p>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-card__cta">
                    Read full article <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <article className="blog-card blog-card--empty" role="listitem">
              <div className="blog-card__body">
                <p className="blog-card__meta">{loading ? "Loading..." : "Insights"}</p>
                <h2 className="blog-card__title">Fresh articles are on the way.</h2>
                <p className="blog-card__excerpt">
                  We&apos;re preparing the next set of technical notes. Check
                  back shortly for new commissioning and process stories.
                </p>
              </div>
            </article>
          )}
        </div>
      </section>
      </div>
    </>
  );
}
