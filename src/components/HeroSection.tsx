import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";
import { whatsappUrl } from "@/lib/company";

const HeroSection = () => {
  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Vi o site da Prevent Master e gostaria de solicitar um orçamento para segurança eletrônica."),
      "_blank",
    );
  };

  const benefits = [
    "Atendimento por WhatsApp",
    "Projeto conforme necessidade",
    "Instalação técnica",
    "Manutenção e suporte",
  ];

  return (
    <section id="inicio" className="relative overflow-hidden hero-gradient text-white" aria-labelledby="hero-title">
      <div className="container-padding">
        <div className="grid min-h-[calc(100svh-4rem)] lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center py-14 md:py-20 lg:py-24">
          <div className="space-y-7 md:space-y-8 animate-fade-in">
            <div className="space-y-5">
              <div className="inline-flex max-w-full items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Zap aria-hidden="true" focusable="false" className="h-4 w-4 mr-2 text-accent" />
                <span className="truncate">Segurança eletrônica residencial e empresarial</span>
              </div>

              <h1 id="hero-title" className="hero-title">
                Proteção eletrônica
                <span className="text-accent block">com orientação técnica</span>
              </h1>

              <p className="hero-subtitle text-white/90">
                A Prevent Master atende projetos de segurança eletrônica com soluções sob medida para residências,
                condomínios e empresas. Fale com a equipe para avaliar o cenário e receber uma proposta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center rounded-lg border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-sm">
                  <CheckCircle aria-hidden="true" focusable="false" className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="ml-2 text-sm text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={whatsappClick} className="btn-cta text-lg px-8 py-4 group" aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba">
                Solicitar orçamento
                <ArrowRight aria-hidden="true" focusable="false" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="min-h-12 border-white/30 text-white hover:bg-white/10 bg-transparent px-6 md:px-8 py-3"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Ir para a seção de serviços"
              >
                Conheça os serviços
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div className="rounded-lg bg-white/5 p-4">
                <div className="text-2xl font-bold text-accent">01</div>
                <div className="text-sm text-white/80">Análise da necessidade</div>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <div className="text-2xl font-bold text-accent">02</div>
                <div className="text-sm text-white/80">Proposta técnica</div>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <div className="text-2xl font-bold text-accent">03</div>
                <div className="text-sm text-white/80">Instalação e orientação</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative rounded-lg border border-white/20 bg-white/10 p-3 md:p-4 shadow-xl backdrop-blur-sm">
              <img
                src={heroImage}
                alt="Instalação de solução de segurança eletrônica"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />

              <div className="absolute right-3 top-3 md:-right-4 md:-top-4 bg-success text-primary px-4 py-2 rounded-lg text-xs md:text-sm font-semibold shadow-lg">
                Instalação técnica
              </div>

              <div className="absolute bottom-3 left-3 md:-bottom-4 md:-left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs md:text-sm font-semibold shadow-lg">
                Atendimento via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
