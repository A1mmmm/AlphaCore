import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type CtaType =
  | "consultation"
  | "commercial-offer"
  | "project-request";

export async function POST(request: NextRequest) {
  try {
    const { name, email, project, type, message } =
      (await request.json()) as {
        name?: string;
        email?: string;
        project?: string;
        type?: CtaType;
        message?: string;
      };

    if (!name || !email || (!project && !message)) {
      return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER;

    const subjectByType: Record<CtaType, string> = {
      consultation: "Заявка на консультацию",
      "commercial-offer": "Запрос коммерческого предложения",
      "project-request": "Заявка на проект",
    };

    const resolvedType: CtaType = type ?? "project-request";
    const subject = subjectByType[resolvedType];

    const bodyLines = [
      `Тип заявки: ${subject}`,
      `Имя: ${name}`,
      `Email: ${email}`,
      "",
      project ? `Проект: ${project}` : "",
      message ? `Сообщение: ${message}` : "",
    ].filter(Boolean);

    await transport.sendMail({
      from: `Сайт под ключ <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: bodyLines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Не удалось отправить письмо. Попробуйте позже." },
      { status: 500 }
    );
  }
}
