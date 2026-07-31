import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import EquipmentShowcaseSection from "@/components/EquipmentShowcaseSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <SolutionsSection />
        <EquipmentShowcaseSection />
        <ServicesSection />
        <AboutSection />
        <TrustSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
