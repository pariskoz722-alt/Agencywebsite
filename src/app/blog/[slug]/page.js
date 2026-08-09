import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <main className="article-page">
      <Link href="/blog" className="article-back">&larr; All articles</Link>

      <header className="article-header">
        <ul className="stack-tags">
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h1>{post.title}</h1>
        <div className="blog-card-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="meta-dot">·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="article-body">
        {post.body.map((block, i) => {
          if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
          if (block.type === "code") {
            return (
              <pre key={i}>
                <code>{block.text}</code>
              </pre>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>

      <footer className="article-footer">
        <p>
          Questions about anything here?{" "}
          <Link href="/#contact">Get in touch</Link>.
        </p>
      </footer>
    </main>
  );
}
