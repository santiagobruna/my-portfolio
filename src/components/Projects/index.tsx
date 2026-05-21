import { useState } from "react";
import { motion } from "framer-motion";
import { FiGrid } from "react-icons/fi";
import projectData, {
  featuredProjects,
  projectsSubtitle,
} from "../../constants/Projects/projectsData";
import ProjectCarousel from "./ProjectCarousel";
import * as S from "./Styled";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? projectData : featuredProjects;

  return (
    <S.Container id="projects">
      <S.Inner>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <S.Header>
            <S.LabelRow>
              <FiGrid size={14} />
              Projetos
            </S.LabelRow>
            <S.Title>
              Projetos em <span>destaque</span>
            </S.Title>
            <S.Subtitle>{projectsSubtitle}</S.Subtitle>
          </S.Header>

          <ProjectCarousel key={showAll ? "all" : "featured"} projects={projects} />

          <S.FooterActions>
            <S.ViewAllButton
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <FiGrid size={18} />
              {showAll ? "Ver projetos em destaque" : "Ver todos os projetos"}
            </S.ViewAllButton>
          </S.FooterActions>
        </motion.div>
      </S.Inner>
    </S.Container>
  );
}
