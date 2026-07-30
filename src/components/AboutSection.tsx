import { ArrowRight, Award, BadgeCheck, Clock, HelpCircle, MessageCircle, PackageCheck, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappUrl } from "@/lib/company";

const AboutSection = () => {
  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de falar com a Prevent Master sobre uma instalação ou manutenção de proteção patrimonial."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const differentials = [
    {
      icon: MessageCircle,
      title: "Respostas rápidas",
      description: "Atendimento direto para esclarecer dúvidas sobre instalação, manutenção e escolha de equipamentos.",
    },
    {
      icon: HelpCircle,
      title: "Orçamento sem compromisso",
      description: "Você informa a necessidade e recebe orientação para avançar com uma proposta adequada ao imóvel.",
    },
    {
      icon: BadgeCheck,
      title: "1 ano de garantia",
      description: "Garantia de 1 ano sobre os materiais instalados, conforme informado pela empresa.",
    },
    {
      icon: PackageCheck,
      title: "Equipamentos originais",
      description: "Uso de equipamentos confiáveis e originais para manter qualidade e segurança na instalação.",
    },
    {
      icon: Award,
      title: "Mais de 10 anos no mercado",
      description: "Experiência acumulada em serviços de proteção patrimonial para diferentes tipos de imóveis.",
    },
    {
      icon: Shield,
      title: "Marcas renomadas",
      description: "Utilização de marcas reconhecidas no setor, como Intelbras e PPA.",
    },
  ];

  const reasons = [
    "Atendimento focado em entender a necessidade antes de indicar equipamentos.",
    "Comunicação objetiva para explicar escopo, instalação e próximos passos.",
    "Soluções para residências, comércios, condomínios e empresas.",
    "Orientação para uso correto dos sistemas após a instalação.",
  ];

  return (
    <section id="sobre" className="section-padding bg-background" aria-labelledby="about-title">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Shield aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
            Por que escolher a Prevent Master?
          </div>

          <h2 id="about-title" className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Proteção patrimonial
            <span className="text-primary block">com atendimento claro e responsável</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            A Prevent Master atua com soluções de proteção patrimonial para quem precisa proteger imóveis, controlar
            acessos e manter equipamentos funcionando com orientação técnica e comunicação direta.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start mb-14 md:mb-16">
          <div className="bg-gradient-primary rounded-lg p-6 md:p-8 text-primary-foreground shadow-primary animate-fade-in">
            <div className="flex items-center gap-3 mb-5">
              <Wrench aria-hidden="true" focusable="false" className="h-7 w-7 text-accent" />
              <h3 className="text-2xl font-bold leading-tight">Atendimento orientado à necessidade</h3>
            </div>

            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              Cada orçamento considera o tipo de imóvel, a finalidade da proteção, os equipamentos necessários e o
              escopo do serviço. Assim, a conversa começa pela necessidade real, não por pacotes genéricos.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start">
                  <BadgeCheck aria-hidden="true" focusable="false" className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-sm">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="bg-gradient-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-14 md:mb-16">
          <div className="p-5 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
            <div className="text-sm font-semibold text-primary mb-2">Área de atendimento</div>
            <p className="text-sm text-muted-foreground mb-3">Atendimento regional no norte do Paraná.</p>
            <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {company.serviceAreas.map((area) => (
                <li key={area} className="rounded-md border border-border bg-background px-3 py-1 font-medium text-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
            <div className="text-sm font-semibold text-primary mb-2">Horário de atendimento</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {company.businessHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
            <div className="text-sm font-semibold text-primary mb-2">Contato oficial</div>
            <p className="text-sm text-muted-foreground">{company.phoneDisplay}</p>
            <p className="text-sm text-muted-foreground break-words">{company.email}</p>
            <p className="text-sm text-muted-foreground mt-1">CNPJ: {company.cnpj}</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 text-center shadow-lg animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-primary mb-3">
            <Clock aria-hidden="true" focusable="false" className="h-5 w-5" />
            <span className="text-sm font-semibold">Atendimento por WhatsApp</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Quer avaliar uma solução para seu imóvel?</h3>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl mx-auto">
            Envie uma mensagem informando o tipo de imóvel, serviço desejado e melhor horário para retorno.
          </p>

          <Button
            onClick={whatsappClick}
            className="btn-cta text-lg px-8 py-4 group"
            aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
          >
            Solicitar orçamento pelo WhatsApp
            <ArrowRight aria-hidden="true" focusable="false" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
