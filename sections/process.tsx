"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Созвон и бриф",
    description:
      "Разбираем задачи, формат бизнеса, продукты и ожидания от сайта. Фиксируем ключевые метрики.",
  },
  {
    title: "Структура и прототип",
    description:
      "Собираю карту сайта и прототип экранов: где какие блоки, как ведём пользователя к заявке.",
  },
  {
    title: "Дизайн и контент",
    description:
      "Прорабатываю визуальный стиль и тексты, согласуем под вашу фирменную айдентику.",
  },
  {
    title: "Разработка и интеграции",
    description:
      "Верстаю, настраиваю анимации, подключаю CRM, оплату, доставку и аналитику.",
  },
  {
    title: "Тестирование и запуск",
    description:
      "Проверяем отображение на всех устройствах, скорость, формы и сценарии, выкатываем на домен.",
  },
  {
    title: "Поддержка",
    description:
      "Помогаю с первыми изменениями и доработками, даю инструкции по работе с сайтом.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-border/60 bg-white">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Как выстраивается работа
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              Прозрачный по шагам процесс — вы понимаете, на каком этапе проект и что будет дальше.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Card className="relative h-full border-border/70">
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent.soft text-xs font-medium text-accent">
                  {index + 1}
                </span>
                <h3 className="text-sm font-semibold md:text-base">{step.title}</h3>
                <p className="mt-2 text-xs text-neutral-600 md:text-sm">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
