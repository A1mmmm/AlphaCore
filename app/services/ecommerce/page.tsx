import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/content";
import { ServicePage } from "@/components/services/service-page";

const service = getServiceBySlug("ecommerce");

export const metadata: Metadata = {
  title: service?.title ?? "Интернет-магазины",
  description:
    service?.description ?? "Интернет-магазины с каталогом, корзиной и оплатой.",
};

export default function EcommerceServicePage() {
  if (!service) return null;
  return <ServicePage slug="ecommerce" />;
}
