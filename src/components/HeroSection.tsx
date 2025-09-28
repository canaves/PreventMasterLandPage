import { Shield, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  const whatsappClick = () => {
    const message = encodeURIComponent("Olá! Vi o site da Prevent Master e gostaria de solicitar um orçamento personalizado para soluções de segurança.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const benefits = [
    "Instalação profissional em 24h",
    "Garantia estendida de 2 anos", 
    "Atendimento 24/7",
    "Orçamento gratuito"
  ];

  return (
    <section id="inicio" className="section-padding hero-gradient text-white overflow-hidden">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2 text-accent" />
                Líder em Segurança Eletrônica
              </div>
              
              <h1 className="hero-title">
                Sua Segurança,
                <span className="text-accent block">Nossa Prioridade</span>
              </h1>
              
              <p className="hero-subtitle text-white/90">
                Soluções completas em segurança eletrônica para proteger o que mais importa. 
                Cerca elétrica, portões, câmeras, alarmes e muito mais com tecnologia de ponta.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={whatsappClick}
                className="btn-cta text-lg px-8 py-4 group"
              >
                Peça Orçamento Grátis
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/80">Anos Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5.000+</div>
                <div className="text-sm text-white/80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Suporte Técnico</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <img 
                src={heroImage} 
                alt="Instalação profissional de segurança eletrônica - Prevent Master"
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg animate-pulse">
                ✓ Instalação Garantida
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg animate-pulse">
                ⚡ Resposta em 2h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;