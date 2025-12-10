import Link from "next/link";
import { getServiceList } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { CtaForm } from "@/components/forms/cta-form";

const services = getServiceList();

export default function ServicesPage() {
  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Услуги
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          Подберу формат сайта под ваши задачи: лендинг под запуск, корпоративный
          сайт, интернет-магазин или каталог. Все проекты — под ключ, с
          интеграциями и базовой SEO-структурой.
        </p>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} href={service.path}>
            <Card className="group flex h-full cursor-pointer flex-col justify-between border-border/80">
              <div className="space-y-3">
                <h2 className="text-sm font-semibold md:text-base">
                  {service.name}
                </h2>
                <p className="text-xs text-neutral-600 md:text-sm">
                  {service.shortDescription}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 md:text-sm">
                <span>{service.priceFrom}</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  Подробнее →
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-[1.2fr,1.4fr] md:items-start">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold md:text-xl">
            Не уверены, какой формат подойдёт?
          </h2>
          <p className="max-w-md text-sm text-neutral-600 md:text-base">
            Опишите задачу, а я предложу формат сайта и примерный диапазон
            бюджета, исходя из ваших целей и сроков.
          </p>
        </div>
        <CtaForm type="consultation" />
      </div>
    </div>
  );
}
