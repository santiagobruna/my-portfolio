import { FaReact, FaPython, FaSass, FaBootstrap, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiDjango, SiPostgresql  } from "react-icons/si";
import * as S from "./Styled";

const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "Sass", icon: <FaSass color="#CC6699" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Github", icon: <FaGithub  color="#181717" /> },
    { name: "SQL", icon: <FaDatabase color="#003B57" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
];

export default function Skills() {
    return (
        <S.Container id="skills">
        <S.Title>Principais Habilidades</S.Title>
        <S.Grid>
            {skills.map((skill, index) => (
            <S.SkillCard key={index}>
                <S.IconWrapper>{skill.icon}</S.IconWrapper>
                <S.SkillName>{skill.name}</S.SkillName>
            </S.SkillCard>
            ))}
        </S.Grid>
        <S.GitHubButton
        href="https://github.com/santiagobruna"
        target="_blank"
        rel="noopener noreferrer"
        >
        Veja mais no GitHub
        </S.GitHubButton>
        </S.Container>
    );
}
