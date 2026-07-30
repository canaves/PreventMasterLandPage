import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";
import preventMasterLogo from "@/assets/prevent-master-logo.png";

const Footer = () => {
  const whatsappClick = (message = "Olá! Entrei em contato através do site da Prevent Master. Gostaria de mais informações.") => {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const services = [
    "Cerca elétrica",
    "Portão eletrônico",
    "Câmeras de segurança",
    "Sistema de alarme",
    "Interfone e controle de acesso",
    "Manutenção preventiva",
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-padding">
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] gap-8 lg:gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-white p-2 shadow-sm">
                <img src={preventMasterLogo} alt={company.name} className="h-14 w-auto" width="1200" height="605" />
              </div>
              <div className="min-w-0">
                <h3 className="sr-only">{company.name}</h3>
                <p className="text-sm text-primary-foreground/80">{company.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Atendimento em proteção patrimonial com orçamento conforme necessidade, tipo de imóvel e escopo do
              serviço.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-center text-sm">
                <Phone aria-hidden="true" focusable="false" className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <a href={`tel:+55${company.whatsappNumber.slice(2)}`} className="hover:text-accent transition-colors">
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail aria-hidden="true" focusable="false" className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-accent transition-colors">
                  {company.email}
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin aria-hidden="true" focusable="false" className="h-4 w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>Atendimento regional: {company.serviceAreas.join(" • ")}</span>
              </div>
              <div className="flex items-start text-sm">
                <Clock aria-hidden="true" focusable="false" className="h-4 w-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>{company.businessHours.join(" • ")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() =>
                      whatsappClick(`Olá! Gostaria de solicitar informações sobre ${service} com a Prevent Master.`)
                    }
                    aria-label={`Solicitar informações sobre ${service}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5">Navegação</h4>
            <ul className="space-y-2.5">
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
              {/* TODO: Criar páginas oficiais de Política de Privacidade e Termos de Uso antes de publicar links. */}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5">Fale conosco</h4>
            <div className="bg-primary-light p-5 rounded-lg mb-6">
              <h5 className="font-semibold mb-2">Orçamento sem compromisso</h5>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Envie sua solicitação para orçamento, dúvidas sobre instalação ou contratação de serviços.
              </p>
              <button
                type="button"
                onClick={() =>
                  whatsappClick(
                    "Olá! Gostaria de solicitar um orçamento sem compromisso com a Prevent Master.",
                  )
                }
                aria-label="Chamar a Prevent Master no WhatsApp"
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                WhatsApp {company.phoneDisplay}
              </button>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Redes sociais</h5>
              {/* TODO: Preencher URLs oficiais de Facebook, Instagram e LinkedIn. */}
              <p className="sr-only">Redes sociais pendentes de cadastro.</p>
              <div className="flex space-x-4 opacity-60" aria-label="Redes sociais pendentes de cadastro">
                <span className="bg-primary-light p-2 rounded-lg" aria-hidden="true">
                  <Facebook aria-hidden="true" focusable="false" className="h-5 w-5" />
                </span>
                <span className="bg-primary-light p-2 rounded-lg" aria-hidden="true">
                  <Instagram aria-hidden="true" focusable="false" className="h-5 w-5" />
                </span>
                <span className="bg-primary-light p-2 rounded-lg" aria-hidden="true">
                  <Linkedin aria-hidden="true" focusable="false" className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>CNPJ: {company.cnpj}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
