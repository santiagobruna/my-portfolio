import type { IconType } from "react-icons";
import {
  SiReact,
  SiNestjs,
  SiPrisma,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAngular,
  SiSass,
  SiExpo,
  SiMui,
  SiSwagger,
  SiPostgresql,
  SiStyledcomponents,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FiTool } from "react-icons/fi";

const techMap: Record<string, IconType> = {
  "React Native": FaMobileAlt,
  React: SiReact,
  NestJS: SiNestjs,
  Prisma: SiPrisma,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Redux: SiRedux,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Sass: SiSass,
  SCSS: SiSass,
  "Styled Components": SiStyledcomponents,
  Angular: SiAngular,
  "Angular Material": SiAngular,
  "Material UI": SiMui,
  Expo: SiExpo,
  Swagger: SiSwagger,
  PostgreSQL: SiPostgresql,
  "Suporte & Análise": FiTool,
};

export function getTechIcon(tech: string): IconType {
  return techMap[tech] ?? SiReact;
}
