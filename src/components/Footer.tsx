import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const whatsappClick = () => {
    const message = encodeURIComponent("Olá! Entrei em contato através do site da Prevent Master. Gostaria de mais informações!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const services = [
    "Cerca Elétrica",
    "Portão Eletrônico", 
    "Câmeras de Segurança",
    "Sistema de Alarme",
    "Interfone Digital",
    "Manutenção Preventiva"
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Prevent Master</h3>
                <p className="text-sm text-primary-foreground/80">Segurança Premium</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas em segurança eletrônica há mais de 15 anos. 
              Protegemos o que você tem de mais importante com tecnologia de ponta.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span>contato@preventmaster.com.br</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="h-4 w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Atendemos toda a Grande São Paulo</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span>Seg - Sex: 8h às 18h | Emergências 24h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={whatsappClick}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Fale Conosco</h4>
            <div className="bg-primary-light p-6 rounded-xl mb-6">
              <h5 className="font-semibold mb-2">Orçamento Grátis</h5>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Receba uma proposta personalizada em até 2 horas!
              </p>
              <button
                onClick={whatsappClick}
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                WhatsApp Direto
              </button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4">Siga-nos</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-primary-light p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-primary-light p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-primary-light p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2024 Prevent Master. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>Licença CREA: 000000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;