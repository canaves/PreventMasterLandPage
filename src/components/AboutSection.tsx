import { Shield, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappUrl } from "@/lib/company";

const AboutSection = () => {
  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de conhecer melhor a Prevent Master e solicitar um orçamento."),
      "_blank",
    );
  };

  const features = [
    {
      icon: Shield,
      title: "Atendimento técnico",
      description: "Indicação de soluções conforme o imóvel, o objetivo de segurança e a rotina de uso.",
    },
    {
      icon: Users,
      title: "Comunicação direta",
      description: "Contato facilitado por WhatsApp, telefone e e-mail para tirar dúvidas e solicitar orçamento.",
    },
    {
      icon: Award,
      title: "Dados empresariais claros",
      description: `CNPJ ${company.cnpj}, telefone ${company.phoneDisplay} e e-mail oficial disponíveis para contato.`,
    },
    {
      icon: Clock,
      title: "Acompanhamento",
      description: "Orientação sobre instalação, funcionamento e cuidados com os equipamentos contratados.",
    },
  ];

  const values = [
    "Diagnóstico antes da indicação de equipamentos",
    "Proposta compatível com a necessidade do cliente",
    "Comunicação objetiva sobre escopo, prazos e instalação",
    "Organização no atendimento e no pós-instalação",
    "Orientação para uso correto dos sistemas instalados",
  ];

  return (
    <section id="sobre" className="section-padding bg-background" aria-labelledby="about-title">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Shield aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
            Sobre a Prevent Master
          </div>

          <h2 id="about-title" className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Segurança eletrônica
            <span className="text-primary block">com atendimento profissional</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            A Prevent Master atua com soluções de segurança eletrônica para clientes que precisam proteger imóveis,
            controlar acessos e manter equipamentos funcionando com orientação técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center mb-14 md:mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold leading-tight text-foreground mb-5">Como conduzimos o atendimento</h3>

            <p className="text-muted-foreground mb-5 leading-relaxed">
              O primeiro passo é entender o tipo de imóvel, a necessidade de proteção e os equipamentos desejados. A
              partir disso, a Prevent Master orienta o cliente sobre as alternativas de instalação e manutenção.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              O orçamento deve considerar o local, a quantidade de pontos, os equipamentos necessários e o escopo do
              serviço. Por isso, os valores são informados após análise da solicitação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
                <div className="text-sm font-semibold text-primary mb-1">CNPJ</div>
                <div className="text-sm text-muted-foreground">{company.cnpj}</div>
              </div>
              <div className="p-4 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
                <div className="text-sm font-semibold text-primary mb-1">Contato</div>
                <div className="text-sm text-muted-foreground">{company.phoneDisplay}</div>
              </div>
              <div className="p-4 bg-gradient-subtle rounded-lg border border-border animate-fade-in">
                <div className="text-sm font-semibold text-primary mb-1">E-mail</div>
                <div className="text-sm text-muted-foreground break-words">{company.email}</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-gradient-primary rounded-lg p-6 md:p-8 text-primary-foreground shadow-primary">
              <h4 className="text-xl font-bold mb-6">Compromissos de atendimento</h4>
              <ul className="space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex items-start">
                    <CheckCircle aria-hidden="true" focusable="false" className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14 md:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-primary">
                  <IconComponent aria-hidden="true" focusable="false" className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 text-center shadow-lg animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Quer avaliar uma solução para seu imóvel?</h3>

          <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl mx-auto">
            Envie uma mensagem informando o tipo de imóvel, serviço desejado e melhor horário para retorno.
          </p>

          <Button onClick={whatsappClick} className="btn-cta text-lg px-8 py-4 group" aria-label="Solicitar orientação pelo WhatsApp, abre em nova aba">
            Solicitar orientação
            <ArrowRight aria-hidden="true" focusable="false" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
