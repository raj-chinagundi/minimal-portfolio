import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon - Raj Chinagundi",
  description:
    "Blog posts coming soon. Stay tuned for insights on AI/ML, software engineering, and building cool stuff.",
};

export default function ComingSoon() {
  return (
    <article>
      <h1>Coming Soon</h1>
      <span className="post-date">2025-01-02</span>

      <p>
        I&apos;m working on some interesting blog posts about AI/ML engineering,
        LLM fine-tuning, and lessons learned from building production systems.
      </p>
      <p>Check back soon!</p>
    </article>
  );
}
