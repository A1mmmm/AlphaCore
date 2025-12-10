import { HeroSection } from "@/sections/hero";
import { BenefitsSection } from "@/sections/benefits";
import { ServicesSection } from "@/sections/services";
import { ProcessSection } from "@/sections/process";
import { PortfolioSection } from "@/sections/portfolio";
import { PricingSection } from "@/sections/pricing";
import { FAQSection } from "@/sections/faq";
import { ContactSection } from "@/sections/contact";
import { FooterSection } from "@/sections/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
