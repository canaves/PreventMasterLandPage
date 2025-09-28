import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappClick = () => {
    const message = encodeURIComponent("Olá Prevent Master! 👋 Estava navegando no site e gostaria de mais informações sobre suas soluções de segurança.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <button
        onClick={whatsappClick}
        className="whatsapp-float group animate-scale-in"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Tooltip */}
      <div className="fixed bottom-24 right-6 z-40 bg-card border border-border px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in pointer-events-none">
        <div className="relative">
          Fale conosco no WhatsApp!
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-card border-r border-b border-border transform rotate-45"></div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;