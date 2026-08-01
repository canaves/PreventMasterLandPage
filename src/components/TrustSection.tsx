import { Award, BadgeCheck, CalendarDays, Clock, MapPin, PackageCheck, ShieldCheck } from "lucide-react";
import { company } from "@/lib/company";
import intelbrasLogo from "@/assets/brand-intelbras.png";
import ppaLogo from "@/assets/brand-ppa.png";

const trustItems = [
  {
    icon: Award,
    label: "Experiência",
    value: "Mais de 10 anos",
    text: "Atuação em proteção patrimonial para residências, comércios, empresas e condomínios.",
  },
  {
    icon: BadgeCheck,
    label: "Garantia",
    value: "1 ano",
    text: "Garantia sobre os materiais instalados, com condições confirmadas no orçamento.",
  },
  {
    icon: PackageCheck,
    label: "Equipamentos",
    value: "Originais",
    text: "Recursos de qualidade para manter segurança, durabilidade e operação confiável.",
  },
];

const brandDetails = [
  {
    name: "Intelbras",
    logo: intelbrasLogo,
    logoClassName: "h-8",
    text: "Marca reconhecida em segurança eletrônica, comunicação e controle, aplicada em soluções como câmeras, alarmes, interfones e acesso.",
  },
  {
    name: "PPA",
    logo: ppaLogo,
    logoClassName: "h-12",
    text: "Marca associada à automação e controle de portões, indicada para projetos que precisam de acionamento confiável e rotina prática.",
  },
];

const brandAssurances = ["Equipamentos originais", "Recursos certificados"];

const scheduleItems = [
  { days: "Segunda a sexta-feira", hours: "8h às 18h" },
  { days: "Sábado", hours: "8h às 12h" },
];

const TrustSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-gradient-subtle" aria-labelledby="trust-title">
      <div className="container-padding">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="section-kicker">
              <ShieldCheck aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              Experiência, garantia e tecnologias
            </div>
            <h2 id="trust-title" className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Critérios que aumentam
              <span className="block text-primary">a confiança na contratação</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:justify-self-end">
            Uma instalação confiável depende de diagnóstico, material adequado, execução responsável e disponibilidade
            para orientar dúvidas antes e depois do serviço.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {trustItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <article key={item.label} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-primary">
                    <IconComponent aria-hidden="true" focusable="false" className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-accent-dark">{item.label}</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">{item.value}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <PackageCheck aria-hidden="true" focusable="false" className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Marcas e tecnologias utilizadas</h3>
            </div>

            <div className="grid gap-3">
              {brandDetails.map((brand) => (
                <article key={brand.name} className="grid gap-4 rounded-lg border border-border bg-gradient-subtle p-4 sm:grid-cols-[160px_1fr] sm:items-center">
                  <div className="flex h-24 items-center justify-center rounded-md border border-border bg-white px-4 py-3">
                    <img src={brand.logo} alt={`Logo ${brand.name}`} className={`${brand.logoClassName} max-h-16 max-w-[120px] object-contain`} loading="lazy" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-foreground">{brand.name}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{brand.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {brandAssurances.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-secondary/70 px-3 py-3 text-sm font-semibold text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <MapPin aria-hidden="true" focusable="false" className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Regiões e horários de atendimento</h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-secondary/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                  <MapPin aria-hidden="true" focusable="false" className="h-4 w-4" />
                  Regiões atendidas
                </div>
                <div className="flex flex-wrap gap-2">
                  {company.serviceAreas.map((area) => (
                    <span key={area} className="rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock aria-hidden="true" focusable="false" className="h-4 w-4" />
                  Horários
                </div>
                <dl className="space-y-2">
                  {scheduleItems.map((item) => (
                    <div key={item.days} className="flex items-center justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0">
                      <dt className="text-sm text-muted-foreground">{item.days}</dt>
                      <dd className="text-right text-sm font-semibold text-foreground">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground">
                <CalendarDays aria-hidden="true" focusable="false" className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>Respostas rápidas para dúvidas e orçamentos durante o horário de atendimento.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
