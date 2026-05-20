import styled from "styled-components";
import variables from "../../style/Variables";

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  height: ${variables.navHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: ${({ $scrolled }) => ($scrolled ? "var(--nav-bg)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(16px)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(16px)" : "none")};
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? variables.borderGlass : "transparent")};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${variables.textPrimary};
`;

export const LogoMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${variables.radiusMd};
  background: linear-gradient(135deg, ${variables.purplePrimary}, ${variables.purpleLight});
  font-weight: 800;
  font-size: 0.95rem;
  color: white;
  box-shadow: 0 0 20px ${variables.purpleGlow};
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  strong {
    font-size: 0.95rem;
    font-weight: 700;
  }

  span {
    font-size: 0.75rem;
    color: ${variables.textSecondary};
    font-weight: 400;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Menu = styled.ul<{ $open: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    position: fixed;
    top: ${variables.navHeight};
    left: 0;
    right: 0;
    width: 100%;
    flex-direction: column;
    gap: 0;
    background: var(--menu-bg);
    backdrop-filter: blur(20px);
    padding: 1.5rem;
    border-bottom: 1px solid ${variables.borderGlass};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-12px)")};
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export const MenuItem = styled.li`
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;
  }
`;

export const MenuLink = styled.a<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? variables.textPrimary : variables.textSecondary)};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;
  transition: color ${variables.transition};
  padding-bottom: 6px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? "6px" : "0")};
    height: 6px;
    border-radius: 50%;
    background: ${variables.purpleLight};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${variables.textPrimary};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  color: ${variables.textPrimary};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background ${variables.transition}, border-color ${variables.transition};

  &:hover {
    background: ${variables.bgGlassHover};
    border-color: ${variables.purplePrimary};
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${variables.bgGlass};
  border: 1px solid ${variables.borderGlass};
  border-radius: ${variables.radiusMd};
  color: ${variables.textSecondary};
  transition: color ${variables.transition}, border-color ${variables.transition};

  &:hover {
    color: ${variables.purpleLight};
    border-color: ${variables.purplePrimary};
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${variables.textPrimary};
  padding: 0.25rem;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;
