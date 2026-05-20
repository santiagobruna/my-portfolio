import styled from "styled-components";
import variables from "./Variables";

export const Section = styled.section`
  padding: 6rem 2rem;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 4rem 1.25rem;
  }
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${variables.purpleLight};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${variables.textPrimary};
  line-height: 1.2;
  margin-bottom: 1rem;

  span {
    color: ${variables.purpleLight};
  }
`;

export const GlassCard = styled.div`
  background: ${variables.bgGlass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusLg};
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, ${variables.purplePrimary}, ${variables.purpleLight});
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: ${variables.radiusMd};
  text-decoration: none;
  border: none;
  transition: transform ${variables.transition}, box-shadow ${variables.transition};
  box-shadow: 0 4px 20px ${variables.purpleGlow};

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 30px ${variables.purpleGlowStrong};
  }
`;

export const OutlineButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  color: ${variables.textPrimary};
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: ${variables.radiusMd};
  text-decoration: none;
  border: 1px solid ${variables.borderGlass};
  transition: border-color ${variables.transition}, background ${variables.transition},
    transform ${variables.transition};

  &:hover {
    border-color: ${variables.purplePrimary};
    background: ${variables.bgGlassHover};
    transform: translateY(-2px);
  }
`;

export const Highlight = styled.span`
  color: ${variables.purpleLight};
`;
