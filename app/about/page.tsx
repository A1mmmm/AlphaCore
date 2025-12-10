import type { Metadata } from "next";
import { ExperienceCounter } from "@/components/stats/experience-counter";
import { CtaForm } from "@/components/forms/cta-form";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Кто будет делать ваш сайт: подход к работе, опыт, форматы сотрудничества.",
};

export default function AboutPage() {
  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-10 grid gap-8 md:grid-cols-[1.6fr,1.2fr] md:items-start">
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Обо мне
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            Я занимаюсь созданием сайтов под ключ: от структуры и дизайна до
            разработки и запуска. Работаю с малым и средним бизнесом, экспертами
            и онлайн-сервисами.
          </p>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            Моя задача — чтобы сайт приносил заявки и помогал бизнесу расти, а не
            просто «красиво выглядел». Поэтому много внимания уделяю структуре,
            текстам и понятным сценариям для пользователя.
          </p>
        </section>
        <section className="space-y-4 rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm md:p-6">
          <h2 className="text-sm font-semibold md:text-base">
            Немного цифр
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ExperienceCounter to={5} label="лет в веб-разработке" />
            <ExperienceCounter to={30} label="запущенных проектов" />
          </div>
          <p className="text-xs text-neutral-500 md:text-sm">
            Цифры условные и могут быть скорректированы под реальные показатели.
          </p>
        </section>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.4fr,1.4fr] md:items-start">
        <section className="space-y-3">
          <h2 className="text-sm font-semibold md:text-base">
            Как я подхожу к проектам
          </h2>
          <ul className="space-y-1.5 text-sm text-neutral-600 md:text-base">
            <li>
              1. Сначала разбираюсь в бизнесе и задачах, а уже потом предлагаю
              формат сайта.
            </li>
            <li>
              2. Всегда фиксирую этапы и сроки, чтобы вам было понятно, что
              происходит с проектом.
            </li>
            <li>
              3. Делаю ставку на понятную структуру, аккуратный дизайн и
              комфортный опыт для пользователя.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <CtaForm
            type="consultation"
            title="Обсудить ваш проект"
            subtitle="Кратко расскажите о бизнесе и задаче. Я предложу формат сайта и примерный бюджет."
          />
        </section>
      </div>
    </div>
  );
}
