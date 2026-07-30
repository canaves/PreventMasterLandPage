import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Pause, Play, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroInstallation from "@/assets/hero-installation-electric-fence.png";
import heroRazorClose from "@/assets/hero-razor-wire-close.png";
import heroRazorTunnel from "@/assets/hero-razor-wire-tunnel.png";
import heroRazorWall from "@/assets/hero-razor-wire-wall.png";
import { company, whatsappUrl } from "@/lib/company";

const heroSlides = [
  {
    image: heroInstallation,
    alt: "Técnico instalando cerca elétrica em muro residencial",
    label: "Cerca elétrica",
    title: "Instalação técnica para residências e empresas",
  },
  {
    image: heroRazorClose,
    alt: "Concertina instalada em área externa rural",
    label: "Concertina",
    title: "Barreiras perimetrais com acabamento profissional",
  },
  {
    image: heroRazorTunnel,
    alt: "Vista interna de concertina instalada ao longo de passagem",
    label: "Perímetro protegido",
    title: "Soluções sob medida para cada tipo de acesso",
  },
  {
    image: heroRazorWall,
    alt: "Concertina instalada sobre muro urbano",
    label: "Proteção de muro",
    title: "Mais controle e segurança para o seu imóvel",
  },
];

const benefits = [
  "Orçamento sem compromisso",
  "Atendimento direto pelo WhatsApp",
  "Instalação e manutenção técnica",
  "Garantia de 1 ano nos materiais",
];

const processSteps = [
  ["01", "Diagnóstico"],
  ["02", "Proposta"],
  ["03", "Instalação"],
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) {
      return;
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(slideTimer);
  }, [isAutoPlaying]);

  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Vi o site da Prevent Master e gostaria de solicitar um orçamento para segurança eletrônica."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const previousSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((currentSlide) => (currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
  };

  const selectSlide = (slideIndex: number) => {
    setIsAutoPlaying(false);
    setActiveSlide(slideIndex);
  };

  const activeSlideData = heroSlides[activeSlide];

  return (
    <section id="inicio" className="relative overflow-hidden hero-gradient text-white" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(90deg,rgba(11,23,49,0.35),transparent_58%)]" />

      <div className="container-padding relative">
        <div className="grid min-h-[calc(100svh-4rem)] gap-9 py-10 sm:py-12 md:py-16 lg:min-h-[700px] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="max-w-2xl space-y-6 self-center animate-fade-in md:space-y-7">
            <div className="space-y-5">
              <div className="inline-flex max-w-full items-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                <Zap aria-hidden="true" focusable="false" className="mr-2 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="truncate">Segurança eletrônica residencial e empresarial</span>
              </div>

              <div className="space-y-4">
                <h1 id="hero-title" className="hero-title max-w-[12ch]">
                  Segurança eletrônica
                  <span className="block text-accent">com resposta rápida</span>
                </h1>

                <p className="hero-subtitle text-white/90">
                  {company.tagline} Atendimento em Londrina, Cambé e Rolândia para câmeras, alarmes, portões eletrônicos,
                  cercas elétricas, interfones e manutenção.
                </p>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex min-h-12 items-center rounded-lg border border-white/10 bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                  <CheckCircle aria-hidden="true" focusable="false" className="h-5 w-5 flex-shrink-0 text-success" />
                  <span className="ml-2 text-sm leading-snug text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button
                onClick={whatsappClick}
                className="btn-cta min-h-[52px] px-7 py-4 text-base group md:text-lg"
                aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
              >
                Solicitar orçamento
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                className="min-h-[52px] border-white/30 bg-transparent px-6 py-4 text-white hover:bg-white/10"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Ir para a seção de serviços"
              >
                Ver soluções
              </Button>
            </div>
          </div>

          <div className="relative self-center animate-slide-up">
            <div
              className="relative overflow-hidden rounded-lg border border-white/16 bg-white/[0.08] p-2.5 shadow-xl backdrop-blur-sm sm:p-3"
              aria-roledescription="carrossel"
              aria-label="Projetos e instalações da Prevent Master"
            >
              <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-primary-dark sm:min-h-[430px] lg:min-h-[560px]">
                {heroSlides.map((slide, slideIndex) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-smooth ${
                      slideIndex === activeSlide ? "z-10 opacity-100 scale-100" : "z-0 opacity-0 scale-105"
                    }`}
                    aria-hidden={slideIndex !== activeSlide}
                  />
                ))}

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary-dark/92 via-primary-dark/18 to-transparent" />

                <div className="absolute left-3 top-3 z-30 rounded-lg border border-white/15 bg-primary-dark/70 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm sm:left-4 sm:top-4">
                  {activeSlideData.label}
                </div>

                <div className="absolute right-3 top-3 z-30 flex items-center gap-2 sm:right-4 sm:top-4">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-primary-dark/55 text-white backdrop-blur-sm transition hover:bg-primary-dark/75"
                    onClick={previousSlide}
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft aria-hidden="true" focusable="false" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-primary-dark/55 text-white backdrop-blur-sm transition hover:bg-primary-dark/75"
                    onClick={nextSlide}
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight aria-hidden="true" focusable="false" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-primary-dark/55 text-white backdrop-blur-sm transition hover:bg-primary-dark/75"
                    onClick={() => setIsAutoPlaying((currentValue) => !currentValue)}
                    aria-label={isAutoPlaying ? "Pausar carrossel" : "Reproduzir carrossel"}
                  >
                    {isAutoPlaying ? (
                      <Pause aria-hidden="true" focusable="false" className="h-4 w-4" />
                    ) : (
                      <Play aria-hidden="true" focusable="false" className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="absolute inset-x-3 bottom-3 z-30 rounded-lg border border-white/10 bg-primary-dark/76 p-4 shadow-xl backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <ShieldCheck aria-hidden="true" focusable="false" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Projeto em destaque</p>
                      <p className="mt-1 text-lg font-bold leading-tight text-white sm:text-2xl">{activeSlideData.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar imagem do carrossel">
                      {heroSlides.map((slide, slideIndex) => (
                        <button
                          key={slide.title}
                          type="button"
                          className={`h-2.5 rounded-full transition-all ${
                            slideIndex === activeSlide ? "w-9 bg-accent" : "w-2.5 bg-white/45 hover:bg-white/80"
                          }`}
                          onClick={() => selectSlide(slideIndex)}
                          aria-label={`Mostrar imagem ${slideIndex + 1}: ${slide.label}`}
                          aria-selected={slideIndex === activeSlide}
                          role="tab"
                        />
                      ))}
                    </div>

                    <span className="text-xs font-medium text-white/70">
                      {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              {processSteps.map(([step, label]) => (
                <div key={step} className="rounded-lg border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-sm">
                  <div className="text-lg font-bold leading-none text-accent sm:text-xl">{step}</div>
                  <div className="mt-1 text-xs font-medium text-white/80 sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
