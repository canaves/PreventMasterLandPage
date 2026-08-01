import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappUrl } from "@/lib/company";

const FinalCTASection = () => {
  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de solicitar um orçamento de proteção patrimonial com a Prevent Master."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="bg-background pb-14 md:pb-20 lg:pb-24" aria-labelledby="final-cta-title">
      <div className="container-padding">
        <div className="overflow-hidden rounded-lg bg-gradient-primary text-primary-foreground shadow-primary">
          <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8 lg:p-10">
            <div>
              <div className="mb-3 flex items-center gap-2 text-accent">
                <ShieldCheck aria-hidden="true" focusable="false" className="h-5 w-5" />
                <span className="text-sm font-semibold">Orçamento sem compromisso</span>
              </div>
              <h2 id="final-cta-title" className="text-2xl font-bold leading-tight md:text-3xl">
                Quer proteger seu imóvel com uma equipe experiente?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/90">
                Fale com a Prevent Master pelo WhatsApp. {company.serviceRegionText}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                onClick={whatsappClick}
                className="bg-accent px-8 py-4 font-semibold text-accent-foreground hover:bg-accent-light group"
                aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
              >
                Solicitar orçamento
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href={`tel:+55${company.whatsappNumber.slice(2)}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
