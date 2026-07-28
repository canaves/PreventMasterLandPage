export const company = {
  name: "Prevent Master",
  tagline: "Segurança eletrônica",
  cnpj: "65.122.662/0001-80",
  phoneDisplay: "(43) 98841-4223",
  whatsappNumber: "5543988414223",
  email: "preventmaster.adm@gmail.com",
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
