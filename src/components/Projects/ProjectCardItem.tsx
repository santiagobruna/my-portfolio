import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../constants/Projects/projectsData";
import DeviceMockup from "./DeviceMockup";
import { getTechIcon } from "./techIcons";
import * as S from "./Styled";

interface ProjectCardItemProps {
  project: Project;
  index?: number;
}

export default function ProjectCardItem({ project, index = 0 }: ProjectCardItemProps) {
  const Icon = project.icon;
  const detailsHref = project.demo ?? project.repo ?? "#contact";
  const showDetails = Boolean(project.demo || project.repo || project.featured);

  return (
    <S.ProjectCard
      as={motion.article}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <S.CardHead>
        <S.IconBox $color={project.accentColor}>
          <Icon size={20} />
        </S.IconBox>
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
      </S.CardHead>

      <S.Description>{project.description}</S.Description>

      <S.MockupWrap>
        <DeviceMockup
          variant={project.mockupVariant}
          image={project.image}
          alt={project.title}
        />
      </S.MockupWrap>

      <S.TechList>
        {project.technologies.map((tech) => {
          const TechIcon = getTechIcon(tech);
          return (
            <S.Tech key={tech}>
              <TechIcon />
              {tech}
            </S.Tech>
          );
        })}
      </S.TechList>

      {showDetails && (
        <S.DetailsLink
          href={detailsHref}
          {...(project.demo || project.repo
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          Ver detalhes
          <FiArrowUpRight size={14} />
        </S.DetailsLink>
      )}
    </S.ProjectCard>
  );
}
