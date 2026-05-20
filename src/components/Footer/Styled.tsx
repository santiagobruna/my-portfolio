import styled from "styled-components";
import variables from "../../style/Variables";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid ${variables.borderGlass};
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${variables.textPrimary};
  font-weight: 700;
  font-size: 0.95rem;
`;

export const LogoMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${variables.radiusSm};
  background: linear-gradient(135deg, ${variables.purplePrimary}, ${variables.purpleLight});
  font-size: 0.75rem;
  font-weight: 800;
  color: white;
`;

export const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${variables.textMuted};
`;

export const BackToTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  color: ${variables.textSecondary};
  transition: color ${variables.transition}, border-color ${variables.transition},
    transform ${variables.transition};

  &:hover {
    color: ${variables.purpleLight};
    border-color: ${variables.purplePrimary};
    transform: translateY(-3px);
  }
`;
