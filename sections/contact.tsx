"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Не удалось отправить заявку. Попробуйте позже.");
      }

      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message ?? "Что-то пошло не так. Попробуйте ещё раз.");
    }
  }

  return (
    <section className="border-b border-border/60 bg-muted/40">
      <div className="container py-14 md:py-18 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1.4fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Обсудим ваш проект
            </h2>
            <p className="max-w-md text-sm text-neutral-600 md:text-base">
              Кратко опишите нишу, формат бизнеса и задачу для сайта. Я отвечу в течение
              рабочего дня и предложу оптимальный формат запуска.
            </p>
            <div className="space-y-1.5 text-sm text-neutral-600">
              <p>
                Email: <span className="font-medium">hello@example.com</span>
              </p>
              <p>
                Telegram: <span className="font-medium">@your_username</span>
              </p>
            </div>
          </div>

          <form
            action={handleSubmit}
            className="space-y-4 rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm backdrop-blur md:p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="name">
                  Имя
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Для связи и отправки брифа"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="project">
                Кратко о проекте
              </label>
              <Textarea
                id="project"
                name="project"
                placeholder="Ниша, формат, текущий сайт (если есть) и основная задача"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                className="min-w-[150px]"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Отправка..." : "Отправить заявку"}
              </Button>
              <p className="max-w-xs text-[11px] text-neutral-400 md:text-xs">
                Отправляя форму, вы соглашаетесь на обработку персональных данных исключительно для ответа на запрос.
              </p>
            </div>

            {status === "success" && (
              <p className="text-sm text-emerald-600">
                Заявка отправлена. Я свяжусь с вами в течение рабочего дня.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
