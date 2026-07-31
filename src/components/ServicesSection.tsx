import { ArrowRight, Camera, Lock, Phone, Settings, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/company";

const services = [
  {
    icon: Zap,
    title: "Cerca elétrica",
    description: "Proteção perimetral com avaliação do muro, definição dos equipamentos e orientação para uso seguro.",
    features: ["Avaliação do perímetro", "Instalação técnica", "Orientação de uso"],
    cta: "Orçar cerca elétrica",
  },
  {
    icon: Shield,
    title: "Concertina",
    description: "Barreira física para muros e áreas expostas, com acabamento alinhado ao tipo de imóvel.",
    features: ["Análise do acesso", "Aplicação sob medida", "Acabamento profissional"],
    cta: "Orçar concertina",
  },
  {
    icon: Camera,
    title: "Câmeras de segurança",
    description: "Monitoramento com posicionamento estratégico, ajustes de imagem e configuração de acesso.",
    features: ["Definição dos pontos", "Configuração remota", "Ajustes de imagem"],
    cta: "Orçar câmeras",
  },
  {
    icon: Lock,
    title: "Portão eletrônico",
    description: "Automação para residências, empresas e condomínios conforme rotina de uso e tipo de abertura.",
    features: ["Motor adequado", "Configuração de controles", "Testes de funcionamento"],
    cta: "Orçar portão",
  },
  {
    icon: Phone,
    title: "Interfone e acesso",
    description: "Comunicação e controle de entrada para imóveis que precisam organizar circulação e visitantes.",
    features: ["Mapeamento dos acessos", "Instalação organizada", "Orientação operacional"],
    cta: "Tirar dúvidas sobre acesso",
  },
  {
    icon: Settings,
    title: "Manutenção preventiva",
    description: "Verificação de equipamentos instalados para reduzir falhas e preservar o funcionamento do sistema.",
    features: ["Inspeção técnica", "Limpeza e ajustes", "Diagnóstico de falhas"],
    cta: "Solicitar manutenção",
  },
];

const ServicesSection = () => {
  const whatsappClick = (message: string) => {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicos" className="section-padding bg-gradient-subtle" aria-labelledby="services-title">
      <div className="container-padding">
        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="animate-fade-in">
            <div className="section-kicker">
              <Shield aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Serviços oferecidos
            </div>

            <h2 id="services-title" className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Soluções para proteger
              <span className="block text-primary">o perímetro, os acessos e a rotina</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:justify-self-end">
            A proposta é montada conforme o ambiente, o nível de exposição e o tipo de instalação. O foco é indicar o
            necessário com clareza, sem pacote pronto empurrado para todo imóvel.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.title}
                className="service-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-primary shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight text-foreground md:text-xl">{service.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-dark">Sob orçamento</p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="mb-6 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-muted-foreground">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
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
                  className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary-light group"
                  aria-label={`${service.cta} pelo WhatsApp, abre em nova aba`}
                >
                  {service.cta}
                  <ArrowRight aria-hidden="true" focusable="false" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 rounded-lg border border-border bg-card p-6 shadow-lg md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h3 className="text-xl font-bold text-foreground md:text-2xl">Não sabe qual solução combina com o imóvel?</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Envie uma mensagem com cidade, tipo de imóvel e o que deseja proteger. A equipe orienta o melhor caminho
              para orçamento.
            </p>
          </div>
          <Button
            onClick={() =>
              whatsappClick("Olá! Gostaria de uma orientação para escolher uma solução de proteção patrimonial.")
            }
            className="btn-cta w-full px-7 py-4 text-base group md:w-auto"
            aria-label="Solicitar orientação pelo WhatsApp, abre em nova aba"
          >
            Receber orientação
            <ArrowRight aria-hidden="true" focusable="false" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
