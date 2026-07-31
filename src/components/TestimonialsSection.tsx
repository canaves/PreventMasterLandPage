import { ClipboardCheck, HelpCircle, MessageCircle, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contato inicial",
    text: "Você informa o tipo de imóvel, cidade, serviço desejado e os pontos que precisam de atenção.",
  },
  {
    icon: ClipboardCheck,
    title: "Levantamento",
    text: "A equipe avalia as informações e orienta quais dados ajudam a montar uma proposta adequada.",
  },
  {
    icon: ShieldCheck,
    title: "Proposta",
    text: "O orçamento considera equipamentos, instalação, quantidade de pontos e complexidade do serviço.",
  },
  {
    icon: Wrench,
    title: "Execução",
    text: "Após aprovação, o serviço é executado com testes de funcionamento e orientação de uso.",
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
    answer: "Não. A solicitação inicial é sem compromisso e serve para entender a necessidade antes da proposta.",
  },
  {
    question: "A Prevent Master atende quais cidades?",
    answer: "O atendimento informado contempla Londrina - PR, Cambé - PR e Rolândia - PR.",
  },
  {
    question: "Quais serviços posso contratar?",
    answer:
      "Câmeras de segurança, alarmes, cerca elétrica, concertina, portão eletrônico, interfone, controle de acesso e manutenção preventiva.",
  },
  {
    question: "A instalação tem garantia?",
    answer:
      "A empresa informou garantia de 1 ano sobre os materiais instalados. Demais condições devem ser confirmadas no orçamento.",
  },
  {
    question: "Posso tirar dúvidas antes de contratar?",
    answer: "Sim. O WhatsApp pode ser usado para dúvidas sobre instalação, equipamentos, manutenção e contratação.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="processo" className="section-padding bg-background" aria-labelledby="process-title">
      <div className="container-padding">
        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-kicker">
              <ClipboardCheck aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Processo de atendimento
            </div>

            <h2 id="process-title" className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Da primeira mensagem
              <span className="block text-primary">à instalação orientada</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:justify-self-end">
            O fluxo foi pensado para reduzir incerteza: você entende o que será avaliado, como a proposta é montada e o
            que acontece após a aprovação.
          </p>
        </div>

        <ol className="mb-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <li
                key={step.title}
                className="testimonial-card animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-accent-dark">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="mb-14" aria-labelledby="faq-title">
          <div className="mb-8">
            <div className="section-kicker">
              <HelpCircle aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Perguntas frequentes
            </div>
            <h3 id="faq-title" className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
              Dúvidas comuns antes de contratar
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <h4 className="mb-2 text-base font-semibold text-foreground md:text-lg">{faq.question}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
