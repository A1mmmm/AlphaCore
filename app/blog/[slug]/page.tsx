import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogList } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getBlogList().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    return { title: "Статья не найдена" };
  }

  const url = `https://example.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const posts = getBlogList().sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
  const index = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[index + 1];
  const next = posts[index - 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `https://example.com/blog/${post.slug}`,
  };

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-2xl space-y-6">
        <header className="space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
            {post.topic.toUpperCase()}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {post.title}
          </h1>
          <p className="text-sm text-neutral-600 md:text-base">
            {post.excerpt}
          </p>
          <p className="text-[11px] text-neutral-400 md:text-xs">
            {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            · {post.readingTime} мин чтения
          </p>
        </header>

        <div className="space-y-4 text-sm text-neutral-700 md:text-base">
          <p>
            Это демо-текст статьи. Здесь может быть разбор кейса, объяснение
            принципов структуры сайта, заметка про SEO или дизайн.
          </p>
          <p>
            В реальном проекте сюда можно подключить markdown-рендерер или CMS,
            а пока текст задан статически для демонстрации структуры.
          </p>
          <p>
            Важно, чтобы статья помогала потенциальному клиенту лучше понять,
            как вы мыслите, как подходите к задачам и какие решения предлагаете.
          </p>
        </div>

        <footer className="flex items-center justify-between pt-6 text-xs text-neutral-500 md:text-sm">
          <div>
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="underline-offset-2 hover:underline"
              >
                ← {prev.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="underline-offset-2 hover:underline"
              >
                {next.title} →
              </Link>
            )}
          </div>
        </footer>

        <div className="pt-4 text-xs text-neutral-500 md:text-sm">
          <Link href="/blog" className="underline-offset-2 hover:underline">
            Вернуться ко всем статьям
          </Link>
        </div>
      </article>
    </div>
  );
}
