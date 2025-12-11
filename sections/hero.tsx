"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-gradient border-b border-border/60">
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 md:grid-cols-[1.6fr,1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="inline-flex rounded-full bg-accent.soft px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent md:text-[11px]">
              Веб-разработка с гарантией результата
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Создаю сайты, которые
              <span className="block text-accent">продают ваши услуги</span>
            </h1>
            <p className="max-w-xl text-sm text-neutral-600 md:text-base">
              Разрабатываю эффективные веб-решения для бизнеса: от лендингов до интернет-магазинов. 
              Каждый проект окупается за счет продуманной структуры и конверсионного дизайна.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="shadow-md">
                Получить консультацию
              </Button>
              <p className="text-xs text-neutral-500 md:text-sm">
                Ответ в течение рабочего дня. Без навязчивых продаж.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-neutral-500 md:text-sm">
              <div>
                <span className="block font-medium text-foreground">7–10 дней</span>
                срок запуска типового проекта
              </div>
              <div>
                <span className="block font-medium text-foreground">30+</span>
                реализованных проектов
              </div>
              <div>
                <span className="block font-medium text-foreground">Фиксированная</span>
                стоимость и прозрачные этапы
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[260px] overflow-hidden rounded-[2rem] border border-border/60 bg-white/70 p-6 shadow-sm backdrop-blur md:h-[320px]"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#dbeafe_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#e5e7eb_0,_transparent_55%)]" />
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-neutral-500">Формат работы</p>
                <p className="mt-2 text-sm font-semibold">
                  Под ключ: от структуры и дизайна до интеграций и запуска.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Для кого
                  </p>
                  <p className="mt-1 font-medium text-neutral-800">
                    Малый и средний бизнес, локальные проекты, онлайн-сервисы.
                  </p>
                </div>
                <div className="rounded-2xl bg-neutral-900 p-3 text-white">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Результат
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Сайт, который не просто «красивый», а даёт стабильный поток заявок.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
