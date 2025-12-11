import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/content";
import { ServicePage } from "@/components/services/service-page";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Услуга не найдена",
      description: "Запрошенная вами услуга не найдена.",
    };
  }

  return {
    title: `${service.title} | AlphaCore`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePage slug={params.slug} />;
}

export async function generateStaticParams() {
  const services = (await import("@/content/services.json")).default;
  return services.map((service) => ({
    slug: service.slug,
  }));
}
