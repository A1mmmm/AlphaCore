import Link from "next/link";
import { getServiceList } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { CtaForm } from "@/components/forms/cta-form";

export default function ServicesPage() {
  const services = getServiceList();
  
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
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="group flex h-full cursor-pointer flex-col justify-between border-border/80 p-6 transition-colors hover:border-accent/50">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-foreground md:text-xl">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{service.features.length - 3} пункта
                      </li>
                    )}
                  </ul>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {service.price}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
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
