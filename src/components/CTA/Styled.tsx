import styled from "styled-components";
import variables from "../../style/Variables";

export const Container = styled.section`
  width: 100%;
  padding: 4rem 0 6rem;
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

export const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 3rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusXl};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--cta-gradient) 0%,
      transparent 50%,
      var(--cta-gradient) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    text-align: center;
  }
`;

export const CtaContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const CtaTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${variables.textPrimary};
`;

export const QuoteBlock = styled.div`
  position: relative;
  z-index: 1;
  padding-left: 1rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const QuoteMark = styled.span`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  color: ${variables.purplePrimary};
  opacity: 0.6;
  display: block;
  margin-bottom: -1rem;
`;

export const QuoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${variables.textSecondary};
  font-style: italic;
`;

export const ContactButton = styled.a`
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
  transition: transform ${variables.transition}, box-shadow ${variables.transition};
  box-shadow: 0 4px 20px ${variables.purpleGlow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${variables.purpleGlowStrong};
  }
`;
