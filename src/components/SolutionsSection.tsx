import { Building2, Camera, Fence, KeyRound, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Fence,
    title: "Perímetro protegido",
    text: "Cercas elétricas e concertinas para reforçar muros, divisas e áreas expostas.",
  },
  {
    icon: Camera,
    title: "Vigilância e monitoramento",
    text: "Câmeras posicionadas para melhorar visibilidade, registro e acompanhamento do imóvel.",
  },
  {
    icon: KeyRound,
    title: "Controle de acesso",
    text: "Portões, interfones e recursos para organizar entradas, visitantes e circulação.",
  },
  {
    icon: Building2,
    title: "Rotina operacional",
    text: "Manutenção e orientação para manter os sistemas funcionando com previsibilidade.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="section-padding bg-background" aria-labelledby="solutions-title">
      <div className="container-padding">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <div className="section-kicker">
              <ShieldCheck aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Soluções de proteção patrimonial
            </div>
            <h2 id="solutions-title" className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Proteção não é um equipamento.
              <span className="block text-primary">É um sistema bem pensado.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A Prevent Master organiza perímetro, vigilância, acesso e manutenção em uma solução coerente para o imóvel,
              sem excesso de promessas e sem indicação genérica.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <article key={solution.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{solution.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{solution.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
