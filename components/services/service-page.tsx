import { getPortfolioList, getServiceBySlug } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { CtaForm } from "@/components/forms/cta-form";
import Link from "next/link";
import { PortfolioItem } from "@/lib/content";

interface ServicePageProps {
  slug: string;
}

export function ServicePage({ slug }: ServicePageProps) {
  const service = getServiceBySlug(slug);
  
  if (!service) return null;

  const examples = getPortfolioList().filter((p: PortfolioItem) =>
    service.examplesSlugs?.includes(p.slug) ?? []
  );

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-8 grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-end">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            {service.description}
          </p>
        </div>
        <div className="space-y-1.5 text-sm text-neutral-600 md:text-base">
          <p>
            Ориентировочная стоимость: <span className="font-semibold">{service.price}</span>
          </p>
          <p className="text-xs text-neutral-500 md:text-sm">
            Точная стоимость зависит от объёма работ и сроков.
          </p>
        </div>
      </div>

      <div className="mb-10 grid gap-8 md:grid-cols-[1.5fr,1.2fr] md:items-start">
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold md:text-base">Что входит</h2>
            <ul className="space-y-1.5 text-sm text-neutral-600 md:text-base">
              {service.features.map((feature: string, index: number) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.steps && service.steps.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold md:text-base">Этапы работы</h2>
              <ol className="space-y-2 text-sm text-neutral-600 md:text-base">
                {service.steps.map((step: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>

        <Card className="sticky top-6 space-y-6 p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Оставить заявку</h3>
            <p className="text-sm text-neutral-600">
              Опишите ваш проект, и мы свяжемся с вами в течение дня
            </p>
          </div>
          <CtaForm type="service" serviceTitle={service.title} />
        </Card>
      </div>

      {examples.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Наши работы</h2>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-accent hover:underline"
            >
              Смотреть все
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {examples.map((example: PortfolioItem) => (
              <Link key={example.slug} href={`/portfolio/${example.slug}`}>
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                  <div className="aspect-video bg-muted">
                    {example.thumbnail && (
                      <img
                        src={example.thumbnail}
                        alt={example.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{example.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {example.shortDescription}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
