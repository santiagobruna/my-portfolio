import * as S from './Styled';

export default function Navbar() {

    return (
        <S.Nav>
            <S.Logo href="#">BRUNA</S.Logo>
            <S.Menu>
                <S.MenuItem>
                    <S.MenuLink href="#projects">Projetos</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#about">Sobre</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#about">Habilidades</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="#contact">Contatos</S.MenuLink>
                </S.MenuItem>
            </S.Menu>
        </S.Nav>
    );
}
