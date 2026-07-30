import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappUrl } from "@/lib/company";
import preventMasterLogo from "@/assets/prevent-master-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ];

  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de solicitar um orçamento para soluções de proteção patrimonial da Prevent Master."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 rounded-lg focus-visible:ring-offset-background">
            <img
              src={preventMasterLogo}
              alt={company.name}
              className="h-12 w-auto md:h-16"
              width="512"
              height="512"
            />
            <div className="hidden sm:block">
              <h1 className="sr-only">{company.name}</h1>
              <p className="max-w-[220px] text-xs text-muted-foreground leading-tight">{company.tagline}</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-lg bg-secondary/70 p-1" aria-label="Navegação principal">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-background hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={whatsappClick}
              className="btn-whatsapp"
              aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
            >
              <Phone aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
              Solicitar orçamento
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden rounded-lg p-2 hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" focusable="false" className="h-6 w-6 text-foreground" />
            ) : (
              <Menu aria-hidden="true" focusable="false" className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav id="mobile-navigation" className="flex flex-col gap-2" aria-label="Navegação principal mobile">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-foreground hover:bg-secondary hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={whatsappClick}
                className="btn-whatsapp mt-4"
                aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
              >
                <Phone aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
                Solicitar orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
