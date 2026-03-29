import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Raj Chinagundi",
  description: "Blog posts about AI/ML, software engineering, and more.",
};

const posts = [
  {
    slug: "coming-soon",
    title: "Coming Soon",
    date: "2025-01-02",
    description:
      "Blog posts coming soon. Stay tuned for insights on AI/ML, software engineering, and building cool stuff.",
  },
];

export default function Posts() {
  return (
    <article>
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.slug} className="post-card">
          <h3>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <span className="post-date">{post.date}</span>
          <p>{post.description}</p>
        </div>
      ))}
    </article>
  );
}
