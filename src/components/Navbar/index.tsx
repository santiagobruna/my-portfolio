import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import * as S from "./Styled";

const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "experience", label: "Experiência" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <S.Nav $scrolled={scrolled}>
      <S.NavInner>
        <S.Logo href="#inicio" onClick={closeMenu}>
          <S.LogoMark>BS</S.LogoMark>
          <S.LogoText>
            <strong>Bruna Santiago</strong>
            <span>Full Stack Developer</span>
          </S.LogoText>
        </S.Logo>

        <S.Menu $open={isOpen}>
          {navLinks.map((link) => (
            <S.MenuItem key={link.id}>
              <S.MenuLink
                href={`#${link.id}`}
                $active={activeId === link.id}
                onClick={closeMenu}
              >
                {link.label}
              </S.MenuLink>
            </S.MenuItem>
          ))}
        </S.Menu>

        <S.NavActions>
          <S.ResumeButton
            href="/atual-cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload size={16} />
            <span>Currículo</span>
          </S.ResumeButton>
          <S.ThemeToggle
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            title={theme === "dark" ? "Modo claro" : "Modo escuro"}
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </S.ThemeToggle>
          <S.Hamburger onClick={() => setIsOpen((p) => !p)} aria-label="Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </S.Hamburger>
        </S.NavActions>
      </S.NavInner>
    </S.Nav>
  );
}
