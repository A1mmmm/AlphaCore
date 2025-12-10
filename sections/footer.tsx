import { siteConfig } from "@/config/site";

export function FooterSection() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container flex flex-col gap-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:text-sm">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-neutral-800">{siteConfig.name}</span>
          <span className="text-[11px] md:text-xs">
            Сайты под ключ: интернет-магазины, корпоративные сайты, лендинги.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-800"
          >
            Telegram
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="hover:text-neutral-800"
          >
            {siteConfig.links.email}
          </a>
          <span className="text-[11px] md:text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
