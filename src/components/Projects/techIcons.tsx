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

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "React Native": "#61DAFB",
  NestJS: "#E0234E",
  Prisma: "#a78bfa",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#38BDF8",
  "Node.js": "#339933",
  Redux: "#764ABC",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  Sass: "#CC6699",
  SCSS: "#CC6699",
  "Styled Components": "#DB7093",
  Angular: "#DD0031",
  "Angular Material": "#DD0031",
  "Material UI": "#007FFF",
  Swagger: "#85EA2D",
  PostgreSQL: "#336791",
};

const themeAwareColors: Record<string, { dark: string; light: string }> = {
  "Next.js": { dark: "#ffffff", light: "#000000" },
  Expo: { dark: "#ffffff", light: "#1f2937" },
  Prisma: { dark: "#a78bfa", light: "#5b21b6" },
};

export function getTechIcon(tech: string): IconType {
  return techMap[tech] ?? SiReact;
}

export function getTechIconColor(tech: string, theme: "dark" | "light"): string {
  const themed = themeAwareColors[tech];
  if (themed) return theme === "light" ? themed.light : themed.dark;
  return techColors[tech] ?? (theme === "light" ? "#52525b" : "#a1a1aa");
}
