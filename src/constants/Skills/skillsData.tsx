import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiAngular,
  SiSass,
  SiExpo,
  SiReact,
  SiMui,
  SiRedux,
  SiSwagger,
  SiStyledcomponents,
} from "react-icons/si";

export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
  lightColor?: string;
}

const skillsData: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff", lightColor: "#000000" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", Icon: SiPrisma, color: "#a78bfa", lightColor: "#5b21b6" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "SCSS", Icon: SiSass, color: "#CC6699" },
  { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Material UI", Icon: SiMui, color: "#007FFF" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Expo", Icon: SiExpo, color: "#ffffff", lightColor: "#1f2937" },
  { name: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
];

export default skillsData;
