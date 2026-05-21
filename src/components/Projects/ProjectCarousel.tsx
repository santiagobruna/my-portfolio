import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Project } from "../../constants/Projects/projectsData";
import ProjectCardItem from "./ProjectCardItem";
import * as S from "./Styled";

interface ProjectCarouselProps {
  projects: Project[];
}

function useItemsPerPage() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 640) setCount(1);
      else if (window.innerWidth <= 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [page, setPage] = useState(0);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerPage));

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages - 1));
  }, [projects.length, itemsPerPage, totalPages]);

  const start = page * itemsPerPage;
  const visibleProjects = projects.slice(start, start + itemsPerPage);
  const columnCount = Math.min(visibleProjects.length, itemsPerPage);

  const goTo = (next: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)));
  };

  return (
    <S.CarouselWrapper>
      <S.Carousel>
        <AnimatePresence mode="wait">
          <S.Track
            key={`${page}-${itemsPerPage}-${projects.length}`}
            $columns={columnCount}
            $single={columnCount === 1}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {visibleProjects.map((project, index) => (
              <S.CardSlot key={project.title}>
                <ProjectCardItem project={project} index={index} />
              </S.CardSlot>
            ))}
          </S.Track>
        </AnimatePresence>
      </S.Carousel>

      {totalPages > 1 && (
        <S.CarouselControls>
          <S.NavButton
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Projetos anteriores"
          >
            <FiChevronLeft size={20} />
          </S.NavButton>

          <S.Dots>
            {Array.from({ length: totalPages }).map((_, i) => (
              <S.Dot
                key={i}
                type="button"
                $active={page === i}
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </S.Dots>

          <S.NavButton
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page >= totalPages - 1}
            aria-label="Próximos projetos"
          >
            <FiChevronRight size={20} />
          </S.NavButton>
        </S.CarouselControls>
      )}
    </S.CarouselWrapper>
  );
}
