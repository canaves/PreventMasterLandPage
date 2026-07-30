import { useState, useEffect } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { whatsappUrl } from "@/lib/company";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const whatsappClick = () => {
    window.open(
      whatsappUrl(
        "Olá! Vi o site da Prevent Master e gostaria de tirar uma dúvida ou solicitar um orçamento de proteção patrimonial.",
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={whatsappClick}
      className="whatsapp-float group animate-scale-in"
      aria-label="Falar com a Prevent Master pelo WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt=""
        width="512"
        height="512"
        aria-hidden="true"
        className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
      />
    </button>
  );
};

export default WhatsAppFloat;
