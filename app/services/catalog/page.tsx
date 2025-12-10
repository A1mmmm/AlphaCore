import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/content";
import { CtaForm } from "@/components/forms/cta-form";

const service = getServiceBySlug("catalog");

export const metadata: Metadata = {
  title: service?.name ?? "Каталоги",
  description:
    service?.shortDescription ??
    "Каталоги услуг и товаров с удобной структурой и фильтрами.",
};

export default function CatalogServicePage() {
  if (!service) return null;

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
            Подходит для B2B и B2C-проектов, где важно быстро ориентироваться в
            ассортименте.
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

      <div className="grid gap-8 md:grid-cols-[1.2fr,1.4fr] md:items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold md:text-xl">
            Обсудить каталог под ваш ассортимент
          </h2>
          <p className="max-w-md text-sm text-neutral-600 md:text-base">
            Опишите формат каталога (товары, услуги, B2B/B2C), а я предложу
            структуру и варианты фильтров.
          </p>
        </div>
        <CtaForm type="project-request" />
      </div>
    </div>
  );
}
