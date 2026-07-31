import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";
import preventMasterLogo from "@/assets/prevent-master-logo.png";

const services = [
  "Cerca elétrica",
  "Concertina",
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

const Footer = () => {
  const whatsappClick = (message = "Olá! Entrei em contato através do site da Prevent Master. Gostaria de mais informações.") => {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-padding">
        <div className="grid gap-8 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-[1.25fr_0.9fr_0.75fr_1fr] lg:gap-10">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-white p-2 shadow-sm">
                <img src={preventMasterLogo} alt={company.name} className="h-16 w-auto" width="512" height="512" />
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground/80">{company.tagline}</p>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/80">
              Atendimento em proteção patrimonial com orçamento conforme necessidade, tipo de imóvel e escopo do serviço.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-center text-sm">
                <Phone aria-hidden="true" focusable="false" className="mr-3 h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`tel:+55${company.whatsappNumber.slice(2)}`} className="transition-colors hover:text-accent">
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail aria-hidden="true" focusable="false" className="mr-3 h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-accent">
                  {company.email}
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin aria-hidden="true" focusable="false" className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>Atendimento regional: {company.serviceAreas.join(" • ")}</span>
              </div>
              <div className="flex items-start text-sm">
                <Clock aria-hidden="true" focusable="false" className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{company.businessHours.join(" • ")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() =>
                      whatsappClick(`Olá! Gostaria de solicitar informações sobre ${service} com a Prevent Master.`)
                    }
                    aria-label={`Solicitar informações sobre ${service}`}
                    className="text-left text-primary-foreground/80 transition-colors duration-200 hover:text-accent"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Navegação</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/80 transition-colors duration-200 hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold">Fale conosco</h4>
            <div className="rounded-lg border border-white/10 bg-primary-light p-5">
              <h5 className="mb-2 font-semibold">Orçamento sem compromisso</h5>
              <p className="mb-4 text-sm leading-relaxed text-primary-foreground/80">
                Envie sua solicitação para orçamento, dúvidas sobre instalação ou contratação de serviços.
              </p>
              <button
                type="button"
                onClick={() =>
                  whatsappClick("Olá! Gostaria de solicitar um orçamento sem compromisso com a Prevent Master.")
                }
                aria-label="Chamar a Prevent Master no WhatsApp"
                className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-light"
              >
                Fale já com um especialista
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 md:flex-row">
            <div>
              © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
            </div>
            <div>CNPJ: {company.cnpj}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
