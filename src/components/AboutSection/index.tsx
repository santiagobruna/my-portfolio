import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { Highlight, SectionLabel, SectionTitle } from "../../style/Shared";
import Skills from "../Skills";
import * as S from "./Styled";

const AboutSection = () => {
  return (
    <S.Wrapper id="about">
      <S.Inner>
      <S.Grid>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <S.AboutContent>
            <SectionLabel>Sobre mim</SectionLabel>
            <SectionTitle>
              Mais <Highlight>sobre mim</Highlight>
            </SectionTitle>
            <S.AboutText>
              Atuo como Desenvolvedora Full Stack Jr na{" "}
              <strong>Tardis Tecnologia</strong>, criando e mantendo aplicações web e mobile
              com React, Next.js, React Native, Node.js e PostgreSQL — do front-end ao back-end.
            </S.AboutText>
            <S.AboutText>
              Já passei por experiências em plataformas de cupons (MeuCupom.com) e em gestão
              administrativa, o que reforçou minha organização, comunicação e foco em entregar
              soluções com impacto real.
            </S.AboutText>
            <S.AboutButton href="#contact">
              <FiUser size={18} />
              Saiba mais sobre mim
            </S.AboutButton>
          </S.AboutContent>
        </motion.div>

        <Skills />
      </S.Grid>
      </S.Inner>
    </S.Wrapper>
  );
};

export default AboutSection;
