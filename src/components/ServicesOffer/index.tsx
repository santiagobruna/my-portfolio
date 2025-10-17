import { FaCode, FaPencilRuler, FaMobileAlt } from 'react-icons/fa';
import * as S from './Styled';


export const Services = () => {
    return (
        <S.Section>
        <S.Title>O que eu faço?</S.Title>
        <S.CardsContainer>
            <S.Card>
            <S.IconWrapper><FaCode /></S.IconWrapper>
            <S.CardTitle>Criação de Sites</S.CardTitle>
            <S.CardDescription>
                Desenvolvimento de sites modernos, funcionais e com foco na melhor experiência para o usuário.
            </S.CardDescription>
            </S.Card>

            <S.Card>
            <S.IconWrapper><FaPencilRuler /></S.IconWrapper>
            <S.CardTitle>UI Designer</S.CardTitle>
            <S.CardDescription>
                Design visual focado na usabilidade, criando interfaces atraentes e intuitivas para o seu público.
            </S.CardDescription>
            </S.Card>

            <S.Card>
            <S.IconWrapper><FaMobileAlt /></S.IconWrapper>
            <S.CardTitle>Sites Responsivos</S.CardTitle>
            <S.CardDescription>
                Garantia que seu site funcione perfeitamente em qualquer dispositivo, do desktop ao smartphone.
            </S.CardDescription>
            </S.Card>
        </S.CardsContainer>
        </S.Section>
    );
};
