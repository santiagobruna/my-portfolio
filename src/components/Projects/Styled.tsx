import styled from "styled-components";
import { motion } from "framer-motion";
import variables from "../../style/Variables";

export const Container = styled.section`
  width: 100%;
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${variables.purpleLight};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: gap ${variables.transition};

  &:hover {
    gap: 0.6rem;
  }
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
`;

export const Track = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardSlot = styled.div`
  min-width: 0;
  display: flex;
`;

export const ProjectCard = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusLg};
  overflow: hidden;
  transition: border-color ${variables.transition}, box-shadow ${variables.transition};

  &:hover {
    border-color: rgba(139, 92, 246, 0.45);
    box-shadow: 0 12px 32px ${variables.purpleGlow};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

export const ExternalLink = styled.a`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  backdrop-filter: blur(8px);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusSm};
  color: ${variables.textPrimary};
  z-index: 2;
  transition: background ${variables.transition}, color ${variables.transition};

  &:hover {
    background: ${variables.purplePrimary};
    color: white;
  }
`;

export const Content = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: ${variables.textPrimary};
  width: 100%;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${variables.textSecondary};
  margin: 0 0 1rem;
  flex: 1;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  width: 100%;
`;

export const Tech = styled.span`
  padding: 0.25rem 0.65rem;
  background: var(--tech-pill-bg);
  border: 1px solid var(--tech-pill-border);
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 500;
  color: ${variables.purpleLight};
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ $active }) =>
    $active ? variables.purpleLight : variables.textMuted};
  transition: width 0.3s ease, background 0.3s ease;
  padding: 0;
`;
