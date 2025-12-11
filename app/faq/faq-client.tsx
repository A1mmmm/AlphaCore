"use client";

import { CtaForm } from "@/components/forms/cta-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, HelpCircle, MessageSquare, Search, Code, PenTool, Clock, CreditCard, Smartphone, Zap, Layout, Server, BarChart, Mail } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    id: "all",
    name: "Все вопросы",
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    id: "general",
    name: "Общие вопросы",
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    id: "development",
    name: "Разработка",
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "design",
    name: "Дизайн",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    id: "seo",
    name: "SEO и продвижение",
    icon: <BarChart className="h-5 w-5" />,
  },
];

const faqItems = [
  {
    id: 1,
    category: "general",
    question: "Какие типы сайтов вы создаете?",
    answer: "Создаю сайты любого типа: лендинги, корпоративные сайты, интернет-магазины, каталоги, блоги и порталы. Каждый проект разрабатываю индивидуально под задачи бизнеса.",
  },
  {
    id: 2,
    category: "general",
    question: "Сколько времени занимает разработка сайта?",
    answer: "Сроки зависят от сложности проекта: простой лендинг - 2-3 недели, корпоративный сайт - 1-2 месяца, интернет-магазин - 2-4 месяца. Точные сроки определяю после обсуждения требований.",
  },
  {
    id: 3,
    category: "general",
    question: "Предоставляете ли вы техническую поддержку после запуска?",
    answer: "Да, после запуска сайта предоставляю техническую поддержку. Включаю в пакет базовую поддержку на 1 месяц, затем можно оформить продолжение поддержки.",
  },
  {
    id: 4,
    category: "development",
    question: "На каких технологиях вы работаете?",
    answer: "Использую современные технологии: Next.js, React, TypeScript, Tailwind CSS для фронтенда; Node.js для бэкенда. Для CMS работаю с Strapi, Contentful или создаю кастомные решения.",
  },
  {
    id: 5,
    category: "development",
    question: "Адаптивная верстка включена в стоимость?",
    answer: "Да, все сайты автоматически адаптируются под все устройства: мобильные телефоны, планшеты и десктопы. Это стандартная часть разработки.",
  },
  {
    id: 6,
    category: "development",
    question: "Можно ли интегрировать сайт с CRM-системой?",
    answer: "Да, интегрирую сайты с популярными CRM-системами: amoCRM, Битрикс24, Мегаплан и другими. Это позволяет автоматически собирать заявки и вести клиентов.",
  },
  {
    id: 7,
    category: "design",
    question: "Разрабатываете ли вы дизайн?",
    answer: "Создаю минималистичный и функциональный дизайн, ориентированный на конверсию. Если нужен сложный брендбук или уникальный иллюстративный стиль, привлекаю дизайнеров-партнеров.",
  },
  {
    id: 8,
    category: "design",
    question: "Можно ли использовать свой дизайн?",
    answer: "Да, могу работать с готовым дизайн-макетом. Верстаю макеты из Figma, Sketch, Adobe XD или PSD.",
  },
  {
    id: 9,
    category: "seo",
    question: "Включена ли базовая SEO-оптимизация?",
    answer: "Да, в каждый сайт включаю базовую SEO-оптимизацию: настройка мета-тегов, микроразметки, robots.txt, sitemap.xml, оптимизация скорости загрузки.",
  },
  {
    id: 10,
    category: "seo",
    question: "Помогаете ли с продвижением сайта?",
    answer: "Базовую настройку SEO делаю в рамках разработки. Для комплексного продвижения могу порекомендовать проверенных партнеров или разработать контент-стратегию.",
  },
];

export function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-10 space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Часто задаваемые вопросы
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          Ответы на популярные вопросы о создании сайтов, сроках, стоимости и процессе работы.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "primary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Поиск вопросов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-border/60 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
      </div>

      <div className="mb-12 space-y-4">
        {filteredItems.length === 0 ? (
          <Card className="p-8 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
            <p className="text-neutral-600">Вопросы не найдены. Попробуйте изменить параметры поиска.</p>
          </Card>
        ) : (
          filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-neutral-400 transition-transform ${
                    expandedItems.includes(item.id) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedItems.includes(item.id) && (
                <div className="px-6 pb-4 text-sm text-neutral-600 border-t border-border/30">
                  {item.answer}
                </div>
              )}
            </Card>
          ))
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-[1.4fr,1.4fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Остались вопросы?</h2>
          <p className="text-sm text-neutral-600">
            Если вы не нашли ответ на свой вопрос, напишите мне. Я отвечу подробно и помогу разобраться с любыми вопросами по созданию сайта.
          </p>
        </div>
        <CtaForm
          type="consultation"
          title="Задать вопрос"
          subtitle="Опишите ваш вопрос, и я подробно на него отвечу в течение дня."
        />
      </div>
    </div>
  );
}

