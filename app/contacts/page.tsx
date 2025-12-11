import { Metadata } from "next";
import { ContactsClient } from "./contacts-client";

export const metadata: Metadata = {
  title: "Контакты | AlphaCore",
  description: "Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.",
  openGraph: {
    title: "Контакты | AlphaCore",
    description: "Свяжитесь с нами любым удобным способом. Мы всегда на связи и готовы обсудить ваш проект.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/contacts`,
    type: "website",
  },
};

export default function ContactsPage() {
  return <ContactsClient />;
}
