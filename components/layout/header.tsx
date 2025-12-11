"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Главная" },
  { 
    label: "Услуги",
    submenu: [
      { href: "/services", label: "Все услуги" },
      { href: "/services/landing", label: "Лендинги" },
      { href: "/services/ecommerce", label: "Интернет-магазины" },
      { href: "/services/corporate", label: "Корпоративные сайты" },
      { href: "/services/catalog", label: "Каталоги" },
    ]
  },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/blog", label: "Блог" },
  { 
    label: "Компания",
    submenu: [
      { href: "/about", label: "О нас" },
      { href: "/process", label: "Процесс работы" },
      { href: "/faq", label: "Вопросы и ответы" },
    ]
  },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent.soft text-[13px] font-bold text-accent">
            {siteConfig.name.charAt(0)}
          </span>
          <span className="hidden text-sm font-medium text-neutral-800 sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-neutral-600 md:flex">
          {navLinks.map((link) => (
            <div key={link.href || link.label} className="relative group">
              {link.href ? (
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-muted",
                    isActive(link.href) && "text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubmenu(link.label)}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-muted",
                      link.submenu?.some(item => isActive(item.href)) && "text-accent"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubmenu === link.label && (
                    <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border bg-white p-2 shadow-lg">
                      {link.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm hover:bg-muted",
                            isActive(subItem.href) && "bg-accent/10 text-accent"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="menu-button md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Меню</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu absolute left-0 right-0 top-16 z-50 border-t bg-white shadow-lg md:hidden">
          <div className="container py-2">
            {navLinks.map((link) => (
              <div key={link.href || link.label} className="border-b last:border-b-0">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(link.label)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium hover:bg-muted"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === link.label && (
                      <div className="bg-muted/30 pl-6">
                        {link.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm hover:bg-muted"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
