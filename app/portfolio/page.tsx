"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPortfolioList, type PortfolioCategory } from "@/lib/content";
import { Card } from "@/components/ui/card";

const categories: (PortfolioCategory | "Все проекты")[] = [
  "Все проекты",
  "Интернет-магазины",
  "Корпоративные сайты",
  "Лендинги",
  "Каталоги",
];

const allProjects = getPortfolioList();

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<
    PortfolioCategory | "Все проекты"
  >("Все проекты");

  const filtered =
    activeCategory === "Все проекты"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="container py-10 md:py-14 lg:py-16">
      <div className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Портфолио
        </h1>
        <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
          Подборка проектов: интернет-магазины, корпоративные сайты, лендинги и
          каталоги. Демо-примеры оформлены в едином минималистичном стиле.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 text-xs md:text-sm">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                "rounded-full border px-3 py-1 transition-colors " +
                (isActive
                  ? "border-accent bg-accent.soft text-accent"
                  : "border-border bg-white hover:bg-muted")
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <Link href={`/portfolio/${project.slug}`}>
              <Card className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden border-border/70">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-accent.soft via-white to-neutral-100">
                  <div className="h-full w-full scale-[1.02] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16)_0,_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(15,23,42,0.08)_0,_transparent_55%)] transition-transform group-hover:scale-105" />
                </div>
                <div className="mt-4 space-y-1.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                    {project.category}
                  </p>
                  <h2 className="text-sm font-semibold md:text-base">
                    {project.title}
                  </h2>
                  <p className="text-xs text-neutral-600 md:text-sm">
                    {project.shortDescription}
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
