import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company, whatsappUrl } from "@/lib/company";
import preventMasterFooterLogo from "@/assets/prevent-master-footer-logo.png";

const Footer = () => {
  const whatsappClick = (message = "Olá! Entrei em contato através do site da Prevent Master. Gostaria de mais informações.") => {
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container-padding">
        <div className="grid gap-8 py-10 md:py-12 lg:grid-cols-[1.05fr_1fr_0.95fr] lg:items-center lg:gap-12">
          <div className="max-w-md">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-24 w-48 items-center justify-center rounded-lg border border-white/15 bg-white px-5 py-4 shadow-md shadow-primary-dark/20 sm:h-28 sm:w-56">
                <img
                  src={preventMasterFooterLogo}
                  alt={company.name}
                  className="h-full w-full object-contain"
                  width="715"
                  height="572"
                />
              </div>
              <div>
                <p className="text-base font-semibold leading-snug text-primary-foreground">{company.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/78">{company.tagline}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-primary-foreground/90">
              <ShieldCheck aria-hidden="true" focusable="false" className="h-4 w-4 text-accent" />
              Mais de 10 anos em proteção patrimonial
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <MapPin aria-hidden="true" focusable="false" className="h-4 w-4 text-accent" />
                Atendimento regional
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground/75">{company.serviceAreas.join(" • ")}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Clock aria-hidden="true" focusable="false" className="h-4 w-4 text-accent" />
                Horários
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground/75">{company.businessHours.join(" • ")}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4 sm:col-span-2 lg:col-span-1">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Mail aria-hidden="true" focusable="false" className="h-4 w-4 text-accent" />
                E-mail
              </div>
              <a href={`mailto:${company.email}`} className="break-all text-sm text-primary-foreground/75 transition-colors hover:text-accent">
                {company.email}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-primary-light p-5 shadow-lg shadow-primary-dark/20">
            <p className="text-sm font-semibold text-accent">Orçamento sem compromisso</p>
            <h4 className="mt-2 text-xl font-bold leading-tight">Precisa proteger seu patrimônio?</h4>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/78">
              Fale com um especialista e receba orientação para o tipo de imóvel, necessidade e escopo do serviço.
            </p>
            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() =>
                  whatsappClick("Olá! Gostaria de solicitar um orçamento sem compromisso com a Prevent Master.")
                }
                aria-label="Chamar a Prevent Master no WhatsApp"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-light"
              >
                Fale já com um especialista
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2 h-4 w-4" />
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/65">
                <Phone aria-hidden="true" focusable="false" className="h-3.5 w-3.5 text-accent" />
                Resposta rápida pelo WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 md:flex-row">
            <div>© {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</div>
            <div>CNPJ: {company.cnpj}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
