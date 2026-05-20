import styled from "styled-components";
import variables from "../../style/Variables";

export const Wrapper = styled.section`
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutContent = styled.div``;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${variables.textSecondary};
  margin-bottom: 1.5rem;
`;

export const AboutButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  color: ${variables.textPrimary};
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: border-color ${variables.transition}, background ${variables.transition},
    transform ${variables.transition};

  &:hover {
    border-color: ${variables.purplePrimary};
    background: ${variables.bgGlassHover};
    transform: translateY(-2px);
  }
`;
