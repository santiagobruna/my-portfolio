import styled from "styled-components";
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

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusLg};
  transition: border-color ${variables.transition}, transform ${variables.transition};

  &:hover {
    border-color: rgba(139, 92, 246, 0.35);
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const Period = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${variables.purpleLight};
`;

export const Role = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  color: ${variables.textPrimary};
`;

export const Company = styled.span`
  font-size: 0.9rem;
  color: ${variables.textSecondary};
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${variables.textSecondary};
  margin-top: 0.5rem;
`;
