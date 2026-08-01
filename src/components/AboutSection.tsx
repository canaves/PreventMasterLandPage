import { Award, BadgeCheck, HelpCircle, MessageCircle, PackageCheck, Shield, Wrench } from "lucide-react";

const differentials = [
  {
    icon: MessageCircle,
    title: "Respostas rápidas",
    description: "Atendimento direto para dúvidas, orçamentos e próximos passos durante o horário comercial.",
  },
  {
    icon: HelpCircle,
    title: "Orientação antes da proposta",
    description: "A equipe entende o imóvel antes de indicar equipamentos ou escopo de instalação.",
  },
  {
    icon: BadgeCheck,
    title: "Responsabilidade técnica",
    description: "Execução com testes, orientação de uso e cuidado com o acabamento da instalação.",
  },
  {
    icon: PackageCheck,
    title: "Recursos de qualidade",
    description: "Equipamentos e materiais adequados para proteger patrimônios com mais previsibilidade.",
  },
  {
    icon: Award,
    title: "Experiência de mercado",
    description: "Mais de 10 anos de atuação com soluções para imóveis residenciais, comerciais e condominiais.",
  },
  {
    icon: Shield,
    title: "Soluções confiáveis",
    description: "Combinação de perímetro, vigilância, controle de acesso e manutenção conforme a necessidade.",
  },
];

const reasons = [
  "O atendimento começa pela necessidade real do imóvel.",
  "A proposta considera local, acesso, equipamento e escopo.",
  "O cliente recebe orientação para usar o sistema corretamente.",
  "O serviço atende residências, comércios, condomínios e empresas.",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background" aria-labelledby="about-title">
      <div className="container-padding">
        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="animate-fade-in">
            <div className="section-kicker">
              <Shield aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Diferenciais da empresa
            </div>

            <h2 id="about-title" className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Atendimento técnico
              <span className="block text-primary">sem complicar a decisão</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:justify-self-end">
            A Prevent Master combina proteção perimetral, sistemas eletrônicos e manutenção com comunicação direta para
            quem precisa proteger imóveis e controlar acessos.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          <div className="rounded-lg bg-gradient-primary p-6 text-primary-foreground shadow-primary md:p-8 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <Wrench aria-hidden="true" focusable="false" className="h-7 w-7 text-accent" />
              <h3 className="text-2xl font-bold leading-tight">Diagnóstico antes da indicação</h3>
            </div>

            <p className="mb-6 leading-relaxed text-primary-foreground/90">
              O orçamento considera o tipo de imóvel, a finalidade da proteção, os equipamentos necessários e o escopo do
              serviço. Assim, a conversa evita soluções genéricas e vai direto ao que precisa ser resolvido.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start">
                  <BadgeCheck aria-hidden="true" focusable="false" className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in md:p-6"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
