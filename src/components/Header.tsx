import { useState } from "react";
import { Menu, X, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const whatsappClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para soluções de segurança da Prevent Master.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Prevent Master</h1>
              <p className="text-xs text-muted-foreground">Segurança Premium</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={whatsappClick}
              className="btn-whatsapp"
            >
              <Phone className="h-4 w-4 mr-2" />
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={whatsappClick}
                className="btn-whatsapp mt-4"
              >
                <Phone className="h-4 w-4 mr-2" />
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;