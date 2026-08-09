import Link from "next/link";
import { posts, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Notes on web development — performance, security, accessibility, and building for the modern web.",
};

export default function BlogIndexPage() {
  return (
    <main className="blog-page">
      <header className="blog-page-header">
        <span className="blog-tag">Writing</span>
        <h1>Notes from the build</h1>
        <p className="blog-intro">
          Things we work out while building — performance, security, and the
          details that separate a site that works from one that feels right.
        </p>
      </header>

      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="blog-list-item">
              <ul className="stack-tags">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="meta-dot">·</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
