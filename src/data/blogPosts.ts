import heroSecurity from "@/assets/hero-security.jpg";

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

// TODO: Substituir a imagem genérica dos artigos por fotos reais ou materiais visuais oficiais da Prevent Master.
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Como planejar câmeras de segurança para um imóvel",
    slug: "como-planejar-cameras-de-seguranca",
    excerpt: "Pontos importantes para definir quantidade, posicionamento e finalidade das câmeras antes da instalação.",
    content: `## Comece pelo objetivo do monitoramento

Antes de escolher equipamentos, é importante entender o que precisa ser monitorado: entradas, garagem, corredores, estoque, área externa ou atendimento ao público. Essa definição orienta a quantidade de câmeras e os pontos de instalação.

### Posicionamento faz diferença

Câmeras instaladas em locais inadequados podem gerar pontos cegos, imagens contra a luz ou baixa identificação de pessoas e veículos. A análise do ambiente ajuda a posicionar melhor cada equipamento.

### Acesso e armazenamento

Também é importante definir como as imagens serão acessadas e armazenadas. O cliente deve receber orientação sobre uso do aplicativo, senhas, permissões e cuidados básicos de segurança digital.

## Quando solicitar avaliação

Se o imóvel possui vários ambientes, áreas externas ou necessidade de acesso remoto, vale solicitar uma avaliação antes de comprar equipamentos por conta própria.`,
    image: heroSecurity,
    category: "cameras",
    date: "Conteúdo informativo",
    author: "Prevent Master",
    readTime: 4,
  },
  {
    id: 2,
    title: "Cerca elétrica: cuidados antes da instalação",
    slug: "cerca-eletrica-cuidados-instalacao",
    excerpt: "Entenda por que o perímetro, os acessos e a orientação de uso devem ser avaliados antes da instalação.",
    content: `## Avaliação do perímetro

A cerca elétrica é uma solução de proteção perimetral e deve ser planejada conforme as características do muro, portões, pontos de passagem e áreas de maior exposição.

### Instalação técnica

Uma instalação organizada considera fixação, isolamento, sinalização, central de choque e testes de funcionamento. O cliente também deve receber orientação sobre cuidados e acionamento do sistema.

## Manutenção

Vegetação, umidade, rompimentos e desgaste de componentes podem afetar o desempenho. A manutenção preventiva ajuda a identificar ajustes antes que o sistema deixe de funcionar corretamente.`,
    image: heroSecurity,
    category: "cerca-eletrica",
    date: "Conteúdo informativo",
    author: "Prevent Master",
    readTime: 3,
  },
  {
    id: 3,
    title: "Portão eletrônico: segurança e rotina de uso",
    slug: "portao-eletronico-seguranca-rotina",
    excerpt: "O tipo de portão e a frequência de abertura influenciam a escolha do motor e dos acessórios.",
    content: `## O equipamento depende do portão

Portões deslizantes, basculantes e pivotantes exigem soluções diferentes. Peso, tamanho, estrutura e frequência de uso influenciam a escolha do motor e dos acessórios.

### Pontos de atenção

Além da automação, é importante observar controles, destravamento manual, sensores, fechamento adequado e orientação para uso seguro no dia a dia.

## Solicite orientação

Antes de definir o equipamento, informe como o portão é utilizado e se o local é residencial, comercial ou condominial. Isso ajuda a montar uma proposta compatível com a rotina do imóvel.`,
    image: heroSecurity,
    category: "portao-eletronico",
    date: "Conteúdo informativo",
    author: "Prevent Master",
    readTime: 3,
  },
];
