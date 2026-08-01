import { Camera, CircuitBoard, Fence, Radar, ShieldCheck, Wrench } from "lucide-react";
import heroInstallation from "@/assets/hero-installation-electric-fence.png";
import heroRazorTunnel from "@/assets/hero-razor-wire-tunnel.png";
import heroRazorWall from "@/assets/hero-razor-wire-wall.png";
import heroSecurity from "@/assets/hero-security.jpg";

const showcaseCards = [
  {
    image: heroRazorTunnel,
    alt: "Concertina instalada em formato circular protegendo passagem externa",
    icon: Fence,
    title: "Barreira perimetral",
    text: "Concertinas e cercas elétricas reforçam pontos vulneráveis antes que o acesso ao imóvel aconteça.",
    label: "Perímetro",
  },
  {
    image: heroSecurity,
    alt: "Técnico ajustando equipamento de segurança eletrônica em muro",
    icon: Camera,
    title: "Monitoramento e acesso",
    text: "Câmeras, interfones e controles ajudam a acompanhar movimentações e organizar entradas.",
    label: "Vigilância",
  },
  {
    image: heroInstallation,
    alt: "Instalação técnica de cerca elétrica em muro residencial",
    icon: Wrench,
    title: "Instalação técnica",
    text: "A execução correta evita falhas, melhora o acabamento e facilita o uso do sistema no dia a dia.",
    label: "Instalação",
  },
];

const flowItems = [
  {
    icon: Radar,
    title: "Detectar",
    text: "Mapear pontos de risco do imóvel.",
  },
  {
    icon: Fence,
    title: "Bloquear",
    text: "Criar barreiras físicas e eletrônicas.",
  },
  {
    icon: Camera,
    title: "Monitorar",
    text: "Acompanhar acessos e movimentações.",
  },
  {
    icon: CircuitBoard,
    title: "Manter",
    text: "Preservar o funcionamento dos equipamentos.",
  },
];

const EquipmentShowcaseSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground" aria-labelledby="equipment-title">
      <div className="container-padding">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              <ShieldCheck aria-hidden="true" focusable="false" className="mr-2 h-4 w-4 text-accent" />
              Como a proteção funciona
            </div>
            <h2 id="equipment-title" className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Equipamentos trabalhando
              <span className="block text-accent">em camadas de proteção</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/82 md:text-lg lg:justify-self-end">
            A segurança patrimonial fica mais confiável quando perímetro, vigilância, acesso e manutenção são pensados em
            conjunto. As imagens abaixo mostram exemplos práticos desses pontos.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {showcaseCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <article key={card.title} className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-dark">
                  <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/78 via-primary-dark/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-lg border border-white/15 bg-primary-dark/72 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    {card.label}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <IconComponent aria-hidden="true" focusable="false" className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/78">{card.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg border border-white/12 bg-white/[0.06] p-4 md:p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flowItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 rounded-lg bg-primary-dark/45 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/12 text-accent">
                    <IconComponent aria-hidden="true" focusable="false" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/72">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-white/12 bg-white/[0.06]">
          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative min-h-[260px]">
              <img
                src={heroRazorWall}
                alt="Concertina instalada sobre muro para reforço perimetral"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/75 to-primary-dark/10" />
            </div>
            <div className="p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Leitura técnica</p>
              <h3 className="text-2xl font-bold leading-tight text-white">Cada imóvel pede uma composição diferente</h3>
              <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
                Em alguns cenários, a prioridade é reforçar muros e divisas. Em outros, controlar entrada, melhorar
                visibilidade por câmeras ou revisar equipamentos já instalados. Por isso, a Prevent Master orienta o
                orçamento conforme a necessidade real do patrimônio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcaseSection;
