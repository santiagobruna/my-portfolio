import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { Highlight } from "../../style/Shared";
import * as S from "./Styled";

const skills = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#ffffff" /> },
  { name: "Prisma", icon: <SiPrisma color="#a78bfa" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
];

export default function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <S.Container>
        <S.Title>
          Minhas <Highlight>Skills</Highlight>
        </S.Title>
        <S.Grid>
          {skills.map((skill) => (
            <S.SkillCard key={skill.name}>
              <S.IconWrapper>{skill.icon}</S.IconWrapper>
              <S.SkillName>{skill.name}</S.SkillName>
            </S.SkillCard>
          ))}
        </S.Grid>
      </S.Container>
    </motion.div>
  );
}
