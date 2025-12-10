"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Лендинг",
    description: "Одностраничный сайт под запуск продукта или услуги.",
    price: "от 55 000 ₽",
    features: [
      "Структура и прототип",
      "Дизайн под ваш бренд",
      "Адаптив под мобильные",
      "Подключение форм и аналитики",
    ],
    recommended: false,
  },
  {
    name: "Сайт компании",
    description: "Многостраничный сайт под постоянный поток заявок.",
    price: "от 95 000 ₽",
    features: [
      "Карта сайта и прототип",
      "Дизайн ключевых шаблонов",
      "Интеграции с CRM и почтой",
      "Базовая SEO-структура",
    ],
    recommended: true,
  },
  {
    name: "Интернет-магазин",
    description: "Каталог с корзиной, оплатой и доставкой.",
    price: "от 140 000 ₽",
    features: [
      "Каталог и карточки товаров",
      "Корзина и оформление заказа",
      "Интеграции с оплатой и доставкой",
      "Подключение CRM и аналитики",
    ],
    recommended: false,
  },
];

export function PricingSection() {
  return (
    <section className="border-b border-border/60 bg-white">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Тарифы и форматы работы
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              Стоимость фиксируется в договоре. Финальная цена зависит от объёма страниц,
              сложности интеграций и сроков.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card
                className={`flex h-full flex-col justify-between border-border/80 ${
                  plan.recommended ? "border-accent shadow-md" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold md:text-base">
                      {plan.name}
                    </h3>
                    {plan.recommended && (
                      <span className="rounded-full bg-accent.soft px-3 py-1 text-[11px] font-medium text-accent">
                        Популярный выбор
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-600 md:text-sm">
                    {plan.description}
                  </p>
                  <p className="text-base font-semibold md:text-lg">
                    {plan.price}
                  </p>
                  <ul className="space-y-1.5 text-xs text-neutral-600 md:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <Button className="w-full" variant={plan.recommended ? "primary" : "ghost"}>
                    Обсудить проект
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
