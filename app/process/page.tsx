import { CtaForm } from "@/components/forms/cta-form";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Code,
  MessageSquare,
  PenTool,
  Smartphone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Процесс работы | AlphaCore",
  description:
    "Как мы работаем над вашим проектом: этапы, сроки и что входит в каждый этап.",
  openGraph: {
    title: "Процесс работы | AlphaCore",
    description:
      "Как мы работаем над вашим проектом: этапы, сроки и что входит в каждый этап.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/process`,
    type: "website",
  },
};

const processSteps = [
  {
    title: "Обсуждение задачи",
    description:
      "Знакомимся с вашим бизнесом, обсуждаем цели и задачи проекта, уточняем детали.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: "Прототипирование",
    description:
      "Создаем прототип будущего сайта, продумываем структуру и пользовательские сценарии.",
    icon: <PenTool className="h-6 w-6 text-primary" />,
  },
  {
    title: "Дизайн",
    description:
      "Разрабатываем современный, минималистичный дизайн, который подчеркнет преимущества вашего бизнеса.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Разработка",
    description:
      "Верстаем и программируем сайт, настраиваем все необходимые функции и интеграции.",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: "Тестирование",
    description:
      "Тщательно тестируем сайт на разных устройствах и браузерах, исправляем ошибки.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Запуск и поддержка",
    description:
      "Помогаем с запуском проекта и оказываем техническую поддержку после сдачи.",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
];

export default function ProcessPage() {
  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Как мы работаем
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          Прозрачный и понятный процесс разработки, который гарантирует
          качественный результат и соблюдение сроков.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Card
            key={index}
            className="group p-6 transition-all hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {step.icon}
            </div>
            <h3 className="mb-2 text-lg font-medium">{step.title}</h3>
            <p className="text-sm text-neutral-600">{step.description}</p>
            <div className="mt-4 text-sm font-medium text-primary">
              Шаг {index + 1} из {processSteps.length}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-muted/50 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Готовы обсудить ваш проект?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Оставьте заявку, и мы обсудим детали вашего проекта в удобном для
            вас формате.
          </p>
          <div className="mt-8">
            <CtaForm
              type="consultation"
              title="Обсудить проект"
              subtitle="Кратко опишите задачу, и я свяжусь с вами в ближайшее время"
              className="mx-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
