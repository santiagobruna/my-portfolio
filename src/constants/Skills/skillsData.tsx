import type { ReactNode } from "react";
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
  icon: ReactNode;
}

const skillsData: Skill[] = [
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "React Native", icon: <SiReact color="#61DAFB" /> },
  { name: "Angular", icon: <SiAngular color="#DD0031" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
  { name: "Prisma", icon: <SiPrisma color="#a78bfa" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "SCSS", icon: <SiSass color="#CC6699" /> },
  { name: "Styled Components", icon: <SiStyledcomponents color="#DB7093" /> },
  { name: "Material UI", icon: <SiMui color="#007FFF" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Expo", icon: <SiExpo color="#ffffff" /> },
  { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
];

export default skillsData;
