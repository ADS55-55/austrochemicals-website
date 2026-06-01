"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { VideoPageHero } from "@/components/marketing/VideoPageHero";
import { firestoreDb } from "@/lib/firebase/firestore";
import type { BlogPostRecord } from "@/lib/firebase/types";

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [post, setPost] = useState<BlogPostRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const postQuery = query(
      collection(firestoreDb, "blogPosts"),
      where("slug", "==", slug),
      where("published", "==", true),
    );

    const unsubscribe = onSnapshot(postQuery, (snapshot) => {
      const nextPost = snapshot.docs.at(0);
      if (!nextPost) {
        setPost(null);
        setLoading(false);
        return;
      }

      setPost({
        id: nextPost.id,
        ...(nextPost.data() as Omit<BlogPostRecord, "id">),
      });
      setLoading(false);
    });

    return unsubscribe;
  }, [slug]);

  return (
    <>
      <VideoPageHero
        eyebrow="Blog"
        title={<>{post?.title ?? "Loading article..."}</>}
        description={post?.excerpt ?? "Please wait while we load this article."}
      />
      <div className="dotted-page-shell">
      <section className="content-block blog-detail">
        <article className="blog-detail__card">
          {!loading && !post ? (
            <div className="blog-detail__content">
              <p>We could not find this article.</p>
              <p>
                <Link href="/blog" className="blog-card__cta">
                  Back to blog <span aria-hidden>→</span>
                </Link>
              </p>
            </div>
          ) : (
            <>
              <p className="blog-detail__meta">
                Published on{" "}
                {post?.createdAt
                  ? post.createdAt.toDate().toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "Just now"}
              </p>
              <div className="blog-detail__cover">
                <Image
                  src={post?.coverImage || "/products/zld.jpg"}
                  alt={post?.title || "Blog cover image"}
                  fill
                  className="blog-detail__cover-img"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
              </div>
              <div className="blog-detail__content">
                {post ? <p>{post.content}</p> : <p>Loading article...</p>}
              </div>
            </>
          )}
        </article>
      </section>
      </div>
    </>
  );
}
