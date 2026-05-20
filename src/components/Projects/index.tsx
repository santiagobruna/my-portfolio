import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import projectData from "../../constants/Projects/projectsData";
import { Highlight, SectionLabel, SectionTitle } from "../../style/Shared";
import * as S from "./Styled";

const VISIBLE = 3;

export default function Projects() {
  const [page, setPage] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(projectData.length / VISIBLE);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const offset = -(page * slideWidth);

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
          <div>
            <SectionLabel>Portfólio</SectionLabel>
            <SectionTitle>
              Alguns <Highlight>projetos</Highlight>
            </SectionTitle>
          </div>
          <S.ViewAllLink href="https://github.com/santiagobruna" target="_blank" rel="noopener noreferrer">
            Ver todos os projetos →
          </S.ViewAllLink>
        </S.Header>

        <S.Carousel ref={carouselRef}>
          <S.Track $offset={offset}>
            {projectData.map((project) => (
              <S.CardSlot key={project.title}>
                <S.ProjectCard>
                  <S.ImageWrapper>
                    <S.Thumbnail src={project.image} alt={project.title} loading="lazy" />
                    {(project.demo || project.repo) && (
                      <S.ExternalLink
                        href={project.demo ?? project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${project.title}`}
                      >
                        <FiArrowUpRight size={18} />
                      </S.ExternalLink>
                    )}
                  </S.ImageWrapper>
                  <S.Content>
                    <S.ProjectTitle>{project.title}</S.ProjectTitle>
                    <S.Description>{project.description}</S.Description>
                    <S.TechList>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <S.Tech key={tech}>{tech}</S.Tech>
                      ))}
                    </S.TechList>
                  </S.Content>
                </S.ProjectCard>
              </S.CardSlot>
            ))}
          </S.Track>
        </S.Carousel>

        <S.Dots>
          {Array.from({ length: totalPages }).map((_, i) => (
            <S.Dot key={i} $active={page === i} onClick={() => setPage(i)} aria-label={`Página ${i + 1}`} />
          ))}
        </S.Dots>
      </motion.div>
      </S.Inner>
    </S.Container>
  );
}
