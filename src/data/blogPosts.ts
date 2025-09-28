export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Como Escolher a Melhor Câmera de Segurança em Londrina",
    slug: "como-escolher-camera-seguranca-londrina",
    excerpt: "Guia completo para escolher o sistema de câmeras ideal para sua residência ou empresa em Londrina.",
    content: `## Por que investir em câmeras de segurança?

A segurança patrimonial é uma preocupação crescente em Londrina. As câmeras de segurança oferecem proteção 24/7 e podem reduzir significativamente os riscos de invasões e furtos.

### Tipos de câmeras disponíveis

**Câmeras IP**: Oferecem alta qualidade de imagem e podem ser monitoradas remotamente via smartphone.

**Câmeras analógicas**: Solução mais econômica, ideal para quem está começando.

**Câmeras com infravermelho**: Permitem visão noturna clara, essencial para segurança completa.

## Fatores importantes na escolha

Considere o ambiente de instalação, qualidade da imagem desejada, orçamento disponível e necessidade de monitoramento remoto.

### Instalação profissional

A instalação adequada garante o melhor funcionamento e durabilidade do seu sistema de segurança.`,
    image: "/placeholder.svg",
    category: "cameras",
    date: "15 Mar 2024",
    author: "Prevent Master",
    readTime: 5
  },
  {
    id: 2,
    title: "Cerca Elétrica: Instalação Segura e Eficiente",
    slug: "cerca-eletrica-instalacao-segura",
    excerpt: "Tudo que você precisa saber sobre instalação de cerca elétrica seguindo as normas de segurança.",
    content: `## Benefícios da cerca elétrica

A cerca elétrica é uma das formas mais eficazes de proteção perimetral, oferecendo dissuasão visual e física contra invasores.

### Normas de segurança

É fundamental seguir as normas da ABNT NBR IEC 60335-2-76 para garantir segurança na instalação.

## Manutenção preventiva

Inspeções regulares garantem o funcionamento adequado e a segurança do sistema.`,
    image: "/placeholder.svg",
    category: "cerca-eletrica",
    date: "12 Mar 2024",
    author: "Prevent Master",
    readTime: 4
  },
  {
    id: 3,
    title: "Portão Eletrônico: Automatização com Segurança",
    slug: "portao-eletronico-automatizacao-seguranca",
    excerpt: "Como automatizar seu portão garantindo praticidade e segurança para sua família.",
    content: `## Vantagens do portão eletrônico

Comodidade, segurança e valorização do imóvel são apenas alguns dos benefícios da automatização.

### Tipos de motores

**Motor deslizante**: Ideal para portões pesados e uso intenso.

**Motor basculante**: Perfeito para portões de garagem residencial.

## Sistemas de segurança integrados

Sensores de presença, travas elétricas e sistemas de backup garantem operação segura.`,
    image: "/placeholder.svg",
    category: "portao-eletronico",
    date: "10 Mar 2024",
    author: "Prevent Master",
    readTime: 4
  }
];