import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/content";
import { ServicePage } from "@/components/services/service-page";

const service = getServiceBySlug("corporate");

export const metadata: Metadata = {
  title: service?.title ?? "Корпоративные сайты",
  description:
    service?.description ?? "Корпоративные сайты под постоянный поток заявок и представительство компании.",
};

export default function CorporateServicePage() {
  if (!service) return null;
  return <ServicePage slug="corporate" />;
}
