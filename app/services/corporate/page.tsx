import type { Metadata } from "next";
import Link from "next/link";
import { getPortfolioList, getServiceBySlug } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { CtaForm } from "@/components/forms/cta-form";

const service = getServiceBySlug("corporate");

export const metadata: Metadata = {
  title: service?.name ?? "Корпоративные сайты",
  description:
    service?.shortDescription ??
    "Корпоративные сайты под постоянный поток заявок и представительство компании.",
};

export default function CorporateServicePage() {
  if (!service) return null;

  const examples = getPortfolioList().filter((p) =>
    service.examplesSlugs.includes(p.slug)
  );

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-8 grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-end">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {service.name}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            {service.shortDescription}
          </p>
        </div>
        <div className="space-y-1.5 text-sm text-neutral-600 md:text-base">
          <p>
            Ориентировочная стоимость: <span className="font-semibold">{service.priceFrom}</span>
          </p>
          <p className="text-xs text-neutral-500 md:text-sm">
            Включает структуру сайта, дизайн ключевых страниц и интеграцию с CRM.
          </p>
        </div>
      </div>

      <div className="mb-10 grid gap-8 md:grid-cols-[1.5fr,1.2fr] md:items-start">
        <section className="space-y-3">
          <h2 className="text-sm font-semibold md:text-base">Что входит</h2>
          <ul className="space-y-1.5 text-sm text-neutral-600 md:text-base">
            {service.whatIncluded.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-sm font-semibold md:text-base">Этапы</h2>
          <ol className="space-y-1.5 text-sm text-neutral-600 md:text-base">
            {service.steps.map((step, index) => (
              <li key={step} className="flex gap-2">
                <span className="mt-0.5 text-xs font-medium text-accent">
                  {index + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {examples.length > 0 && (
        <section className="mb-10 space-y-4">
          <h2 className="text-sm font-semibold md:text-base">Примеры работ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {examples.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                <Card className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden border-border/70">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent.soft via-white to-neutral-100" />
                  <div className="mt-3 space-y-1.5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                      {project.category}
                    </p>
                    <h3 className="text-sm font-semibold md:text-base">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-600 md:text-sm">
                      {project.shortDescription}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-8 md:grid-cols-[1.2fr,1.4fr] md:items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold md:text-xl">
            Обсудить сайт компании
          </h2>
          <p className="max-w-md text-sm text-neutral-600 md:text-base">
            Расскажите о нише, услугах и целевой аудитории. Я предложу структуру и
            формат корпоративного сайта.
          </p>
        </div>
        <CtaForm type="project-request" />
      </div>
    </div>
  );
}
