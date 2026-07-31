import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappUrl } from "@/lib/company";
import preventMasterLogo from "@/assets/prevent-master-logo.png";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "FAQ", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá! Gostaria de solicitar um orçamento para proteção patrimonial da Prevent Master."),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/[0.92] shadow-sm backdrop-blur-md">
      <div className="container-padding">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:ring-offset-background">
            <img
              src={preventMasterLogo}
              alt={company.name}
              className="h-20 w-auto sm:h-30"
              width="512"
              height="512"
            />
            <div className="hidden min-w-0 lg:block">
              <h1 className="sr-only">{company.name}</h1>
              <p className="max-w-[260px] text-xs leading-tight text-muted-foreground">{company.tagline}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-lg border border-border bg-secondary/70 p-1 lg:flex" aria-label="Navegação principal">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-background hover:text-primary focus-visible:ring-offset-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              onClick={whatsappClick}
              className="btn-whatsapp"
              aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
            >
              <Phone aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg border border-border p-2 transition-colors hover:bg-secondary lg:hidden"
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
          <div className="border-t border-border py-4 lg:hidden animate-fade-in">
            <nav id="mobile-navigation" className="flex flex-col gap-2" aria-label="Navegação principal mobile">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-secondary hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={whatsappClick}
                className="btn-whatsapp mt-3 w-full"
                aria-label="Solicitar orçamento pelo WhatsApp, abre em nova aba"
              >
                <Phone aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
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
