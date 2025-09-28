import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const whatsappClick = () => {
    const message = encodeURIComponent("Olá! Vi os depoimentos no site e fiquei interessado nos serviços da Prevent Master. Gostaria de um orçamento!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário Residencial",
      location: "São Paulo, SP",
      rating: 5,
      text: "Excelente atendimento! A cerca elétrica foi instalada rapidamente e funciona perfeitamente. Me sinto muito mais seguro em casa. Recomendo!",
      service: "Cerca Elétrica"
    },
    {
      name: "Maria Santos",
      role: "Empresária",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "O sistema de câmeras instalado pela Prevent Master superou minhas expectativas. Imagem nítida e fácil de usar pelo celular. Equipe muito profissional!",
      service: "Câmeras de Segurança"
    },
    {
      name: "João Oliveira",
      role: "Condomínio Residencial",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Automatizamos todos os portões do condomínio. Serviço impecável, prazo cumprido e preço justo. Já indicamos para outros condomínios!",
      service: "Portão Eletrônico"
    },
    {
      name: "Ana Costa",
      role: "Loja Comercial",
      location: "Brasília, DF",
      rating: 5,
      text: "O alarme instalado é fantástico! Me dá total tranquilidade. O atendimento é nota 10 e o suporte técnico sempre disponível.",
      service: "Sistema de Alarme"
    }
  ];

  const stats = [
    { number: "5.000+", label: "Clientes Satisfeitos" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "4.9", label: "Avaliação Média" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Depoimentos
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que Nossos Clientes
            <span className="text-primary block">Dizem Sobre Nós</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 5.000 clientes confiam na Prevent Master para proteger o que mais importa.
            Veja alguns depoimentos reais de quem já experimentou nossos serviços.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <Quote className="h-8 w-8 text-primary/30 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Junte-se aos Nossos Clientes Satisfeitos!
            </h3>
            
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Receba um orçamento personalizado e descubra por que somos a escolha #1 em segurança eletrônica.
              Atendimento especializado em até 2 horas!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={whatsappClick}
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 group"
              >
                Quero Meu Orçamento Grátis
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-sm text-primary-foreground/80 flex items-center">
                ⚡ Resposta em até 2 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;