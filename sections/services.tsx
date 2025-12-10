"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Интернет-магазины",
    description:
      "Структура каталога, удобная корзина, интеграции с оплатой и доставкой, аналитика.",
    tags: ["Каталог", "Корзина", "Оплата", "Доставка", "CRM"],
  },
  {
    title: "Корпоративные сайты",
    description:
      "Представительский сайт компании, который понятно рассказывает о продуктах и услугах.",
    tags: ["Компания", "Услуги", "О компании", "Блог"],
  },
  {
    title: "Лендинги",
    description:
      "Одностраничники под запуск продукта, мероприятия или рекламные кампании.",
    tags: ["Запуск", "Реклама", "Трафик"],
  },
  {
    title: "Каталоги",
    description:
      "Структурированные каталоги услуг и товаров с удобной навигацией и фильтрами.",
    tags: ["Каталог", "Фильтры", "B2B"],
  },
  {
    title: "Под ключ под ваш стек",
    description:
      "WordPress, Tilda или чистый стек (Next.js). Подбираем оптимальный вариант под ваши задачи.",
    tags: ["WordPress", "Tilda", "Next.js"],
  },
  {
    title: "Интеграции и SEO-база",
    description:
      "Подключу CRM, оплату, доставку, настрою базовую SEO-структуру и техническую оптимизацию.",
    tags: ["CRM", "Оплата", "SEO"],
  },
];

export function ServicesSection() {
  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Что именно я делаю
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              От первого прототипа и выбора платформы до интеграции CRM, оплаты и аналитики.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Card className="flex h-full flex-col justify-between border-border/80">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold md:text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 md:text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-2.5 py-1 text-[11px] text-neutral-500 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
