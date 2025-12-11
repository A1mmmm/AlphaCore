"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export type CtaFormType =
  | "consultation"
  | "commercial-offer"
  | "project-request"
  | "service";

interface CtaFormProps {
  type: CtaFormType;
  title?: string;
  subtitle?: string;
  serviceTitle?: string;
}

const typeToLabel: Record<CtaFormType, string> = {
  consultation: "Заказать консультацию",
  "commercial-offer": "Получить коммерческое предложение",
  "project-request": "Оставить заявку на проект",
  "service": "Оставить заявку на услугу",
};

export function CtaForm({ type, title, subtitle }: CtaFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          type,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
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
    <form
      action={handleSubmit}
      className="space-y-4 rounded-2xl border border-border/70 bg-white/80 p-5 shadow-sm backdrop-blur md:p-6"
    >
      <div className="space-y-1.5">
        <h2 className="text-sm font-semibold md:text-base">
          {title ?? typeToLabel[type]}
        </h2>
        {subtitle && (
          <p className="text-xs text-neutral-500 md:text-sm">{subtitle}</p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="cta-name">
            Имя
          </label>
          <Input
            id="cta-name"
            name="name"
            placeholder="Как к вам обращаться"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="cta-email">
            Email
          </label>
          <Input
            id="cta-email"
            name="email"
            type="email"
            placeholder="Для связи и отправки ответа"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-neutral-600 md:text-sm" htmlFor="cta-message">
          Кратко о задаче
        </label>
        <Textarea
          id="cta-message"
          name="message"
          placeholder="Опишите, что хотите получить от сайта или услуги"
          required
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          className="min-w-[160px]"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Отправка..." : typeToLabel[type]}
        </Button>
        <p className="max-w-xs text-[11px] text-neutral-400 md:text-xs">
          Ответ в течение рабочего дня. Без навязчивых продаж.
        </p>
      </div>

      {status === "success" && (
        <p className="text-sm text-emerald-600">
          Заявка отправлена. Я свяжусь с вами в течение рабочего дня.
        </p>
      )}

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
