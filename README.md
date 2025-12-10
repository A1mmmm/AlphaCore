# Сайты под ключ — лендинг на Next.js 14

Минималистичный одностраничный сайт для услуг по созданию сайтов под ключ.
Стек: **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**.

## Запуск проекта

```bash
npm install
npm run dev
```

По умолчанию проект поднимается на `http://localhost:3000`.

## Основной стек

- Next.js 14 (App Router, `app/`)
- React 18 + TypeScript
- Tailwind CSS + кастомная тема
- Framer Motion для анимаций блоков
- Небольшой набор UI-компонентов (кнопки, карточки, форма, аккордеон)
- API-роут на `/api/contact` c отправкой email через Nodemailer

## Структура проекта

- `app/`
  - `layout.tsx` — базовый layout c SEO-мета и типографикой
  - `page.tsx` — главная страница, собирающая все секции
  - `globals.css` — Tailwind и базовые стили
  - `api/contact/route.ts` — обработчик формы контактов
  - `robots.txt` — базовый robots
  - `sitemap.ts` — генерация sitemap
  - `icon.svg` — favicon сайта
- `sections/` — крупные секции страницы
  - `hero.tsx` — главный экран
  - `benefits.tsx` — преимущества
  - `services.tsx` — услуги
  - `process.tsx` — этапы работы
  - `portfolio.tsx` — портфолио
  - `pricing.tsx` — тарифы
  - `faq.tsx` — FAQ
  - `contact.tsx` — контактная форма
  - `footer.tsx` — футер
- `components/ui/` — переиспользуемые UI-компоненты
  - `button.tsx`, `card.tsx`, `accordion.tsx`, `input.tsx`, `textarea.tsx`
- `config/site.ts` — название проекта, описание, ссылки
- `lib/utils.ts` — утилита `cn` для объединения классов

## Настройка окружения

Для работы формы контактов нужен SMTP-сервер. Создайте `.env.local` в корне проекта:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user@example.com
SMTP_PASS=your_password
CONTACT_TO_EMAIL=your_target_email@example.com
```

После этого форма на нижнем экране будет отправлять письма на указанный адрес.

## Кастомизация

- Цветовую схему и размеры контейнера можно менять в `tailwind.config.ts`.
- Текстовый контент — в файлах секций из папки `sections/` и в `config/site.ts`.
- Для добавления новых страниц (например, блог) создавайте дополнительные файлы в `app/`.

## Продакшн

Сборка и запуск в продакшене:

```bash
npm run build
npm start
```

Проект оптимизирован под SEO: понятные заголовки, семантическая структура, OpenGraph-мета в `layout.tsx`, `robots.txt` и `sitemap.ts`.
