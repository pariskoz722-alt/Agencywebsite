"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts, formatDate } from "@/lib/posts";
import { trackSpotlight } from "@/lib/spotlight";

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">

        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-tag">Writing</span>
          <h2 className="blog-main-title">Notes from the build</h2>
          <p className="blog-intro">
            Things we work out while building — performance, security, and the
            details that separate a site that works from one that feels right.
          </p>
        </motion.div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <motion.article
              className="blog-card spotlight-card"
              key={post.slug}
              onMouseMove={trackSpotlight}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ul className="stack-tags">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <h3 className="blog-card-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="blog-card-excerpt">{post.excerpt}</p>

              <div className="blog-card-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="meta-dot">·</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="blog-footer-link">
          <Link href="/blog" className="btn-secondary">Read all articles</Link>
        </div>

      </div>
    </section>
  );
}
