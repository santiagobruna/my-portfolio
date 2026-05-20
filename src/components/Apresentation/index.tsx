import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import profileImg from "../../assets/foto2.jpeg";
import { Highlight, OutlineButton, PrimaryButton } from "../../style/Shared";
import * as S from "./Styled";

const HeroSection = () => {
  const [whatsappUrl, setWhatsappUrl] = useState("#");

  useEffect(() => {
    const phoneNumber = "5521975956657";
    const message =
      "Olá! Seja bem-vindo(a) ao WhatsApp de Bruna Santiago. Como posso te ajudar hoje?";
    const encodedMessage = encodeURIComponent(message);
    setWhatsappUrl(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
  }, []);

  return (
    <S.Container id="inicio">
      <S.HeroInner>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <S.Content>
            <S.Badge>👋 Olá, eu sou</S.Badge>
            <S.Title>
              Bruna <Highlight>Santiago</Highlight>
            </S.Title>
            <S.Subtitle>
              Desenvolvedora <Highlight>Full Stack</Highlight>
            </S.Subtitle>
            <S.Description>
              Transformo ideias em experiências digitais modernas e funcionais.
              Especializada em React, Next.js e desenvolvimento web de ponta a ponta.
            </S.Description>

            <S.ButtonGroup>
              <PrimaryButton href="#projects">Ver meus projetos →</PrimaryButton>
              <OutlineButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar comigo
              </OutlineButton>
            </S.ButtonGroup>

            <S.SocialIcons>
              <S.IconButton
                href="https://github.com/santiagobruna"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </S.IconButton>
              <S.IconButton
                href="https://www.linkedin.com/in/brunacribeiro/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </S.IconButton>
              <S.IconButton
                href="https://instagram.com/bruna_dev77"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </S.IconButton>
              <S.IconButton href="mailto:santiagobruna147@gmail.com" aria-label="Email">
                <FaEnvelope />
              </S.IconButton>
            </S.SocialIcons>

            <S.ScrollIndicator href="#about" className="scroll-mobile">
              <span>Role para explorar</span>
              <div className="mouse" />
            </S.ScrollIndicator>
          </S.Content>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <S.VisualWrapper>
            <S.OrbitArea>
              <S.Ring />
              <S.RingInner />
              <S.ProfileImage src={profileImg} alt="Foto de Bruna Santiago" />

              <S.FloatingIcon $top="-4%" $right="-8%" $delay={0}>
                <FaReact color="#61DAFB" />
              </S.FloatingIcon>
              <S.FloatingIcon $top="72%" $right="-12%" $delay={1}>
                <FaJs color="#F7DF1E" />
              </S.FloatingIcon>
              <S.FloatingIcon $top="18%" $left="-12%" $delay={2}>
                <FiCode color="#a855f7" size={22} />
              </S.FloatingIcon>
            </S.OrbitArea>

            <S.ExperienceCard>
              <S.ExpNumber>+2</S.ExpNumber>
              <S.ExpLabel>Anos de experiência</S.ExpLabel>
              <S.ExpChart viewBox="0 0 120 30">
                <polyline
                  className="chart-line"
                  points="0,25 20,20 40,22 60,12 80,15 100,5 120,8"
                />
              </S.ExpChart>
            </S.ExperienceCard>

            <S.CodeWindow>
              <S.CodeDots>
                <span />
                <span />
                <span />
              </S.CodeDots>
              <S.CodeLine>
                <span className="keyword">const</span> dev = {"{"}
              </S.CodeLine>
              <S.CodeLine>
                &nbsp;&nbsp;name: <span className="string">"Bruna"</span>,
              </S.CodeLine>
              <S.CodeLine>
                &nbsp;&nbsp;role: <span className="string">"Full Stack"</span>,
              </S.CodeLine>
              <S.CodeLine>
                &nbsp;&nbsp;<span className="func">build</span>: () =&gt; 🚀
              </S.CodeLine>
              <S.CodeLine>{"}"}</S.CodeLine>
            </S.CodeWindow>
          </S.VisualWrapper>
        </motion.div>
      </S.HeroInner>

      <S.ScrollIndicator href="#about" className="scroll-desktop">
        <span>Role para explorar</span>
        <div className="mouse" />
      </S.ScrollIndicator>
    </S.Container>
  );
};

export default HeroSection;
