import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { whatsappUrl } from "@/lib/company";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappClick = () => {
    window.open(
      whatsappUrl("Olá, Prevent Master! Estava navegando no site e gostaria de mais informações."),
      "_blank",
    );
  };

  if (!isVisible) return null;

  return (
    <>
      <button
        type="button"
        onClick={whatsappClick}
        className="whatsapp-float group animate-scale-in"
        aria-label="Falar com a Prevent Master no WhatsApp"
      >
        <MessageCircle aria-hidden="true" focusable="false" className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      <div className="hidden sm:block fixed bottom-24 right-6 z-40 bg-card border border-border px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in pointer-events-none">
        <div className="relative">
          Fale conosco no WhatsApp
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-card border-r border-b border-border transform rotate-45"></div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
