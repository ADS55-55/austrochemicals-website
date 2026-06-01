import { getDbPool } from "@/lib/db";
import type { RowDataPacket } from "mysql2";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostInput = {
  id?: number;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  published?: boolean;
};

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "zld-commissioning-playbook",
    title: "A practical ZLD commissioning playbook",
    excerpt:
      "How to stage startup, stabilize membrane recovery, and hit discharge targets without repeated shutdown cycles.",
    content:
      "A structured commissioning protocol reduces risk in high-capex ZLD assets and shortens time to guaranteed performance.",
    coverImage: "/products/zld.jpg",
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    slug: "optimizing-etp-chemistry",
    title: "Optimizing ETP chemistry for variable influent",
    excerpt:
      "A field-led approach to coagulant, flocculant, and pH control when load conditions vary shift-to-shift.",
    content:
      "Better online monitoring and jar-test discipline can significantly improve COD reduction and sludge quality.",
    coverImage: "/products/etp.jpg",
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    slug: "membrane-life-extension",
    title: "Extending membrane life in reuse systems",
    excerpt:
      "The maintenance cadence, pretreatment checks, and CIP strategy that keeps membranes productive for longer cycles.",
    content:
      "Membrane life extension is mostly operational discipline, not just hardware selection.",
    coverImage: "/products/ro.jpg",
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

let schemaReady = false;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function ensureSchema() {
  if (schemaReady) return;
  const pool = getDbPool();
  if (!pool) return;

  await pool.execute(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(220) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      excerpt TEXT NOT NULL,
      content LONGTEXT NOT NULL,
      cover_image VARCHAR(512) NOT NULL DEFAULT '',
      published TINYINT(1) NOT NULL DEFAULT 1,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  schemaReady = true;
}

type BlogRow = RowDataPacket & {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  published: number;
  created_at: Date;
  updated_at: Date;
};

function mapBlogRow(row: BlogRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.cover_image,
    published: row.published === 1,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  };
}

export async function listPublishedBlogPosts() {
  try {
    await ensureSchema();
    const pool = getDbPool();
    if (!pool) return FALLBACK_POSTS;

    const [rows] = await pool.query<BlogRow[]>(
      "SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC",
    );
    if (!rows.length) return FALLBACK_POSTS;
    return rows.map(mapBlogRow);
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function listAllBlogPosts() {
  try {
    await ensureSchema();
    const pool = getDbPool();
    if (!pool) return FALLBACK_POSTS;

    const [rows] = await pool.query<BlogRow[]>(
      "SELECT * FROM blog_posts ORDER BY created_at DESC",
    );
    if (!rows.length) return FALLBACK_POSTS;
    return rows.map(mapBlogRow);
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function upsertBlogPost(input: BlogPostInput) {
  await ensureSchema();
  const pool = getDbPool();
  if (!pool) {
    throw new Error(
      "Database is not configured. Set DATABASE_NAME, DATABASE_USERNAME and DATABASE_PASSWORD.",
    );
  }

  const slug = slugify(input.slug?.trim() || input.title);
  const coverImage = input.coverImage?.trim() || "/products/zld.jpg";

  if (!input.id) {
    await pool.execute(
      `INSERT INTO blog_posts (slug, title, excerpt, content, cover_image, published)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        slug,
        input.title.trim(),
        input.excerpt.trim(),
        input.content.trim(),
        coverImage,
        input.published === false ? 0 : 1,
      ],
    );
    return;
  }

  await pool.execute(
    `UPDATE blog_posts
     SET slug = ?, title = ?, excerpt = ?, content = ?, cover_image = ?, published = ?
     WHERE id = ?`,
    [
      slug,
      input.title.trim(),
      input.excerpt.trim(),
      input.content.trim(),
      coverImage,
      input.published === false ? 0 : 1,
      input.id,
    ],
  );
}

export async function deleteBlogPost(id: number) {
  await ensureSchema();
  const pool = getDbPool();
  if (!pool) {
    throw new Error(
      "Database is not configured. Set DATABASE_NAME, DATABASE_USERNAME and DATABASE_PASSWORD.",
    );
  }
  await pool.execute("DELETE FROM blog_posts WHERE id = ?", [id]);
}
