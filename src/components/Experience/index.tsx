import { motion } from "framer-motion";
import { Highlight, SectionLabel, SectionTitle } from "../../style/Shared";
import * as S from "./Styled";

const experiences = [
  {
    period: "Nov 2025 — Atual",
    role: "Desenvolvedora Full Stack Jr",
    company: "Tardis Tecnologia",
    description:
      "Desenvolvimento e manutenção de aplicações web e mobile com React, Next.js, React Native (Expo), Node.js, NestJS, Prisma e PostgreSQL. Criação de interfaces, APIs, integrações, autenticação JWT e modelagem de banco de dados. Manutenção em produção, correção de bugs e evolução de funcionalidades.",
  },
  {
    period: "Jun 2025 — Nov 2025",
    role: "Desenvolvedora Front-end Jr",
    company: "MeuCupom.com",
    description:
      "Desenvolvimento e manutenção de interfaces web com React, TypeScript, Styled Components e Material UI. Páginas estratégicas como Home, Perfil do Usuário, Cupons, Categorias e Clubes, rotas dinâmicas e integração com APIs REST. Correções, melhorias visuais e otimizações de UX.",
  },
  {
    period: "Fev 2024 — Jan 2025",
    role: "Assistente Administrativo Aprendiz",
    company: "SEST SENAT / Transportes Blanco",
    description:
      "Atuação no setor de estatística e controle operacional: conferência de documentos, análise de horários e organização de informações administrativas. Desenvolvimento de conhecimentos em gestão organizacional, Power BI, Glide e inteligência artificial.",
  },
];

export default function Experience() {
  return (
    <S.Container id="experience">
      <S.Inner>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Experiência</SectionLabel>
          <SectionTitle>
            Minha <Highlight>trajetória</Highlight>
          </SectionTitle>

          <S.Timeline>
            {experiences.map((exp) => (
              <S.TimelineItem key={`${exp.company}-${exp.period}`}>
                <S.Period>{exp.period}</S.Period>
                <div>
                  <S.Role>{exp.role}</S.Role>
                  <S.Company>{exp.company}</S.Company>
                  <S.Description>{exp.description}</S.Description>
                </div>
              </S.TimelineItem>
            ))}
          </S.Timeline>
        </motion.div>
      </S.Inner>
    </S.Container>
  );
}
