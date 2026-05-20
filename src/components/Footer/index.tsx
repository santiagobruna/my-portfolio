import { FiArrowUp } from "react-icons/fi";
import * as S from "./Styled";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.FooterContainer id="contact">
      <S.FooterInner>
        <S.Logo href="#inicio">
          <S.LogoMark>BS</S.LogoMark>
          Bruna Santiago
        </S.Logo>

        <S.Copyright>
          © {new Date().getFullYear()} Bruna Santiago. Todos os direitos reservados.
        </S.Copyright>

        <S.BackToTop onClick={scrollToTop} aria-label="Voltar ao topo">
          <FiArrowUp size={20} />
        </S.BackToTop>
      </S.FooterInner>
    </S.FooterContainer>
  );
}
