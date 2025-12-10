"use client";

import { useState } from "react";
import Link from "next/link";
import { getBlogList } from "@/lib/content";

const allPosts = getBlogList().sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1
);

const topics = [
  { value: "all", label: "Все темы" },
  { value: "разработка", label: "Разработка" },
  { value: "seo", label: "SEO" },
  { value: "дизайн", label: "Дизайн" },
  { value: "маркетинг", label: "Маркетинг" },
] as const;

type TopicFilter = (typeof topics)[number]["value"];

export default function BlogPage() {
  const [topic, setTopic] = useState<TopicFilter>("all");

  const filtered =
    topic === "all" ? allPosts : allPosts.filter((post) => post.topic === topic);

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Блог
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          Небольшие заметки о разработке сайтов, SEO, дизайне и маркетинге.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 text-xs md:text-sm">
        {topics.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTopic(t.value)}
            className={
              "rounded-full border px-3 py-1 transition-colors " +
              (topic === t.value
                ? "border-accent bg-accent.soft text-accent"
                : "border-border bg-white hover:bg-muted")
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                  {topics.find((t) => t.value === post.topic)?.label}
                </p>
                <h2 className="text-sm font-semibold md:text-base">
                  {post.title}
                </h2>
                <p className="text-xs text-neutral-600 md:text-sm">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 md:text-xs">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span>{post.readingTime} мин чтения</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
