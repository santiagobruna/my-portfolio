import type { IconType } from "react-icons";
import {
  FiTrendingUp,
  FiMap,
  FiLayout,
  FiCheckSquare,
  FiHeadphones,
} from "react-icons/fi";

export type MockupVariant =
  | "laptop"
  | "phone"
  | "phones-stack"
  | "desktop"
  | "stage";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  mockupVariant: MockupVariant;
  icon: IconType;
  accentColor: string;
  featured?: boolean;
  demo?: string;
  repo?: string;
}

export const projectsSubtitle =
  "Soluções reais desenvolvidas em ambientes corporativos e projetos pessoais, com foco em performance, UX e arquitetura escalável.";

const projectData: Project[] = [
  {
    title: "Sistema de Controle Operacional",
    description:
      "Atuação no desenvolvimento e integração de funcionalidades de um sistema interno de controle operacional, incluindo comunicação entre frontend e backend, consolidação de métricas e exibição de dashboards gerenciais.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    image: "/shield.png",
    mockupVariant: "laptop",
    icon: FiTrendingUp,
    accentColor: "#8b5cf6",
    featured: true,
  },
  {
    title: "Rota App",
    description:
      "Desenvolvimento de interfaces mobile e integrações para plataforma de participação cidadã, aproximando população e gestão através de funcionalidades comunitárias e acompanhamento das demandas do bairro.",
    technologies: ["React Native", "Expo", "NestJS", "Prisma", "Next.js", "PostgreSQL", "Swagger"],
    image: "/rota.png",
    mockupVariant: "phone",
    icon: FiMap,
    accentColor: "#22c55e",
    featured: true,
  },
  {
    title: "Rota App — Painel Admin",
    description:
      "Desenvolvimento completo do painel administrativo da plataforma Rota, utilizado pela gestão para gerenciamento de conteúdos, eventos urbanos, validação de interações cidadãs e acompanhamento de métricas da aplicação.",
    technologies: ["Angular", "Angular Material", "Tailwind CSS", "SCSS", "NestJS", "Prisma", "PostgreSQL", "Swagger"],
    image: "/rota-website.png",
    mockupVariant: "laptop",
    icon: FiLayout,
    accentColor: "#14b8a6",
    featured: true,
  },
  {
    title: "Grupo Coruja — Aprovação",
    description:
      "Desenvolvimento de funcionalidades administrativas para gerenciamento e aprovação de campanhas exibidas em painéis digitais, incluindo upload, revisão e validação de mídias enviadas pelos usuários.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    image: "/coruja.png",
    mockupVariant: "laptop",
    icon: FiCheckSquare,
    accentColor: "#f97316",
    featured: true,
  },
  {
    title: "Experiência em Suporte Corporativo",
    description:
      "Atuação em suporte técnico e sustentação de sistemas corporativos, realizando análise e resolução de tickets operacionais, correções de inconsistências em banco de dados e suporte a fluxos internos da aplicação.",
    technologies: ["Suporte & Análise"],
    mockupVariant: "desktop",
    icon: FiHeadphones,
    accentColor: "#3b82f6",
    featured: true,
  },
  {
    title: "Loja Virtual",
    description: "E-commerce desenvolvido em teste técnico, com catálogo e integração com API.",
    technologies: ["TypeScript", "React", "Sass"],
    image: "/loja-virtual.png",
    mockupVariant: "laptop",
    icon: FiTrendingUp,
    accentColor: "#8b5cf6",
    demo: "https://teste-front-vmb.vercel.app/",
    repo: "https://github.com/santiagobruna/teste-front-vmb",
  },
  {
    title: "Portfolio Pediatra",
    description: "Site institucional para pediatras com layout responsivo e foco em conversão.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    image: "/portfolio-pediatra.png",
    mockupVariant: "laptop",
    icon: FiTrendingUp,
    accentColor: "#a855f7",
    demo: "https://portfolio-julia-two.vercel.app/",
    repo: "https://github.com/santiagobruna/portfolio-julia",
  },
  {
    title: "E-commerce de Jogos Digitais",
    description: "Vitrine de jogos digitais com categorias, promoções e página de detalhes.",
    technologies: ["TypeScript", "React", "Redux"],
    image: "/eplay.png",
    mockupVariant: "laptop",
    icon: FiTrendingUp,
    accentColor: "#6366f1",
    demo: "https://eplay-tan.vercel.app/",
    repo: "https://github.com/santiagobruna/eplay",
  },
  {
    title: "PetDev",
    description: "Site veterinário com agendamentos online e informações sobre cuidados com pets.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/pet-dev.png",
    mockupVariant: "laptop",
    icon: FiMap,
    accentColor: "#22c55e",
    demo: "https://pet-dev-alpha.vercel.app/",
    repo: "https://github.com/santiagobruna/petDev",
  },
  {
    title: "Dev Burguer",
    description: "Loja virtual para hamburgueria com pedidos via WhatsApp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/devburguer.png",
    mockupVariant: "laptop",
    icon: FiCheckSquare,
    accentColor: "#f97316",
    demo: "https://devburguer-iota.vercel.app/",
    repo: "https://github.com/santiagobruna/devburguer",
  },
];

export const featuredProjects = projectData.filter((p) => p.featured);
export const otherProjects = projectData.filter((p) => !p.featured);

export default projectData;
