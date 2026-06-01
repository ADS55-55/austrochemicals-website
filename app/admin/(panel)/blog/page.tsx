"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "@/lib/firebase/firestore";
import type { BlogPostRecord } from "@/lib/firebase/types";

type BlogEditorState = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
};

type BlogListTab = "all" | "published" | "drafts";

const emptyEditor: BlogEditorState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  published: true,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function sortByCreatedDesc(list: BlogPostRecord[]) {
  return [...list].sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
}

function toDateLabel(dateValue?: BlogPostRecord["createdAt"]) {
  if (!dateValue) return "Just now";
  return dateValue.toDate().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

async function convertToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Invalid file encoding result."));
        return;
      }
      resolve(result);
    };
    reader.onerror = () => reject(new Error("Failed to read selected image."));
    reader.readAsDataURL(file);
  });
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [editor, setEditor] = useState<BlogEditorState>(emptyEditor);
  const [uploadError, setUploadError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<BlogListTab>("published");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestoreDb, "blogPosts"), (snapshot) => {
      const records: BlogPostRecord[] = snapshot.docs.map((entry) => ({
        id: entry.id,
        ...(entry.data() as Omit<BlogPostRecord, "id">),
      }));
      setPosts(sortByCreatedDesc(records));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const publishedPosts = useMemo(() => posts.filter((post) => post.published), [posts]);
  const draftPosts = useMemo(() => posts.filter((post) => !post.published), [posts]);

  const visiblePosts = useMemo(() => {
    if (activeTab === "published") return publishedPosts;
    if (activeTab === "drafts") return draftPosts;
    return posts;
  }, [activeTab, draftPosts, posts, publishedPosts]);

  const isEditing = useMemo(() => Boolean(editor.id), [editor.id]);

  function openCreateModal() {
    setEditor(emptyEditor);
    setUploadError("");
    setIsModalOpen(true);
  }

  function openEditModal(post: BlogPostRecord) {
    setEditor({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      published: post.published,
    });
    setUploadError("");
    setIsModalOpen(true);
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    const slug = slugify(editor.slug || editor.title);
    const payload = {
      title: editor.title.trim(),
      slug,
      excerpt: editor.excerpt.trim(),
      content: editor.content.trim(),
      coverImage: editor.coverImage.trim() || "/products/zld.jpg",
      published: editor.published,
      updatedAt: serverTimestamp(),
    };

    if (editor.id) {
      await updateDoc(doc(firestoreDb, "blogPosts", editor.id), payload);
    } else {
      await addDoc(collection(firestoreDb, "blogPosts"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
    }

    setEditor(emptyEditor);
    setUploadError("");
    setIsModalOpen(false);
    setSaving(false);
  }

  async function handleDelete(postId: string) {
    const confirmed = window.confirm("Delete this blog post? This cannot be undone.");
    if (!confirmed) return;

    setBusyId(postId);
    await deleteDoc(doc(firestoreDb, "blogPosts", postId));
    if (editor.id === postId) {
      setEditor(emptyEditor);
      setIsModalOpen(false);
    }
    setBusyId(null);
  }

  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError("");
    const oneMbInBytes = 1024 * 1024;
    if (file.size >= oneMbInBytes) {
      setUploadError("Image must be below 1 MB.");
      event.target.value = "";
      return;
    }

    try {
      const base64Image = await convertToBase64(file);
      setEditor((previous) => ({ ...previous, coverImage: base64Image }));
    } catch {
      setUploadError("Could not process this image. Please try a different file.");
    }
  }

  return (
    <section className="admin-panel">
      <header className="admin-panel-header">
        <div>
          <p className="admin-panel-kicker">Blog</p>
          <h2>Blog Management</h2>
        </div>
        <button type="button" className="admin-primary-btn" onClick={openCreateModal}>
          Add new blog
        </button>
      </header>

      <section className="admin-overview-grid">
        <div className="admin-kpi-grid">
          <article className="admin-kpi-card">
            <p>Total posts</p>
            <strong>{posts.length}</strong>
          </article>
          <button
            type="button"
            className={`admin-kpi-card admin-kpi-card--clickable${activeTab === "published" ? " active" : ""}`}
            onClick={() => setActiveTab("published")}
          >
            <p>Published</p>
            <strong>{publishedPosts.length}</strong>
          </button>
          <button
            type="button"
            className={`admin-kpi-card admin-kpi-card--clickable${activeTab === "drafts" ? " active" : ""}`}
            onClick={() => setActiveTab("drafts")}
          >
            <p>Drafts</p>
            <strong>{draftPosts.length}</strong>
          </button>
          <button
            type="button"
            className={`admin-kpi-card admin-kpi-card--clickable${activeTab === "all" ? " active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <p>All posts</p>
            <strong>{posts.length}</strong>
          </button>
        </div>

        <aside className="admin-action-card">
          <p className="admin-panel-kicker">Quick Action</p>
          <h3>Publish to live blog</h3>
          <p>
            Published posts appear on the public blog page. Image uploads are stored as base64 and
            must be under 1 MB.
          </p>
          <button type="button" className="admin-primary-btn admin-inline-btn" onClick={openCreateModal}>
            Add new blog
          </button>
        </aside>
      </section>

      <section className="admin-toggle-strip" aria-label="Blog list filter">
        <button
          type="button"
          className={activeTab === "published" ? "admin-toggle-btn active" : "admin-toggle-btn"}
          onClick={() => setActiveTab("published")}
        >
          Published ({publishedPosts.length})
        </button>
        <button
          type="button"
          className={activeTab === "drafts" ? "admin-toggle-btn active" : "admin-toggle-btn"}
          onClick={() => setActiveTab("drafts")}
        >
          Drafts ({draftPosts.length})
        </button>
        <button
          type="button"
          className={activeTab === "all" ? "admin-toggle-btn active" : "admin-toggle-btn"}
          onClick={() => setActiveTab("all")}
        >
          All ({posts.length})
        </button>
      </section>

      {loading ? <p className="admin-muted-text">Loading blogs...</p> : null}

      {!loading && !visiblePosts.length ? (
        <div className="admin-empty-state">
          <h3>No blogs in this view</h3>
          <p>Create a new post or switch to another tab.</p>
        </div>
      ) : null}

      {!loading && visiblePosts.length > 0 ? (
        <section className="admin-row-table-wrap">
          <div className="admin-row-table admin-row-table--blog">
            <div className="admin-row-table-head">
              <span>Title</span>
              <span>Status</span>
              <span>Created</span>
              <span>Actions</span>
            </div>
            {visiblePosts.map((post) => (
              <div className="admin-row-item" key={post.id}>
                <div>
                  <strong>{post.title}</strong>
                  <p className="admin-row-subtext">/{post.slug}</p>
                </div>
                <span className={post.published ? "admin-badge admin-badge--published" : "admin-badge"}>
                  {post.published ? "Published" : "Draft"}
                </span>
                <span>{toDateLabel(post.createdAt)}</span>
                <div className="admin-form-actions">
                  <button type="button" className="admin-secondary-btn" onClick={() => openEditModal(post)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="admin-danger-btn"
                    disabled={busyId === post.id}
                    onClick={() => handleDelete(post.id)}
                  >
                    {busyId === post.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {isModalOpen ? (
        <div className="admin-modal-overlay" role="dialog" aria-modal="true">
          <article className="admin-modal-card">
            <header className="admin-data-card-header">
              <h3>{isEditing ? "Edit blog" : "Add new blog"}</h3>
              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() => {
                  setIsModalOpen(false);
                  setUploadError("");
                  setEditor(emptyEditor);
                }}
              >
                Close
              </button>
            </header>

            <form className="admin-form-grid" onSubmit={handleSave}>
              <label>
                <span>Title</span>
                <input
                  value={editor.title}
                  onChange={(event) =>
                    setEditor((previous) => ({ ...previous, title: event.target.value }))
                  }
                  placeholder="Post title"
                  required
                />
              </label>

              <label>
                <span>Slug (optional)</span>
                <input
                  value={editor.slug}
                  onChange={(event) =>
                    setEditor((previous) => ({ ...previous, slug: event.target.value }))
                  }
                  placeholder="custom-slug"
                />
              </label>

              <label>
                <span>Upload image (max 1 MB)</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
              {uploadError ? <p className="admin-error-text">{uploadError}</p> : null}
              {editor.coverImage ? (
                <div className="admin-image-preview-card">
                  <p className="admin-muted-text">Cover preview</p>
                  <img
                    src={editor.coverImage}
                    alt="Selected blog cover preview"
                    className="admin-image-preview"
                  />
                </div>
              ) : null}

              <label>
                <span>Excerpt</span>
                <textarea
                  rows={3}
                  value={editor.excerpt}
                  onChange={(event) =>
                    setEditor((previous) => ({ ...previous, excerpt: event.target.value }))
                  }
                  placeholder="Short summary"
                  required
                />
              </label>

              <label>
                <span>Content</span>
                <textarea
                  rows={8}
                  value={editor.content}
                  onChange={(event) =>
                    setEditor((previous) => ({ ...previous, content: event.target.value }))
                  }
                  placeholder="Full content"
                  required
                />
              </label>

              <label className="admin-checkbox-label">
                <input
                  type="checkbox"
                  checked={editor.published}
                  onChange={(event) =>
                    setEditor((previous) => ({ ...previous, published: event.target.checked }))
                  }
                />
                <span>Publish to website</span>
              </label>

              <div className="admin-form-actions">
                <button type="submit" className="admin-primary-btn" disabled={saving}>
                  {saving ? "Saving..." : isEditing ? "Update blog" : "Create blog"}
                </button>
              </div>
            </form>
          </article>
        </div>
      ) : null}
    </section>
  );
}
