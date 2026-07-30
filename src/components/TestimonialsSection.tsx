import { ArrowRight, ClipboardCheck, HelpCircle, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/company";

const TestimonialsSection = () => {
  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de entender o processo de atendimento da Prevent Master e solicitar um orçamento."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const steps = [
    {
      icon: MessageCircle,
      title: "Contato inicial",
      text: "Você informa o tipo de imóvel, o serviço desejado e os principais pontos de segurança que precisam de atenção.",
    },
    {
      icon: ClipboardCheck,
      title: "Levantamento da necessidade",
      text: "A equipe avalia as informações enviadas e orienta quais dados são necessários para montar uma proposta adequada.",
    },
    {
      icon: ShieldCheck,
      title: "Proposta sob medida",
      text: "O orçamento considera equipamentos, instalação, quantidade de pontos e complexidade do serviço solicitado.",
    },
    {
      icon: Wrench,
      title: "Execução e orientação",
      text: "Após aprovação, o serviço é executado com testes de funcionamento e orientação para uso correto do sistema.",
    },
  ];

  const faqs = [
    {
      question: "Como solicito um orçamento?",
      answer:
        "Envie uma mensagem pelo WhatsApp informando o serviço desejado, tipo de imóvel e cidade de atendimento. A equipe orienta os próximos passos.",
    },
    {
      question: "O orçamento tem compromisso?",
      answer:
        "Não. A solicitação inicial é sem compromisso e serve para entender a necessidade antes de avançar com a proposta.",
    },
    {
      question: "A Prevent Master atende quais cidades?",
      answer: "O atendimento informado contempla Londrina - PR, Cambé - PR e Rolândia - PR.",
    },
    {
      question: "Quais serviços posso contratar?",
      answer:
        "Câmeras de segurança, alarmes, cerca elétrica, portão eletrônico, interfone, controle de acesso e manutenção preventiva.",
    },
    {
      question: "A instalação tem garantia?",
      answer:
        "A empresa informou garantia de 1 ano sobre os materiais instalados. Demais condições devem ser confirmadas no orçamento.",
    },
    {
      question: "Posso tirar dúvidas antes de contratar?",
      answer:
        "Sim. O WhatsApp pode ser usado para dúvidas sobre instalação, equipamentos, manutenção e contratação de serviços.",
    },
  ];

  return (
    <section id="processo" className="section-padding bg-background" aria-labelledby="process-title">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-primary rounded-full text-sm font-medium mb-4">
            <ClipboardCheck aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
            Processo de atendimento
          </div>

          <h2 id="process-title" className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Do primeiro contato
            <span className="text-primary block">à contratação do serviço</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            O atendimento é conduzido por etapas simples para entender a necessidade, explicar o escopo e orientar a
            contratação de forma objetiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14 md:mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="testimonial-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-primary">
                  <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-sm font-semibold text-accent-dark mb-2">Etapa {index + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-14 md:mb-16 animate-fade-in" aria-labelledby="faq-title">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <HelpCircle aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
              Perguntas frequentes
            </div>
            <h3 id="faq-title" className="text-2xl md:text-3xl font-bold text-foreground">
              Dúvidas comuns antes de contratar
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        {/* TODO: Adicionar depoimentos reais de clientes, com autorização de uso, quando estiverem disponíveis. */}
        <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center shadow-primary animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Pronto para iniciar seu orçamento?</h3>

            <p className="text-primary-foreground/90 mb-6 text-base md:text-lg leading-relaxed">
              Fale pelo WhatsApp para solicitar orçamento, tirar dúvidas sobre instalação ou entender a contratação de
              serviços de segurança eletrônica.
            </p>

            <Button
              onClick={whatsappClick}
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 group"
              aria-label="Chamar a Prevent Master no WhatsApp, abre em nova aba"
            >
              Chamar no WhatsApp
              <ArrowRight aria-hidden="true" focusable="false" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
