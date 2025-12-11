import portfolio from "@/content/portfolio.json";
import blog from "@/content/blog.json";
import services from "@/content/services.json";

export type PortfolioCategory =
  | "Интернет-магазины"
  | "Корпоративные сайты"
  | "Лендинги"
  | "Каталоги";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  thumbnail: string;
  gallery: string[];
  shortDescription: string;
  challenge: string;
  process: string[];
  result: string;
  technologies: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  topic: "разработка" | "seo" | "дизайн" | "маркетинг";
  publishedAt: string;
  readingTime: number;
}

interface RawServiceItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  steps?: string[];
  examplesSlugs?: string[];
}

export interface ServiceItem extends RawServiceItem {
  steps: string[];
  examplesSlugs: string[];
}

export function getPortfolioList(): PortfolioItem[] {
  return portfolio as PortfolioItem[];
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return getPortfolioList().find((item) => item.slug === slug);
}

export function getBlogList(): BlogPostMeta[] {
  return blog as BlogPostMeta[];
}

export function getBlogBySlug(slug: string): BlogPostMeta | undefined {
  return getBlogList().find((post) => post.slug === slug);
}

export function getServiceList(): ServiceItem[] {
  return (services as RawServiceItem[]).map(service => ({
    ...service,
    steps: service.steps || [],
    examplesSlugs: service.examplesSlugs || []
  }));
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const service = (services as RawServiceItem[]).find((s) => s.slug === slug);
  if (!service) return undefined;
  
  return {
    ...service,
    steps: service.steps || [],
    examplesSlugs: service.examplesSlugs || []
  };
}
