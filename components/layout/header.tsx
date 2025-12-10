"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/blog", label: "Блог" },
  { href: "/about", label: "Обо мне" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4 md:h-16">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent.soft text-[13px] font-bold text-accent">
            S
          </span>
          <span className="hidden text-xs text-neutral-700 sm:inline md:text-sm">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-xs text-neutral-500 md:gap-4 md:text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1 transition-colors",
                  isActive
                    ? "bg-accent.soft text-accent"
                    : "hover:bg-muted hover:text-neutral-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
