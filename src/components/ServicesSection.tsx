import { ArrowRight, Camera, Lock, Phone, Settings, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/company";

const ServicesSection = () => {
  const whatsappClick = (message: string) => {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const services = [
    {
      icon: Zap,
      title: "Cerca elétrica",
      description:
        "Soluções para proteção perimetral com avaliação do local, definição dos equipamentos adequados e instalação técnica.",
      features: ["Avaliação do perímetro", "Orientação sobre uso", "Instalação sob orçamento", "Manutenção quando necessária"],
      cta: "Orçar cerca elétrica",
    },
    {
      icon: Lock,
      title: "Portão eletrônico",
      description:
        "Automação de portões residenciais, comerciais e condominiais conforme o tipo de abertura e a rotina de uso.",
      features: ["Escolha do motor adequado", "Configuração de controles", "Testes de funcionamento", "Orientação ao cliente"],
      cta: "Orçar portão eletrônico",
    },
    {
      icon: Camera,
      title: "Câmeras de segurança",
      description:
        "Projetos de monitoramento com posicionamento estratégico de câmeras e orientação para acesso às imagens.",
      features: ["Definição dos pontos", "Instalação organizada", "Configuração de acesso", "Ajustes de imagem"],
      cta: "Orçar câmeras",
    },
    {
      icon: Shield,
      title: "Sistema de alarme",
      description:
        "Sistemas de detecção e aviso para reforçar a segurança de imóveis residenciais e comerciais.",
      features: ["Análise dos ambientes", "Configuração de sensores", "Teste de acionamento", "Treinamento de uso"],
      cta: "Orçar sistema de alarme",
    },
    {
      icon: Phone,
      title: "Interfone e controle de acesso",
      description:
        "Soluções para comunicação, identificação e controle de entrada em residências, empresas e condomínios.",
      features: ["Mapeamento dos acessos", "Instalação técnica", "Configuração do sistema", "Orientação operacional"],
      cta: "Tirar dúvidas sobre acesso",
    },
    {
      icon: Settings,
      title: "Manutenção preventiva",
      description:
        "Verificação de equipamentos instalados para reduzir falhas, corrigir ajustes e preservar o funcionamento do sistema.",
      features: ["Inspeção técnica", "Limpeza e ajustes", "Diagnóstico de falhas", "Recomendações de melhoria"],
      cta: "Solicitar manutenção",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-subtle" aria-labelledby="services-title">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Shield aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
            Serviços
          </div>

          <h2 id="services-title" className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Soluções de segurança
            <span className="text-primary block">dimensionadas para cada imóvel</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Cada atendimento começa pela necessidade real do cliente. A proposta é montada conforme o ambiente, os
            equipamentos indicados e o tipo de instalação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground">{service.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-dark">Sob orçamento</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() =>
                    whatsappClick(
                      `Olá! Tenho interesse em ${service.title} com a Prevent Master. Gostaria de tirar dúvidas e solicitar orçamento.`,
                    )
                  }
                  className="mt-auto w-full bg-primary hover:bg-primary-light text-primary-foreground group"
                  aria-label={`${service.cta} pelo WhatsApp, abre em nova aba`}
                >
                  {service.cta}
                  <ArrowRight aria-hidden="true" focusable="false" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Precisa combinar mais de uma solução?</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl mx-auto">
              Envie uma mensagem descrevendo o imóvel e o que deseja proteger. A equipe retorna com orientação inicial
              para orçamento e contratação do serviço.
            </p>
            <Button
              onClick={() =>
                whatsappClick("Olá! Gostaria de contratar serviços de proteção patrimonial com a Prevent Master.")
              }
              className="btn-cta text-lg px-8 py-4 group"
              aria-label="Contratar serviços da Prevent Master pelo WhatsApp, abre em nova aba"
            >
              Contratar serviços
              <ArrowRight aria-hidden="true" focusable="false" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
