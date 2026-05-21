import styled from "styled-components";
import { motion } from "framer-motion";
import variables from "../../style/Variables";

export const Container = styled.section`
  width: 100%;
  max-width: 100vw;
  padding: 6rem 0;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
`;

export const LabelRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${variables.purpleLight};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${variables.textPrimary};
  line-height: 1.15;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(90deg, ${variables.purpleLight}, ${variables.accentBlue});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${variables.textSecondary};
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0.25rem 0;
`;

export const Track = styled(motion.div)<{ $columns: number; $single?: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
  max-width: 100%;
  align-items: stretch;

  ${({ $single }) =>
    $single &&
    `
    max-width: 420px;
    margin: 0 auto;
  `}
`;

export const CardSlot = styled.div`
  min-width: 0;
  width: 100%;
  display: flex;
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 2rem;
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${variables.radiusMd};
  border: 1px solid ${variables.borderGlass};
  background: ${variables.bgGlass};
  color: ${variables.textPrimary};
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: border-color ${variables.transition}, background ${variables.transition};

  &:hover:not(:disabled) {
    border-color: ${variables.purplePrimary};
    background: ${variables.bgGlassHover};
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "28px" : "8px")};
  height: 8px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background: ${({ $active }) =>
    $active ? variables.purpleLight : variables.textMuted};
  transition: width 0.3s ease, background 0.3s ease;
  cursor: pointer;
`;

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  background: var(--project-card-bg);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusXl};
  padding: 1.35rem 1.25rem 1.25rem;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: border-color ${variables.transition}, box-shadow ${variables.transition},
    transform ${variables.transition};

  &:hover {
    border-color: rgba(139, 92, 246, 0.35);
    box-shadow: var(--project-card-hover-shadow);
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    padding: 1.15rem 1rem 1rem;
  }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const IconBox = styled.div<{ $color: string }>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => `${$color}22`};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => `${$color}44`};
`;

export const ProjectTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.35;
  color: ${variables.textPrimary};
  margin: 0;
  flex: 1;
  min-width: 0;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  color: ${variables.textSecondary};
  margin: 0 0 0.75rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const MockupWrap = styled.div`
  margin: 0.75rem 0 1rem;
  width: 100%;
  height: 176px;
  min-height: 176px;
  max-height: 176px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1rem;
`;

export const Tech = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.55rem;
  background: var(--tech-pill-bg);
  border: 1px solid var(--tech-pill-border);
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 500;
  color: ${variables.textSecondary};

  svg {
    font-size: 0.75rem;
    flex-shrink: 0;
    color: inherit;
  }
`;

export const DetailsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${variables.purpleLight};
  text-decoration: none;
  transition: gap ${variables.transition}, color ${variables.transition};

  &:hover {
    gap: 0.55rem;
    color: ${variables.purplePrimary};
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  color: ${variables.textPrimary};
  font-size: 0.9rem;
  font-weight: 600;
  transition: border-color ${variables.transition}, background ${variables.transition};

  &:hover {
    border-color: ${variables.purplePrimary};
    background: ${variables.bgGlassHover};
  }
`;
