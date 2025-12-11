"use client";

import { CtaForm } from "@/components/forms/cta-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const contactMethods = [
  {
    icon: <MapPin className="h-5 w-5 text-accent" />,
    title: "Адрес",
    value: "г. Москва, ул. Примерная, д. 1",
    href: "https://yandex.ru/maps/-/CDaZJ3t-",
  },
  {
    icon: <Phone className="h-5 w-5 text-accent" />,
    title: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: <Mail className="h-5 w-5 text-accent" />,
    title: "Email",
    value: "hello@alphacore.ru",
    href: "mailto:hello@alphacore.ru",
  },
  {
    icon: <Clock className="h-5 w-5 text-accent" />,
    title: "Часы работы",
    value: "Пн-Пт: 10:00 - 19:00",
  },
];

const socialLinks = [
  { name: "Telegram", href: "https://t.me/alphacore" },
  { name: "VK", href: "https://vk.com/alphacore" },
  { name: "WhatsApp", href: "https://wa.me/79991234567" },
];

export function ContactsClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-10 space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Контакты
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        {/* Контактная информация */}
        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Как с нами связаться</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5">{method.icon}</div>
                  <div>
                    <p className="font-medium">{method.title}</p>
                    {method.href ? (
                      <Link
                        href={method.href}
                        className="text-sm text-neutral-600 hover:text-accent"
                      >
                        {method.value}
                      </Link>
                    ) : (
                      <p className="text-sm text-neutral-600">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Социальные сети</h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="sm" asChild>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
          </Card>

          {/* Карта */}
          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Наш офис</h2>
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <p className="text-sm text-neutral-500">Карта загружается...</p>
            </div>
          </Card>
        </div>

        {/* Форма обратной связи */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Написать нам</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Отправка..." : "Отправить сообщение"}
              </Button>
            </form>
            {submitStatus === "success" && (
              <p className="mt-4 text-sm text-green-600">
                Сообщение отправлено! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Ошибка при отправке. Попробуйте еще раз.
              </p>
            )}
          </Card>

          <CtaForm
            type="project-request"
            title="Быстрая заявка"
            subtitle="Оставьте краткую информацию о проекте, и мы подготовим коммерческое предложение."
          />
        </div>
      </div>
    </div>
  );
}
