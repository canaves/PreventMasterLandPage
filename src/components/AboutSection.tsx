import { Shield, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const whatsappClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de conhecer melhor a Prevent Master e solicitar um orçamento personalizado.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Tecnologia de ponta com os mais altos padrões de qualidade e segurança do mercado."
    },
    {
      icon: Users,
      title: "Equipe Especializada", 
      description: "Profissionais certificados com mais de 15 anos de experiência em segurança eletrônica."
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Empresa licenciada pelo CREA e certificada pelos principais fabricantes do setor."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento técnico especializado disponível 24 horas por dia, 7 dias da semana."
    }
  ];

  const achievements = [
    { number: "15+", label: "anos de experiência" },
    { number: "5.000+", label: "clientes satisfeitos" },
    { number: "10.000+", label: "projetos realizados" },
    { number: "99%", label: "taxa de aprovação" }
  ];

  const values = [
    "Compromisso com a excelência em cada projeto",
    "Tecnologia de ponta para máxima segurança",
    "Atendimento personalizado e humanizado",
    "Garantia estendida em todos os serviços",
    "Transparência total em preços e prazos",
    "Suporte técnico especializado sempre disponível"
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Sobre Nós
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Líderes em Segurança
            <span className="text-primary block">Há Mais de 15 Anos</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Prevent Master nasceu da paixão por proteger o que há de mais importante: 
            sua família, seu patrimônio e sua tranquilidade. Somos especialistas em 
            transformar ambientes em verdadeiras fortalezas de segurança.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa Missão: Sua Segurança em Primeiro Lugar
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fundada em 2009, a Prevent Master começou como uma pequena empresa familiar 
              com um grande sonho: democratizar o acesso a soluções de segurança de alta qualidade. 
              Hoje, somos referência no mercado, com mais de 5.000 clientes satisfeitos em todo o país.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa abordagem vai além da simples instalação de equipamentos. Realizamos um 
              diagnóstico completo de segurança, oferecemos consultoria especializada e 
              desenvolvemos soluções personalizadas para cada necessidade específica.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="text-center p-4 bg-gradient-subtle rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-6 text-center">Nossos Valores</h4>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Proteger o que Mais Importa?
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se aos milhares de clientes que já confiam na Prevent Master. 
            Receba um diagnóstico gratuito e descubra como podemos tornar seu ambiente mais seguro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={whatsappClick}
              className="btn-cta text-lg px-8 py-4 group"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-sm text-muted-foreground flex items-center">
              ⚡ Resposta em até 2 horas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;