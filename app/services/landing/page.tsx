import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/content";
import { ServicePage } from "@/components/services/service-page";

const service = getServiceBySlug("landing");

export const metadata: Metadata = {
  title: service?.title ?? "Лендинги",
  description:
    service?.description ??
    "Лендинги под запуск продукта, услуги или мероприятия.",
};

export default function LandingServicePage() {
  if (!service) return null;
  return <ServicePage slug="landing" />;
}
