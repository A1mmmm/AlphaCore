"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Интернет-магазин мебели",
    type: "Интернет-магазин",
    result: "+42% заявок с сайта за 3 месяца",
  },
  {
    title: "Сайт для b2b-сервиса",
    type: "Корпоративный сайт",
    result: "Упрощён цикл продаж, рост обращений через форму",
  },
  {
    title: "Лендинг онлайн-курса",
    type: "Лендинг",
    result: "Конверсия из трафика в заявку от 5 до 8%",
  },
  {
    title: "Каталог услуг строительной компании",
    type: "Каталог",
    result: "Стало проще объяснять объём работ и стоимость",
  },
  {
    title: "Сайт эксперта-консультанта",
    type: "Персональный сайт",
    result: "Регулярные заявки на консультации из сайта",
  },
  {
    title: "Лендинг мероприятия",
    type: "Лендинг",
    result: "Быстрый запуск под рекламную кампанию",
  },
];

export function PortfolioSection() {
  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Недавние проекты
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              Примеры форматов: сайты, интернет-магазины, лендинги под запуски и рекламу.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Card className="group flex h-full flex-col justify-between overflow-hidden border-border/70">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent.soft via-white to-neutral-100 transition-transform group-hover:scale-[1.02]" />
                <div className="mt-4 space-y-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                    {project.type}
                  </p>
                  <h3 className="text-sm font-semibold md:text-base">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 md:text-sm">
                    {project.result}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
