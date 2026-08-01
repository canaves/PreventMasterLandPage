export const company = {
  name: "Prevent Master",
  tagline: "Proteção patrimonial com orientação técnica e resposta rápida.",
  cnpj: "65.122.662/0001-80",
  phoneDisplay: "(43) 98841-4223",
  whatsappNumber: "5543988414223",
  email: "preventmaster.adm@gmail.com",
  serviceAreas: ["Londrina - PR", "Cambé - PR", "Rolândia - PR"],
  businessHours: [
    "Segunda a sexta-feira: das 8h às 18h",
    "Sábado: das 8h às 12h",
  ],
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
