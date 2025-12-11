import { CtaForm } from "@/components/forms/cta-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты | AlphaCore",
  description: "Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.",
  openGraph: {
    title: "Контакты | AlphaCore",
    description: "Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contacts`,
    type: "website",
  },
};

const contactMethods = [
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Адрес",
    value: "г. Москва, ул. Примерная, д. 1",
    href: "https://yandex.ru/maps/-/CDaZJ3t-",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    value: "hello@alphacore.ru",
    href: "mailto:hello@alphacore.ru",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Часы работы",
    value: "Пн-Пт: 10:00 - 19:00",
  },
];

const socialLinks = [
  { name: "Telegram", href: "https://t.me/alphacore" },
  { name: "VK", href: "https://vk.com/alphacore" },
  { name: "Behance", href: "https://behance.net/alphacore" },
];

export default function ContactsPage() {
  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Контакты</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="mb-16 overflow-hidden rounded-2xl bg-muted/50">
        <div className="flex h-80 items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-2 font-medium">Карта будет здесь</p>
            <p className="text-sm text-neutral-500">(интеграция с Яндекс.Картами или Google Maps)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6 lg:col-span-1">
          <h2 className="text-xl font-semibold">Контактная информация</h2>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-0.5">{method.icon}</div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500">{method.title}</h3>
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="text-foreground hover:text-primary hover:underline"
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <p className="text-foreground">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-sm font-medium text-neutral-500">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} asChild variant="outline" size="icon">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{social.name}</span>
                    {social.name === 'Telegram' && <Send className="h-4 w-4" />}
                    {social.name === 'VK' && (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.34 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m-1.32 14.75h-1.25c-.63 0-.83-.44-2.08-1.39-1.06-.8-1.5-1.31-1.77-1.31-.16 0-.2.23-.2.35v1.28c0 .25-.2.45-.45.45H6.7c-.25 0-.45-.2-.45-.45v-2.5c0-.19.1-.36.25-.46 1.26-.89 2.74-2.24 3.71-3.65.28-.4.56-.8.84-1.2.2-.28.4-.5.68-.5h1.25c.25 0 .45.2.45.45v2.7c0 .12.1.2.2.2h.4c.2 0 .3.1.4.2.1.1.2.2.3.4.3.6.7 1.2 1 1.7.1.2.2.3.4.4.2.1.3.1.5.1h1.7c.3 0 .4-.2.4-.4v-.4c0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.2-.3-.1-.1-.2-.2-.1-.4.1-.2.3-.3.5-.5.7-.6 1.2-1.3 1.6-2 .2-.3.3-.5.5-.7.2-.2.5-.3.8-.3h1.7c.3 0 .5.1.5.4v.4c0 .2-.1.3-.2.4-.1.1-.2.2-.3.4-.1.2-.2.3-.3.5-.1.2-.2.3-.3.5-.1.2-.1.4 0 .5.1.1.2.2.4.2h.4c.2 0 .4.1.5.3.1.2.2.3.3.5.1.2.1.5.1.7 0 .2-.1.4-.2.5-.1.2-.2.3-.3.5-.1.2-.2.3-.3.5-.1.2-.1.4 0 .5.1.1.2.2.4.2.2 0 .4.1.5.3.1.2.2.3.3.5.1.2.1.4 0 .6-.1.2-.2.3-.4.4-1.3.7-2.5 1.5-3.8 2.2-.4.2-.7.4-1.1.6-.2.1-.4.1-.6 0-.2-.1-.3-.2-.5-.4-.1-.1-.2-.2-.3-.4-.1-.2-.2-.3-.2-.5v-.4c0-.3.1-.5.4-.6.3-.1.6-.3.9-.4.3-.1.6-.3.9-.4.2-.1.3-.3.3-.5v-.4c0-.1-.1-.2-.2-.3-.1-.1-.2-.2-.4-.2h-1.4c-.4 0-.6.1-.8.3-.2.2-.4.4-.5.6-.1.2-.3.4-.4.7-.1.2-.2.3-.4.4-.2 0-.3.1-.5 0z" />
                      </svg>
                    )}
                    {social.name === 'Behance' && (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 7h-7v-2h7v2zm1.77 5.77a1.05 1.05 0 0 0-.3-.72 1.02 1.02 0 0 0-.73-.3h-8.48v1.5h8.48c.27 0 .5.1.7.3.2.2.3.43.3.7 0 .28-.1.5-.3.7-.2.2-.43.3-.7.3h-3.48c.1.5.3.9.6 1.2.4.3.8.5 1.3.5.3 0 .6-.1.8-.2.2-.1.4-.3.6-.5.1-.2.3-.3.5-.3.2 0 .4.1.5.3.1.2.2.4.2.6 0 .3-.1.6-.3.9-.4.5-.9.9-1.5 1.1-.6.2-1.2.3-1.8.1-.6-.2-1.1-.5-1.5-1-.4-.5-.6-1-.7-1.6-.1-.6 0-1.2.2-1.8.2-.6.6-1.1 1.1-1.5.5-.4 1.1-.6 1.7-.6.8 0 1.5.3 2 .8.5.5.8 1.2.9 2h2.77c0-.5-.1-1-.3-1.5-.2-.5-.5-1-.9-1.4zm-5.27 2.73c-.3 0-.6-.1-.8-.4-.2-.3-.4-.6-.4-1.1h2.4c0 .5-.2.8-.4 1.1-.2.3-.5.4-.8.4zm-13.5-2.5h3.46c.3 0 .5.1.7.3.2.2.3.5.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H5v1.5h3.46c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H5v1.5h4.23c.3 0 .5.1.7.3.2.2.3.5.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H3.77c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-7.5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h6.46c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H5v2.5zm12.5-10h-7.5c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7v2.5c0 .3.1.5.3.7.2.2.4.3.7.3h7.5c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7V4c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3zm-.5 2.5h-6.5V5h6.5v1.5z" />
                      </svg>
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 md:p-8">
            <h2 className="mb-6 text-xl font-semibold">Напишите нам</h2>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Как к вам обращаться?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="О чём вы хотите поговорить?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Опишите ваш проект или задайте вопрос..."
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-500">
                  Нажимая на кнопку, вы соглашаетесь с нашей{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Отправить сообщение
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Contact Form */}
          <div className="mt-8">
            <CtaForm
              type="project-request"
              title="Быстрая заявка на проект"
              subtitle="Опишите кратко задачу, и мы подготовим для вас коммерческое предложение"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
