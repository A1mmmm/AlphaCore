"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MoveRight, Smartphone, Timer, WalletCards, Workflow } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    title: "Запуск за 7-10 дней",
    description: "Быстрый старт без потери качества. Первые заявки уже через 2 недели после старта.",
  },
  {
    icon: Workflow,
    title: "Прозрачный процесс",
    description: "Еженедельные отчеты, четкие этапы, фиксация сроков и бюджета в договоре.",
  },
  {
    icon: Smartphone,
    title: "Конверсия на всех устройствах",
    description: "50%+ трафика с мобильных. Адаптивный дизайн с фокусом на мобильные продажи.",
  },
  {
    icon: WalletCards,
    title: "Окупаемость от 3 месяцев",
    description: "Продающий дизайн и эффективная структура обеспечивают быстрый возврат инвестиций.",
  },
  {
    icon: CheckCircle2,
    title: "Гарантия результата",
    description: "Если сайт не приносит заявки — доработаю бесплатно. Работаю на долгосрочный результат.",
  },
  {
    icon: MoveRight,
    title: "Полное сопровождение",
    description: "От аналитики до запуска рекламы. Под ключ — просто передаете мне задачу.",
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
