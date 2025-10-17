import * as S from './Styled';
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <S.Nav>
            <S.Logo href="#">
                <FiCode size={27} style={{ marginRight: 8 }} /> 
                Bruna Santiago
            </S.Logo>

            <S.Hamburger onClick={toggleMenu}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </S.Hamburger>

            <S.Menu open={isOpen}>
                <S.MenuItem>
                    <S.MenuLink href="#about" onClick={closeMenu}>Sobre</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#projects" onClick={closeMenu}>Projetos</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#about" onClick={closeMenu}>Habilidades</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#contact" onClick={closeMenu}>Contatos</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#contact" onClick={closeMenu}>Serviços</S.MenuLink>
                </S.MenuItem>
            </S.Menu>
        </S.Nav>
    );
}
