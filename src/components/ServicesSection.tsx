import { Shield, Camera, Lock, Zap, Phone, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const whatsappClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${service} da Prevent Master. Gostaria de mais informações e orçamento.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Zap,
      title: "Cerca Elétrica",
      description: "Sistema de segurança perimetral com tecnologia de ponta. Instalação profissional e garantia estendida.",
      features: ["Controle remoto", "Sensor de rompimento", "Baixo consumo", "Resistente à chuva"],
      price: "A partir de R$ 299",
      highlight: "Mais Popular"
    },
    {
      icon: Lock,
      title: "Portão Eletrônico",
      description: "Automação residencial e comercial com motores potentes e sistema de segurança integrado.",
      features: ["Motor potente", "Controle por app", "Backup de energia", "Sensor de obstáculo"],
      price: "A partir de R$ 899"
    },
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "Monitoramento 24h com imagens em alta definição e acesso remoto pelo celular.",
      features: ["Full HD 1080p", "Visão noturna", "Gravação em nuvem", "Alerts em tempo real"],
      price: "A partir de R$ 399"
    },
    {
      icon: Shield,
      title: "Sistema de Alarme",
      description: "Proteção completa com sensores inteligentes e central de monitoramento profissional.",
      features: ["Sensores wireless", "App móvel", "Sirene potente", "Central 24h"],
      price: "A partir de R$ 599"
    },
    {
      icon: Phone,
      title: "Interfone Digital",
      description: "Comunicação segura entre ambientes com vídeo HD e desbloqueio remoto.",
      features: ["Vídeo HD", "Áudio cristalino", "Desbloqueio remoto", "Múltiplos ramais"],
      price: "A partir de R$ 299"
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Mantenha seus sistemas sempre funcionando com nosso plano de manutenção completo.",
      features: ["Visitas regulares", "Limpeza técnica", "Atualizações", "Suporte prioritário"],
      price: "A partir de R$ 99/mês"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-subtle">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções Completas em
            <span className="text-primary block">Segurança Eletrônica</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos as melhores soluções em segurança com tecnologia de ponta, 
            instalação profissional e suporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.highlight && (
                  <div className="absolute -right-2 -top-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {service.highlight}
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-primary p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-accent font-semibold">{service.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => whatsappClick(service.title)}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma Solução Personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar um projeto sob medida para suas necessidades específicas.
              Entre em contato e receba um orçamento personalizado.
            </p>
            <Button
              onClick={() => whatsappClick("Solução Personalizada")}
              className="btn-cta text-lg px-8 py-4 group"
            >
              Falar com Especialista
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;