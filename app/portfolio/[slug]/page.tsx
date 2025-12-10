import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, getPortfolioList } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CtaForm } from "@/components/forms/cta-form";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getPortfolioList().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getPortfolioBySlug(params.slug);
  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  const url = `https://example.com/portfolio/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url,
      type: "article",
    },
  };
}

export default function PortfolioProjectPage({ params }: Props) {
  const project = getPortfolioBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: `https://example.com/portfolio/${project.slug}`,
  };

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
            {project.category}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            {project.shortDescription}
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="#cta">Хочу такой же</Link>
        </Button>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-[1.5fr,1.2fr] md:items-start">
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent.soft via-white to-neutral-100"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm md:p-6">
          <section className="space-y-2">
            <h2 className="text-sm font-semibold md:text-base">Задача</h2>
            <p className="text-sm text-neutral-600 md:text-base">
              {project.challenge}
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-sm font-semibold md:text-base">Этапы работ</h2>
            <ul className="space-y-1.5 text-sm text-neutral-600 md:text-base">
              {project.process.map((step) => (
                <li key={step} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-sm font-semibold md:text-base">Результат</h2>
            <p className="text-sm text-neutral-600 md:text-base">
              {project.result}
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-sm font-semibold md:text-base">Технологии</h2>
            <div className="flex flex-wrap gap-1.5 text-xs md:text-sm">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-2.5 py-1 text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div id="cta" className="grid gap-8 md:grid-cols-[1.2fr,1.4fr] md:items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold md:text-xl">
            Хочу похожий проект под ваш бизнес
          </h2>
          <p className="max-w-md text-sm text-neutral-600 md:text-base">
            Расскажите коротко про вашу нишу и задачу. Я предложу формат и
            примерный бюджет проекта.
          </p>
        </div>
        <CtaForm type="project-request" />
      </div>

      <div className="mt-10 text-xs text-neutral-500 md:text-sm">
        <Link href="/portfolio" className="underline-offset-2 hover:underline">
          ← Вернуться к портфолио
        </Link>
      </div>
    </div>
  );
}
