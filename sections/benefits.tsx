"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MoveRight, Smartphone, Timer, WalletCards, Workflow } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    title: "Сроки от 7–10 дней",
    description: "Чёткий план работ и параллельные процессы позволяют запускать проекты без затяжек.",
  },
  {
    icon: Workflow,
    title: "Прозрачный процесс",
    description: "Каждый этап фиксируем: структура, прототип, дизайн, разработка, запуск.",
  },
  {
    icon: Smartphone,
    title: "Адаптив под все устройства",
    description: "Сайт одинаково аккуратен на телефоне, планшете и десктопе.",
  },
  {
    icon: WalletCards,
    title: "Фиксированная стоимость",
    description: "Без скрытых оплат и бесконечных доплат по мелочам.",
  },
  {
    icon: CheckCircle2,
    title: "Продающий UX",
    description: "Структура и тексты, заточенные под заявки и понятную навигацию.",
  },
  {
    icon: MoveRight,
    title: "Фокус на результате",
    description: "Главная метрика — заявки и продажи, а не количество экранов.",
  },
];

export function BenefitsSection() {
  return (
    <section className="border-b border-border/60 bg-white">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Почему со мной удобно работать
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              Я выстраиваю процесс так, чтобы вам не приходилось «разбираться в сайтах» —
              достаточно знать свой бизнес и задачи.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <Card className="h-full space-y-3 border-dashed">
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="text-sm font-semibold md:text-base">{item.title}</h3>
                <p className="text-xs text-neutral-600 md:text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
