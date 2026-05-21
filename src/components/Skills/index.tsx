import { motion } from "framer-motion";
import skillsData from "../../constants/Skills/skillsData";
import { useTheme } from "../../context/ThemeContext";
import { Highlight } from "../../style/Shared";
import * as S from "./Styled";

function getSkillIconColor(
  skill: (typeof skillsData)[number],
  theme: "dark" | "light"
) {
  if (theme === "light" && skill.lightColor) return skill.lightColor;
  return skill.color;
}

export default function Skills() {
  const { theme } = useTheme();

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
          {skillsData.map((skill) => {
            const Icon = skill.Icon;
            return (
              <S.SkillCard key={skill.name}>
                <S.IconWrapper>
                  <Icon color={getSkillIconColor(skill, theme)} />
                </S.IconWrapper>
                <S.SkillName>{skill.name}</S.SkillName>
              </S.SkillCard>
            );
          })}
        </S.Grid>
      </S.Container>
    </motion.div>
  );
}
