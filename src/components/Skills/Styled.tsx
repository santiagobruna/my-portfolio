import styled from "styled-components";
import variables from "../../style/Variables";

export const Container = styled.div`
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${variables.textPrimary};

  span {
    color: ${variables.purpleLight};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SkillCard = styled.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  padding: 1rem 0.5rem;
  box-shadow: var(--skill-card-shadow);
  transition: transform ${variables.transition}, border-color ${variables.transition},
    box-shadow ${variables.transition}, background ${variables.transition};
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    border-color: ${variables.purplePrimary};
    box-shadow: var(--skill-card-shadow), 0 8px 24px ${variables.purpleGlow};
    background: ${variables.bgGlassHover};
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.15);
  }
`;

export const SkillName = styled.span`
  font-size: 0.65rem;
  font-weight: 500;
  color: ${variables.textSecondary};
  text-align: center;
  line-height: 1.2;
  padding: 0 0.2rem;
`;
